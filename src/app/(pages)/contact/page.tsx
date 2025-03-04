import EnquiryForm from "@/app/_components/Form/Enquiry";

export default function Home() {
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

        <EnquiryForm screen="default" />
      </div>
    </section>
  );
}
