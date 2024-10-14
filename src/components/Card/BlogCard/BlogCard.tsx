import Button from "@/components/Button/SolidButton";
import { Calendar } from "@/icons";
import Image from "next/image";
import React from "react";

type Props = {
  img: any;
  tag: string;
  title: string;
  date: string;
};

const AboutCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 text-heading-color font-black border border-heading-color border-opacity-5 col-xl-4 col-lg-6 col-md-6 xl-mb-30">
      <Image src={props.img} alt="" className="w-full object-cover" />
      <div className="flex flex-col gap-4 px-6 pb-6 items-start justify-between self-stretch flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center justify-between self-stretch">
            <div className="flex items-center justify-center bg-primary-color py-2 px-4">
              <p className="text-white text-[0.875rem] text-nowrap">
                {props.tag}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Calendar
                fill="var(--primary-color)"
                size="20"
                className="-mb-1"
              />
              <p className="text-[0.875rem] text-nowrap">{props.date}</p>
            </div>
          </div>
          <p className="text-2xl hover:text-primary-color transition-all duration-300">
            {props.title}
          </p>
        </div>
        <p className="text-base hover:text-primary-color transition-all duration-300">
          READ MORE {">>"}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
