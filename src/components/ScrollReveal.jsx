import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  as: Component = "div",
  ...props
}) => {
  const { ref, isInView } = useInView();
  const reducedMotion = useReducedMotion();

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        reducedMotion
          ? isInView
            ? "opacity-100"
            : "opacity-0"
          : isInView
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0",
        className
      )}
      style={reducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
