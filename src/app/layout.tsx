import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "../components/header/ HeaderTop";
import HeaderMain from "../components/header/HeaderMain";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "@/components/header/MobNavbar";

import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" type="image/png" />
          <title>Shopping-Hub</title>
          <meta name="description" content="This is the E-Commerce Shopping website" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <HeaderTop />
          <HeaderMain />
          <Navbar />
          <MobNavbar />
          <CartProvider>
            {children}
          </CartProvider>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
