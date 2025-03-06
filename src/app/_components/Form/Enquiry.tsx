"use client";

import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Input/Textarea";
import Dropdown from "../Input/Dropdown";
import { postCall } from "../../../service/apiCall";
import { useRouter } from "next/navigation";
import cities from "../../../utils/data/Indian_Cities";

interface formDataProp {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  currentBusiness: string;
  preferredBrand: string;
  investmentRange: string;
  comment: string;
}

export default function EnquiryForm({
  screen = "default",
}: {
  screen: string;
}) {
  const router = useRouter();

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    currentBusiness: "",
    preferredBrand: "",
    investmentRange: "",
  });

  const investmentRangeOptions = [
    { label: "1 Crore - 3 Crore", value: "1 Crore - 3 Crore" },
    { label: "3 Crore - 5 Crore", value: "3 Crore - 5 Crore" },
    { label: "5 Crore +", value: "5 Crore +" },
  ];

  const preferredBrandOptions = [
    { label: "Lord of the Drinks", value: "Lord of the Drinks" },
    { label: "Diablo", value: "Diablo" },
    { label: "Bougie", value: "Bougie" },
    { label: "Miso Sexy", value: "Miso Sexy" },
    { label: "Noche", value: "Noche" },
    { label: "Tickled Pink", value: "Tickled Pink" },
    { label: "Plum by Bent Chair", value: "Plum by Bent Chair" },
    { label: "Dragonfly", value: "Dragonfly" },
    { label: "Lazeez Affaire", value: "Lazeez Affaire" },
    { label: "The Flying Saucer Café", value: "The Flying Saucer Café" },
    { label: "Warehouse Café", value: "Warehouse Café" },
    { label: "Bizou-Bizou", value: "Bizou-Bizou" },
    { label: "Thanks & Beyond", value: "Thanks & Beyond" },
    { label: "Oia", value: "Oia" },
    { label: "Daddy", value: "Daddy" },
  ];

  // const cityOption = [
  //   { label: "Bangalore", value: "Bangalore" },
  //   { label: "Delhi", value: "Delhi" },
  //   { label: "Chennai", value: "Chennai" },
  //   { label: "Hyderabad", value: "Hyderabad" },
  //   { label: "Mumbai", value: "Mumbai" },
  //   { label: "Pune", value: "Pune" },
  //   { label: "Kolkata", value: "Kolkata" },
  //   { label: "Ahmedabad", value: "Ahmedabad" },
  // ];

  const cityOption = cities;

  const [formData, setFormData] = useState<formDataProp>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    currentBusiness: "",
    preferredBrand: "",
    investmentRange: "",
    // interestedInRadio: "",
    // relevantExperience: "",
    // partner: "",
    comment: "",
  });

  const checkValidation = () => {
    let isValid = true;
    if (!formData.firstName) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        firstName: "First Name is required",
      }));
    }

    if (!formData.lastName) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        lastName: "Last Name is required",
      }));
    }

    if (!formData.email) {
      isValid = false;
      setError((prev) => ({ ...prev, email: "Email is required" }));
    }

    if (!formData.phone) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        phoneNumber: "Phone Number is required",
      }));
    }

    if (!formData.city) {
      isValid = false;
      setError((prev) => ({ ...prev, city: "City is required" }));
    }

    if (!formData.currentBusiness) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        currentBusiness: "Current Business is required",
      }));
    }

    if (!formData.preferredBrand) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        preferredBrand: "Preferred Brand is required",
      }));
    }

    if (!formData.investmentRange) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        investmentRange: "Investment Range is required",
      }));
    }

    return isValid;
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (!checkValidation()) {
      return null;
    }

    let payload = {
      firstName: formData?.firstName || "",
      lastName: formData?.lastName || "",
      email: formData?.email || "",
      phoneNumber: formData?.phone || "",
      city: formData?.city || "",
      currentBusiness: formData?.currentBusiness || "",
      preferredBrand: formData?.preferredBrand || "",
      investmentRange: formData?.investmentRange || "",
      message: formData?.comment || "",
    };
    let response = await postCall("/enquiry", {}, payload);
    console.log(response);
    if (response.status) {
      router.push("/thank-you");
    }
  };

  return (
    <div className="w-full rounded-md">
      <form
        className={`w-full flex flex-col justify-center 
          ${screen === "default" ? "gap-6 px-4 sm:px-10 lg:px-20 py-0" : ""}
          ${screen === "pop-up" ? "gap-6 px-4 sm:px-10 py-8" : ""}
        `}
        onSubmit={submitHandler}
      >
        <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="first-name"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              First Name
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Input
              type="text"
              id="first-name"
              value={formData.firstName}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  firstName: val,
                }));
                setError((prev) => ({
                  ...prev,
                  firstName: "",
                }));
              }}
            />

            {error?.firstName && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.firstName}
              </span>
            )}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="last-name"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Last Name
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Input
              type="text"
              id="last-name"
              value={formData.lastName}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  lastName: val,
                }));
                setError((prev) => ({
                  ...prev,
                  lastName: "",
                }));
              }}
            />

            {error?.lastName && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.lastName}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="email"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Email
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Input
              type="email"
              id="email"
              value={formData.email}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  email: val,
                }));
                setError((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
            />

            {error?.email && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.email}
              </span>
            )}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="phone"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Phone Number
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Input
              type="number"
              id="phone"
              value={formData.phone}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  phone: val,
                }));
                setError((prev) => ({
                  ...prev,
                  phoneNumber: "",
                }));
              }}
            />

            {error?.phoneNumber && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.phoneNumber}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="city"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              City
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Dropdown
              option={cityOption}
              id="city"
              value={formData.city}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  city: val,
                }));
                setError((prev) => ({
                  ...prev,
                  city: "",
                }));
              }}
            />
            {error?.city && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.city}
              </span>
            )}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              htmlFor="current-business"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Current Business
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Input
              type="text"
              id="current-business"
              value={formData.currentBusiness}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  currentBusiness: val,
                }));
                setError((prev) => ({
                  ...prev,
                  currentBusiness: "",
                }));
              }}
            />

            {error?.currentBusiness && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.currentBusiness}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label className="block mb-0.5 text-md font-medium text-gray-900">
              Preferred Brand
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Dropdown
              option={preferredBrandOptions}
              id="preferred-brand"
              value={formData.preferredBrand}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  preferredBrand: val,
                }));
                setError((prev) => ({
                  ...prev,
                  preferredBrand: "",
                }));
              }}
            />
            {error?.preferredBrand && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.preferredBrand}
              </span>
            )}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start relative">
            <label
              // htmlFor="investment-range"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Investment Range
              <span className="text-red-600 font-medium">*</span>
            </label>

            <Dropdown
              option={investmentRangeOptions}
              id="investment-range"
              value={formData.investmentRange}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  investmentRange: val,
                }));
                setError((prev) => ({
                  ...prev,
                  investmentRange: "",
                }));
              }}
            />

            {error?.investmentRange && (
              <span className="text-red-500 text-xs absolute top-[calc(100%+3px)] left-0">
                {error?.investmentRange}
              </span>
            )}
          </div>
        </div>

        {/* <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full flex flex-col justify-start">
            <label
              htmlFor="interested-in-radio"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Interested In
            </label>

            <Radio
              id="interested-in-radio"
              option={interestedInOptions}
              value={formData.interestedIn}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  interestedInRadio: val,
                }));
              }}
            />
          </div>
        </div> */}

        {/* <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full flex flex-col justify-start">
            <label
              htmlFor="related-experience"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Do you have any related experience
            </label>

            <Radio
              id="related-experience"
              option={relevantExperienceOptions}
              value={formData.relevantExperience}
              setValue={(val: any) => {
                setFormData((prev) => ({
                  ...prev,
                  relevantExperience: val,
                }));
              }}
            />
          </div>
        </div> */}

        {/* <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full flex flex-col justify-start">
            <label
              htmlFor="partner"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Will you have Partner
            </label>

            <Radio
              id="partner"
              option={partnerOptions}
              value={formData.partner}
              setValue={(val: any) => {
                setFormData((prev) => ({
                  ...prev,
                  partner: val,
                }));
              }}
            />
          </div>
        </div> */}

        <div className="w-full flex flex-col sm:flex-row gap-6">
          <div className="w-full flex flex-col justify-start">
            <label
              htmlFor="comment"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Message
            </label>

            <Textarea
              id="comment"
              rows={5}
              value={formData.comment}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  comment: val,
                }));
              }}
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          {/* <button
            type="submit"
            className="bg-[#bf9877] text-white rounded-3xl font-medium px-8 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Close
          </button> */}
          <button
            type="submit"
            className="bg-[#bf9877] text-white rounded-3xl font-medium px-8 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
