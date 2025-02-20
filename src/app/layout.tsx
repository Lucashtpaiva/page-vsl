import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Página VSL',
};

const inter = Inter({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-black-300 text-white-500 antialiased">
        {children}
      </body>
    </html>
  );
}
