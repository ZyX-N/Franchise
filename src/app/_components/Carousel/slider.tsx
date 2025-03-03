"use client";

import { useEffect, useRef } from "react";
import CarouselCard from "../Card/Carousel-card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Slider({
  data,
}: {
  data: Array<{ name: string; image: any }>;
}) {
  const scrollBox = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (side: string) => {
    if (scrollBox && scrollBox.current) {
      const scrollAmount = 300;
      if (side === "right") {
        scrollBox.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (side === "left") {
        scrollBox.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  function normalScroll() {
    if (scrollBox && scrollBox.current) {
      const scrollAmount = 300;
      scrollBox.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        if (scrollBox.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollBox.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollBox.current.scrollTo({ left: 0, behavior: "instant" });
          }
        }
      }, 1000);
    }
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     normalScroll();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="relative flex p-1 w-[90%] md:w-[800px] lg:w-[1200px] mx-auto">
      <button
        type="button"
        className="absolute -left-16 top-0 h-full px-4 hidden sm:flex items-center justify-center outline-none"
        onClick={() => scrollHandler("left")}
      >
        <ChevronLeftIcon className="size-14 text-[#bf9877]" strokeWidth={1} />
      </button>

      <div
        className="w-full flex items-center gap-5 overflow-x-auto scroll-smooth no-scrollbar flex-nowrap"
        ref={scrollBox}
      >
        {data.map(({ name, image }) => (
          <CarouselCard key={name} image={image} title={name} />
        ))}
      </div>

      <button
        type="button"
        className="absolute -right-16 top-0 h-full px-4 hidden sm:flex items-center justify-center outline-none"
        onClick={() => scrollHandler("right")}
      >
        <ChevronRightIcon className="size-14 text-[#bf9877]" strokeWidth={1} />
      </button>
    </div>
  );
}
5;
