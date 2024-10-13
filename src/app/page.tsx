/* eslint-disable */

"use client";

import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

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
import { Call, Instagram, Play, Scissor } from "@/icons";
import BlogCard from "@/components/Card/BlogCard/BlogCard";
import TestimonialCard from "@/components/Card/TestimonialCard/TestimonialCard";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/Card/ProductCard/ProductCard";
import Services from "@/components/Services/Services";
import { services } from "@/constants/services";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-arima-madurai-regular)] overflow-x-hidden-hidden">
      <Navbar />
      <main className="flex flex-col row-start-2 items-center sm:items-start min-h-screen min-w-full h-[90%] overflow-x-hidden-hidden">
        <HeroSection />
        <section className="about-us w-full flex items-center justify-center relative">
          <div className="flex gap-48 sm:gap-40 items-center justify-center w-full py-40">
            <div className="flex relative items-center justify-center px-20 pb-16">
              <div className="absolute w-[100%] aspect-square rounded-full bg-color-4 -z-10" />
              <Image alt="" src={aboutImages.about1} className="" />
              <Image
                alt=""
                src={aboutImages.about2}
                className="absolute left-[90%] top-[5%]"
              />
              <Image
                alt=""
                src={aboutImages.about3}
                className="absolute  border-[15px] border-white bottom-0 -right-24"
              />
            </div>
            <div className="header_section col-xl-4 xl-mb-30 py-11  flex flex-col gap-2 relative items-start self-stretch justify-between w-2/5">
              <p className=" text-[10rem] text-opacity-5 text-heading-color text-center absolute top-0 left-0 leading-none">
                About
              </p>
              <p className="text-left text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                About Us
              </p>
              <p className="text-left text-5xl text-heading-color font-black leading-none">
                Best Haircut Salons For Men Women
              </p>
              <p className="text-left text-base text-heading-color  leading-normal mt-4">
                Haircut" is a term used to describe when a person removes the
                hair
                <br />
                on their head. This is done to allow for better access to the
                part of
                <br />
                the body that needs cutting.
              </p>
              <div className="flex gap-5 justify-start items-center mt-4 mb-8">
                <div className="self-stretch w-[0.125rem] bg-primary-color" />
                <p className="text-left text-xl text-heading-color font-normal  leading-normal">
                  We're a leading independent salon in Dubai, offering
                  <br />
                  everything from haircuts to exfoliation and
                </p>
              </div>
              <Button title="View all Review >>" />
            </div>
          </div>
        </section>
        <section className="services w-full flex items-center justify-center py-40 relative bg-color-4">
          <Image
            src={scissorImage}
            alt=""
            className="absolute opacity-5 right-0 -bottom-2"
          />
          <div className="flex flex-col gap-16 items-center justify-center m-auto sm:mx-20 relative">
            <div className="header_section flex flex-col relative items-center">
              <p className="text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-8 leading-none">
                Services
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Our Services
              </p>
              <p className="text-center text-7xl text-heading-color font-black leading-normal">
                Popular Hair Cutting <br /> And salon
              </p>
            </div>
            <Services data={services} />
          </div>
        </section>
        <section className="book-appointment w-full flex items-center justify-center relative overflow-hidden">
          <div className="relative flex w-full opacity-100">
            <div className="w-96 h-96 rounded-full border-2 border-primary-color absolute -top-[11rem] -right-[11rem]" />
            <Image
              src={bookingImage}
              alt=""
              className="absolute inset-0 w-full h-[100%] object-cover opacity-100 -z-10 "
            />

            <div className="absolute w-full h-full  bg-heading-color bg-opacity-90 -z-10" />
            <div className="w-full flex items-center justify-between py-32 sm:mx-20 mb:mx-20 2xl:mx-40 z-10">
              <div className="header_section col-xl-4 xl-mb-30 py-11  flex flex-col gap-2 relative items-start self-stretch justify-between max-w-[50%]">
                <p className=" text-[10rem] text-opacity-5 text-white text-center absolute top-0 left-0 leading-none">
                  Booking
                </p>
                <p className="text-left text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                  Booking Now
                </p>
                <p className="text-left text-5xl text-white font-black leading-none mb-4">
                  Book your appointment online And call our salon
                </p>
                <Button title="View all Review >>" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-center py-8 px-14 bg-white self-stretch">
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
        <section className="products flex items-center justify-center py-40">
          <div className="flex flex-col gap-16 items-center justify-center m-auto sm:mx-20">
            <div className="header_section flex flex-col relative items-center">
              <p className="text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-8 leading-none">
                Our Products
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Our Products
              </p>
              <p className="text-center text-7xl text-heading-color font-black leading-normal">
                Evoke the experience of one of our barber shops
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6">
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
          <div className="grid grid-cols-2 items-center justify-center w-full">
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
            <div className="col-xl-5 col-lg-6 col-md-8 bg-primary-color p-20 relative flex-1 flex flex-col gap-8 items-start self-stretch">
              <p className=" text-[10rem] text-opacity-5 text-heading-color text-center absolute top-10 left-20 leading-none m-auto">
                Working
              </p>
              <div className="flex flex-col gap-5 text-left">
                <p className="text-white text-5xl font-black">Working Hours</p>
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
              <Button title="Booking Appointment >>" />
            </div>
          </div>
        </section>
        <section className="testimonial w-full flex items-center justify-center  bg-[#F7F7F7] relative">
          <Image
            src={scissorImage}
            alt=""
            className="opacity-5 absolute right-0"
          />
          <div className="relative grid grid-cols-3 gap-6 items-center justify-center m-auto my-40 sm:mx-20">
            <p className=" text-[10rem] text-opacity-5 text-heading-color text-center absolute top-0 left-0 leading-none">
              Testimonial
            </p>
            <div className="header_section col-xl-4 xl-mb-30 py-11  flex flex-col gap-2 relative items-start self-stretch justify-between">
              <p className="text-left text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Testimonial
              </p>
              <p className="text-left text-5xl text-heading-color font-black leading-none">
                What Our Customar Say’s
              </p>
              <p className="text-left text-xl text-heading-color  leading-normal mt-4 mb-8">
                Barber Trading Style and Proven Strategy to Make a Living
              </p>
              <Button title="View all Review >>" />
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
        <section className="blog w-full flex items-center justify-center py-40">
          <div className="flex flex-col gap-16 items-center justify-center m-auto sm:mx-20">
            <div className="header_section flex flex-col relative items-center">
              <p className="text-[10rem] text-opacity-5 text-heading-color text-center absolute -top-8 leading-none">
                Our News
              </p>
              <p className="text-center text-[1.125rem] leading-[1.75rem] text-primary-color font-black">
                Blog and Artical
              </p>
              <p className="text-center text-7xl text-heading-color font-black leading-normal">
                Read Our Blog and News
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
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
        <section className="instagram">
          <div className="grid grid-cols-6 gap-2 px-10">
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram1} alt="" />
            </div>
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram2} alt="" />
            </div>
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram3} alt="" />
            </div>
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram4} alt="" />
            </div>
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram5} alt="" />
            </div>
            <div className="group flex relative items-center justify-center transition-all duration-300">
              <div className="absolute z-10 h-full w-full hidden group-hover:bg-primary-color group-hover:bg-opacity-50 group-hover:flex items-center justify-center transition-all duration-500">
                <Instagram fill="#fff" className="cursor-pointer" />
              </div>

              <Image src={instagramImages.instagram6} alt="" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
