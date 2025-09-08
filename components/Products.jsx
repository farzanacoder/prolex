"use client";
import React from "react";
import ProdctItem from "./ProdctItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Products() {
  return (
    <section className="bg-white py-6 lg:py-20" id="product">
      <div className="container">
        <h2 className="hd text-center mb-2">
          We have <span className="text-primary">quality</span> products
        </h2>
        <p className="text-center text-xl text-gray-600 w-full lg:w-[75%] m-auto pb-10">
          Credibly synthesize multimedia based networks vis-a-vis top-line
          growth strategies. Continually leverage existing worldwide interfaces
        </p>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}

           breakpoints= {{
        250: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        330: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProdctItem
              img="/Watch1.png"
              title="Watch 02"
              oldprice="$170.00"
              price="$67.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch2.png"
              title="Watch 03"
              oldprice="$110.00"
              price="$79.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch4.png"
              title="Watch 04"
              oldprice="$10.00"
              price="$72.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch5.png"
              title="Watch 05"
              oldprice="$70.00"
              price="$93.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch6.png"
              title="Watch 06"
              oldprice="$30.00"
              price="$50.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch7.png"
              title="Watch 07"
              oldprice="$90.00"
              price="$88.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProdctItem
              img="/Watch8.png"
              title="Watch 08"
              oldprice="$70.00"
              price="$43.00"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
