const SectionTag = ({ number, label }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="font-mono text-xs text-accent-signal tracking-wider">
      {number}
    </span>
    <span className="h-px w-8 bg-border-line" />
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
      {label}
    </span>
  </div>
);

export default SectionTag;
