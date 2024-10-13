import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/utils/Provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
// import Spinner from "@/components/Spinner";
// import { Suspense } from "react";

export const metadata: Metadata = {
  title: "TecQue",
  description: "A platform for tec share knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="min-h-screen flex flex-col justify-between">
          <Provider>
            <Navbar />
            {/* <Suspense fallback={<Spinner />}>{children}</Suspense> */}
            {children}
            <Toaster />
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  );
}
