import Image from "next/image";

export default function CarouselCard({
  image,
  title,
}: {
  image: any;
  title: string;
}) {

  return (
    <div className="min-w-48 sm:min-w-[280px] rounded-md p-1 border-[1px] border-[#bf9877] text-[#bf9877]">
      <div className="flex flex-col justify-center items-center">
      <div className="w-full h-3/4">
        <Image src={image} alt={title} width={800} height={800} className="rounded-md sm:min-h-[280px] object-contain" />
      </div>
      <span className="mt-3 font-semibold tracking-wide">{title}</span>
      </div>
    </div>
  );
}
