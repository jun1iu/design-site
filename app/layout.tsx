import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurum — Independent Creative Studio",
  description: "Aurum is a creative partner for brands that would rather move culture than follow it.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
