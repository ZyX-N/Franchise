"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FullScreenSlider({
  data = [],
  setOpen,
}: {
  data: Array<any>;
  setOpen: any;
}) {
  const [currentImg, setCurrentImg] = useState({
    index: 0,
    image: data[0].image,
  });

  return (
    <div className="size-full flex items-center justify-center bg-[rgba(0,0,0,0.9)]">
      <button
        type="button"
        className="h-full w-32 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
        onClick={() =>
          currentImg.index > 0
            ? setCurrentImg({
                index: currentImg.index - 1,
                image: data[currentImg.index - 1]?.image,
              })
            : setCurrentImg({
                index: data.length - 1,
                image: data[data.length - 1]?.image,
              })
        }
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

        <img
          src={currentImg?.image || "/"}
          alt="Brand"
          className="min-w-full h-full object-cover rounded-md border-2 border-white"
        />

        <div className="flex gap-4 items-center absolute bottom-6 left-1/2 -translate-x-1/2">
          {data.map((item, idx) => (
            <button
              type="button"
              className={`${
                idx === currentImg.index ? "bg-white" : "bg-transparent"
              } size-4 border-2 border-white rounded-full hover:bg-white`}
              onClick={() => setCurrentImg({ index: idx, image: data[idx]?.image })}
              key={item.image}
            ></button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="h-full w-32 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
        onClick={() =>
          currentImg.index < data.length - 1
            ? setCurrentImg({
                index: currentImg.index + 1,
                image: data[currentImg.index + 1]?.image,
              })
            : setCurrentImg({
                index: 0,
                image: data[0]?.image,
              })
        }
      >
        <ChevronRightIcon className="size-14 text-white" />
      </button>
    </div>
  );
}
