import SectionTag from "./SectionTag.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { ORIGIN_BEATS } from "@/lib/content";

const Origin = () => {
  return (
    <section id="origin" className="py-24 md:py-32 bg-bg-base border-t border-border-line">
      <div className="container">
        <SectionTag number="01" label="Origin" />

        <div className="max-w-2xl space-y-10 md:space-y-14">
          {ORIGIN_BEATS.map((beat, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <p className="text-lg md:text-xl text-text-primary/90 leading-relaxed">
                {beat}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Origin;
