interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/90 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#intro" className="font-semibold text-zinc-100 hover:text-white">
          {name}
        </a>
        <nav className="flex items-center gap-4 text-sm text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#resume" className="hover:text-zinc-100 transition-colors">
            Résumé
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
