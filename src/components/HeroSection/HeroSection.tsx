import Button from "../Button/Button";

import heroImg1 from "../../assets/banner-1.png";
import heroBgImg1 from "../../assets/banner-bg-1.jpg";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/icons";

const HeroSection = () => {
  return (
    <div
      className={`relative flex items-center gap-16 p-16 py-24 min-h-screen min-w-full `}
    >
      <Image
        src={heroBgImg1}
        alt=""
        className="absolute inset-0 w-full h-[100%] object-cover -z-10"
      />
      <Image
        className="absolute -right-0 -bottom-0 sm:max-w-[580px] md:max-w-[580px] lg:max-w-[580px] xl:max-w-[580px] 2xl:max-w-[920px]"
        src={heroImg1}
        alt=""
      />
      <div className="absolute z-20 rounded-full border-2 flex w-max h-max border-primary-color hover:bg-primary-color transition-all duration-300 cursor-pointer">
        <ArrowLeft className=" hover:fill-white fill-primary-color" />
      </div>
      <div className="flex flex-row relative min-w-full min-h-[100%]  sm:pl-16">
        <div className="z-10 max-w-[65%] flex flex-col gap-12 items-start justify-between">
          <div className="flex flex-col gap-4 items-start justify-between">
            <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
              Welcome to Our Barbex
            </p>
            <p className="text-left text-7xl text-white font-black leading-normal">
              Best Hair Salon for a Professional Look
            </p>
          </div>
          <div className="flex gap-9">
            <Button title="Read More >>" />
            <Button title="View all Services >>" />
          </div>
        </div>
      </div>
      <div className="absolute right-16 z-20 rounded-full  border-2 flex w-max h-max border-primary-color hover:bg-primary-color transition-all duration-300 cursor-pointer">
        <ArrowRight className=" hover:fill-white fill-primary-color" />
      </div>
    </div>
  );
};

export default HeroSection;
