import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://tsatsarisg.github.io/my-portfolio";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "George Tsatsaris | Software Engineer",
    template: "%s | George Tsatsaris",
  },
  description:
    "Founding Software Engineer specializing in Backend Architecture, API Development, Node.js, TypeScript, and React. View my projects, skills, and experience.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "React",
    "API Development",
    "George Tsatsaris",
    "Athens",
    "Greece",
  ],
  authors: [{ name: "George Tsatsaris", url: BASE_URL }],
  creator: "George Tsatsaris",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "George Tsatsaris | Software Engineer",
    description:
      "Founding Software Engineer specializing in Backend Architecture, API Development, Node.js, TypeScript, and React.",
    url: BASE_URL,
    siteName: "George Tsatsaris Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "George Tsatsaris | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "George Tsatsaris | Software Engineer",
    description:
      "Founding Software Engineer specializing in Backend Architecture, API Development, Node.js, TypeScript, and React.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/my-portfolio/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "b02oG_Y0aXD0mQ8jmoJ3ss_QH5kcqKyOBaRQpigFM_A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
      >
        <ThemeProvider>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
