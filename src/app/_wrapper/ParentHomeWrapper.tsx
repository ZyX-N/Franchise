"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import Sidenav from "../_components/Sidebar/Sidenav";
import ContactPopUp from "../_components/Modal/Contact-Pop-Up";

interface parentHomeWrapperProps {
  children: React.ReactNode;
}

const ParentHomeWrapper: React.FC<parentHomeWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContactPopupOpen(true);
    }, 5000);
  }, []);

  return (
    <div className="size-full relative pb-10">
      {contactPopupOpen && (
        <div className="fixed size-full top-0 left-0 z-50">
          <ContactPopUp setOpen={setContactPopupOpen} />
        </div>
      )}
      <div className="w-full h-[60vh] sm:h-screen bg-banner text-white overflow-hidden">
        <Navbar setOpen={setSideNavOpen} />

        <div
          className={`fixed top-0 size-full z-50 transition-all duration-500 ${
            sideNavOpen ? "left-0 opacity-100" : "left-full opacity-0"
          }`}
        >
          <Sidenav setOpen={setSideNavOpen} />
        </div>

        <section className="mx-auto w-full sm:h-[calc(100%-200px)] sm:w-2/3 text-center gap-3 sm:gap-6 px-4 sm:px-0 z-10 flex flex-col sm:items-center sm:justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Welcome to Restaurant Franchisee1
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
