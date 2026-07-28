import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/content";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToOrigin = () => {
    document.querySelector("#origin")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-base"
    >
      {/* Faint grid + scanline texture */}
      <div className="absolute inset-0 circuit-grid scanline-texture opacity-[0.06] pointer-events-none" />

      {/* Circuit trace background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M 80 600 L 200 600 L 280 520 L 400 520 L 480 440 L 620 440 L 700 360 L 860 360 L 940 280 L 1100 280"
          fill="none"
          stroke="var(--accent-circuit)"
          strokeWidth="1.5"
          strokeDasharray="200"
          className={mounted ? "hero-trace-animate" : "opacity-0"}
        />
        <path
          d="M 120 680 L 320 680 L 400 600 L 560 600"
          fill="none"
          stroke="var(--accent-signal)"
          strokeWidth="1"
          strokeDasharray="120"
          opacity="0.15"
          className={mounted ? "hero-trace-animate" : "opacity-0"}
          style={{ animationDelay: "0.3s" }}
        />
        {/* Node markers */}
        <circle cx="480" cy="440" r="3" fill="var(--accent-circuit)" opacity="0.4" />
        <circle cx="700" cy="360" r="3" fill="var(--accent-signal)" opacity="0.4" />
        <rect x="937" y="277" width="6" height="6" fill="var(--accent-circuit)" opacity="0.4" />
      </svg>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight text-text-primary">
            {HERO.headline}
          </h1>

          <p className="mt-6 text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
            {HERO.subhead}
          </p>

          <p className="mt-8 font-mono text-xs md:text-sm tracking-[0.15em] text-accent-signal">
            {HERO.tagline}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToOrigin}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-circuit transition-colors"
        aria-label="Scroll to origin section"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 scroll-cue-animate" />
      </button>
    </section>
  );
};

export default Hero;
