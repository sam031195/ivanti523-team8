import { Fingerprint, Check, Lock, Wifi, User, Server, Globe, Layers, ScanEye } from "lucide-react";
import { FadeIn, ScaleIn, ArchNode, Connector } from "./Animations";
import purpleHero from "@/assets/purple-ai-hero.avif";

const Slide8 = () => (
  <div className="slide-section">
    <div className="absolute inset-0 overflow-hidden">
      <video
        muted
        playsInline
        preload="auto"
        poster=""
        className="w-[120%] h-[120%] object-cover opacity-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/videos/ai_overview_bg_vid.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="glow-orb w-[700px] h-[700px] top-1/4 left-1/2 -translate-x-1/2 bg-primary" />

    <div className="slide-wide">
      <div className="text-center mb-3">
        <FadeIn>
          <div className="tag mx-auto mb-4">
            <Fingerprint className="w-2.5 h-2.5" strokeWidth={1.5} />
            Strategic North Star
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-4xl md:text-[3.5rem] font-light leading-[0.88] tracking-[-0.04em] text-foreground mb-3">
            Zero Trust
            <br />
            <span className="gradient-text font-medium">Architecture.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-base text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            Replace perimeter-based VPN with ZTNA — "never trust, always verify."
          </p>
        </FadeIn>
      </div>

      {/* ZTNA Architecture — S1 platform diagram style */}
      <ScaleIn delay={0.3}>
        <div className="relative rounded-2xl border border-border/30 p-4">
          {/* Column labels */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-0 mb-3">
            <div className="text-center">
              <div className="accent-line mx-auto w-24" />
              <p className="text-xs font-bold text-foreground/80 tracking-wider uppercase">Identity Layer</p>
            </div>
            <div className="w-16" />
            <div className="text-center">
              <div className="accent-line mx-auto w-24" />
              <p className="text-xs font-bold text-foreground/80 tracking-wider uppercase">Policy Engine</p>
            </div>
            <div className="w-16" />
            <div className="text-center">
              <div className="accent-line-success mx-auto w-24" />
              <p className="text-xs font-bold text-foreground/80 tracking-wider uppercase">Resource Layer</p>
            </div>
          </div>

          {/* Nodes */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0 py-4">
            <div className="flex flex-col items-center gap-4">
              <ArchNode icon={User} label="User" sublabel="FIDO2 MFA" delay={0.4} />
              <p className="text-[10px] text-muted-foreground text-center max-w-[180px] leading-snug -mt-3">Issue hardware security keys (YubiKey/FIDO2) to all privileged users and integrate with PAM solution, which is a critical implementation detail. Eliminate legacy MFA fallback paths. <span className="text-muted-foreground/75">Timeline: 90 days.</span></p>
              <ArchNode icon={Wifi} label="Device" sublabel="Posture Check" delay={0.5} />
            </div>

            <div className="flex flex-col items-center gap-2">
              <Connector delay={0.55} />
              <p className="text-[10px] font-bold text-foreground/80round/80 mt-1">Authenticate</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: "hsl(152 55% 48% / 0.35)" }} />
                <ArchNode icon={ScanEye} label="Verify" sublabel="Every Request" delay={0.6} variant="success" size="lg" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: "hsl(264 78% 53% / 0.35)" }} />
                <ArchNode icon={Layers} label="Context" sublabel="Risk Score" delay={0.7} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Connector delay={0.75} variant="success" />
              <p className="text-[10px] font-bold text-foreground/80 mt-1">Authorize</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <ArchNode icon={Server} label="Apps" sublabel="Micro-Segmented" delay={0.8} variant="success" />
              <ArchNode icon={Globe} label="Network" sublabel="Least Privilege" delay={0.9} variant="success" />
            </div>
          </div>
        </div>
      </ScaleIn>

      <FadeIn delay={0.95}>
        <div className="flex items-center gap-3 justify-center mt-5">
          <Check className="w-4 h-4 text-success/60 shrink-0" strokeWidth={1.5} />
          <p className="text-sm text-foreground/75 font-medium leading-relaxed">
            Eliminates single-VPN risk. Stolen credentials can't enable lateral movement — blast radius contained.
          </p>
        </div>
        <p className="text-[10px] text-muted-foreground/75 text-center mt-2 tracking-wider uppercase font-semibold">
          Timeline: 12 months to full production deployment. Addresses: CIS Controls 4, 6, 7, 12.
        </p>
      </FadeIn>
    </div>
  </div>
);

export default Slide8;
