"use client";
import Image from "next/image";
import {
  Truck,
  Clock,
  ShieldCheck,
  Users,
  ShoppingBag,
  Smile,
  Store,
  Phone,
  Mail,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Breadcrumb from "@/components/Breadcrumb";

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Managing Director",
    image: "https://i.ibb.co.com/sdYCBq3y/138374475.jpg",
    phone: "+123456789",
    email: "tom@example.com",
  },
  {
    name: "Emma Watson",
    role: "Marketing Head",
    image: "https://i.ibb.co.com/sdYCBq3y/138374475.jpg",
    phone: "+987654321",
    email: "emma@example.com",
  },
  {
    name: "Will Smith",
    role: "Sales Manager",
    image: "https://i.ibb.co.com/sdYCBq3y/138374475.jpg",
    phone: "+1122334455",
    email: "will@example.com",
  },
  {
    name: "Robert Downey Jr.",
    role: "Product Designer",
    image: "https://i.ibb.co.com/sdYCBq3y/138374475.jpg",
    phone: "+5566778899",
    email: "robert@example.com",
  },
  {
    name: "Scarlett Johansson",
    role: "Customer Support Head",
    image: "https://i.ibb.co.com/sdYCBq3y/138374475.jpg",
    phone: "+9988776655",
    email: "scarlett@example.com",
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600 mt-4">
            {/* Short description about the company */}
            Founded in 2015, Exclusive is South Asia’s premier online shopping
            marketplace, connecting thousands of sellers with millions of
            customers. Our platform empowers businesses to thrive and customers
            to shop with confidence.
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* About Page Image */}
          <Image
            src="https://i.ibb.co.com/fVJw4P3p/freestocks-3-Q3ts-J01nc-unsplash.jpgs"
            width={500}
            height={300}
            alt="Our Story"
            className="rounded-lg mx-auto shadow-md"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-40 text-center">
        {/* Each box represents a different statistic */}
        <div className="p-6 border cursor-pointer transition hover:bg-red-600 hover:text-white h-52 rounded-lg flex flex-col justify-center  items-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full">
            <Users size={32} className="  text-white" />
          </div>
          <p className="text-2xl font-bold">10.5k</p>
          <p className="">Active users on our site</p>
        </div>
        <div className="p-6 border cursor-pointer transition hover:bg-red-600 hover:text-white h-52 rounded-lg flex flex-col justify-center  items-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full">
            <ShoppingBag size={32} className=" text-white" />
          </div>
          <p className="text-2xl font-bold">33k</p>
          <p>Inspiring products sold</p>
        </div>
        <div className="p-6 border cursor-pointer transition hover:bg-red-600 hover:text-white h-52 rounded-lg flex flex-col justify-center  items-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full">
            <Smile size={32} className="text-white " />
          </div>
          <p className="text-2xl font-bold">45.5k</p>
          <p className="">Customer satisfaction rate</p>
        </div>
        <div className="p-6 border cursor-pointer transition hover:bg-red-600 hover:text-white h-52 rounded-lg flex flex-col justify-center  items-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full">
            <Store size={32} className="text-white " />
          </div>
          <p className="text-2xl font-bold">25k</p>
          <p className="">A trusted store for all</p>
        </div>
      </div>

      {/* Team Section with Swiper */}
      <div className="mt-40 text-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 border rounded-lg shadow-md">
                <Image
                  src={member.image}
                  width={150}
                  height={150}
                  alt={member.name}
                  className="mx-auto rounded-full"
                />
                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                  <Phone size={16} /> {member.phone}
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-600 mt-1">
                  <Mail size={16} /> {member.email}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-40 text-center">
        {/* Feature: Free and Fast Delivery */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full text-white">
            <Truck size={32} />
          </div>
          <h3 className="mt-4 text-lg font-bold">Free and Fast Delivery</h3>
          <p className="text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>
        {/* Feature: 24/7 Customer Service */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full text-white">
            <Clock size={32} />
          </div>
          <h3 className="mt-4 text-lg font-bold">24/7 Customer Service</h3>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>
        {/* Feature: Money Back Guarantee */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black border-8  border-bg-gray-400  rounded-full text-white">
            <ShieldCheck size={32} />
          </div>
          <h3 className="mt-4 text-lg font-bold">Money Back Guarantee</h3>
          <p className="text-gray-600">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
