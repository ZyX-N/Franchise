"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import EnquiryForm from "../Form/Enquiry";

export default function ContactPopUp({ setOpen }: { setOpen: any }) {
  return (
    <div className="size-full flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
      <div className="w-11/12 sm:w-3/4 h-3/4 sm:h-[90%] overflow-x-hidden  flex flex-col items-center justify-center bg-white rounded-lg shadow-lg shadow-gray-800 py-4">
        <div className="relative flex flex-col w-full h-full gap-6 custom-scrollbar overflow-y-auto">
          <button
            type="button"
            className="rounded-full border-2 border-[#bf9877] size-8 flex justify-center items-center absolute right-4 top-1 hover:scale-105 transition-all duration-300 ease-in-out z-20"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon
              className="size-5 text-[#bf9877]"
              strokeWidth={2}
            />
          </button>
          <div className="flex justify-center mt-2">
            <h3 className="gold-theme-heading">ENQUIRY</h3>
          </div>
          <div className="size-full">
            <EnquiryForm screen="pop-up" onClose={()=>setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
