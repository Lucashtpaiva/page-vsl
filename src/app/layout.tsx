import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Página VSL',
  description: 'Descubra como aumentar suas conversões com esta VSL!',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Página VSL',
    description: 'Descubra como aumentar suas conversões com esta VSL!',
    url: 'https://seusite.com',
    siteName: 'Minha VSL',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Thumbnail da VSL',
      },
    ],
    type: 'website',
  },
};

const inter = Inter({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
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
