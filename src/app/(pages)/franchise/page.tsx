import FranchiseCard from "@/app/_components/Card/Franchise-card";

export default function Home() {
  const franchiseData: Array<{ name: string; image: string }> = [
    {
      name: "Bellgio",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1715925702.jpg",
    },
    {
      name: "Avatar",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1715924326.jpg",
    },
    {
      name: "Banter",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1699087680.jpg",
    },
    {
      name: "Dearie",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1697472569.png",
    },
    {
      name: "Birch",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1697443050.png",
    },
    {
      name: "Bardos La Cita",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1697439492.png",
    },
    {
      name: "Kipos",
      image:
        "https://www.brandsandbranches.com/upload/franchise/logo/logo-1697432180.png",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="px-10 pt-12 pb-20 mx-auto">
        <div className="rounded-lg px-8 text-black mb-10 sm:mb-12">
          <div className="flex justify-center">
            <span className="gold-theme-heading">FRANCHISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
            All Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -m-4 gap-8 sm:gap-4">
          {franchiseData.map((item) => (
            <FranchiseCard
              key={item.name}
              image={item.image}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
