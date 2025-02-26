"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Ubuntu } from "next/font/google";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Categorys = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    {
      id: 1,
      icon: <HiOutlineDevicePhoneMobile size={40} />,
      title: "phones",
    },
    {
      id: 2,
      icon: <RiComputerLine size={40} />,
      title: "computers",
    },
    {
      id: 3,
      icon: <BsSmartwatch size={40} />,
      title: "smartWatch",
    },
    {
      id: 4,
      icon: <BsFillCameraFill size={40} />,
      title: "cameras",
    },
    {
      id: 5,
      icon: <FaHeadphonesSimple size={40} />,
      title: "Headphones",
    },
    {
      id: 6,
      icon: <GrGamepad size={40} />,
      title: "Gaming",
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
    <div className={`relative mt-5 ${ubuntu.className}`}>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute -top-6 right-32 z-10 transform -translate-y-1/2 btn-outline p-2 rounded-full shadow-lg hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        ref={nextRef}
        className="absolute -top-6 right-20 z-10 transform -translate-y-1/2 btn-outline  p-2 rounded-full shadow-lg hidden md:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <div className="border btn w-full md:w-40 btn-outline hover:bg-red-500 border-gray-300 hover:border-red-500 h-40 mx-auto flex justify-center items-center rounded-md">
              <div>
                <button>{product.icon}</button>
                <h1 className="text-center md:text-left">{product.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categorys;
