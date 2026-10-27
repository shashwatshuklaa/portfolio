interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 py-6">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 {name}. All rights reserved.</p>
        <a href="#intro" className="hover:text-zinc-300 transition-colors">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
