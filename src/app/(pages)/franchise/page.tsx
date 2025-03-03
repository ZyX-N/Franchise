import FranchiseCard from "@/app/_components/Card/Franchise-card";
import Brands from "@/utils/data/Brands";

export default function Home() {
  const franchiseData: Array<{ name: string; image: string }> = Brands;

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
