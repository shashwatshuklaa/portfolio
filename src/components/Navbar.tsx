import Link from "next/link";

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#1c2754] bg-[#070d20]/95 backdrop-blur shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <Link
          href="/#intro"
          className="flex items-center gap-2 text-white font-mono font-bold tracking-tight text-xs sm:text-base hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none px-1.5 py-0.5 rounded transition-colors"
        >
          <span className="w-2.5 h-2.5 bg-yellow-400 border border-yellow-200 shadow-[0_0_8px_rgba(250,204,21,0.6)] shrink-0" />
          <span className="truncate">{name}</span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/50 text-purple-300 shrink-0">
            LVL 1
          </span>
        </Link>

        <nav
          aria-label="Portfolio sections"
          className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-mono text-slate-300"
        >
          <Link
            href="/#about"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1SDDgg6uat46IIMbqCsiX-njzrmR7nyiq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded hover:text-cyan-300 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
          >
            Résumé
          </a>
          <Link
            href="/#contact"
            className="px-2 py-1 rounded text-yellow-300 hover:text-yellow-200 hover:bg-[#121c3d] focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
