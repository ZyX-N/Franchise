"use client";

import React from "react";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/outline";

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
      <div className="h-full w-5/6 lg:w-1/3 bg-white flex flex-col">
        <div className="flex items-center px-4">
          <h3 className="w-full text-black text-2xl font-medium py-4">ZORRO</h3>
          <button
            type="button"
            className="size-10 rounded-md hover:bg-gray-200 flex items-center justify-center absolute left-5 top-5"
            onClick={() => setOpen(false)}
          >
            <XCircleIcon className="text-white size-12" />
          </button>
        </div>

        <div className="border my-2"></div>

        <div className="text-black w-full flex flex-col overflow-y-auto divide-y pr-2 px-4">
          <li className="w-full py-4 px-2 list-none">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li className="w-full py-4 px-2 list-none">
            <Link onClick={() => setOpen(false)} href="/about">
              About
            </Link>
          </li>
          <li className="w-full py-4 px-2 list-none">
            <Link onClick={() => setOpen(false)} href="/franchise">
              All Brands
            </Link>
          </li>
          <li className="w-full py-4 px-2 list-none">
            <Link onClick={() => setOpen(false)} href="/contact">
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
