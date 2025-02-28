import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});
export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NunitoFont.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
