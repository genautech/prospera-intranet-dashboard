import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PROSPERA Intranet Dashboard',
  description: 'Dashboard de gestão para a Fábrica de E-books PROSPERA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
