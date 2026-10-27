import { AcademicHighlight } from "@/data/portfolio";

interface AcademicHighlightsProps {
  academics: AcademicHighlight[];
}

export default function AcademicHighlights({
  academics,
}: AcademicHighlightsProps) {
  return (
    <section id="academic" className="py-8 border-b border-zinc-800 scroll-mt-16">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">
        Academic Highlights
      </h2>
      <div className="space-y-6">
        {academics.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded border border-zinc-800 bg-zinc-900/50 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-semibold text-zinc-100">
                {item.institution}
              </h3>
              <span className="text-xs text-zinc-400 font-mono">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-zinc-300">{item.degree}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
