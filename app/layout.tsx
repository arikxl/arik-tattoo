import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["hebrew", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "Arik Tattoo | סטודיו לקעקועים",
  description: "סטודיו קעקועים מקצועי של אריק אלכסנדרוב. מתמחה בעיצובים אישיים, קאברים וכל סגנונות הקעקוע.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 min-h-full text-white `}
      >


        <main className='mx-auto min-h-screen overflow-x-hidden'>
        {children}
        </main>

        <SocialBar />

        <Footer />
      </body>
    </html>
  );
}
