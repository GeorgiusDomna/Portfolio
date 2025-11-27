import type { Metadata } from "next";
import ScrollToTop from '@/utils/scrollToTop';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { DM_Sans } from "next/font/google";
import "./globals.css";
import '@/styles/main.css';

const geistSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио Frontend Разработчик",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
