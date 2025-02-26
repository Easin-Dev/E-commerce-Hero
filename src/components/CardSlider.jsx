"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Ubuntu } from "next/font/google";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AiOutlineLike } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

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
  }, [swiperInstance]);

  return (
    <div className="relative mt-5 px-4 md:px-8">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute -top-6 right-32 z-10 transform -translate-y-1/2 p-2 rounded-full shadow-lg hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute -top-6 right-20 z-10 transform -translate-y-1/2 p-2 rounded-full shadow-lg hidden md:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <div
              className={`relative card bg-base-100 shadow-xl ${ubuntu.className}`}
            >
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="w-full object-cover"
                />
              </figure>
              <div className="absolute px-2 flex items-center text-red-600 rounded-md shadow-lg top-3 left-3 bg-white">
                <h1 className="font-bold">-40%</h1>
                <CiShoppingTag size={20} />
              </div>
              <div className="absolute flex flex-col gap-3 right-3 top-3">
                <button className="btn btn-circle btn-sm border-0">
                  <AiOutlineLike size={16} />
                </button>
                <button className="btn btn-circle btn-sm">
                  <HiOutlineEye size={16} />
                </button>
              </div>
              <div className="p-4">
                <h2 className="card-title text-lg font-bold">
                  {product.title}
                </h2>
                <div className="flex gap-2">
                  <p className="text-red-600 font-bold">{product.price}</p>
                  <p className="text-red-600 line-through">$1000</p>
                </div>
                <div className="flex items-center mt-4 gap-3">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div>(46)</div>
                </div>
                <div className="card-actions mt-3">
                  <button className="btn btn-sm bg-black text-white hover:text-black hover:bg-red-500">
                    Buy Now <HiOutlineShoppingBag />
                  </button>
                  <button className="btn btn-sm border-red-500 btn-outline">
                    Add <MdAddShoppingCart />
                  </button>
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
