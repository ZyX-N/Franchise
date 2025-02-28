import FranchiseCard from "@/app/_components/Card/Franchise-card";
import EnquiryForm from "@/app/_components/Form/Enquiry";

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
      <div className="px-4 lg:px-10 py-12 mx-auto">
        <div className="rounded-lg px-8 text-black mb-6 lg:mb-12">
          <div className="flex justify-center">
            <span className="gold-theme-heading">ENQUIRY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
            Contact Us
          </h2>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
