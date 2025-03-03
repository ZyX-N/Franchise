import Link from "next/link";
import SnapShotCard from "./_components/Card/Snap-shot-card";
import ParentHomeWrapper from "./_wrapper/ParentHomeWrapper";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
  ArrowTrendingUpIcon,
  GlobeAmericasIcon,
  PercentBadgeIcon,
  HomeIcon,
  ScaleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import EnquiryForm from "./_components/Form/Enquiry";
import Slider from "./_components/Carousel/slider";
import Brands from "@/utils/data/Brands";

export default function Home() {
  const iconStrokeWidth = 0.5;
  const data = {
    Head_Office_Located: {
      name: "Delhi",
      icon: <MapPinIcon strokeWidth={iconStrokeWidth} />,
    },
    Training_and_Support: {
      name: "Yes",
      icon: <QuestionMarkCircleIcon strokeWidth={iconStrokeWidth} />,
    },
    Payback_Period: {
      name: "1 - 1.5 Years",
      icon: <ArrowTrendingUpIcon strokeWidth={iconStrokeWidth} />,
    },
    Expansion_Locations: {
      name: "India",
      icon: <GlobeAmericasIcon strokeWidth={iconStrokeWidth} />,
    },
    Monthly_Royalties: {
      name: "7%",
      icon: <PercentBadgeIcon strokeWidth={iconStrokeWidth} />,
    },
    Area_Requirement: {
      name: "7000 Square Feet",
      icon: <HomeIcon strokeWidth={iconStrokeWidth} />,
    },
    Agreement_Terms: {
      name: "9 Years",
      icon: <ScaleIcon strokeWidth={iconStrokeWidth} />,
    },
    Capital_Investment: {
      name: "4 Crore",
      icon: <BriefcaseIcon strokeWidth={iconStrokeWidth} />,
    },
  };

  const sliderData: Array<{ name: string; image: any }> = Brands;

  return (
    <div className="relative">
      {/* <div className="bg-[#212529]"> */}
      <ParentHomeWrapper>
        <section className="pt-16">
          <div className="rounded-lg px-8 text-black">
            <div className="flex justify-center">
              <span className="gold-theme-heading">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-center tracking-wider mt-6 mb-10 font-serif">
              Franchise Snapshot
            </h2>

            <div className="custom-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mx-0 sm:mx-auto">
              {Object.entries(data).map(([key, value]) => {
                return <SnapShotCard data={value} title={key} key={key} />;
              })}
            </div>

            <p className="mt-12 text-sm text-center text-gray-500">
              <strong>Note:</strong> The above figures are approximate and
              intended to give a rough idea about the franchise model and its
              ROI.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="">
          <div className="rounded-lg px-8 text-black mb-6 sm:mb-14">
            <div className="flex justify-center">
              <span className="gold-theme-heading">DESCRIPTION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
              About Us
            </h2>
          </div>

          <div className="h-[70vh] sm:h-[80vh] bg-banner-2 w-full flex justify-center items-center">
            <div className="border border-[#bf9877] p-5 bg-transparent flex justify-center items-center w-full sm:w-1/2">
              <div className="size-full flex justify-center items-center bg-white text-black">
                <div className="border border-[#bf9877] p-8 bg-transparent flex flex-col justify-center items-center w-full">
                  <p className="text-center">
                    <strong>Restaurant Franchisee</strong> was founded with a
                    clear goal: to make restaurant ownership more accessible to
                    ambitious individuals looking to build a thriving business
                    with reduced risk. We recognize the challenges and
                    complexities of the restaurant industry, which is why we
                    developed a franchise model that simplifies the process.
                    Through our model, we provide aspiring restaurant owners
                    with a proven path to success, offering expert guidance,
                    comprehensive training, and a network of valuable resources
                    that ensures continuous support and growth for every
                    franchisee.
                  </p>

                  <Link
                    href="/about"
                    className="inline-flex justify-center items-center rounded-3xl bg-[#bf9877] mt-5 px-8 py-3 text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="divider"></div>

        <section className="">
          <div className="rounded-lg px-8 text-black mb-6 lg:mb-14">
            <div className="flex justify-center">
              <span className="gold-theme-heading">ENQUIRY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
              Contact Us
            </h2>
          </div>
          <div className="px-4 sm:px-0">
            <EnquiryForm />
          </div>
        </section> */}

        <div className="divider"></div>

        <section className="">
          <div className="rounded-lg px-8 text-black mb-6 lg:mb-12">
            <div className="flex justify-center">
              <span className="gold-theme-heading">BRANDS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
              Related Products
            </h2>
          </div>

          <Slider data={sliderData} />
        </section>

        <div className="divider"></div>

        <section className="">
          <div className="rounded-lg px-8 text-black mb-6 lg:mb-14">
            <div className="flex justify-center">
              <span className="gold-theme-heading">ENQUIRY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
              Contact Us
            </h2>
          </div>
          <div className="px-4 sm:px-0">
            <EnquiryForm />
          </div>
        </section>
      </ParentHomeWrapper>
    </div>
  );
}
