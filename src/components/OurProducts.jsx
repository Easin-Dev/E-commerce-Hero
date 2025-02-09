"use client";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { HiOutlineEye, HiOutlineShoppingBag } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";

export default function OurProducts() {
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
    {
      id: 5,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 6,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 7,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 8,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 9,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 10,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
    {
      id: 11,
      title: "S-Series Comfort Chair",
      price: "$375",
      image: "/chair.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-5 mt-10">
      {products?.map((product) => (
        <div
          key={product.id}
          className={`relative card bg-base-100 w-[100%] shadow-xl `}
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="absolute px-2 flex items-center  text-red-600 rounded-md shadow-lg top-3 left-3 bg-white">
            <h1 className="font-bold">-40%</h1>
            <h1 className="">
              <CiShoppingTag size={20} />
            </h1>
          </div>
          <div className="absolute flex flex-col gap-3 right-3 top-3">
            <button className="btn btn-circle btn-sm border-0">
              <AiOutlineLike size={16} />
            </button>
            <button className="btn btn-circle btn-sm">
              <HiOutlineEye size={16} />
            </button>
          </div>
          <div className="p-[16px] flex-grow-0">
            <h2 className="card-title">i Phone 16 proMax</h2>
            <div className="flex gap-2">
              <p className="text-red-600 font-bold">$1000</p>
              <p className="text-red-600 line-through">$1000</p>
            </div>
            <div className="flex items-center  mt-4  gap-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>(46)</div>
            </div>
            <div className="card-actions mt-3">
              <button className="btn btn-sm bg-black text-white hover:text-black hover:bg-red-500">
                Buy Now <HiOutlineShoppingBag />
              </button>
              <button className="btn btn-sm border-red-500 btn-outline ">
                Add <MdAddShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
