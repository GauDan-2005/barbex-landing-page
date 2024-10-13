import { Quotation, Star } from "@/icons";
import Image from "next/image";
import React from "react";

type Props = {
  img: any;
  tag: string;
  rating: number;
  name: string;
  content: string;
};

const TestimonialCard = (props: Props) => {
  const renderRating = () => {
    const totalStars = 5; // Assuming a 5-star rating system

    return (
      <div className="flex items-center gap-1 justify-center">
        {Array.from({ length: totalStars }, (_, index) => (
          <Star
            key={index}
            fill={index < props.rating ? "var(--primary-color)" : "#ccc"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 py-12 px-10 bg-white text-heading-color items-center relative col-xl-4 xl-mb-30">
      <Image src={props.img} alt="" className="rounded-full" />
      <p className="text-center text-lg font-normal leading-normal text-body-color">
        {props.content}
      </p>
      <div className="flex flex-col items-center justify-center">
        {renderRating()}
        <p className="text-center text-xl font-black leading-normal  text-heading-color">
          {props.name}
        </p>
        <p className="text-sm text-body-color font-bold">{props.tag}</p>
      </div>
      <Quotation fill="#0F1212" className="absolute bottom-1/4" />
    </div>
  );
};

export default TestimonialCard;
