import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Layout Primitives ── */

export const StaggerContainer = ({
  children, className = "", delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.7, ease }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({
  children, className = "", delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({
  children, className = "", delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay, ease }}
  >
    {children}
  </motion.div>
);

/* ── Animated Counter ── */

export const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* ── Architecture Node — clean S1 style ── */

export const ArchNode = ({
  icon: Icon, label, sublabel, delay = 0,
  variant = "default", size = "md", iconSize,
}: {
  icon: LucideIcon; label: string; sublabel?: string; delay?: number;
  variant?: "default" | "danger" | "success" | "warning" | "neutral" | "danger-outline"; size?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
}) => {
  const variantStyles = {
    default: { bg: "hsl(264 78% 53% / 0.06)", border: "hsl(264 78% 53% / 0.12)", text: "text-primary" },
    danger: { bg: "hsl(0 72% 51% / 0.06)", border: "hsl(0 72% 51% / 0.12)", text: "text-destructive" },
    "danger-outline": { bg: "hsl(230 15% 16% / 0.4)", border: "hsl(230 15% 20%)", text: "text-destructive" },
    success: { bg: "hsl(152 55% 48% / 0.06)", border: "hsl(152 55% 48% / 0.12)", text: "text-success" },
    warning: { bg: "hsl(38 92% 50% / 0.2)", border: "hsl(38 92% 50% / 0.4)", text: "text-amber-300" },
    neutral: { bg: "hsl(230 15% 16% / 0.4)", border: "hsl(230 15% 20%)", text: "text-foreground" },
  };
  const sizeStyles = {
    sm: { box: "w-11 h-11", icon: "w-[18px] h-[18px]", label: "text-[11px]" },
    md: { box: "w-14 h-14", icon: "w-5 h-5", label: "text-xs" },
    lg: { box: "w-16 h-16", icon: "w-6 h-6", label: "text-xs" },
  };
  const c = variantStyles[variant];
  const s = sizeStyles[size];
  const iconS = iconSize ? sizeStyles[iconSize].icon : s.icon;

  return (
    <motion.div
      className="flex flex-col items-center gap-2.5 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      <div
        className={`${s.box} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105`}
        style={{ background: c.bg, border: `1px solid ${c.border}` }}
      >
        <Icon className={`${iconS} ${c.text}`} strokeWidth={1.5} />
      </div>
      <span className={`${s.label} font-bold text-foreground/90 text-center leading-tight`}>{label}</span>
      {sublabel && sublabel.split('\n').map((line, i) => <span key={i} className={`text-[10px] font-medium text-foreground/60 text-center leading-tight ${i === 0 ? '-mt-1' : '-mt-1.5'}`}>{line}</span>)}
    </motion.div>
  );
};

/* ── Connector Arrow ── */

export const Connector = ({
  delay = 0, variant = "default",
}: { delay?: number; variant?: "default" | "danger" | "success" | "neutral" }) => {
  const lineClass = variant === "danger" ? "diagram-line-danger" : variant === "success" ? "diagram-line-success" : variant === "neutral" ? "diagram-line-neutral" : "diagram-line";
  const arrowColor = "hsl(0 0% 100% / 0.35)";

  return (
    <motion.div
      className="flex items-center self-center"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay, ease }}
      style={{ transformOrigin: "left" }}
    >
      <div className={`w-12 h-px ${lineClass}`} />
      <div
        className="w-0 h-0"
        style={{
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          borderLeft: `5px solid ${arrowColor}`,
        }}
      />
    </motion.div>
  );
};

/* ── Backward compat aliases ── */
export const DiagramNode = ArchNode;
export const FlowArrow = Connector;
