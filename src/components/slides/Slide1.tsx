import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";
import { ArrowRight, Shield, Bug, Globe, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-main.avif";

const ease = [0.16, 1, 0.3, 1] as const;

const Slide1 = () => (
  <div className="slide-section">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="photo-overlay" />
    </div>
    <div className="glow-orb w-[700px] h-[700px] -top-60 right-0 bg-primary" />

    <div className="slide-container flex flex-col justify-center">
      <FadeIn>
        <p className="meta mb-8">MSIS 523 — Cybersecurity Policy, Management, and Compliance · Post-Mortem Analysis</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="font-display text-6xl md:text-[7rem] font-light leading-[0.9] tracking-[-0.04em] text-foreground mb-6">
          Ivanti Connect
          <br />
          <span className="gradient-text font-medium">Secure Incident.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed mb-12">
          GRC Failures, Governance Breakdown, and the Strategic Path to Zero Trust Architecture.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <button className="cta-btn mb-20">
          Explore Findings <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </FadeIn>

      {/* Bottom feature strip — S1 cloud security style with accent lines */}
      <FadeIn delay={0.4}>
        <div className="s1-feature-grid grid-cols-4">
          {[
            { icon: Bug, label: "The Breach", desc: "Zero-day exploitation of VPN appliances by nation-state actors and ransomware groups — Threat Actors: UNC5221, ALPHV/BlackCat", color: "text-destructive", line: "accent-line" },
            { icon: Globe, label: "The Impact", desc: "1,700+ devices compromised globally", color: "text-foreground", line: "accent-line" },
            { icon: AlertTriangle, label: "The Failure", desc: "5 CIS control breakdowns identified across a cascade of 5 CVEs", color: "text-destructive", line: "accent-line" },
            { icon: Shield, label: "The Fix", desc: "Zero Trust architecture adoption", color: "text-success", line: "accent-line" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="s1-feature-item"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease }}
            >
              <div className={item.line} />
              <item.icon className={`w-6 h-6 ${item.color} s1-feature-icon`} strokeWidth={1.5} />
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Slide1;
