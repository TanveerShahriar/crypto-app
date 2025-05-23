import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-10 w-[1194px] left-1/2 transform -translate-x-1/2 z-50 p-5 bg-[rgba(255,255,255,0.06)] backdrop-blur-[20px] flex justify-between items-center text-white shadow-lg w-[80%] rounded-full">
          <div className="ml-8">
            <Image 
                aria-hidden
                src="/images/Logo.png"
                alt="Logo icon"
                width={36}
                height={50}
              />
          </div>
          <nav className="flex space-x-20 flex-grow justify-center">
            <Link href="/" className="hover:text-gray-300 font-inter font-normal text-2xl leading-none tracking-normal text-center">Home</Link>
            <a href="#" className="hover:text-gray-300 font-inter font-normal text-2xl leading-none tracking-normal text-center">Features</a>
            <a href="#" className="hover:text-gray-300 font-inter font-normal text-2xl leading-none tracking-normal text-center">Career</a>
          </nav>
          <div>
            <Link href="/register">
              <button className="px-12 py-4 text-black text-xl font-bold bg-[#aeaeae] rounded-[30px] hover:bg-[#8c8c8c]">
                Register
              </button>
            </Link>
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
