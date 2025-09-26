import type { Metadata } from 'next';
import { Raleway, Roboto_Mono } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '@/app/globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  variable: '--font-raleway',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['monospace'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Zero Mori',
  description: 'Writer, Maker, Developer, Improviser, Hobby Collector',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us">
      <body
        className={`
          ${raleway.className}
          ${robotoMono.className}
          antialiased
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
