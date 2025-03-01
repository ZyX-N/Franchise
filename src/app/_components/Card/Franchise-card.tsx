"use client";
import Image from "next/image";
import { useState } from "react";
import FullScreenSlider from "../Modal/Full-Screen-Slider";

export default function FranchiseCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="p-2 border border-[#bf9877] rounded-md">
      <div className="h-full flex flex-col items-center text-center">
        <Image
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={image}
          width={400}
          height={400}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {title}
          </h2>
          <div className="w-full flex justify-center mt-2">
            <button
              type="button"
              className="bg-[#bf9877] text-white rounded-md font-medium w-full py-2 hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => setOpen(true)}
            >
              View
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed size-full top-0 left-0 z-50">
        <FullScreenSlider
          data={[
            {
              image:
                "https://www.brandsandbranches.com/upload/gallery/main/banner-91725464707.jpg",
            },
            {
              image:
                "https://www.brandsandbranches.com/upload/gallery/main/banner-61725464707.jpg",
            },
            {
              image:
                "https://www.brandsandbranches.com/upload/gallery/main/banner-31725464707.jpg",
            },
          ]}
          setOpen={setOpen}
        />
        </div>
      )}
    </div>
  );
}
