import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import Script from "next/script";
import { Metadata } from "next";
import PreResources from "@/lib/preresources";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}

      <PreResources />

      <body className={`${poppins.className} antialiased`}>
        <Drawer>
          {children}
          <Footer />
        </Drawer>
      </body>

      <Script src="https://link.msgsndr.com/js/form_embed.js" />
    </html>
  );
}
