"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({
  setOpen,
  classes = "",
}: {
  setOpen: any;
  classes?: string;
}) => {
  return (
    <header
      className={`relative w-full h-16 sm:h-24 flex items-center justify-between px-6 ${
        classes || ""
      }`}
    >
      <Link href="/" className="block md:hidden h-full w-28">
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
        className="inline sm:hidden text-white font-semibold bg-transparent ml-auto"
        onClick={() => setOpen(true)}
      >
        <Bars3Icon className="size-10 text-white" />
      </button>

      <Link href="/" className="hidden sm:block h-[90%] w-96">
        <img src="/logo.png" alt="LOGO" className="object-contain size-full" />
      </Link>

      <ul className="hidden sm:flex gap-8 text-lg font-medium items-center pr-10">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
        <li className="">
          <Link href="/franchise">All Brands</Link>
        </li>
        <li className="">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
