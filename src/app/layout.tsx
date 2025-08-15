import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my CodeBase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className={`${manrope.className} h-full`}>{children}</body>
    </html>
  );
}
