import ScrollReveal from "./ScrollReveal.jsx";
import { BEYOND } from "@/lib/content";

const Beyond = () => {
  return (
    <section id="beyond" className="py-20 md:py-24 bg-bg-base border-t border-border-line">
      <div className="container">
        <ScrollReveal>
          <p className="max-w-2xl text-text-muted leading-relaxed text-base md:text-lg">
            {BEYOND}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Beyond;
