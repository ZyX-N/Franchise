import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-xl bg-[#040110] text-white">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-start md:justify-between w-full py-8 md:py-10 pl-5 md:pl-10 pr-5 md:pr-20">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <Link href="/" className="block h-56 w-96">
            <Image
              src="/logo.png"
              alt="LOGO"
              className="object-contain size-full"
              height={400}
              width={400}
            />
          </Link>
          {/* <p className="mt-6 text-center md:text-left md:pl-10">
            Feel free to reach out if you want collaborate with us, or simply
            chat.
          </p> */}
        </div>

        <div className="flex flex-col w-full md:w-1/2 items-start">
          <h6 className="text-5xl font-bold">
            Contact <span className="text-[#eea76d]">Us</span>
          </h6>
          <p className="mt-2 text-left text-base">
            Welcome to Restaurant Franchisee! Our dedicated team of
            professionals offers a wide range of services to support you in
            setting up, expanding, and enhancing your restaurant franchise
            business.
          </p>

          <div className="flex gap-2 md:gap-4 w-full mt-6">
            <div className="flex flex-col w-full md:w-1/2">
              <h6 className="text-2xl font-bold text-[#eea76d]">Address</h6>
              <p className="text-sm md:text-base">
                Ground Floor, 54, Tolstoy Ln, Atul Grove Road, Janpath,
                Connaught Place, New Delhi, Delhi 110001
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <h6 className="text-2xl font-bold text-[#eea76d]">Enquiry</h6>
              <p className="text-sm md:text-base">
                Email : restaurantfranchisee3@gmail.com
              </p>
              <p className="text-sm md:text-base">Phone : +91 7004348690</p>
            </div>
          </div>
        </div>
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
