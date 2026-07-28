import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/content";

const MAIN_TRACE =
  "M 80 600 L 200 600 L 280 520 L 400 520 L 480 440 L 620 440 L 700 360 L 860 360 L 940 280 L 1100 280";
const SECONDARY_TRACE = "M 120 680 L 320 680 L 400 600 L 560 600";

const TRACE_ANIM_MS = 2800;
const SIGNAL_START_DELAY_MS = 800;

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [signalsReady, setSignalsReady] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setSignalsReady(true);
    }, TRACE_ANIM_MS + SIGNAL_START_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const scrollToOrigin = () => {
    document.querySelector("#origin")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-base"
    >
      <div className="absolute inset-0 circuit-grid scanline-texture opacity-[0.06] pointer-events-none" />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-signal-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base traces */}
        <path
          d={MAIN_TRACE}
          fill="none"
          stroke="var(--accent-circuit)"
          strokeWidth="1.5"
          strokeDasharray="200"
          className={mounted ? "hero-trace-animate" : "opacity-0"}
        />
        <path
          d={SECONDARY_TRACE}
          fill="none"
          stroke="var(--accent-signal)"
          strokeWidth="1"
          strokeDasharray="120"
          opacity="0.15"
          className={mounted ? "hero-trace-animate" : "opacity-0"}
          style={{ animationDelay: "0.3s" }}
        />

        {/* Traveling signal pulses — start after trace draw-in settles */}
        {signalsReady && (
          <>
            <path
              d={MAIN_TRACE}
              fill="none"
              stroke="var(--accent-circuit)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1100"
              filter="url(#hero-signal-glow)"
              className="hero-signal-pulse-circuit"
            />
            <path
              d={SECONDARY_TRACE}
              fill="none"
              stroke="var(--accent-signal)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength="700"
              filter="url(#hero-signal-glow)"
              className="hero-signal-pulse-signal"
            />
            <path
              d={MAIN_TRACE}
              fill="none"
              stroke="var(--accent-signal)"
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength="1100"
              opacity="0.7"
              filter="url(#hero-signal-glow)"
              className="hero-signal-pulse-circuit-delayed"
            />
          </>
        )}

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

          <p className="mt-8 font-mono text-xs md:text-sm tracking-[0.15em] text-accent-signal relative inline-block pb-2">
            {HERO.tagline}
            <span
              className="absolute bottom-0 left-0 w-full h-px bg-border-line"
              aria-hidden="true"
            />
            {signalsReady && (
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-accent-signal hero-tagline-signal"
                aria-hidden="true"
              />
            )}
          </p>
        </div>
      </div>

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
