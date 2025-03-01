import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full px-4 lg:px-10 pb-20 pt-12">
      <div className="rounded-lg px-8 text-black mb-0 lg:mb-6">
        <div className="flex justify-center">
          <span className="gold-theme-heading">DESCRIPTION</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium text-center tracking-wider mt-6 font-serif">
          About Us
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full py-6">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center px-2 lg:px-6">
          <div className="p-1 border rounded-md border-gray-900">
            <Image
              src={
                "https://www.brandsandbranches.com/upload/gallery/main/banner-131725465251.jpg"
              }
              alt="ZORRO"
              width={400}
              height={400}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-12">
          <p className="text-lg">
            <strong>Restaurant Franchisee</strong> was founded with a clear
            goal: to make restaurant ownership more accessible to ambitious
            individuals looking to build a thriving business with reduced risk.
            We recognize the challenges and complexities of the restaurant
            industry, which is why we developed a franchise model that
            simplifies the process. Through our model, we provide aspiring
            restaurant owners with a proven path to success, offering expert
            guidance, comprehensive training, and a network of valuable
            resources that ensures continuous support and growth for every
            franchisee.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 w-full py-6">
        <div className="w-full lg:w-1/2 px-2 lg:px-6">
          <p className="text-lg text-justify lg:text-right">
            <strong>At Restaurant Franchisee</strong> <br />
            We take pride in helping you achieve your dream of owning a
            successful restaurant. We provide a clear, guided path to restaurant
            ownership, ensuring you have everything you need to create a
            thriving business. Your success is our success. Let's build your
            restaurant business together. Reach out today to learn more about
            how you can join the Restaurant Franchisee family and start your
            journey toward restaurant ownership!
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-2 lg:px-12">
          <div className="p-1 border rounded-md border-gray-900">
            <Image
              src={
                "https://www.brandsandbranches.com/upload/gallery/main/banner-61725464707.jpg"
              }
              alt="ZORRO"
              width={400}
              height={400}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full py-6">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center px-2 lg:px-6">
          <div className="p-1 border rounded-md border-gray-900">
            <Image
              src={
                "https://www.brandsandbranches.com/upload/gallery/main/banner-31725464707.jpg"
              }
              alt="ZORRO"
              width={400}
              height={400}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-12">
          <p className="text-lg">
          <strong>Our mission</strong> is to empower aspiring entrepreneurs
            and seasoned business owners to achieve success in the restaurant
            industry by offering a simplified, supportive, and proven franchise
            model. We are dedicated to making restaurant ownership accessible,
            providing our franchisees with expert guidance, comprehensive
            training, and continuous operational support. Our goal is to help
            you build a thriving, profitable restaurant business while
            minimizing risk, so you can focus on delivering exceptional
            experiences to your customers. We strive to create a community of
            successful franchise owners, all working together to grow and
            succeed.
          </p>
        </div>
      </div>
{/* 
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 w-full py-6">
        <div className="w-full lg:w-1/2 px-2 lg:px-6">
          <p className="text-lg text-justify lg:text-right">
            <strong>The Food - World Cuisine</strong> <br />
            The food menu has a mix of cuisines & dishes that will satisfy the
            palate of the well travelled guests. The American & Italian section
            of the food menu has best of wholesome burgers & sumptuous steaks,
            thin crust pizzas and delectable pastas
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-2 lg:px-12">
          <div className="p-1 border rounded-md border-gray-900 size-[400px]">
            <Image
              src={
                "https://www.brandsandbranches.com/upload/gallery/main/banner-141725464166.jpg"
              }
              alt="ZORRO"
              width={400}
              height={400}
              className="object-cover rounded-md size-full"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
