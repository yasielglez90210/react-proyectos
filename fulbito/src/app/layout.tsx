import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Menu from '@/components/Menu';
import { ThemeProvider } from '@/components/ThemeProvider';
import Link from 'next/link';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fulbito',
  description: 'Generated by create next app',
};

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'container min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <main className="container m-auto flex min-h-screen flex-col">
            <header className="flex w-full items-center justify-between pb-14 pt-5">
              <Link href="/">
                <h1 className="text-2xl font-bold">Fulbito</h1>
              </Link>
              <Menu />
            </header>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}