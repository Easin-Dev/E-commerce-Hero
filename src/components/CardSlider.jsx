"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      image: "/gamepad.jpg",
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: "$960",
      image: "/keyboard.jpg",
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      image: "/monitor.jpg",
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
  ];

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Swiper ইনিশিয়ালাইজ হওয়ার পর আপডেট হবে

  return (
    <div className="relative mt-5">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute -top-6 right-32 z-10 transform -translate-y-1/2 btn-outline p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute -top-6 right-20 z-10 transform -translate-y-1/2 btn-outline  p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Swiper ইনস্ট্যান্স সেট করবো
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
