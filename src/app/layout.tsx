import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/utils/Provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
// import { Suspense } from "react";

export const metadata: Metadata = {
  title: "TecQue",
  description: "A platform for tech knowledge sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-full">
        <div className="flex flex-col h-screen bg-gray-100">
          <Provider>
            <Navbar />
            <main className="flex-1 p-6">
              {/* <Suspense fallback={<Spinner />}>{children}</Suspense> */}
              {children}
            </main>
            <Footer />
          </Provider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
