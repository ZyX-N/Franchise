"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import EnquiryForm from "../Form/Enquiry";

export default function ContactPopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className="size-full flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="w-4/5 sm:w-3/4 h-[90%] overflow-x-hidden relative flex flex-col items-center justify-center bg-white overflow-y-auto pt-48 sm:pt-14 rounded-lg custom-scrollbar shadow-lg shadow-gray-800">
        <button
          type="button"
          className="rounded-md size-8 flex justify-center items-center absolute right-2 top-2  hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => setOpen(false)}
        >
          <XMarkIcon className="size-5 text-gray-700" />
        </button>
        <div className="flex justify-center mt-24 sm:mt-0">
          <span className="gold-theme-heading">ENQUIRY</span>
        </div>
        <EnquiryForm screen="pop-up" />
      </div>
    </div>
  );
}
