import { ContactLink } from "@/data/portfolio";

interface ContactProps {
  contact: {
    email: string;
    message: string;
    links: ContactLink[];
  };
}

export default function Contact({ contact }: ContactProps) {
  const isRealEmail =
    Boolean(contact.email) &&
    !contact.email.startsWith("[") &&
    contact.email.includes("@") &&
    !contact.email.includes(" ");

  const isRealUrl = (url: string) =>
    Boolean(url) &&
    !url.startsWith("[") &&
    (url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("/"));

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-bold">
          CH. 05
        </span>
        <span className="text-purple-400">//</span>
        <span className="text-slate-400">TRANSMIT SIGNAL</span>
      </div>

      <div className="pixel-panel rounded-xl p-6 sm:p-7 space-y-5">
        <div className="flex items-center justify-between border-b border-[#1c2754] pb-3">
          <h2 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            Contact
          </h2>
          <span className="font-mono text-[11px] text-yellow-400 uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
            COMMS TERMINAL
          </span>
        </div>

        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          {contact.message}
        </p>

        <div className="p-4 rounded-lg bg-[#070e22] border-2 border-[#1c2754] space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 bg-yellow-400" />
              DIRECT FREQUENCY (EMAIL):
            </span>
            <div>
              {isRealEmail ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-mono font-bold text-yellow-300 hover:text-yellow-200 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none rounded transition-colors"
                >
                  {contact.email}
                </a>
              ) : (
                <span className="text-sm font-mono text-slate-500">
                  {contact.email}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#141f42]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 bg-cyan-400" />
              EXTERNAL CHANNELS:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {contact.links.map((link, index) =>
                isRealUrl(link.url) ? (
                  <a
                    key={index}
                    href={link.url}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#0f1738] border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold hover:bg-[#15204c] hover:text-cyan-200 underline focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none transition-colors"
                  >
                    <span>{link.label}:</span>
                    <span>{link.url}</span>
                  </a>
                ) : (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#0a1128] border border-[#172346] text-slate-500 font-mono text-xs"
                  >
                    <span>{link.label}:</span>
                    <span>{link.url}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
