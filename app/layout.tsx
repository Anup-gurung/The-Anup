import type { Metadata } from 'next';
import { Inter, Archivo_Black, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/smooth-scroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'ANUP GURUNG — Portfolio',
  description: 'Full-Stack Developer, Technopreneur, and Bhutan\'s Tech Pioneer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} ${mono.variable}`}>
      <body suppressHydrationWarning className="bg-black text-white selection:bg-white selection:text-black antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
