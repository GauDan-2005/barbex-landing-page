import { FullScreen, Heart, ShoppingCart, Star } from "@/icons";
import Image from "next/image";
import React from "react";

type Props = {
  img: any;
  price: string;
  rating: number;
  name: string;
};

const ProductCard = (props: Props) => {
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
    <div className="group flex flex-col gap-8 transition-all duration-500">
      <div className="relative flex items-center justify-center transition-all duration-500">
        <div className="absolute flex-col gap-4 items-start justify-end h-full w-full p-6 hidden group-hover:flex group-hover:bg-heading-color group-hover:bg-opacity-60 transition-all duration-500">
          <div className="p-3 flex items-center justify-center bg-white rounded-full cursor-pointer">
            <ShoppingCart fill="#0F1212" />
          </div>
          <div className="p-3 flex items-center justify-center bg-white rounded-full cursor-pointer">
            <Heart fill="#0F1212" />
          </div>
          <div className="p-3 flex items-center justify-center bg-white rounded-full cursor-pointer">
            <FullScreen fill="#0F1212" />
          </div>
        </div>
        <Image src={props.img} alt="" />
      </div>
      <div className="text-heading-color flex flex-col gap-2 items-center justify-between">
        {renderRating()}
        <p className="text-xl font-black text-center cursor-pointer hover:text-primary-color">
          {props.name}
        </p>
        <p className="text-primary-color font-black text-base">
          $ {props.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
