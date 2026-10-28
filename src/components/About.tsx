interface AboutProps {
  about: {
    bio: string;
    details: string[];
  };
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 01
        </span>
        <span className="text-purple-400">{"//"}</span>
        <span className="text-slate-400">CHARACTER PROFILE</span>
      </div>

      <div className="pixel-panel rounded-xl p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-2.5">
          <h2 className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            About Me
          </h2>
          <span className="font-mono text-[10px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            BIO LOG
          </span>
        </div>

        <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
          {about.bio}
        </p>

        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-purple-400" />
            CORE ATTRIBUTES & SPECIALIZATIONS:
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            {about.details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start gap-2 p-2 rounded bg-[#070e22] border border-[#182348]"
              >
                <span className="text-cyan-400 font-mono font-bold select-none leading-none mt-0.5">
                  ›
                </span>
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
