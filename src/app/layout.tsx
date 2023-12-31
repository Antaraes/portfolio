import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AJM",
  description: "Generated by AJM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="h-full dark:bg-darkBackground bg-background">
          <Navbar />
          <div className="w-full h-auto ">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
