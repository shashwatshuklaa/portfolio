import { Achievement } from "@/data/portfolio";

interface AchievementsProps {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="scroll-mt-20">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 05
        </span>
        <span className="text-purple-400">{"//"}</span>
        <span className="text-slate-400">TROPHY VAULT</span>
      </div>

      <div className="pixel-panel rounded-xl p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-2.5">
          <h2 className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            Certifications & Honors
          </h2>
          <span className="font-mono text-[10px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            AWARDS
          </span>
        </div>

        <div className="space-y-3">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-3.5 sm:p-4 rounded-lg bg-[#070e22] border-2 border-[#1c2754] space-y-2 shadow-inner"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#152044] pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 font-mono text-sm select-none">
                    ★
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-mono text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#101b3c] border border-[#23356e] text-slate-400 font-semibold w-fit">
                  {item.date}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <span className="text-purple-400">ISSUED BY:</span>
                <span className="font-semibold">{item.issuer}</span>
              </div>

              {item.description && (
                <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
