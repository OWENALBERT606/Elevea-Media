import { FooterSection } from "@/components/footer-section";
import Footer from "@/components/media/footer";
import Header from "@/components/media/header";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
