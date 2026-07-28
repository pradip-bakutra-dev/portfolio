import { useRef } from "react";
import SectionTag from "./SectionTag.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile.jsx";
import { TIMELINE } from "@/lib/content";

const DESKTOP_PATH =
  "M 40 0 L 40 120 L 120 120 L 120 280 L 200 280 L 200 440 L 280 440 L 280 600";
const MOBILE_PATH = "M 16 0 L 16 600";
const PATH_LENGTH = 900;

const Journey = () => {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const drawProgress = reducedMotion ? 1 : progress;
  const dashOffset = PATH_LENGTH * (1 - drawProgress);
  const pathD = isMobile ? MOBILE_PATH : DESKTOP_PATH;

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg-surface border-t border-border-line"
    >
      <div className="container">
        <SectionTag number="02" label="The Journey" />

        <div className="relative max-w-3xl">
          <svg
            className="absolute top-0 left-0 h-full w-16 md:w-72 pointer-events-none overflow-visible"
            viewBox="0 0 300 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={pathD}
              fill="none"
              stroke="var(--border-line)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={pathD}
              fill="none"
              stroke="var(--accent-circuit)"
              strokeWidth="2"
              strokeDasharray={PATH_LENGTH}
              strokeDashoffset={dashOffset}
              vectorEffect="non-scaling-stroke"
              className="trace-glow-circuit"
              style={{
                transition: reducedMotion ? "none" : "stroke-dashoffset 0.1s linear",
              }}
            />
          </svg>

          <div className="relative space-y-20 md:space-y-28 pl-10 md:pl-36">
            {TIMELINE.map((entry, index) => (
              <ScrollReveal key={entry.id} delay={index * 100}>
                <div className="relative">
                  <div
                    className="absolute top-1.5 w-3 h-3 rounded-sm border border-accent-circuit bg-bg-surface -left-[calc(2.5rem+0.375rem)] md:-left-[calc(9rem+0.375rem)]"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0.5 bg-accent-circuit/60 rounded-sm" />
                  </div>

                  <div className="font-mono text-xs text-accent-signal tracking-wider mb-2">
                    {entry.period}
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary">
                    {entry.role}
                  </h3>

                  <p className="font-mono text-sm text-text-muted mt-1">
                    {entry.company} · {entry.location}
                  </p>

                  <p className="mt-4 text-text-muted leading-relaxed max-w-xl">
                    {entry.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
