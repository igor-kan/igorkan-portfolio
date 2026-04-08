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
  title: 'Igor Zakhidov - Software Engineer & Physics Student',
  description: 'Personal portfolio of Igor Zakhidov, a UofT student in Physics, Mathematics & Biochemistry building web apps, AI tools, and data pipelines.',
  keywords: ['Igor Zakhidov', 'software engineer', 'portfolio', 'web developer', 'Next.js', 'React', 'TypeScript', 'UofT', 'physics'],
  authors: [{ name: 'Igor Zakhidov' }],
  creator: 'Igor Zakhidov',
  publisher: 'Igor Zakhidov',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Igor Zakhidov',
  url: 'https://igorkan.com',
  sameAs: [
    'https://github.com/igor-kan',
    'https://www.linkedin.com/in/igor-zakhidov/',
  ],
  jobTitle: 'Software Engineer and Physics & Math Student at UofT',
  worksFor: {
    '@type': 'Organization',
    name: 'University of Toronto',
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