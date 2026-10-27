interface ResumeProps {
  resume: {
    summary: string;
    viewUrl: string;
    downloadUrl: string;
  };
}

export default function Resume({ resume }: ResumeProps) {
  const isRealUrl = (url: string) =>
    Boolean(url) &&
    !url.startsWith("[") &&
    (url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("/"));

  const hasRealViewUrl = isRealUrl(resume.viewUrl);
  const hasRealDownloadUrl = isRealUrl(resume.downloadUrl);

  return (
    <section id="resume" className="scroll-mt-20">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 04
        </span>
        <span className="text-purple-400">//</span>
        <span className="text-slate-400">CHARACTER SHEET</span>
      </div>

      <div className="pixel-panel rounded-xl p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-3">
          <h2 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            Résumé
          </h2>
          <span className="font-mono text-[11px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            STATS SHEET
          </span>
        </div>

        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          {resume.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {hasRealViewUrl ? (
            <a
              href={resume.viewUrl}
              className="pixel-btn-yellow inline-flex items-center justify-center px-5 py-2.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none transition-all"
            >
              View Résumé 📜
            </a>
          ) : (
            <span className="font-mono text-xs text-slate-500 px-3 py-1.5 rounded border border-[#1c2754] bg-[#070e22]">
              {resume.viewUrl}
            </span>
          )}

          {hasRealDownloadUrl ? (
            <a
              href={resume.downloadUrl}
              className="pixel-btn-purple inline-flex items-center justify-center px-5 py-2.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider rounded focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-all"
            >
              Download PDF ⬇
            </a>
          ) : (
            <span className="font-mono text-xs text-slate-500 px-3 py-1.5 rounded border border-[#1c2754] bg-[#070e22]">
              {resume.downloadUrl}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
