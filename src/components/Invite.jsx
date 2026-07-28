import { Mail, Phone, Linkedin, Download } from "lucide-react";
import SectionTag from "./SectionTag.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { INVITE, SITE } from "@/lib/content";

const Invite = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-surface border-t border-border-line">
      <div className="container">
        <SectionTag number="05" label="The Invite" />

        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary max-w-2xl leading-snug">
            {INVITE.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 space-y-6 max-w-md">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 group text-text-muted hover:text-accent-circuit transition-colors"
            >
              <Mail className="w-4 h-4 text-accent-signal flex-shrink-0" />
              <span className="font-mono text-sm">{SITE.email}</span>
            </a>

            <a
              href={SITE.phoneHref}
              className="flex items-center gap-4 group text-text-muted hover:text-accent-circuit transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-signal flex-shrink-0" />
              <span className="font-mono text-sm">{SITE.phone}</span>
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group text-text-muted hover:text-accent-circuit transition-colors"
            >
              <Linkedin className="w-4 h-4 text-accent-signal flex-shrink-0" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 border border-accent-signal/40 text-accent-signal font-mono text-sm tracking-wide rounded hover:bg-accent-signal/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Invite;
