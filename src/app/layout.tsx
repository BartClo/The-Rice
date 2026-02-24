import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['800', '900'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Rice | Street Food Coreano en Rancagua',
  description: 'El street food coreano que Rancagua esperaba. Tteokbokki, Korean Fried Chicken, Corndogs y más.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${outfit.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
