import { FadeIn, ArchNode, Connector, StaggerContainer, StaggerItem } from "./Animations";
import { AlertTriangle, ArrowRight, ShieldOff, Settings, UserX, Bug, Skull, FileWarning, ClipboardCheck, RefreshCw } from "lucide-react";
import promptCards from "@/assets/prompt-cards-02.avif";
import hackerIcon from "@/assets/hacker-icon.png";

const failures = [
  {
    icon: Bug, cis: "CIS 7", title: "Vulnerability Management",
    bullets: [
      "Reactive, compliance-based patching",
      "Relied on vendor schedules instead of threat-intelligence driven prioritization",
      "Patching was delayed by operational uptime SLAs",
      "No EDR could be deployed on the proprietary appliance OS",
      "The \"black box\" nature of the appliance prevented standard security tools — a critical governance oversight",
    ],
    consequence: "Zero-day window extended from days to weeks. Two additional CVEs were disclosed while patches for the original pair were still being staged.",
  },
  {
    icon: Settings, cis: "CIS 4", title: "Secure Configuration",
    bullets: [
      "No file integrity monitoring on edge appliances",
      "Devices deployed without adequate hardening baselines",
      "No out-of-band management for admin interfaces was enforced",
    ],
    consequence: "Attackers could scan and directly target exposed management endpoints from the public internet — eliminating any defensive advantage.",
  },
  {
    icon: UserX, cis: "CIS 6", title: "Access Control",
    bullets: [
      "VPN served as single trusted perimeter",
      "Insufficient network segmentation post-breach",
      "The authentication gateway itself became the attack vector — bypassing all downstream MFA controls",
    ],
    consequence: "Full lateral movement via stolen credentials.",
  },
];

const Slide4 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={promptCards} alt="" className="w-full h-full object-cover opacity-10" />
      <div className="photo-overlay" />
    </div>

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-danger mb-6">
          <AlertTriangle className="w-2.5 h-2.5" strokeWidth={1.5} />
          Root Cause Analysis
        </div>
        <h1 className="font-display text-4xl md:text-[3.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-3">
          Why Did <span className="font-medium bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(230 80% 72%), hsl(260 70% 68%), hsl(280 50% 72%))" }}>It Happen?</span>
        </h1>
        <p className="text-muted-foreground font-light mb-6 max-w-lg">Mapped to CIS Controls framework.</p>
      </FadeIn>

      {/* Failure chain */}
      <FadeIn delay={0.15}>
        <p className="meta mb-5">Control Failure Chain</p>
        <div className="flex items-center justify-center gap-1 mb-8">
          <ArchNode icon={RefreshCw} label="No Patching" sublabel="CIS 7" delay={0.2} variant="neutral" size="sm" />
          <Connector delay={0.28} variant="neutral" />
          <ArchNode icon={Settings} label="No Hardening" sublabel="CIS 4" delay={0.32} variant="neutral" size="sm" />
          <Connector delay={0.38} variant="neutral" />
          <ArchNode icon={UserX} label="No Access Ctrl" sublabel="CIS 6" delay={0.42} variant="neutral" size="sm" />
          <Connector delay={0.48} variant="neutral" />
          <ArchNode icon={ClipboardCheck} label="No Auditing" sublabel="CIS 8" delay={0.52} variant="neutral" size="sm" />
          <Connector delay={0.58} variant="neutral" />
          <ArchNode icon={FileWarning} label="No IR Planning" sublabel="CIS 12" delay={0.62} variant="neutral" size="sm" />
          <Connector delay={0.68} variant="neutral" />
          <div className="relative flex flex-col items-center gap-2.5">
            <div className="absolute inset-0 rounded-full blur-2xl scale-150" style={{ background: "hsl(0 72% 51% / 0.55)" }} />
            <img src={hackerIcon} alt="Full Compromise" className="w-14 h-14 relative z-10" />
            <span className="text-xs font-bold text-foreground/90 relative z-10">Full Compromise</span>
          </div>
        </div>
      </FadeIn>

      {/* Failure details — S1 feature grid with accent lines */}
      <StaggerContainer className="s1-feature-grid grid-cols-3" delay={0.4}>
        {failures.map((f) => (
          <StaggerItem key={f.cis}>
            <div className="s1-feature-item">
              <div className="accent-line-danger" />
              <div className="flex items-center gap-3 mb-4">
                 <f.icon className="w-6 h-6 text-destructive s1-feature-icon" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-bold text-destructive/70 tracking-wider uppercase">{f.cis}</p>
                  <p className="text-lg font-bold text-white">{f.title}</p>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground leading-relaxed mb-4 space-y-1.5 list-none">
                {f.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-destructive/40 mt-1.5 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 text-destructive/30" strokeWidth={1.5} />
                <p className="text-xs text-destructive/50">{f.consequence}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </div>
);

export default Slide4;
