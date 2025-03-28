import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://api.leadconnectorhq.com" />
      <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />

      <body className={`${poppins.className} relative antialiased`}>
        <Drawer>
          {children}
          <Footer />
        </Drawer>
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
