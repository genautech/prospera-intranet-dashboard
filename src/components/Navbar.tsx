import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-ink text-bg px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="font-heading text-xl tracking-wide text-bg">
          PROSPERA <span className="text-accent">Intranet</span>
        </Link>
        <div>
          {/* Futuros links de navegação globais */}
        </div>
      </div>
    </nav>
  );
}
