"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function BannerSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <Image
            // className="w-full h-full"
            src="https://i.ibb.co.com/gnBXrv3/Green-and-Black-Vivid-Bold-Blocks-Electronics-and-Appliances-Banner.png"
            alt="sliderImage"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // className="w-full h-full"
            src="https://i.ibb.co.com/gnBXrv3/Green-and-Black-Vivid-Bold-Blocks-Electronics-and-Appliances-Banner.png"
            alt="sliderImage"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            // className="w-full h-full"
            src="https://i.ibb.co.com/gnBXrv3/Green-and-Black-Vivid-Bold-Blocks-Electronics-and-Appliances-Banner.png"
            alt="sliderImage"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
