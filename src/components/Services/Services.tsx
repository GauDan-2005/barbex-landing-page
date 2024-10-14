import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button/SolidButton/SolidButton";
import { Check } from "@/icons";

type Props = {
  data: {
    icon: any;
    iconName: string;
    title: string;
    content: string;
    features: string[];
    img: any;
  }[];
};

const Services = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0); // Store the active tab index
  const [activeData, setActiveData] = useState(props.data?.[0]); // Store the active service data

  // Function to handle tab switching
  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setActiveData(props.data[idx]);
  };

  return (
    <div className="flex flex-col gap-20">
      {/* Service Tabs */}
      <div className="flex gap-8 flex-wrap items-center justify-center content-center">
        {props.data?.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={`cursor-pointer min-w-44 self-stretch px-6 py-8 flex flex-col gap-5 items-center justify-center  text-xl font-black ${
              activeTab === idx ? "bg-primary-color" : "bg-white"
            }`}
          >
            {item.icon && (
              <item.icon
                fill={idx === activeTab ? "white" : "var(--primary-color)"}
              />
            )}
            <p
              className={`${
                activeTab === idx ? "text-white" : "text-heading-color"
              }`}
            >
              {item?.iconName}
            </p>
          </div>
        ))}
      </div>

      {/* Active Service Details */}
      <div className="flex flex-col md:flex-row gap-16 items-start justify-center">
        {/* Image */}
        <div className="md:w-1/2 flex justify-end">
          <Image src={activeData?.img} alt={activeData?.title} className="" />
        </div>

        {/* Service Info */}
        <div className="md:w-1/2 flex flex-col gap-8 items-center md:items-start justify-between text-center md:text-left px-4">
          <div className="flex flex-col gap-5 ">
            <p className="text-2xl font-bold">{activeData?.title}</p>
            <p className="text-lg text-gray-600 font-normal">
              {activeData?.content}
            </p>
          </div>

          {/* Features */}
          <div className="mb-5 flex flex-col gap-5 self-stretch">
            {activeData?.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center justify-start gap-5 text-body-color text-base font-bold text-left"
              >
                <div className="flex items-center justify-center p-2 rounded-full bg-primary-color bg-opacity-20">
                  <Check fill="var(--primary-color)" />
                </div>
                {feature}
              </div>
            ))}
          </div>

          <Button title="Booking Appointment" />
        </div>
      </div>
    </div>
  );
};

export default Services;
