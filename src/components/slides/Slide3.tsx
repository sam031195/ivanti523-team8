import { FadeIn, ArchNode, Connector, StaggerContainer, StaggerItem, AnimatedCounter } from "./Animations";
import { Megaphone, Globe, ShieldAlert, Server, AlertOctagon } from "lucide-react";
import promptHero from "@/assets/prompt-hero.avif";

const events = [
  { date: "January 10, 2024", heading: "Public Disclosure", body: "Ivanti and Volexity publicly disclose vulnerabilities. XML-based mitigations released, but no patch available." },
  { date: "January 14, 2024", heading: "Mass Exploitation", body: "Over 1,700 devices confirmed compromised across government, military, banking, and Fortune 500." },
  { date: "Jan 19 – Feb 1", heading: "CISA Emergency Directive", body: "Emergency Directive 24-01 issued. Escalates to full disconnect order by February 1st." },
  { date: "February 2, 2024", heading: "Active Evasion Confirmed", body: "Threat actors use logClear.pl to wipe forensic logs and modify compcheckresult.cgi to bypass Ivanti's own Integrity Checker Tool (ICT), returning false-clean results to defenders." },
];

const cves = [
  { date: "01/10/24", cve: "CVE-2023-46805", cvss: "8.2", authBypass: "Yes", patch1: "Yes", patch2: "Yes" },
  { date: "01/10/24", cve: "CVE-2024-21887", cvss: "9.1", authBypass: "Yes", patch1: "Yes", patch2: "Yes" },
  { date: "01/31/24", cve: "CVE-2024-21888", cvss: "8.8", authBypass: "Yes", patch1: "Yes", patch2: "Yes" },
  { date: "01/31/24", cve: "CVE-2024-21893", cvss: "8.2", authBypass: "Yes", patch1: "Yes", patch2: "Yes" },
  { date: "02/08/24", cve: "CVE-2024-22024", cvss: "8.3", authBypass: "Yes", patch1: "—", patch2: "Yes" },
];

const Slide3 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={promptHero} alt="" className="w-full h-full object-cover opacity-10" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[500px] h-[500px] -top-20 left-1/3 bg-destructive" />

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-danger mb-6">
          <AlertOctagon className="w-2.5 h-2.5" strokeWidth={1.5} />
          Timeline · Phase 2
        </div>
        <h1 className="font-display text-4xl md:text-[3.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-3">
          The Global <span className="font-medium bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(230 80% 72%), hsl(260 70% 68%), hsl(280 50% 72%))" }}>Crisis.</span>
        </h1>
        <p className="text-base text-muted-foreground font-light mb-6 max-w-lg">
          Escalation from disclosure to emergency federal directive in 22 days.
        </p>
      </FadeIn>

      {/* Escalation flow */}
      <FadeIn delay={0.15}>
        <p className="meta mb-8">Escalation Path</p>
        <div className="flex items-start justify-between mb-5 px-4">
          <ArchNode icon={Megaphone} label="Disclosure" sublabel="Jan 10" delay={0.2} variant="neutral" />
          <div className="mt-[24px]"><Connector delay={0.3} variant="neutral" /></div>
          <ArchNode icon={Globe} label="1,700+ Hit" sublabel="Jan 14" delay={0.35} variant="neutral" />
          <div className="mt-[24px]"><Connector delay={0.4} variant="neutral" /></div>
          <ArchNode icon={ShieldAlert} label="CISA Alert" sublabel="Jan 19" delay={0.45} variant="danger" />
          <div className="mt-[24px]"><Connector delay={0.5} variant="neutral" /></div>
          <ArchNode icon={Server} label="Full Disconnect" sublabel="Feb 1" delay={0.55} variant="danger" size="lg" />
        </div>
      </FadeIn>

      {/* Stats — S1 style with accent lines */}
      <FadeIn delay={0.35}>
        <div className="flex justify-between mb-5 px-4">
          {[
            { value: 1700, suffix: "+", label: "Devices Compromised" },
            { value: 22, suffix: "", label: "Days Exposure Window" },
            { value: 48, suffix: "hrs", label: "To Full Disconnect" },
            { value: 5, suffix: "", label: "Full vulnerability cascade" },
          ].map((s, i) => (
            <div key={s.label} className="py-5 text-center">
              <p className="stat-number text-4xl mb-2">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Timeline + CVE Table side by side */}
      <div className="grid grid-cols-[1fr_1.2fr] gap-10">
        {/* Timeline */}
        <StaggerContainer className="relative" delay={0.5}>
          {/* Vertical gradient line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px]">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 3 1000">
              <defs>
                <linearGradient id="vertLineGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(230 80% 72%)" />
                  <stop offset="50%" stopColor="hsl(260 70% 68%)" />
                  <stop offset="100%" stopColor="hsl(280 50% 72%)" />
                </linearGradient>
              </defs>
              <path d="M1.5,0 Q0,250 1.5,500 Q3,750 1.5,1000" stroke="url(#vertLineGrad3)" strokeWidth="1" fill="none" />
            </svg>
            {[0, 33, 66, 100].map((pct, i) => (
              <div
                key={i}
                className="absolute left-1/2 w-2 h-2 rounded-full"
                style={{
                  top: `${pct}%`,
                  transform: `translate(-50%, ${pct === 100 ? '-100%' : pct > 0 && pct < 100 ? '-50%' : '0'})`,
                  background: ["hsl(230 80% 72%)", "hsl(245 75% 70%)", "hsl(260 70% 68%)", "hsl(280 50% 72%)"][i],
                  boxShadow: `0 0 8px ${["hsl(230 80% 72% / 0.6)", "hsl(245 75% 70% / 0.6)", "hsl(260 70% 68% / 0.6)", "hsl(280 50% 72% / 0.6)"][i]}`,
                }}
              />
            ))}
          </div>
          {/* Timeline content */}
          <div className="space-y-5 pl-6">
            {events.map((event, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="meta block mb-1" style={{ color: "hsl(250 76% 72%)" }}>{event.date}</span>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{event.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.body}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CVE Table */}
        <FadeIn delay={0.6}>
          <p className="meta mb-4">Vulnerability Cascade</p>
          <div className="rounded-xl border border-border/30 overflow-hidden" style={{ background: "hsl(0 0% 100% / 0.02)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/20">
                   <th className="text-left px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">Date</th>
                   <th className="text-left px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">CVE</th>
                   <th className="text-center px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">CVSS</th>
                   <th className="text-center px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">Auth Bypass</th>
                   <th className="text-center px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">Patch 01/31</th>
                   <th className="text-center px-4 py-3 text-[10px] font-bold text-foreground/80 tracking-wider uppercase">Patch 02/08</th>
                </tr>
              </thead>
              <tbody>
                {cves.map((row, i) => (
                  <tr key={row.cve} className={`border-b border-border/10 ${i % 2 === 0 ? "" : ""}`} style={{ background: i % 2 === 1 ? "hsl(0 0% 100% / 0.02)" : "transparent" }}>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.date}</td>
                    <td className="px-4 py-2.5 text-foreground font-medium">{row.cve}</td>
                    <td className="px-4 py-2.5 text-center">
                      <span className={`font-bold ${parseFloat(row.cvss) >= 9 ? "text-destructive" : "text-foreground"}`}>{row.cvss}</span>
                    </td>
                    <td className="px-4 py-2.5 text-center text-muted-foreground">{row.authBypass}</td>
                    <td className="px-4 py-2.5 text-center">
                      <span className={row.patch1 === "Yes" ? "text-success" : "text-muted-foreground"}>{row.patch1}</span>
                    </td>
                    <td className="px-4 py-2.5 text-center text-success">{row.patch2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

export default Slide3;
