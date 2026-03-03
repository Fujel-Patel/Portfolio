export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 glass-panel border-x-0 border-b-0">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Fujel Patel. All rights reserved. Built with React & Three.js.
        </p>
      </div>
    </footer>
  );
}
