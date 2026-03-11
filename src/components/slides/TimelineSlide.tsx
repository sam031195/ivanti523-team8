import { forwardRef } from "react";
import { StaggerContainer, StaggerItem, FadeIn } from "./Animations";
import { motion } from "framer-motion";
import eppBg from "@/assets/epp-hero.avif";

interface TimelineEvent {
  date: string;
  heading: string;
  body: string;
}

interface TimelineSlideProps {
  title: string;
  subtitle?: string;
  events: TimelineEvent[];
  bgIndex?: number;
}

const TimelineSlide = forwardRef<HTMLDivElement, TimelineSlideProps>(({ title, subtitle, events, bgIndex = 0 }, ref) => (
  <div ref={ref} className="slide-section">
    {bgIndex === 0 && (
      <div className="absolute inset-0">
        <img src={eppBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="photo-overlay" />
      </div>
    )}

    <div className="slide-container">
      <FadeIn>
        <div className="tag mb-6">Timeline</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-[0.9] tracking-[-0.02em] text-foreground mb-2">{title}</h1>
        {subtitle && <p className="text-base text-muted-foreground font-light mb-16 max-w-2xl">{subtitle}</p>}
        {!subtitle && <div className="mb-16" />}
      </FadeIn>

      <div className="relative pl-8">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px origin-top"
          style={{ background: "linear-gradient(180deg, hsl(245 58% 65%), hsl(245 58% 65% / 0.05))" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        />

        <StaggerContainer className="flex flex-col gap-6" delay={0.3}>
          {events.map((event, i) => (
            <StaggerItem key={i}>
              <div className="relative pl-8">
                <div className="absolute left-[-6px] top-6 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                <div className="glass-card p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-primary font-display font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className="meta">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{event.heading}</h3>
                  <p className="text-[0.7875rem] text-muted-foreground leading-relaxed">{event.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </div>
));

TimelineSlide.displayName = "TimelineSlide";
export default TimelineSlide;
