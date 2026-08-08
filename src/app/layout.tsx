import './globals.css';
import { Figtree, Caprasimo } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-body' });
const caprasimo = Caprasimo({ subsets: ['latin'], weight: '400', variable: '--font-heading' });

export const metadata = {
  title: 'PROSPERA Intranet Dashboard',
  description: 'Dashboard de gestão para a Fábrica de E-books PROSPERA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${caprasimo.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow px-6 py-8 md:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
