interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="w-full border-t-2 border-[#1c2754] bg-[#070d20] py-8 text-slate-400">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
          <p>© 2026 {name}. All rights reserved.</p>
        </div>

        <a
          href="#intro"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#0f1738] border border-cyan-500/40 text-cyan-300 font-bold hover:bg-[#15204c] hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors"
        >
          <span>Back to Top</span>
          <span>▲</span>
        </a>
      </div>
    </footer>
  );
}
