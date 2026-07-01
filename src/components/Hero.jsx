import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code2, MapPin } from "lucide-react";
import Scene3D from "./3d/Scene3D";
import { EXPERIENCE } from "@/lib/constants";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20" />
          }
        >
          <Scene3D />
        </Suspense>
      </div>

      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/30" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center space-y-12 mt-10">
          {/* Clean typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none flex items-center justify-center gap-6 my-10">
              <span
                className="block text-foreground"
                style={{
                  transform: `translate(${mousePosition.x * 2}px, ${
                    mousePosition.y * 1
                  }px)`,
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Pradip
              </span>
              <span
                className="block text-muted-foreground/60"
                style={{
                  transform: `translate(${-mousePosition.x * 1.5}px, ${
                    -mousePosition.y * 0.5
                  }px)`,
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Bakutra
              </span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/80 font-light">
                Frontend Developer
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Crafting digital experiences with clean code and thoughtful
                design. Specializing in Frontend frameworks and user-centered
                solutions.
              </p>
            </div>
          </div>

          {/* Minimal location info */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, India</span>
          </div>

          {/* Clean CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group px-8 py-3 bg-foreground text-background hover:bg-foreground/90 border-0 font-medium"
              onClick={scrollToProjects}
            >
              <span className="flex items-center gap-2">
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-3 text-foreground hover:bg-muted/50 font-medium"
              onClick={scrollToContact}
            >
              Get in touch
            </Button>
          </div>

          {/* Minimal stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xs mx-auto pt-12 border-t border-muted-foreground/10">
            <div className="text-center">
              <div className="text-lg font-medium text-foreground">
                {EXPERIENCE}+
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Years
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-foreground">
                Web Apps
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Focused
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-foreground">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
