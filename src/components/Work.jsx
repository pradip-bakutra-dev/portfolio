import SectionTag from "./SectionTag.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { CASE_STUDIES } from "@/lib/content";

const CaseStudyCard = ({ study, index }) => (
  <ScrollReveal delay={index * 120}>
    <article className="group border border-border-line rounded-lg bg-bg-surface p-6 md:p-8 hover:border-accent-circuit/30 transition-colors duration-300">
      <div className="flex items-start gap-3 mb-6">
        <div className="w-2 h-2 mt-2 rounded-sm bg-accent-signal flex-shrink-0" />
        <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary">
          {study.title}
        </h3>
      </div>

      <div className="space-y-5 pl-5 border-l border-border-line">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-signal">
            Problem
          </span>
          <p className="mt-2 text-text-muted leading-relaxed">{study.problem}</p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-circuit">
            Build
          </span>
          <p className="mt-2 text-text-muted leading-relaxed">{study.build}</p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-primary">
            Impact
          </span>
          <p className="mt-2 text-text-primary/80 leading-relaxed">{study.impact}</p>
        </div>
      </div>
    </article>
  </ScrollReveal>
);

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-bg-surface border-t border-border-line">
      <div className="container">
        <SectionTag number="04" label="The Work" />

        <div className="grid gap-8 max-w-4xl">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
