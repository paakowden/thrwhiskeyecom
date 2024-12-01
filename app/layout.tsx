import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Poppins as FontSans } from "next/font/google";
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Whiskey",
  description: "Africa's Finest Whiskey",
  icons: { icon: "/assets/icons/logo.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}