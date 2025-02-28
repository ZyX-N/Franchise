"use client";
import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidenav from "../_components/Sidebar/Sidenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideNavOpen, setSideNavOpen] = useState<Boolean>(false);

  return (
    <main className="bg-gray-50">
      <Navbar setOpen={setSideNavOpen} classes="bg-[#040110] text-white" />

      <div
        className={`fixed top-0 size-full z-50 transition-all duration-500 ${
          sideNavOpen ? "left-0 opacity-100" : "left-full opacity-0"
        }`}
      >
        <Sidenav setOpen={setSideNavOpen} />
      </div>

      {children}
    </main>
  );
}
