import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
// import FooterBanner from "@/components/Footer";
const inter = Rethink_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Elevea Media - Elevate Your Brand",
  description: "Elevea Media is a full-service digital marketing agency dedicated to elevating your brand through innovative strategies, creative design, and cutting-edge technology. Our mission is to help businesses thrive in the digital landscape by delivering tailored solutions that drive growth and engagement.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
