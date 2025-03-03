"use client";
import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag?.("event", "conversion", {
        send_to: "AW-16889881110",
        event_category: "Lead",
        event_label: "Thank You Page",
        value: 1.0,
      });
    }
  }, []);

  return (
    <section className="text-gray-700 body-font">
      <div className="px-4 lg:px-10 py-16 mx-auto text-center max-w-2xl">
        <div className="bg-white shadow-lg rounded-xl p-10">
          <div className="flex justify-center">
            <CheckCircleIcon className="text-green-500 w-16 h-16 animate-bounce" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-gray-900">
            Thank You!
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We've received your enquiry and will get in touch with you shortly.
            If you have any urgent questions, feel free to contact us.
          </p>
          <Link href="/">
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
