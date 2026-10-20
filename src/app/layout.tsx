import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arundra Signature Hotel | A Stay Beyond Expectations",
  description:
    "Discover refined comfort, exceptional hospitality, and memorable stays at Arundra Signature Hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
