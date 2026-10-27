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
    <section id="contact" className="py-8 scroll-mt-16">
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">Contact</h2>
      <div className="p-5 rounded border border-zinc-800 bg-zinc-900/50 space-y-4">
        <p className="text-sm text-zinc-300 leading-relaxed">
          {contact.message}
        </p>

        <div className="space-y-1">
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
            Email
          </span>
          <div>
            {isRealEmail ? (
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium text-zinc-100 underline hover:text-white"
              >
                {contact.email}
              </a>
            ) : (
              <span className="text-sm text-zinc-400">
                {contact.email}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-1 pt-2">
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
            Links
          </span>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {contact.links.map((link, index) =>
              isRealUrl(link.url) ? (
                <a
                  key={index}
                  href={link.url}
                  className="underline hover:text-white"
                >
                  {link.label}: {link.url}
                </a>
              ) : (
                <span key={index} className="text-zinc-400">
                  {link.label}: {link.url}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
