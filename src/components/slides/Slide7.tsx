import { Shield, Check, Eye, Lock, Radio, RefreshCw, FileSearch, Cpu, Database, ShieldCheck, Fingerprint } from "lucide-react";
import { FadeIn, ArchNode, Connector, StaggerContainer, StaggerItem } from "./Animations";
import mercuryBg from "@/assets/mercury-cards.avif";

const initiatives = [
  {
    num: "01",
    heading: "Edge Security Governance",
    body: "Dedicated owner for internet-facing infrastructure. Strict hardening baselines, file integrity monitoring, and full lifecycle management for all edge appliances. Mandate use of external Integrity Checker Tools (ICT), bypassing compromised internal diagnostics. Segment all Network Management Interfaces (NMIs) into dedicated, firewall-enforced management VLANs — zero admin interfaces exposed to the public internet.",
    cisTag: "Addresses: CIS Controls 4, 7, 12",
    outcome: "Proactive scrutiny on the organization's most targeted assets.",
    steps: [
      { icon: Eye, label: "Discover" },
      { icon: Lock, label: "Harden" },
      { icon: Radio, label: "Monitor" },
    ],
    timeline: [
      { phase: "30-Day Plan", task: "Charter team (Owner: CISO)" },
      { phase: "90-Day Plan", task: "Develop hardening policy" },
      { phase: "180-Day Plan", task: "Validate 100% inventory coverage" },
    ],
  },
  {
    num: "02",
    heading: "Threat-Based Vulnerability Management",
    body: "Continuous program driven by real-time threat intelligence. Automated scanning, validation, and prioritized remediation based on active exploitation data.",
    highlight: "Enforce a non-negotiable 24-hour patching SLA for all internet-facing critical infrastructure.",
    cisTag: "Addresses: CIS Control 7",
    outcome: "Shrinks attacker exploitation window from weeks to hours.",
    steps: [
      { icon: FileSearch, label: "Scan" },
      { icon: Cpu, label: "Prioritize" },
      { icon: RefreshCw, label: "Remediate" },
    ],
    timeline: [
      { phase: "30-Day Plan", task: "Deploy automated scanning (Owner: IT Ops)" },
      { phase: "90-Day Plan", task: "Enforce 24-hour patch SLA" },
      { phase: "180-Day Plan", task: "Achieve 99% SLA compliance" },
    ],
  },
  {
    num: "03",
    heading: "Immutable SIEM Telemetry",
    body: "Mandate centralized, cryptographically-signed log forwarding for all critical assets to a tamper-proof SIEM. This makes it impossible for an attacker to destroy forensic evidence.",
    cisTag: "Addresses: CIS Controls 8, 13",
    outcome: "Tamper-proof forensic trail ensures attacker actions are always recoverable.",
    steps: [
      { icon: Database, label: "Collect" },
      { icon: Fingerprint, label: "Sign" },
      { icon: ShieldCheck, label: "Preserve" },
    ],
    timeline: [
      { phase: "30-Day Plan", task: "Select SIEM platform (Owner: SecOps)" },
      { phase: "90-Day Plan", task: "Onboard critical asset log forwarding" },
      { phase: "180-Day Plan", task: "Full cryptographic signing & retention policy" },
    ],
  },
];

const Slide7 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={mercuryBg} alt="" className="w-full h-full object-cover opacity-10" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[500px] h-[500px] bottom-20 right-10 bg-success" />

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-success mb-6">
          <Shield className="w-2.5 h-2.5" strokeWidth={1.5} />
          Corrective Action
        </div>
        <h1 className="font-display text-4xl md:text-[4.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-3">
          Strategic <span className="text-success font-medium">Initiatives.</span>
        </h1>
        <p className="text-muted-foreground font-light mb-10 max-w-2xl whitespace-nowrap">
          Recommended corrective actions to prevent recurrence and build resilience.
        </p>
      </FadeIn>

      <StaggerContainer className="space-y-14" delay={0.2}>
        {initiatives.map((init) => (
          <StaggerItem key={init.num}>
            <div className="grid grid-cols-[auto_1fr] gap-8">
              <div className="pt-1">
                <span className="font-display text-4xl font-light text-success/15">{init.num}</span>
              </div>
              <div>
                <div className="accent-line-success" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{init.heading}</h3>
                <p className="text-[0.7875rem] text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {init.body}
                  {(init as any).highlight && <>{" "}<span className="text-success font-semibold">{(init as any).highlight}</span></>}
                </p>
                
                {/* Process flow */}
                <div className="flex items-center gap-1 mb-6">
                  {init.steps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-1">
                      <ArchNode icon={step.icon} label={step.label} delay={0.3 + i * 0.08} variant="success" size="sm" />
                      {i < init.steps.length - 1 && <Connector delay={0.35 + i * 0.08} variant="success" />}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-success/60 shrink-0" strokeWidth={1.5} />
                  <p className="text-sm text-success/60 font-medium">{init.outcome}</p>
                </div>

                {(init as any).cisTag && (
                  <p className="text-[10px] font-semibold text-muted-foreground/80 tracking-wider uppercase mb-5">{(init as any).cisTag}</p>
                )}

                {/* 30/90/180-day timeline */}
                <div className="flex gap-4">
                  {init.timeline.map((t) => (
                    <div key={t.phase} className="flex-1 border border-success/10 rounded-lg px-4 py-3" style={{ background: "hsl(152 55% 48% / 0.04)" }}>
                      <p className="text-xs font-bold text-success tracking-wider mb-1">{t.phase}</p>
                      <p className="text-xs text-muted-foreground leading-snug">{t.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </div>
);

export default Slide7;