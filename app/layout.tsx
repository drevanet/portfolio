import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "DREVANET — Digital Experiences That Move Brands", template: "%s | DREVANET" },
  description: "DREVANET is a digital agency building high-performance websites, e-commerce experiences, and creative digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}