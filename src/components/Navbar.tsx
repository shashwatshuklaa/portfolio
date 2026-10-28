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
          <span className="navbar-pixel-coin shrink-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 28"
              className="w-3.5 h-4 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
              fill="none"
              aria-hidden="true"
              shapeRendering="crispEdges"
            >
              <path
                d="M8 0h8v2h4v2h2v4h2v12h-2v4h-2v2h-4v2H8v-2H4v-2H2v-4H0V8h2V4h2V2h4V0z"
                fill="#040714"
              />
              <path
                d="M8 2h8v2h4v4h2v12h-2v4h-4v2H8v-2H4v-4H2V8h2V4h4V2z"
                fill="#facc15"
              />
              <path
                d="M8 2h8v2H8V2zm-4 2h4v2H4V4zm-2 4h2v6H2V8z"
                fill="#fef08a"
              />
              <path
                d="M8 4h8v2h2v2h2v8h-2v2h-2v2H8v-2H6v-2H4V8h2V6h2V4z"
                fill="#eab308"
              />
              <path
                d="M16 18h2v-8h-2v8zm-2 2h2v-2h-2v2zm-4 0h4v2h-4v-2z"
                fill="#b45309"
              />
              <path
                d="M10 9h4v2h2v6h-2v2h-4v-2H8v-6h2V9z"
                fill="#78350f"
              />
              <path d="M11 11h2v6h-2v-6z" fill="#fef08a" />
              <rect x="11" y="13" width="2" height="2" fill="#facc15" />
            </svg>
          </span>
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
