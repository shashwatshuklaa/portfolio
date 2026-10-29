import Link from "next/link";

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#152044] bg-[#060b19]/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-0 sm:h-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link
            href="/#intro"
            className="flex items-center gap-1.5 sm:gap-2.5 text-white font-mono font-bold tracking-tight text-xs sm:text-base hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded transition-colors shrink-0"
          >
            <span className="navbar-pixel-coin shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 28"
                className="w-[18px] h-[21px] sm:w-5 sm:h-[23px] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
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
            <span className="truncate max-w-[200px] min-[380px]:max-w-none">{name}</span>
            <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-950/70 border border-purple-500/40 text-purple-300 shrink-0">
              LVL 1
            </span>
          </Link>

          <span className="sm:hidden text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-950/70 border border-purple-500/40 text-purple-300 shrink-0">
            LVL 1
          </span>
        </div>

        <nav
          aria-label="Portfolio sections"
          className="flex items-center justify-between sm:justify-end gap-1 sm:gap-6 md:gap-7 text-xs sm:text-sm font-sans font-medium text-slate-300 w-full sm:w-auto shrink-0"
        >
          <Link
            href="/#about"
            className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1SDDgg6uat46IIMbqCsiX-njzrmR7nyiq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0"
          >
            Résumé
          </a>
          <a
            href="https://www.linkedin.com/in/shashwatshuklaaa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center justify-center hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0 rounded"
          >
            <span className="sr-only">LinkedIn profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/shashwatshuklaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0 rounded"
          >
            <span className="sr-only">GitHub profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <Link
            href="/#contact"
            className="text-yellow-300 hover:text-yellow-200 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none transition-colors py-1 px-1 sm:px-0 font-semibold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
