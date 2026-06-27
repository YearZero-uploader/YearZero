import type { Metadata } from "next";
import { Geist, Geist_Mono, Coda, Changa, Aldrich } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const CodaSans = Coda({
  weight: "400",
  variable: "--font-coda",
  subsets: ["latin"],
});
const ChangaSans = Changa({
  weight: "400",
  variable: "--font-changa",
  subsets: ["latin"],
});
const AldrichSans = Aldrich({
  weight: "400",
  variable: "--font-aldrich",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Year Zero",
  description: "JOIN THE RESISTANCE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${AldrichSans.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
