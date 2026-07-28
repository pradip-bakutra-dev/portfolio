const Footer = () => {
  return (
    <footer className="py-8 bg-bg-base border-t border-border-line">
      <div className="container">
        <p className="font-mono text-xs text-text-muted text-center tracking-wide">
          © {new Date().getFullYear()} Pradip Bakutra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
