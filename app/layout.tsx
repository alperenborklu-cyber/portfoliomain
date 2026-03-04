import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Font ayarları
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Alperen | Visual Artist',
  description: 'Alperen Börklü - Visual Artist Portfolio',
  icons: {
    icon: '/assets/mezuniyet.jpg', // Kendi public/assets klasörüne koyduğun resim
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Siyah tema varsayımıyla bg-zinc-950 text-white ekliyoruz */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-950 text-white antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
           {/* Ana sayfa içeriği buraya gelecek */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}