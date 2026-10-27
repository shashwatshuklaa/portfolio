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
    <section id="resume" className="py-8 border-b border-zinc-800 scroll-mt-16">
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">Résumé</h2>
      <div className="p-5 rounded border border-zinc-800 bg-zinc-900/50 space-y-4">
        <p className="text-sm text-zinc-300 leading-relaxed">
          {resume.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          {hasRealViewUrl ? (
            <a
              href={resume.viewUrl}
              className="px-4 py-2 rounded bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white transition-colors"
            >
              View Résumé
            </a>
          ) : (
            <span className="text-sm text-zinc-400">
              {resume.viewUrl}
            </span>
          )}
          {hasRealDownloadUrl ? (
            <a
              href={resume.downloadUrl}
              className="px-4 py-2 rounded border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              Download PDF
            </a>
          ) : (
            <span className="text-sm text-zinc-400">
              {resume.downloadUrl}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
