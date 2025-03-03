import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Head from "next/head";
import Script from "next/script";

const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});
export const metadata: Metadata = {
  title: "Restaurant Franchisee",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NunitoFont.variable}>
      <Head>
        <link rel="icon" href="/icon.png" />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16889881110"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16889881110');
        `}
        </Script>
      </Head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
