import { AcademicHighlight } from "@/data/portfolio";

interface AcademicHighlightsProps {
  academics: AcademicHighlight[];
}

export default function AcademicHighlights({
  academics,
}: AcademicHighlightsProps) {
  return (
    <section id="academic" className="scroll-mt-20">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 02
        </span>
        <span className="text-purple-400">//</span>
        <span className="text-slate-400">ACADEMY & QUESTS</span>
      </div>

      <div className="pixel-panel rounded-xl p-6 sm:p-7 space-y-6">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-3">
          <h2 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            Academic Highlights
          </h2>
          <span className="font-mono text-[11px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            RECORD
          </span>
        </div>

        <div className="space-y-5">
          {academics.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg bg-[#070e22] border-2 border-[#1c2754] space-y-3 shadow-inner"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#152044] pb-2">
                <h3 className="text-base sm:text-lg font-bold font-mono text-cyan-300">
                  {item.institution}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#101b3c] border border-[#23356e] text-slate-400 font-semibold w-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-yellow-300/90 font-mono">
                {item.degree}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                  KEY MILESTONES:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-400 font-mono font-bold">
                        ✦
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
