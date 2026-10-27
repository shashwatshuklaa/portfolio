interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#1c2754] bg-[#070d20]/95 backdrop-blur shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <a
          href="#intro"
          className="flex items-center gap-2 text-white font-mono font-bold tracking-tight text-xs sm:text-base hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none px-1.5 py-0.5 rounded transition-colors"
        >
          <span className="w-2.5 h-2.5 bg-yellow-400 border border-yellow-200 shadow-[0_0_8px_rgba(250,204,21,0.6)] shrink-0" />
          <span className="truncate">{name}</span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/50 text-purple-300 shrink-0">
            LVL 1
          </span>
        </a>

        <nav
          aria-label="Portfolio sections"
          className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-mono text-slate-300"
        >
          <a
            href="#about"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded text-yellow-300 hover:text-yellow-200 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
