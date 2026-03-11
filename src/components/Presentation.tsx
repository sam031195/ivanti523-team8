import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Play, Pause, RotateCcw } from "lucide-react";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";
import Slide7 from "@/components/slides/Slide7";
import Slide8 from "@/components/slides/Slide8";
import Slide9 from "@/components/slides/Slide9";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];
const TOTAL = slides.length;

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showUI, setShowUI] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/ml_conclusion.m4a");
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    return () => { audioRef.current?.pause(); audioRef.current = null; };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (current === 8) {
      audio.currentTime = 0;
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  }, [current]);

  const go = useCallback((dir: number) => {
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= TOTAL) return prev;
      setDirection(dir);
      return next;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
      else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onMove = () => {
      setShowUI(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowUI(false), 3500);
    };
    window.addEventListener("mousemove", onMove);
    timer = setTimeout(() => setShowUI(false), 3500);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timer);
    };
  }, []);

  const SlideComponent = slides[current];

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative select-none">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-border/10">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        />
      </div>

      {/* Top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="meta"></span>
        <span className="meta">{String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</span>
      </motion.div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d > 0 ? 24 : -24 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d > 0 ? -24 : 24 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="h-full w-full overflow-y-auto"
        >
          <SlideComponent />
          {current === 0 && (
            <div className="fixed bottom-[3%] left-8 z-30">
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/80">Presented by Team #8 — Ashish, Surbhi, Norah, Fardeen &amp; Masud</span>
            </div>
          )}
          <div className="fixed bottom-6 right-8 z-30">
            <span className="meta">{String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom nav */}
      <motion.div
        className="fixed bottom-5 left-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{
          transform: "translateX(-50%)",
          background: "hsl(230 20% 8% / 0.9)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(230 15% 16%)",
        }}
        animate={{ opacity: showUI ? 1 : 0, y: showUI ? 0 : 16 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={() => go(-1)} disabled={current === 0} className="p-1.5 hover:bg-secondary rounded-lg disabled:opacity-20 transition">
          <ChevronLeft className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-1 px-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button onClick={() => go(1)} disabled={current === TOTAL - 1} className="p-1.5 hover:bg-secondary rounded-lg disabled:opacity-20 transition">
          <ChevronRight className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
        </button>

        <div className="w-px h-4 bg-border mx-0.5" />

        <button
          onClick={() => { if (!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen(); }}
          className="p-1.5 hover:bg-secondary rounded-lg transition"
        >
          <Maximize className="w-3 h-3 text-muted-foreground" strokeWidth={1.5} />
        </button>
      </motion.div>
    </div>
  );
};

export default Presentation;
