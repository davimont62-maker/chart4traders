import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Chart4Traders | Sierra Chart Templates and Trading Tools",
    template: "%s | Chart4Traders"
  },
  description:
    "Professional Sierra Chart templates, chartbooks, PDF guides, and structured orderflow trading resources.",
  metadataBase: new URL("https://chart4traders.com"),
  openGraph: {
    title: "Chart4Traders",
    description:
      "Sierra Chart templates, chartbooks, PDF guides, and trading education products.",
    type: "website",
    url: "https://chart4traders.com/en"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
