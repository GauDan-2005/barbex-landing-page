import Button from "../Button/SolidButton";

import heroImg1 from "../../assets/banner-1.png";
import heroBgImg1 from "../../assets/banner-bg-1.jpg";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/icons";
import OulineButton from "../Button/OutlineButton/OutlineButton";

const HeroSection = () => {
  return (
    <div
      className={`relative flex items-center md:gap-16 md:p-16 md:py-24 min-h-screen min-w-full `}
    >
      <Image
        src={heroBgImg1}
        alt=""
        className="absolute inset-0 w-full h-[100%] object-cover -z-10"
      />
      <Image
        className="hidden md:absolute -right-0 -bottom-0 max-w-[360px] md:max-w-[580px] lg:max-w-[580px] xl:max-w-[580px] 2xl:max-w-[920px]"
        src={heroImg1}
        alt=""
      />
      <div className="hidden absolute z-20 rounded-full border-2 md:flex w-max h-max border-primary-color hover:bg-primary-color transition-all duration-300 cursor-pointer">
        <ArrowLeft className=" hover:fill-white fill-primary-color" />
      </div>
      <div className="flex flex-row relative min-w-full md:min-h-[100%] md:pl-16">
        <div className="z-10 md:max-w-[65%] flex flex-col gap-8 md:gap-12 items-center md:items-start justify-between">
          <div className="flex flex-col gap-4 items-center md:items-start justify-between text-center">
            <p className="text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
              Welcome to Our Barbex
            </p>
            <p className="md:text-left text-3xl md:text-7xl text-white font-black leading-normal">
              Best Hair Salon for a Professional Look
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-9">
            <Button title="Read More >>" />
            <OulineButton title="View all Services >>" />
          </div>
        </div>
      </div>
      <div className="hidden absolute right-16 z-20 rounded-full  border-2 md:flex w-max h-max border-primary-color hover:bg-primary-color transition-all duration-300 cursor-pointer">
        <ArrowRight className=" hover:fill-white fill-primary-color" />
      </div>
    </div>
  );
};

export default HeroSection;
