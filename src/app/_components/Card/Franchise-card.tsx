import Image from "next/image";

export default function FranchiseCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  console.log(title);

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
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
