import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PA Hub | Modern Discord Bots',
  description: 'Premium Discord software for community management and infrastructure.',
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
