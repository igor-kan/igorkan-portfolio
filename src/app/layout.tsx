import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Igor Kan - Software Engineer",
  description: "Personal portfolio of Igor Kan, a software engineer specializing in building beautiful and functional web applications.",
  keywords: ["Igor Kan", "software engineer", "portfolio", "web developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Igor Kan" }],
  creator: "Igor Kan",
  publisher: "Igor Kan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
