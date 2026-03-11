import { FadeIn, ArchNode, Connector, StaggerContainer, StaggerItem } from "./Animations";
import { Bug, Key, FileCode, Globe, Shield, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import eppBg from "@/assets/epp-hero.avif";

const ease = [0.16, 1, 0.3, 1] as const;

const events = [
  { date: "December 3, 2023", heading: "Initial Compromise", body: "Threat actor UTA0178 begins exploiting two chained zero-day vulnerabilities in Ivanti Connect Secure VPN appliances." },
  { date: "Late December 2023", heading: "Persistence & Credential Theft", body: "Custom webshells deployed. VPN login page altered to capture credentials. Logs wiped and logging disabled." },
  { date: "January 2024", heading: "Remediation Failure", body: "Attacker persistence is found to survive factory resets, forcing Ivanti to retract initial guidance. The vendor's own Integrity Checker Tool is also bypassed. Implants embedded in the boot partition — invisible to standard scans." },
];

const Slide2 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={eppBg} alt="" className="w-full h-full object-cover opacity-12" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[500px] h-[500px] top-10 right-0 bg-destructive" />

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-danger mb-6">Timeline · Phase 1</div>
        <h1 className="font-display text-4xl md:text-[4.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-3">
          The Covert <span className="font-medium bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(230 80% 72%), hsl(260 70% 68%), hsl(280 50% 72%))" }}>Phase.</span>
        </h1>
        <p className="text-base text-muted-foreground font-light mb-14 max-w-lg">
          Weeks of undetected compromise before any public awareness.
        </p>
      </FadeIn>

      {/* Kill Chain — clean S1 flow */}
      <FadeIn delay={0.15}>
        <p className="meta mb-8">Attack Kill Chain</p>
        <div className="flex items-start justify-between mb-8">
          {[
            { icon: Bug, label: "Exploit", sub: "CVE-2023-46805" },
            { icon: Key, label: "Auth Bypass", sub: "CVE-2024-21887" },
            { icon: FileCode, label: "Webshells", sub: "Specific Malware Implants\nGLASSTOKEN, CHAINLINE" },
            { icon: Key, label: "Credentials", sub: "WARPWIRE, DRYHOOK" },
            { icon: Globe, label: "Lateral Move", sub: "AD + RDP" },
            { icon: Trash2, label: "Logs Wiped", sub: "Anti-forensics" },
          ].flatMap((step, i, arr) => {
            const items = [];
            if (step.label === "Logs Wiped") {
              items.push(
                <div key={step.label} className="relative">
                  <div className="absolute inset-0 rounded-2xl blur-2xl scale-150" style={{ background: "hsl(0 72% 51% / 0.55)" }} />
                  <ArchNode icon={step.icon} label={step.label} sublabel={step.sub} delay={0.2 + i * 0.07} variant="danger" />
                </div>
              );
            } else {
              items.push(
                <ArchNode key={step.label} icon={step.icon} label={step.label} sublabel={step.sub} delay={0.2 + i * 0.07} variant="danger" />
              );
            }
            if (i < arr.length - 1) {
              items.push(<div key={`c-${i}`} className="mt-[24px]"><Connector delay={0.25 + i * 0.07} variant="danger" /></div>);
            }
            return items;
          })}
        </div>
      </FadeIn>

      {/* Timeline */}
      <StaggerContainer className="relative" delay={0.5}>
        {/* Vertical gradient line - positioned absolutely to match content height */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px]">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 3 1000">
            <defs>
              <linearGradient id="vertLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(230 80% 72%)" />
                <stop offset="50%" stopColor="hsl(260 70% 68%)" />
                <stop offset="100%" stopColor="hsl(280 50% 72%)" />
              </linearGradient>
            </defs>
            <path d="M1.5,0 Q0,250 1.5,500 Q3,750 1.5,1000" stroke="url(#vertLineGrad)" strokeWidth="1" fill="none" />
          </svg>
          {[0, 50, 100].map((pct, i) => (
            <div
              key={i}
              className="absolute left-1/2 w-2 h-2 rounded-full"
              style={{
                top: `${pct}%`,
                transform: `translate(-50%, ${pct === 100 ? '-100%' : pct === 50 ? '-50%' : '0'})`,
                background: i === 0 ? "hsl(230 80% 72%)" : i === 1 ? "hsl(260 70% 68%)" : "hsl(280 50% 72%)",
                boxShadow: `0 0 8px ${i === 0 ? "hsl(230 80% 72% / 0.6)" : i === 1 ? "hsl(260 70% 68% / 0.6)" : "hsl(280 50% 72% / 0.6)"}`,
              }}
            />
          ))}
        </div>
        {/* Timeline content */}
        <div className="space-y-6 pl-6">
          {events.map((event, i) => (
            <StaggerItem key={i}>
              <div>
                <span className="meta block mb-1" style={{ color: "hsl(250 76% 72%)" }}>{event.date}</span>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{event.heading}</h3>
                <p className="text-[0.975rem] text-muted-foreground leading-relaxed max-w-xl">{event.body}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  </div>
);

export default Slide2;
