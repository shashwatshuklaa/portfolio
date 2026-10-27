interface IntroductionProps {
  name: string;
  headline: string;
}

export default function Introduction({ name, headline }: IntroductionProps) {
  return (
    <section id="intro" className="py-12 border-b border-zinc-800">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
          Student Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight">
          {name}
        </h1>
        <p className="text-lg text-zinc-300 max-w-2xl">
          {headline}
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-white transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
