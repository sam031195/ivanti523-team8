import { FadeIn, ArchNode, StaggerContainer, StaggerItem } from "./Animations";
import { EyeOff, AlertCircle, Monitor, Server, Database, Wifi, ShieldOff, Eye, ClipboardCheck, FileWarning } from "lucide-react";
import { motion } from "framer-motion";
import threatBg from "@/assets/visibility-bg2.avif";

const Slide5 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={threatBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[500px] h-[500px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-destructive" />

    <div className="slide-wide">
      <FadeIn>
        <div className="tag-danger mb-6">
          <EyeOff className="w-2.5 h-2.5" strokeWidth={1.5} />
          Visibility Failure
        </div>
        <h1 className="font-display text-4xl md:text-[4.5rem] font-light leading-[0.9] tracking-[-0.03em] text-foreground mb-14">
          The Detection <span className="text-destructive font-medium">Gap.</span>
        </h1>
      </FadeIn>

      {/* SOC Architecture — S1 style open layout */}
      <FadeIn delay={0.2}>
        <p className="meta mb-10">Security Operations Architecture</p>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-start mb-10">
          {/* Monitored */}
          <div>
            <div className="accent-line-success" />
            <p className="text-xs font-semibold text-success tracking-wider uppercase mb-6">Monitored Assets</p>
            <div className="flex gap-6">
              {[
                { icon: Monitor, label: "Endpoints" },
                { icon: Database, label: "Databases" },
                { icon: Server, label: "Cloud" },
              ].map((item, i) => (
                <ArchNode key={item.label} icon={item.icon} label={item.label} delay={0.3 + i * 0.08} variant="success" size="sm" />
              ))}
            </div>
          </div>

          {/* SOC Hub */}
          <div className="flex flex-col items-center pt-4">
            <motion.div
              className="flex flex-col items-center gap-2.5 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-16 h-16">
                {/* Border-only glow: overflow-hidden clips the rotating gradient */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute inset-[-50%]"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, hsl(0 0% 100% / 0.07) 75%, hsl(0 0% 100% / 0.12) 80%, hsl(0 0% 100% / 0.07) 85%, transparent 100%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                {/* Inner cutout - matches page background */}
                <div className="absolute inset-[1.5px] rounded-[10px]" style={{ background: "hsl(0 0% 100% / 0.03)" }} />
                {/* Subtle base border on top of cutout */}
                <div className="absolute inset-0 rounded-xl" style={{ border: "1px solid hsl(0 0% 100% / 0.06)" }} />
                {/* Static icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Eye className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
              </div>
              <span className="text-xs font-bold text-foreground/90 text-center leading-tight">SOC / SIEM</span>
            </motion.div>
            <motion.p
              className="mt-4 text-[10px] font-semibold text-destructive tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              Partial Visibility
            </motion.p>
          </div>

          {/* Blind Spots */}
          <div>
            <div className="accent-line-danger" />
            <p className="text-xs font-semibold text-destructive tracking-wider uppercase mb-6">Blind Spots</p>
            <div className="flex gap-6">
              {[
                { icon: Wifi, label: "VPN Appliance" },
                { icon: ShieldOff, label: "Edge Devices" },
              ].map((item, i) => (
                <ArchNode key={item.label} icon={item.icon} label={item.label} delay={0.5 + i * 0.08} variant="danger" size="sm" />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Failure details */}
      <StaggerContainer className="grid grid-cols-2 gap-10" delay={0.5}>
        {[
          { icon: ClipboardCheck, cis: "CIS 8", title: "Audit Log Management", text: "Logging was not centralized or immutable, allowing attackers to wipe their tracks. The VPN was a single point of failure for detection.", impact: "logClear.pl destroyed all event, admin, and sensor logs. Forensic investigation was crippled and dwell time could not be accurately determined." },
          { icon: FileWarning, cis: "CIS 12", title: "Network Infrastructure Mgmt", text: "VPN governed as simple appliance. No dedicated IR plan for edge infrastructure.", impact: "No playbook to isolate or rebuild — extended chaos." },
        ].map((f) => (
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{f.text}</p>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-3 h-3 text-destructive/30 mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-xs text-destructive/40">{f.impact}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.65}>
        <div className="sep mt-6 mb-4" />
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-destructive/40 tracking-wider uppercase mb-1">NIST CSF Mapping</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This represents a catastrophic failure in the <span className="text-foreground font-semibold">Detect</span> function, which crippled our ability to <span className="text-foreground font-semibold">Respond</span> and <span className="text-foreground font-semibold">Recover</span>.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.7}>
        <div className="sep mb-0" />
        <p className="text-center text-sm text-destructive/50 py-3 font-medium">
          Root Cause — Failure to classify edge infrastructure as a critical, high-risk asset
        </p>
      </FadeIn>
    </div>
  </div>
);

export default Slide5;
