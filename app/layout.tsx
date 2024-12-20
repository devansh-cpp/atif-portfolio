import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atif Portfolio",
  description: "Created by DevXLoper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
        <div className="absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#d0e2ec_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] opacity-10 bg-[size:2rem_2rem]"></div>
        <Navbar/>
        <div className="mx-auto">

        {children}
        </div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
