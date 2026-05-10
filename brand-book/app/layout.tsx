import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'ANUP | Visual Identity System',
  description: 'The official brand book and visual identity system for ANUP - Creative Technologist & Full Stack Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="bg-[#050505] text-white font-inter selection:bg-[#06B6D4] selection:text-white">
        {children}
      </body>
    </html>
  );
}
