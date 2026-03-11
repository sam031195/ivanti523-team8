import { DollarSign, Ban, TrendingDown, Scale, AlertTriangle, Building, Landmark, ShieldAlert } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter, ArchNode, Connector } from "./Animations";
import { motion } from "framer-motion";
import gartnerBg from "@/assets/gartner-dive.avif";

const stats = [
  { value: 35, prefix: "$", suffix: "M+", label: "Avg. Breach Cost", sub: "IBM Cost of a Data Breach 2024", divider: 10 },
  { value: 4, prefix: "", suffix: " Days", label: "SEC Disclosure Deadline", sub: "Mandatory incident reporting triggered" },
  { value: 56, prefix: "", suffix: "%", label: "Zero-Day Increase", sub: "Year-over-year 2023 growth" },
];

const impacts = [
  { icon: DollarSign, heading: "Financial", bullets: ["Unbudgeted incident response costs, forensics, potential litigation, and regulatory fines", "Downstream ransomware losses exceeded $300M+ (ALPHV/BlackCat)"] },
  { icon: Ban, heading: "Operational", bullets: ["VPN disconnect halted remote workforce", "IT resources fully diverted to response"] },
  { icon: TrendingDown, heading: "Reputational", bullets: ["Trust erosion with customers, partners, board members, and investors", "62% of CISOs now fear personal criminal liability", "2x increase in breach-related class-action lawsuits in 2023"] },
  { icon: Scale, heading: "Regulatory", bullets: ["SOX, GDPR exposure", "Risk to government contracts and compliance certifications", "Triggered SEC 4-day disclosure rule", "CISA's own infrastructure was breached", "Precedent for executive liability set by Uber CISO conviction", "GDPR fines up to 4% of annual revenue for EU data exfiltration"] },
];

const Slide6 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={gartnerBg} alt="" className="w-full h-full object-cover opacity-10" />
      <div className="photo-overlay" />
    </div>

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-danger mb-6">
          <TrendingDown className="w-2.5 h-2.5" strokeWidth={1.5} />
          Business Impact
        </div>
        <h1 className="font-display text-4xl md:text-[4.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-8">
          Technical Failure →{" "}
          <span className="text-destructive font-medium">Business Risk.</span>
        </h1>
      </FadeIn>

      {/* Blast radius */}
      <FadeIn delay={0.12}>
        <p className="meta mb-5">Blast Radius</p>
        <div className="flex items-start justify-center gap-1 mb-8">
          <ArchNode icon={AlertTriangle} label="Zero-Day" delay={0.2} variant="neutral" size="md" />
          <div className="mt-[24px]"><Connector delay={0.28} variant="danger" /></div>
          <ArchNode icon={Landmark} label="Government" delay={0.32} variant="neutral" size="md" />
          <div className="mt-[24px]"><Connector delay={0.38} variant="danger" /></div>
          <ArchNode icon={Building} label="Fortune 500" delay={0.42} variant="warning" size="md" />
          <div className="mt-[24px]"><Connector delay={0.48} variant="danger" /></div>
          <ArchNode icon={ShieldAlert} label={"Critical\nInfrastructure"} delay={0.52} variant="neutral" size="md" iconSize="lg" />
          <div className="mt-[24px]"><Connector delay={0.58} variant="danger" /></div>
          <motion.div
            className="flex flex-col items-center gap-2.5 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Ban className="w-9 h-9 text-destructive drop-shadow-[0_0_12px_hsl(0_72%_51%/0.5)]" strokeWidth={2} />
            </div>
            <span className="text-xs font-bold text-foreground text-center leading-tight tracking-wide uppercase">Full Shutdown</span>
          </motion.div>
        </div>
      </FadeIn>

      {/* Stats — S1 style with accent lines above */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-3 gap-0 mb-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-4 text-center ${i > 0 ? "pl-8" : ""} ${i < 2 ? "pr-8" : ""}`}>
              <p className="text-4xl font-medium mb-3 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 70%))" }}>
                {s.prefix || ""}{s.divider ? <>{Math.floor(s.value / s.divider)}.{s.value % s.divider}{s.suffix}</> : <AnimatedCounter target={s.value} suffix={s.suffix} />}
              </p>
              <p className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Impact — S1 feature grid */}
      <div className="relative h-[3px] w-full mb-6">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 3">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0 0% 100% / 0.1)" />
              <stop offset="50%" stopColor="hsl(0 0% 100% / 0.8)" />
              <stop offset="100%" stopColor="hsl(0 0% 100% / 0.1)" />
            </linearGradient>
          </defs>
          <path d="M0,1.5 Q250,0 500,1.5 Q750,3 1000,1.5" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
        </svg>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: "hsl(0 0% 100% / 0.6)", boxShadow: "0 0 10px hsl(0 0% 100% / 0.4)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: "hsl(0 0% 100% / 0.6)", boxShadow: "0 0 10px hsl(0 0% 100% / 0.4)" }} />
      </div>
      <StaggerContainer className="grid grid-cols-[1fr_1fr_1fr_1.6fr] gap-4" delay={0.5}>
        {impacts.map((c) => (
          <StaggerItem key={c.heading}>
            <div className="s1-feature-item">
              <c.icon className="w-6 h-6 text-foreground s1-feature-icon mb-5" strokeWidth={1.5} />
              <h3>{c.heading}</h3>
              <ul className="text-[0.7875rem] text-muted-foreground leading-relaxed space-y-1.5 list-none">
                {c.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary/30 mt-1.5 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </div>
);

export default Slide6;
