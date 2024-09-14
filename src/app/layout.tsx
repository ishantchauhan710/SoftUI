import type { Metadata } from "next";
import "./globals.css";
import { appFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SoftUI",
  description: "Neumorphism and Glassmorphism components for react and nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={appFont.className + " bg-background"}>{children}</body>
    </html>
  );
}
