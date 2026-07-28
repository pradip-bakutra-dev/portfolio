import { useState } from "react";
import SectionTag from "./SectionTag.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { TOOLKIT_CLUSTERS } from "@/lib/content";
import { cn } from "@/lib/utils";

const CLUSTER_LAYOUTS = {
  frontend: [
    { x: 10, y: 20 },
    { x: 90, y: 20 },
    { x: 170, y: 20 },
    { x: 250, y: 20 },
    { x: 50, y: 70 },
    { x: 130, y: 70 },
    { x: 210, y: 70 },
    { x: 90, y: 120 },
    { x: 170, y: 120 },
  ],
  backend: [
    { x: 40, y: 30 },
    { x: 140, y: 30 },
    { x: 40, y: 90 },
    { x: 140, y: 90 },
  ],
  ai: [
    { x: 10, y: 20 },
    { x: 90, y: 20 },
    { x: 170, y: 20 },
    { x: 250, y: 20 },
    { x: 50, y: 75 },
    { x: 130, y: 75 },
    { x: 210, y: 75 },
  ],
};

const CLUSTER_CONNECTIONS = {
  frontend: [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 5],
    [3, 6],
    [4, 5],
    [5, 6],
    [4, 7],
    [5, 7],
    [5, 8],
    [6, 8],
  ],
  backend: [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ],
  ai: [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 5],
    [3, 6],
    [4, 5],
    [5, 6],
  ],
};

const NODE_SIZE = 8;

const ClusterGraph = ({ cluster, isActive, onActivate, onDeactivate }) => {
  const layout = CLUSTER_LAYOUTS[cluster.id];
  const connections = CLUSTER_CONNECTIONS[cluster.id];

  return (
    <div
      className={cn(
        "relative rounded-lg border bg-bg-base p-4 md:p-6 transition-colors duration-300",
        isActive ? "border-accent-circuit/50" : "border-border-line",
      )}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onTouchStart={onActivate}
    >
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-signal mb-4">
        {cluster.label}
      </h3>

      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox="0 0 280 140"
          className="w-full min-w-[240px] h-auto"
          aria-hidden="true"
        >
          {connections.map(([from, to], i) => {
            const a = layout[from];
            const b = layout[to];
            return (
              <line
                key={i}
                x1={a.x + NODE_SIZE / 2}
                y1={a.y + NODE_SIZE / 2}
                x2={b.x + NODE_SIZE / 2}
                y2={b.y + NODE_SIZE / 2}
                stroke={
                  isActive ? "var(--accent-circuit)" : "var(--border-line)"
                }
                strokeWidth="1"
                className={cn(
                  "transition-colors duration-300",
                  isActive && "trace-glow-circuit",
                )}
              />
            );
          })}

          {layout.map((pos, i) => (
            <rect
              key={i}
              x={pos.x}
              y={pos.y}
              width={NODE_SIZE}
              height={NODE_SIZE}
              fill={isActive ? "var(--accent-signal)" : "var(--bg-surface)"}
              stroke={isActive ? "var(--accent-signal)" : "var(--border-line)"}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
          ))}
        </svg>

        <div className="mt-3 flex flex-wrap gap-2">
          {cluster.skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                "font-mono text-[11px] px-2 py-1 rounded border transition-colors duration-300",
                isActive
                  ? "border-accent-circuit/40 text-text-primary bg-accent-circuit/5"
                  : "border-border-line text-text-muted",
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Toolkit = () => {
  const [activeCluster, setActiveCluster] = useState(null);

  return (
    <section
      id="toolkit"
      className="py-24 md:py-32 bg-bg-base border-t border-border-line"
    >
      <div className="container">
        <SectionTag number="03" label="The Toolkit" />

        <ScrollReveal>
          <p className="text-text-muted mb-12 max-w-xl">
            Skills wired together - hover or tap a cluster to trace the
            connections.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLKIT_CLUSTERS.map((cluster, index) => (
            <ScrollReveal key={cluster.id} delay={index * 100}>
              <ClusterGraph
                cluster={cluster}
                isActive={activeCluster === cluster.id}
                onActivate={() => setActiveCluster(cluster.id)}
                onDeactivate={() => setActiveCluster(null)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
