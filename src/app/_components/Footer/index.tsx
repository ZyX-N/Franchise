import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-xl bg-[#040110] text-white">
      {/* // <footer className="flex flex-col w-full text-xl bg-[#bf9877] text-white"> */}
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-start md:justify-between w-full py-8 md:py-16 pl-5 md:pl-10 pr-10 md:pr-20">
        <div className="flex flex-col w-full md:w-1/3">
          <Link href="/" className="block h-20 w-full">
            <Image
              src="/logo.png"
              alt="LOGO"
              className="object-contain size-full"
              height={80}
              width={80}
            />
          </Link>
          <p className="mt-6 text-center md:text-left md:pl-10">
            Feel free to reach out if you want collaborate with us, or simply
            chat.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 items-center">
          <h6 className="text-2xl">Service</h6>
          <ul className="flex flex-col gap-3 mt-3 text-gray-400 text-lg">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/franchise">All Brands</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full md:w-1/3 items-center">
          <h6 className="text-2xl">Company</h6>
          <ul className="flex flex-col gap-3 mt-3 text-gray-400 text-lg">
            <li>
              <Link href="/">Comp One</Link>
            </li>
            <li>
              <Link href="/">Comp One</Link>
            </li>
            <li>
              <Link href="/">Comp One</Link>
            </li>
            <li>
              <Link href="/">Comp One</Link>
            </li>
            <li>
              <Link href="/">Comp One</Link>
            </li>
          </ul>
        </div>

        {/* <div className="flex flex-col w-full md:w-1/4 items-center">
          <h6 className="text-2xl">Find it fast</h6>
          <ul className="flex flex-col gap-3 mt-3 text-gray-400">
            <li>
              <Link href="/">Link One</Link>
            </li>
            <li>
              <Link href="/">Link One</Link>
            </li>
            <li>
              <Link href="/">Link One</Link>
            </li>
            <li>
              <Link href="/">Link One</Link>
            </li>
            <li>
              <Link href="/">Link One</Link>
            </li>
          </ul>
        </div> */}
      </div>

      <div className="border-t flex justify-center items-center py-3">
        <p className="text-gray-400 text-xl">
          &copy; 2025{" "}
          <span className="font-semibold text-gray-200">
            Resturant Franchisee
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
