"use client";
import Image from "next/image";
import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial() {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-gray-100 px-16 py-20">
        <h2 className="hd text-center">
          Our lovely <span>Customers</span> say
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="items-center pt-10">
              <p className="text-gray-500 px-14 h-32 text-xl text-center italic overflow-hidden text-ellipsis">
                <RiDoubleQuotesL className="relative top-5 -left-2 text-gray-800" />
                ently evisculate integrated resources whereas global processes.
                Enthusiastically. image Arabella Ora BizBite Rapidiously develop
                user friendly growth strategies after extensive initiatives.
                Conveniently grow innovative benefits through fully tested
                deliverables. Rapidiously utilize focused platforms through
                end-to-end schemas.
              </p>

              <div className="flex flex-col justify-center py-5">
                <div className="h-20 w-20 text-lg overflow-hidden rounded-full m-auto ">
                  <Image src="/img4.jpg" alt="image" height={80} width={80} />
                </div>
                <h3 className="text-center font-semibold text-lg text-gray-700 mt-2">
                  Jeremy Jere
                </h3>
                <span className="text-center text-base text-gray-700">
                  Appco
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items-center pt-10">
              <p className="text-gray-500 px-14 h-32 text-xl text-center italic overflow-hidden text-ellipsis">
                <RiDoubleQuotesL className="relative top-5 -left-2 text-gray-800" />
                ently evisculate integrated resources whereas global processes.
                Enthusiastically. image Arabella Ora BizBite Rapidiously develop
                user friendly growth strategies after extensive initiatives.
                Conveniently grow innovative benefits through fully tested
                deliverables. Rapidiously utilize focused platforms through
                end-to-end schemas.
              </p>

              <div className="flex flex-col justify-center py-5">
                <div className="h-20 w-20 text-lg overflow-hidden rounded-full m-auto ">
                  <Image src="/img5.jpg" alt="image" height={80} width={80} />
                </div>
                <h3 className="text-center font-semibold text-lg text-gray-700 mt-2">
                  Jeremy Jere
                </h3>
                <span className="text-center text-base text-gray-700">
                  Appco
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items-center pt-10">
              <p className="text-gray-500 px-14 h-32 text-xl text-center italic overflow-hidden text-ellipsis">
                <RiDoubleQuotesL className="relative top-5 -left-2 text-gray-800" />
                ently evisculate integrated resources whereas global processes.
                Enthusiastically. image Arabella Ora BizBite Rapidiously develop
                user friendly growth strategies after extensive initiatives.
                Conveniently grow innovative benefits through fully tested
                deliverables. Rapidiously utilize focused platforms through
                end-to-end schemas.
              </p>

              <div className="flex flex-col justify-center py-5">
                <div className="h-20 w-20 text-lg overflow-hidden rounded-full m-auto ">
                  <Image src="/img3.jpg" alt="image" height={80} width={80} />
                </div>
                <h3 className="text-center font-semibold text-lg text-gray-700 mt-2">
                  Jeremy Jere
                </h3>
                <span className="text-center text-base text-gray-700">
                  Appco
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="counter p-32">
        <div className="grid grid-cols-2 gap-20">
            <div className="col flex flex-col justify-center">
                <BsEmojiSmile size={50} className="!text-white m-auto"/>
                <span className="font-bold text-center text-5xl py-3 text-primary">2350</span>
                <span className="!text-white text-lg m-auto">Happy Client</span>
            </div>
            <div className="col flex flex-col justify-center">
                <FaDownload size={50} className="!text-white m-auto"/>
                <span className="font-bold text-center text-5xl py-3 text-primary">2150</span>
                <span className="!text-white text-lg m-auto">App Download</span>
            </div>
            <div className="col flex flex-col justify-center">
                <LiaAwardSolid size={50} className="!text-white m-auto"/>
                <span className="font-bold text-center text-5xl py-3 text-primary">2170</span>
                <span className="!text-white text-lg m-auto">Clients satisfaction</span>
            </div>
            <div className="col flex flex-col justify-center">
                <GoTrophy size={50} className="!text-white m-auto"/>
                <span className="font-bold text-center text-5xl py-3 text-primary">2250</span>
                <span className="!text-white text-lg m-auto">Awards wint</span>  
            </div>
            </div>
      </div>
    </section>
  );
}
