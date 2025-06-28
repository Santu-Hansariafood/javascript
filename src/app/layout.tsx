import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn JavaScript Online | MyEdu",
  description: "Interactive JavaScript tutorials and Q&A. Learn by doing, track your progress, and build skills fast with MyEdu.",
  keywords: ["JavaScript", "Learn JavaScript", "Frontend tutorials", "React", "Web Development", "MyEdu"],
  authors: [{ name: "MyEdu Team", url: "https://yourdomain.com" }],
  creator: "MyEdu",
  openGraph: {
    title: "Learn JavaScript Online | MyEdu",
    description: "Interactive tutorials and Q&A built for developers.",
    url: "https://yourdomain.com",
    siteName: "MyEdu",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            {/* Ensure content inside has same padding as header/footer */}
            <div className="max-w-screen-xl mx-auto px-6">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
