import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../providers/ThemeProvider";
import ThemeToggle from "../components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: keyof typeof siteConfig.mainTitle } }): Promise<Metadata> {
  const locale = params?.locale || "en";
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.mainTitle[locale],
      template: `%s | ${siteConfig.mainTitle[locale]}`,
    },
    description: siteConfig.mainDescription[locale],
    openGraph: {
      title: siteConfig.mainTitle[locale],
      description: siteConfig.mainDescription[locale],
      url: siteConfig.siteUrl,
      siteName: siteConfig.mainTitle[locale],
      images: [siteConfig.socialBanner],
      locale,
      type: "website",
    },
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: siteConfig.twitter.card,
      title: siteConfig.mainTitle[locale],
      description: siteConfig.mainDescription[locale],
      images: [siteConfig.socialBanner],
      creator: siteConfig.twitter.handle,
    },
  };
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full flex justify-end p-4">
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
