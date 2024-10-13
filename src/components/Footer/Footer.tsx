import React from "react";
import Button from "../Button/Button";
import {
  Blade,
  Logo,
  SocialIcon,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4,
  SocialIcon5,
} from "@/icons";

const Footer = () => {
  return (
    <footer className="flex bg-heading-color text-white pt-48 -mt-24">
      <div className="flex flex-col gap-32 w-full relative">
        <Blade fill="white" className="absolute left-20 -top-10" />
        <div className=" flex justify-between items-center z-10  px-20">
          <div className="flex flex-col gap-8 items-start justify-center">
            <Logo />
            <div className="flex items-center justify-between gap-16">
              <p className="cursor-pointer hover:text-primary-color transition-all duration-500">
                Haircut
              </p>
              <p className="cursor-pointer hover:text-primary-color transition-all duration-500">
                Hair Color
              </p>
              <p className="cursor-pointer hover:text-primary-color transition-all duration-500">
                Hair Massage
              </p>
              <p className="cursor-pointer hover:text-primary-color transition-all duration-500">
                Hair wash
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="self-stretch border border-white border-opacity-50 py-5 px-8 bg-transparent text-white outline-none"
            />
            <Button title="SUBSCRIBE" className="self-stretch" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-12 p-10 border-t-[1px] border-white border-opacity-10  px-20">
          <p>
            Copyright &copy; 2022{" "}
            <span className="text-primary-color">ThemeOri</span> Website by
            Barbex
          </p>
          <div className="flex justify-between items-center gap-8">
            <SocialIcon5 className="cursor-pointer fill-white hover:fill-primary-color" />
            <SocialIcon className="cursor-pointer fill-white hover:fill-primary-color" />
            <SocialIcon2 className="cursor-pointer fill-white hover:fill-primary-color" />
            <SocialIcon3 className="cursor-pointer fill-white hover:fill-primary-color" />
            <SocialIcon4 className="cursor-pointer fill-white hover:fill-primary-color" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
