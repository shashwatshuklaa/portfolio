interface IntroductionProps {
  name: string;
  headline: string;
}

export default function Introduction({ name, headline }: IntroductionProps) {
  return (
    <section id="intro" className="scroll-mt-20">
      <div className="relative overflow-hidden rounded-xl border-2 border-[#1c2754] bg-[#070e24] shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
        {/* Original CSS Pixel-Art Panorama Scene */}
        <div
          aria-hidden="true"
          className="relative w-full h-48 sm:h-64 overflow-hidden border-b-2 border-[#1c2754] select-none bg-gradient-to-b from-[#030612] via-[#071029] to-[#121c40]"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 24px 30px, #ffffff, transparent),
              radial-gradient(2px 2px at 90px 75px, #38bdf8, transparent),
              radial-gradient(3px 3px at 170px 40px, #facc15, transparent),
              radial-gradient(2px 2px at 250px 95px, #ffffff, transparent),
              radial-gradient(2px 2px at 340px 35px, #c084fc, transparent),
              radial-gradient(3px 3px at 430px 80px, #38bdf8, transparent),
              radial-gradient(2px 2px at 520px 45px, #ffffff, transparent),
              radial-gradient(2px 2px at 620px 100px, #facc15, transparent),
              radial-gradient(3px 3px at 720px 35px, #38bdf8, transparent),
              radial-gradient(2px 2px at 810px 85px, #ffffff, transparent)
            `,
          }}
        >
          {/* Glowing Celestial Pixel Orb */}
          <div className="absolute top-5 right-8 sm:right-16 w-12 h-12 rounded bg-cyan-200 border-2 border-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.7),inset_-4px_-4px_0_#0284c7]" />

          {/* Distant Layer 1: Deep Violet Mountains */}
          <div
            className="absolute bottom-0 w-full h-24 bg-[#14132e]"
            style={{
              clipPath:
                "polygon(0% 100%, 0% 65%, 15% 45%, 28% 60%, 42% 35%, 58% 55%, 72% 30%, 86% 50%, 100% 38%, 100% 100%)",
            }}
          />

          {/* Midground Layer 2: Midnight-Navy Stepped Ridges */}
          <div
            className="absolute bottom-0 w-full h-18 bg-[#0d1838]"
            style={{
              clipPath:
                "polygon(0% 100%, 0% 70%, 12% 50%, 25% 65%, 38% 42%, 52% 60%, 68% 40%, 82% 58%, 100% 45%, 100% 100%)",
            }}
          />

          {/* Foreground Layer 3: Rocky Terrain Base */}
          <div className="absolute bottom-0 w-full h-9 bg-[#091026] border-t-2 border-[#1c2754]" />

          {/* Pixel Crystal Spire Left (Cyan Data Pillar) */}
          <div className="absolute bottom-8 left-8 sm:left-14 flex flex-col items-center">
            <div className="w-2 h-3 bg-cyan-200 shadow-[0_0_10px_#22d3ee]" />
            <div className="w-5 h-12 bg-gradient-to-b from-cyan-400 via-cyan-600 to-indigo-900 border border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
            <div className="w-7 h-3 bg-indigo-950 border border-cyan-500/50" />
          </div>

          {/* Pixel Crystal Spire Right (Purple Energy Monolith) */}
          <div className="absolute bottom-8 right-24 sm:right-36 hidden sm:flex flex-col items-center">
            <div className="w-2 h-4 bg-purple-200 shadow-[0_0_10px_#c084fc]" />
            <div className="w-6 h-16 bg-gradient-to-b from-purple-400 via-purple-700 to-indigo-950 border border-purple-300 shadow-[0_0_14px_rgba(168,85,247,0.5)]" />
            <div className="w-8 h-3 bg-[#0f0e26] border border-purple-500/50" />
          </div>

          {/* Floating Pixel Data Sparks */}
          <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-yellow-300 shadow-[0_0_6px_#fde047]" />
          <div className="absolute bottom-24 right-1/4 w-1.5 h-1.5 bg-cyan-300 shadow-[0_0_6px_#67e8f9]" />
          <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-purple-300 shadow-[0_0_6px_#d8b4fe]" />

          {/* Top-left Retro Status Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-[#070e24]/90 border border-cyan-500/50 backdrop-blur font-mono text-[11px] text-cyan-300 font-bold uppercase tracking-widest shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            WORLD: STUDENT PORTFOLIO
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="p-6 sm:p-8 space-y-5 bg-[#081028]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 font-bold uppercase tracking-wider">
              ✦ PLAYER ONE
            </span>
            <span className="text-purple-400">•</span>
            <span className="text-slate-400 uppercase tracking-widest">
              MISSION BRIEF
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight">
            {name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {headline}
          </p>

          {/* Chunky Pixel CTAs */}
          <div className="pt-3 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="pixel-btn-yellow inline-flex items-center justify-center px-5 py-2.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none transition-all"
            >
              View Projects ⚔
            </a>
            <a
              href="#contact"
              className="pixel-btn-cyan inline-flex items-center justify-center px-5 py-2.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none transition-all"
            >
              Get in Touch ✉
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
