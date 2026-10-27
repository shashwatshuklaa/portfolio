interface AboutProps {
  about: {
    bio: string;
    details: string[];
  };
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-8 border-b border-zinc-800 scroll-mt-16">
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">About Me</h2>
      <div className="space-y-4 text-zinc-300">
        <p className="leading-relaxed">{about.bio}</p>
        <ul className="list-disc list-inside space-y-2 text-zinc-400">
          {about.details.map((detail, index) => (
            <li key={index} className="leading-relaxed">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
