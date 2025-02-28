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
            <strong>ZORRO CLUB Franchise</strong> offers a truly unique Night
            life experience in this plethora of more or less similar options. It
            is a space designed to pamper the discerning globetrotting clientele
            with the best in terms of food, beverages, service. - which they can
            enjoy with their family, friends, colleagues in a spacious lounge or
            exclusive private dining rooms amongst the company of likeminded
            people who have arrived in life and want only the best.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 w-full py-6">
        <div className="w-full lg:w-1/2 px-2 lg:px-6">
          <p className="text-lg text-justify lg:text-right">
            <strong>The spacious private dining</strong> <br />
            Lounge that seats minimum 8-20 guests and can accommodate over 300+
            gathering altogether . The EV sound is encompassing and acoustically
            tuned to allow a conversations as well as a party atmosphere. The
            light mood is versatile and dims as the night progresses and
            Sharpies adds a classy touch when it comes on. The DJ console is
            neatly tucked away at an end and the stage comes in for the live
            performance and converts into elevated dancing spaces when the tempo
            of the nigh picks up.
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
            <strong>The Bar</strong>
            <br /> The 24 feet bar takes center stage with a ceiling height
            bottle display overflowing with the best of alcohol brands. The menu
            lists over 120 spirits, 30 wines. Beer is avalible on tap as well as
            in bottles. The cocktail menu uses a combination of classic &
            contemporary mixology. Freshest fruits, herb and spice infusions,
            smoked and molecular cocktails feature in the list. You will Feel
            Alive will regularly host mixology sessions for its guests where
            corporate, housewives & friends can try to mix their own exotic
            concoctions. The bar is priced aggressively to encourage guests to
            upgrade to a better drink - a better experience.
          </p>
        </div>
      </div>

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
      </div>
    </section>
  );
}
