import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import ClientLayout from './client-layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Igor Kan - Software Engineer',
  description: 'Personal portfolio of Igor Kan, a software engineer specializing in building beautiful and functional web applications.',
  keywords: ['Igor Kan', 'software engineer', 'portfolio', 'web developer', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Igor Kan' }],
  creator: 'Igor Kan',
  publisher: 'Igor Kan',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Igor Kan',
  url: 'https://igorkan.com', // Replace with your domain
  sameAs: [
    'https://github.com/igorkan', // Replace with your github
    'https://linkedin.com/in/igorkan', // Replace with your linkedin
  ],
  jobTitle: 'Software Engineer and Physics Researcher',
  worksFor: {
    '@type': 'Organization',
    name: 'University of Physics',
  },
};

import { Analytics } from '@/components/Analytics';

import Konami from '@/components/Konami';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Providers>
          <Analytics />
          <Konami />
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}