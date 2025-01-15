import "./globals.scss";
import type { Metadata } from "next";
import { Lato, Sofia, Niconne } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const sofia = Sofia({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

const niconne = Niconne({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-niconne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akinde Pixels",
  description: "Making moments stand still, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${sofia.variable} ${niconne.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-YXJPDHKPCD" />

        <ReactQueryProvider>
          <NextUIProvider>
            <Navbar />
            {children}
            <Footer />
          </NextUIProvider>
        </ReactQueryProvider>
        <Toaster position="top-center" richColors duration={5000} />
      </body>
      <Script id="tawk-widget">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67859492af5bfec1dbeb051b/1ihgsonu4';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
        `}
      </Script>
    </html>
  );
}
