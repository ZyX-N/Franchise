"use client";

import React from "react";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface sideNavProps {
  setOpen: any;
}

const Sidenav: React.FC<sideNavProps> = ({ setOpen }) => {
  return (
    <div className="w-screen h-screen bg-transparent z-50 flex relative">
      <div
        className="h-full w-1/6 lg:w-2/3 bg-[rgba(0,0,0,0.6)]"
        onClick={() => setOpen(false)}
      ></div>
      <div className="h-full w-5/6 lg:w-1/3 text-white bg-[#040110] flex flex-col">
        <div className="flex justify-start items-center px-4">
          <Link href="/" className="block h-20 w-full py-4">
            <Image
              src="/logo.png"
              alt="LOGO"
              className="object-contain size-full"
              height={80}
              width={80}
            />
          </Link>
          <button
            type="button"
            className="size-10 rounded-md hover:scale-105 transition-all duration-100 flex items-center justify-center absolute left-5 top-5"
            onClick={() => setOpen(false)}
          >
            <XCircleIcon className="text-white size-12" />
          </button>
        </div>

        <div className="border border-gray-600 my-2"></div>

        <div className="w-full flex flex-col overflow-y-auto divide-y pr-2 px-4">
          <li className="hover:bg-[rgba(0,0,0,0.4)] w-full list-none">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="block px-2 py-4"
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-[rgba(0,0,0,0.4)] w-full list-none">
            <Link
              onClick={() => setOpen(false)}
              href="/about"
              className="block px-2 py-4"
            >
              About
            </Link>
          </li>
          <li className="hover:bg-[rgba(0,0,0,0.4)] w-full list-none">
            <Link
              onClick={() => setOpen(false)}
              href="/franchise"
              className="block px-2 py-4"
            >
              All Brands
            </Link>
          </li>
          <li className="hover:bg-[rgba(0,0,0,0.4)] w-full list-none">
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="block px-2 py-4"
            >
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
