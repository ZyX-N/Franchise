"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function FullScreenSlider({
  data = [],
  setOpen,
}: {
  data: Array<any>;
  setOpen: any;
}) {
  return (
    <div className="size-full flex items-center justify-center bg-[rgba(0,0,0,0.9)]">
      <button
        type="button"
        className="h-full w-32 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
      >
        <ChevronLeftIcon className="size-14 text-white" />
      </button>

      <div className="w-full h-[90%] overflow-y-hidden overflow-x-auto relative flex items-center no-scrollbar bg-[rgba(0,0,0,0.8)]">
        <button
          type="button"
          className="rounded-md size-14 flex justify-center items-center absolute right-2 top-2 bg-[rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300 ease-in-out border-2 border-white"
          onClick={() => setOpen(false)}
        >
          <XMarkIcon className="size-8 text-white" />
        </button>
        {data?.map(({ image }) => (
          <img
            key={image}
            src={image}
            alt="Brand"
            className="min-w-full h-full object-cover rounded-md border-2 border-white"
          />
        ))}
      </div>

      <button
        type="button"
        className="h-full w-32 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
      >
        <ChevronRightIcon className="size-14 text-white" />
      </button>
    </div>
  );
}
