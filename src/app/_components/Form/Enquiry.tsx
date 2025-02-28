"use client";

import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Input/Textarea";
import Radio from "../Input/Radio";

interface formDataProp {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  currentBusiness: string;
  interestedIn: string;
  investmentRange: string;
  interestedInRadio: string;
  relevantExperience: "yes" | "no" | "";
  partner: "yes" | "no" | "";
  comment: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<formDataProp>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    currentBusiness: "",
    interestedIn: "",
    investmentRange: "",
    interestedInRadio: "",
    relevantExperience: "",
    partner: "",
    comment: "",
  });

  const interestedInOptions = [
    { label: "Master Franchise", value: "master franchise" },
    { label: "Multi Unit Franchise", value: "multi unit franchise" },
    { label: "Unit Franchise", value: "unit franchise" },
  ];

  const relevantExperienceOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const partnerOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <div className="w-full rounded-md">
      <form className="w-full py-0 px-4 sm:px-10 lg:px-20 flex flex-col gap-3 sm:gap-6 justify-center">
        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="first-name"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              First Name
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
              }}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="last-name"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Last Name
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
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="email"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Email
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
              }}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="phone"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Phone Number
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
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="city"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              City
            </label>

            <Input
              type="text"
              id="city"
              value={formData.city}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  city: val,
                }));
              }}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="current-business"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Current Business
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
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="interested-in"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Interested In
            </label>

            <Input
              type="text"
              id="interested-in"
              value={formData.interestedIn}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  interestedIn: val,
                }));
              }}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-start">
            <label
              htmlFor="investment-range"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Investment Range
            </label>

            <Input
              type="text"
              id="investment-range"
              value={formData.investmentRange}
              setValue={(val: string) => {
                setFormData((prev) => ({
                  ...prev,
                  investmentRange: val,
                }));
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
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
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
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
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
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
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="w-full flex flex-col justify-start">
            <label
              htmlFor="comment"
              className="block mb-0.5 text-md font-medium text-gray-900"
            >
              Comment
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
          <button
            type="button"
            className="bg-[#bf9877] text-white rounded-3xl font-medium px-8 py-3 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
