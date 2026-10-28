import { SkillCategory } from "@/data/portfolio";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 02
        </span>
        <span className="text-purple-400">{"//"}</span>
        <span className="text-slate-400">SKILLS & ARSENAL</span>
      </div>

      <div className="pixel-panel rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-2.5">
          <h2 className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            Skills & Tools
          </h2>
          <span className="font-mono text-[10px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            LOADOUT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-3.5 rounded-lg bg-[#070e22] border-2 border-[#1c2754] flex flex-col space-y-2.5 shadow-inner"
            >
              <div className="border-b border-[#152044] pb-1.5">
                <h3 className="text-xs sm:text-sm font-bold font-mono text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_6px_#22d3ee] shrink-0" />
                  <span>{category.name}</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-[#0e1634] border border-[#233366] text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
