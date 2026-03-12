import type {Metadata} from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoKurdish = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-kurdish',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'پێشبڕکێی ژیانی پێغەمبەر (د.خ)',
  description: 'ئەپڵیکەیشنێکی فێرکاری بۆ منداڵان دەربارەی ژیانی پێغەمبەر محەمەد (د.خ)',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ckb" dir="rtl" className={`${inter.variable} ${notoKurdish.variable}`}>
      <body className="font-kurdish antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
