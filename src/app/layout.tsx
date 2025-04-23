import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetaData } from "../config/siteMetaData"; // Import site metadata
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    locale: siteMetaData.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetaData.author.linkedin,
    creator: siteMetaData.author.github,
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/apple-touch-icon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
