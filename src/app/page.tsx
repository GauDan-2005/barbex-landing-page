/* eslint-disable */

"use client";

import Image from "next/image";
import Slider from "react-slick";

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  aboutImages,
  blogImages,
  bookingImage,
  instagramImages,
  productImages,
  scissorImage,
  testimonialImages,
  workingImages,
} from "@/constants/images";
import { Call, Instagram, Play } from "@/icons";
import BlogCard from "@/components/Card/BlogCard/BlogCard";
import TestimonialCard from "@/components/Card/TestimonialCard/TestimonialCard";
import Button from "@/components/Button/SolidButton/SolidButton";
import ProductCard from "@/components/Card/ProductCard/ProductCard";
import Services from "@/components/Services/Services";
import { services } from "@/constants/services";
import Footer from "@/components/Footer/Footer";
import OutlineButton from "@/components/Button/OutlineButton/OutlineButton";

export default function Home() {
  const InstagramSlidesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 overflow-x-hidden-hidden font-arima">
      <Navbar />
      <main className="flex flex-col row-start-2 items-center sm:items-start min-h-screen min-w-full h-[90%] overflow-x-hidden-hidden">
        <HeroSection />
        <section className="about-us w-full flex items-center justify-center relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-32 md:gap-40 items-center justify-center w-full py-40">
            <div className="w-full md:w-auto flex relative items-start md:items-center justify-start md:justify-center pl-3 md:px-20 md:pb-16">
              <div className="absolute w-[100%] aspect-square rounded-full bg-color-4 -z-10" />
              <div className="md:w-full">
                <Image alt="" src={aboutImages.about1} className="" />
              </div>
              <Image
                alt=""
                src={aboutImages.about2}
                className="absolute right-[3%] top-[5%] md:left-[90%]"
              />
              <Image
                alt=""
                src={aboutImages.about3}
                className="absolute  border-[15px] border-white bottom-[-13%] right-0 md:bottom-0 md:-right-24"
              />
            </div>
            <div className="header_section md:col-xl-4 md:xl-mb-30 md:py-11 flex flex-col gap-2 relative items-center md:items-start self-stretch justify-between md:w-2/5 text-center md:text-left px-4">
              <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute top-[-5%] md:top-0 md:left-0 leading-none">
                About
              </p>
              <p className="text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                About Us
              </p>
              <p className="text-3xl md:text-5xl text-heading-color font-black leading-none">
                Best Haircut Salons For Men Women
              </p>
              <p className="text-base text-heading-color leading-normal mt-4">
                Haircut" is a term used to describe when a person removes the
                hair on their head. This is done to allow for better access to
                the part of the body that needs cutting.
              </p>
              <div className="flex gap-5 justify-start items-center mt-4 mb-8">
                <div className="self-stretch w-[0.125rem] bg-primary-color" />
                <p className="text-left text-lg md:text-xl text-heading-color font-normal  leading-normal">
                  We're a leading independent salon in Dubai, offering
                  everything from haircuts to exfoliation and
                </p>
              </div>
              <Button title="View all Review >>" />
            </div>
          </div>
        </section>
        <section className="services w-full flex items-center justify-center py-40 relative bg-color-4 overflow-hidden">
          <Image
            src={scissorImage}
            alt=""
            className="absolute opacity-5 right-0 -bottom-2"
          />
          <div className="flex flex-col gap-16 items-center justify-center m-auto sm:mx-20 relative">
            <div className="header_section flex flex-col relative items-center">
              <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-6 md:-top-8 leading-none">
                Services
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Our Services
              </p>
              <p className="text-center text-3xl md:text-7xl text-heading-color font-black leading-normal">
                Popular Hair Cutting <br /> And salon
              </p>
            </div>
            <Services data={services} />
          </div>
        </section>
        <section className="book-appointment w-full flex items-center justify-center relative overflow-hidden">
          <div className="relative flex w-full opacity-100">
            <div className="hidden md:absolute w-96 h-96 rounded-full border-2 border-primary-color -top-[11rem] -right-[11rem]" />
            <Image
              src={bookingImage}
              alt=""
              className="absolute inset-0 w-full h-[100%] object-cover opacity-100 -z-10 "
            />

            <div className="absolute w-full h-full  bg-heading-color bg-opacity-90 -z-10" />
            <div className="w-full flex flex-col md:flex-row items-center justify-between py-32 md:mx-20 2xl:mx-40 z-10">
              <div className="header_section col-xl-4 xl-mb-30 py-11  flex flex-col gap-2 relative items-center md:items-start self-stretch justify-between md:max-w-[50%] text-center md:text-left px-4">
                <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-white text-center absolute top-[5%] md:top-0 md:left-0 leading-none">
                  Booking
                </p>
                <p className=" text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                  Booking Now
                </p>
                <p className="text-3xl md:text-5xl text-white font-black leading-relaxed md:leading-none mb-4">
                  Book your appointment online And call our salon
                </p>
                <Button title="View all Review >>" />
              </div>
              <div className="mx-20 flex flex-col gap-10 items-center justify-center py-8 px-14 bg-white self-stretch">
                <div className="group flex items-center justify-center p-8 bg-primary-color  bg-opacity-10  rounded-full">
                  <Call className="scale-[2]  group-hover:scale-[2.25] fill-primary-color transition-all duration-300" />
                </div>
                <div className="text-heading-color flex flex-col gap-2 font-black text-center">
                  <p className="text-base">Call Now</p>
                  <p className="text-2xl">+123(568) 584</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="products flex items-center justify-center py-40 overflow-hidden">
          <div className="flex flex-col gap-16 items-center justify-center m-auto md:mx-20">
            <div className="header_section flex flex-col relative items-center px-4 md:px-0">
              <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-8 leading-none">
                Our Products
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Our Products
              </p>
              <p className="text-center text-3xl  md:text-7xl text-heading-color font-black leading-normal">
                Evoke the experience of one of our barber shops
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6 px-2 md:px-0">
              <ProductCard
                img={productImages.product1}
                name="New Fresh Wash"
                price="56.00"
                rating={4}
              />
              <ProductCard
                img={productImages.product2}
                name="New Fresh Wash"
                price="56.00"
                rating={4}
              />
              <ProductCard
                img={productImages.product3}
                name="New Fresh Wash"
                price="56.00"
                rating={4}
              />
              <ProductCard
                img={productImages.product4}
                name="New Fresh Wash"
                price="56.00"
                rating={4}
              />
            </div>
          </div>
        </section>
        <section className="working-hours w-full 2xl:px-10 flex items-center justify-center  relative overflow-hidden">
          <div className="grid grid-cols-1 order-last md:grid-cols-2 items-center justify-center w-full">
            <div className="col-xl-7 col-lg-6 col-md-4 flex items-center justify-center relative h-[100%]">
              <Image
                src={workingImages.working1}
                alt=""
                className=" h-[100%] object-cover"
              />
              <div className="bg-white rounded-full p-8 absolute hover:scale-[1.1] transition-all duration-300 cursor-pointer">
                <Play className="fill-primary-color" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8 bg-primary-color p-20 relative flex-1 flex flex-col gap-8 items-center md:items-start self-stretch ">
              <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute top-[10%] md:top-10 md:left-20 leading-none m-auto">
                Working
              </p>
              <div className="flex flex-col gap-5 text-center md:text-left">
                <p className="text-white text-3xl md:text-5xl font-black">
                  Working Hours
                </p>
                <p className="text-white text-base">
                  Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                  purus ex luctus nisi,
                </p>
              </div>
              <div className="flex flex-col self-stretch text-[1.375rem]">
                <p className="py-4 text-white flex items-center justify-between border-b-[1px] border-white border-opacity-50 border-dashed">
                  <span>Monday</span>
                  <span>:</span>
                  <span>9: AM - 6: PM</span>
                </p>
                <p className="py-4 text-white flex items-center justify-between border-b-[1px] border-white border-opacity-50 border-dashed">
                  <span>Tuesday</span>
                  <span>:</span>
                  <span>9: AM - 6: PM</span>
                </p>
                <p className="py-4 text-white flex items-center justify-between border-b-[1px] border-white border-opacity-50 border-dashed">
                  <span>Sunday</span>
                  <span>:</span>
                  <span>9: AM - 6: PM</span>
                </p>
              </div>
              <OutlineButton title="Booking Appointment >>" invert={true} />
            </div>
          </div>
        </section>
        <section className="testimonial w-full flex items-center justify-center  bg-[#F7F7F7] relative overflow-hidden">
          <Image
            src={scissorImage}
            alt=""
            className="opacity-5 absolute right-0"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center my-40 mx-2 md:mx-20">
            <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute top-[2%] left-[10%] m-auto md:top-0 md:left-0 leading-none">
              Testimonial
            </p>
            <div className="header_section col-xl-4 xl-mb-30 py-11  flex flex-col gap-2 relative items-center md:items-start self-stretch justify-between">
              <p className="text-left text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Testimonial
              </p>
              <p className="text-left text-3xl md:text-5xl text-heading-color font-black leading-none">
                What Our Customar Say’s
              </p>
              <p className="text-center md:text-left text-base md:text-xl text-heading-color  leading-normal mt-4 mb-8">
                Barber Trading Style and Proven Strategy to Make a Living
              </p>
              <OutlineButton title="View all Review >>" />
            </div>
            <TestimonialCard
              img={testimonialImages.testimonial1}
              tag="Regular User"
              rating={4}
              name="Devin Booker"
              content="Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis."
            />
            <TestimonialCard
              img={testimonialImages.testimonial2}
              tag="Regular User"
              rating={4}
              name="Michelle Yeoh"
              content="Proin vel ipsum id risus ultrices scelerisque. Suspendisse mattis sit amet leo vel convallis."
            />
          </div>
        </section>
        <section className="blog w-full flex items-center justify-center py-40 overflow-hidden">
          <div className="flex flex-col gap-16 items-center justify-center m-auto sm:mx-20">
            <div className="header_section flex flex-col relative items-center">
              <p className="text-[4rem] md:text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-8 leading-none whitespace-nowrap">
                Our News
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Blog and Artical
              </p>
              <p className="text-center text-3xl md:text-7xl text-heading-color font-black leading-normal">
                Read Our Blog and News
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-0">
              <BlogCard
                date="30 May, 2022"
                img={blogImages.blog1}
                tag="Haircuting"
                title="We are a Haircut Salon Based in South Melbourne"
              />
              <BlogCard
                date="30 May, 2022"
                img={blogImages.blog2}
                tag="Hair Color"
                title="Online booking appoitment For Salon, Hair Salon"
              />
              <BlogCard
                date="30 May, 2022"
                img={blogImages.blog3}
                tag="Lather Shave"
                title="Customising your shave is Fun and easy"
              />
            </div>
          </div>
        </section>
        <section className="instagram overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-2 px-10">
            {Object.keys(instagramImages).map((key, index) => (
              <div
                key={index}
                className="group flex relative items-center justify-center transition-all duration-300"
              >
                <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                  <Instagram fill="#fff" className="cursor-pointer" />
                </div>
                <Image
                  src={instagramImages[key as keyof typeof instagramImages]}
                  alt={`Instagram ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="hidden">
            <Slider {...InstagramSlidesSettings}>
              {Object.keys(instagramImages).map((key, index) => (
                <div
                  key={index}
                  className="group flex relative items-center justify-center transition-all duration-300"
                >
                  <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                    <Instagram fill="#fff" className="cursor-pointer" />
                  </div>
                  <Image
                    src={instagramImages[key as keyof typeof instagramImages]}
                    alt={`Instagram ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
