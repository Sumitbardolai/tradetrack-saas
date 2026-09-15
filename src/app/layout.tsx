import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'TradeTrack - Trading Journal & Performance Analytics',
  description: 'The intelligent trading journal that helps you understand your performance, eliminate repeated mistakes, and build a consistent trading process.',
  keywords: 'trading journal, performance analytics, trading psychology, AI insights, trader tools',
  authors: [{ name: 'TradeTrack Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tradetrack.app',
    siteName: 'TradeTrack',
    title: 'TradeTrack - Trading Journal & Performance Analytics',
    description: 'Journal every trade. Analyze performance. Improve your edge.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
