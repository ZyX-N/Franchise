"use client";

import React, { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidenav from "../_components/Sidebar/Sidenav";

interface parentHomeWrapperProps {
  children: React.ReactNode;
}

const ParentHomeWrapper: React.FC<parentHomeWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <div className="size-full relative pb-10">
      <div className="w-full h-[60vh] sm:h-screen bg-banner text-white">
        <Navbar setOpen={setSideNavOpen} />

        <div
          className={`fixed top-0 size-full z-50 transition-all duration-500 ${
            sideNavOpen ? "left-0 opacity-100" : "left-full opacity-0"
          }`}
        >
          <Sidenav setOpen={setSideNavOpen} />
        </div>

        <section className="mx-auto w-full sm:w-2/3 text-center flex flex-col gap-3 sm:gap-6 mt-10 sm:mt-20 px-4 sm:px-0 z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to Restaurant Franchisee
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold sm:font-semibold">
            At Restaurant Franchisee, we help entrepreneurs and investors
            succeed in the restaurant industry through franchising. From site
            selection to daily operations and marketing, we provide the support,
            resources, and expertise needed to run a successful franchise.
            Whether you're new to business or an experienced restaurateur, our
            proven model ensures you have the tools and training to thrive.
          </h2>
        </section>
      </div>
      {children}
    </div>
  );
};

export default ParentHomeWrapper;
