import { Target, Eye, ShieldCheck, Radar, Activity, Shield, Lock, CheckCircle } from "lucide-react";
import { FadeIn, ArchNode, Connector, StaggerContainer, StaggerItem } from "./Animations";
import ctaBg from "@/assets/cta-footer.avif";

const takeaways = [
  { icon: Target, heading: "The Edge is the Battleground", body: "Internet-facing infrastructure is our most targeted asset class. It demands dedicated governance." },
  { icon: Eye, heading: "Visibility is Non-Negotiable", body: "We cannot defend what we cannot see. Centralized logging across all assets is the baseline." },
  { icon: ShieldCheck, heading: "Assume Breach", body: "Design controls to detect, contain, and recover — not just prevent. Resilience is the goal." },
];

const Slide9 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[700px] h-[700px] top-1/3 left-1/2 -translate-x-1/2 bg-primary" />

    <div className="slide-container">
      <FadeIn>
        <div className="tag mb-6">Conclusion</div>
        <h1 className="font-display text-4xl md:text-[5rem] font-light leading-[0.88] tracking-[-0.04em] text-foreground mb-8">
          The Strategic Imperative:{" "}
          <span className="gradient-text font-medium">Managed, Monitored, and Mistrusted.</span>
        </h1>
      </FadeIn>

      {/* Takeaways — S1 feature grid */}
      <StaggerContainer className="s1-feature-grid grid-cols-3 mb-14" delay={0.12}>
        {takeaways.map((t) => (
          <StaggerItem key={t.heading}>
            <div className="s1-feature-item">
              
              <t.icon className="w-6 h-6 text-primary/50 s1-feature-icon mb-5" strokeWidth={1.5} />
              <h3>{t.heading}</h3>
              <p>{t.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Future state ops model */}
      <FadeIn delay={0.35}>
        <p className="meta mb-6">Future State — Security Operations Model</p>
        <div className="flex items-center justify-between mb-8 px-2">
          {[
            { icon: Radar, label: "Detect", sub: "Continuous", v: "default" as const },
            { icon: Activity, label: "Analyze", sub: "AI + Human", v: "default" as const },
            { icon: Shield, label: "Contain", sub: "Automated", v: "warning" as const },
            { icon: Lock, label: "Remediate", sub: "Validated", v: "success" as const },
            { icon: CheckCircle, label: "Recover", sub: "Resilient", v: "success" as const },
          ].flatMap((step, i, arr) => {
            const items = [];
            items.push(
              <div key={step.label} className="relative">
                {step.label === "Recover" && (
                  <style>{`
                    @keyframes borderRotate {
                      0% { --angle: 0deg; }
                      100% { --angle: 360deg; }
                    }
                    @keyframes pulseGlow {
                      0%, 100% { opacity: 0.5; }
                      50% { opacity: 1; }
                    }
                    @property --angle {
                      syntax: '<angle>';
                      initial-value: 0deg;
                      inherits: false;
                    }
                    .gradient-border-spin {
                      position: relative;
                      border-radius: 16px;
                      padding: 1.5px;
                      animation: borderRotate 3s linear infinite;
                      background: conic-gradient(
                        from var(--angle),
                        transparent 0%,
                        transparent 20%,
                        hsl(152 55% 35% / 0.3) 25%,
                        hsl(152 70% 50%) 32%,
                        hsl(152 90% 72%) 36%,
                        hsl(160 95% 80%) 38%,
                        hsl(152 90% 72%) 40%,
                        hsl(152 70% 50%) 44%,
                        hsl(152 55% 35% / 0.3) 50%,
                        transparent 55%,
                        transparent 100%
                      );
                    }
                    .gradient-border-spin::before {
                      content: '';
                      position: absolute;
                      inset: -6px;
                      border-radius: 22px;
                      background: conic-gradient(
                        from var(--angle),
                        transparent 0%,
                        transparent 25%,
                        hsl(152 80% 60% / 0.2) 30%,
                        hsl(152 90% 72% / 0.5) 36%,
                        hsl(160 95% 80% / 0.6) 38%,
                        hsl(152 90% 72% / 0.5) 40%,
                        hsl(152 80% 60% / 0.2) 45%,
                        transparent 50%,
                        transparent 100%
                      );
                      filter: blur(10px);
                      z-index: -1;
                      animation: pulseGlow 3s ease-in-out infinite;
                    }
                    .gradient-border-spin::after {
                      content: '';
                      position: absolute;
                      inset: -12px;
                      border-radius: 28px;
                      background: conic-gradient(
                        from var(--angle),
                        transparent 0%,
                        transparent 30%,
                        hsl(152 90% 72% / 0.15) 35%,
                        hsl(160 95% 80% / 0.25) 38%,
                        hsl(152 90% 72% / 0.15) 41%,
                        transparent 46%,
                        transparent 100%
                      );
                      filter: blur(20px);
                      z-index: -2;
                    }
                    .gradient-border-inner {
                      background: hsl(152 55% 48% / 0.06);
                      border-radius: 14.5px;
                    }
                  `}</style>
                )}
                <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: step.v === "success" ? "hsl(152 55% 48% / 0.35)" : step.v === "warning" ? "hsl(38 92% 50% / 0.35)" : "hsl(264 78% 53% / 0.35)" }} />
                {step.label === "Recover" ? (
                  <div className="flex flex-col items-center gap-2.5 relative z-10">
                    <div className="gradient-border-spin">
                      <div className="gradient-border-inner w-14 h-14 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-success" strokeWidth={1.5} />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-foreground/90 text-center leading-tight">Recover</span>
                    <span className="text-[10px] font-medium text-foreground/75 text-center leading-tight -mt-1">Resilient</span>
                  </div>
                ) : (
                  <ArchNode icon={step.icon} label={step.label} sublabel={step.sub} delay={0.2 + i * 0.08} variant={step.v} />
                )}
              </div>
            );
            if (i < arr.length - 1) {
              const colorMap = { default: "hsl(264 78% 53%)", warning: "hsl(38 92% 50%)", success: "hsl(152 55% 48%)" };
              const startColor = colorMap[step.v];
              const endColor = colorMap[arr[i + 1].v];
              const dotBg = startColor === endColor ? startColor : `linear-gradient(135deg, ${startColor}, ${endColor})`;
              items.push(
                <div key={`line-${i}`} className="flex items-center flex-1 relative -mt-8">
                  <div className="w-full h-px" style={{ background: `linear-gradient(90deg, ${startColor}, ${endColor})` }} />
                  <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full" style={{ background: dotBg, boxShadow: `0 0 10px ${startColor}` }} />
                </div>
              );
            }
            return items;
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div>
          <p className="meta mb-4">Board Decisions Required</p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              "Approve the Corrective Action Plan (CAP) for all edge and perimeter infrastructure.",
              "Commit to mandatory 24-hour patching SLAs, accepting security must sometimes override operational uptime.",
              "Formally accept the residual risk inherent in a phased, one-year migration.",
            ].map((decision, i) => (
              <div key={i} className="flex items-start gap-3 border border-border/30 rounded-xl px-4 py-3" style={{ background: "hsl(264 78% 53% / 0.04)" }}>
                <span className="font-display text-lg font-medium text-primary/40 mt-0.5">{i + 1}.</span>
                <p className="text-[13px] text-foreground/80 leading-relaxed">{decision}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Slide9;