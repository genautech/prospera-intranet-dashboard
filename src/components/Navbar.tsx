import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          PROSPERA Intranet
        </Link>
        <div>
          {/* Futuros links de navegação globais */}
        </div>
      </div>
    </nav>
  );
}
