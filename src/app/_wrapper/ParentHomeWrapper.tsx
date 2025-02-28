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
    <div className="size-full relative">
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
          <h1 className="text-3xl sm:text-5xl font-bold">
            ZORRO - The Luxury Night Club Franchise
          </h1>
          <h2 className="text-lg sm:text-2xl font-medium sm:font-semibold">
            Delhi & especially Gurgaon is fast becoming a truly cosmopolitan
            city with an amalgamation of young entrepreneurs, corporates,
            homemakers, etc from various walks of life. They are well-traveled
            and well-informed about the best in terms of dining & night-out
            trends. This globetrotting clientele is discerning and wants the
            best in food, cocktails, service & overall experience.
          </h2>
        </section>
      </div>
      {children}
    </div>
  );
};

export default ParentHomeWrapper;
