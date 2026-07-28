import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/content";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-base/90 backdrop-blur-md border-b border-border-line"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-mono text-sm text-accent-signal tracking-wider hover:text-accent-circuit transition-colors"
          >
            PB
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                <span className="font-mono text-[10px] text-accent-signal/60 group-hover:text-accent-signal transition-colors">
                  {item.id}
                </span>
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border-line mt-1">
            <div className="pt-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full px-2 py-2.5 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <span className="font-mono text-[10px] text-accent-signal">
                    {item.id}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
