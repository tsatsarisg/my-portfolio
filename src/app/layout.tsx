import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { ScrollToTop } from "@/ScrollToTop";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "George's Portfolio",
  description:
    "Full Stack Software Engineer – Projects, Skills, and Contact Info.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <ScrollToTop />
          {children}
        </Theme>
      </body>
    </html>
  );
}
