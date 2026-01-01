const Footer = () => {
  return (
    <section
      id="footer"
      className="mt-20 py-10 bg-background relative border-t border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Built with React & Tailwind.
          </p>
          <p className="mt-2 text-sm">
            © 2026 Pradip Bakutra . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
