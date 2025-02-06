"use client";
import React from "react";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import BannerSlider from "./BannerSlider";

export default function Banner() {
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  return (
    <div className="grid grid-cols-5 gap-10 mt-3">
      {/* Accordion */}
      <div className=" col-span-1 p-2  border">
        <div className="relative">
          {/* 🔹 Trigger Button */}
          <div
            onClick={() => setOpen(!open)}
            className="flex hover:text-blue-500 items-center px-4 py-2  hover:bg-gray-200 rounded-md"
          >
            Categories <ChevronRight className="ml-28 w-4 h-4" />
          </div>

          {/* 🔹 Dropdown Menu */}
          {open && (
            <div className="absolute top-0 left-[250px] mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h3 className="font-semibold text-lg">Shop by Category</h3>
                <button onClick={() => setOpen(false)}>
                  <X className="w-5 h-5 text-gray-500 hover:text-black" />
                </button>
              </div>

              {/* 🔹 Categories List */}
              <ul className="space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Women's Fashion
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Men’s Fashion
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Electronics
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Home & Lifestyle
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Health & Beauty
                </li>
              </ul>

              {/* 🔹 Extra Buttons */}
              <div className="mt-4">
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  View More
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          {/* 🔹 Trigger Button */}
          <div
            onClick={() => setNewOpen(!newOpen)}
            className="flex hover:text-blue-500 items-center px-4 py-2  hover:bg-gray-200 rounded-md"
          >
            Categories <ChevronRight className="ml-28 w-4 h-4" />
          </div>

          {/* 🔹 Dropdown Menu */}
          {newOpen && (
            <div className="absolute top-0 left-[250px] mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h3 className="font-semibold text-lg">Shop by Category</h3>
                <button onClick={() => setNewOpen(false)}>
                  <X className="w-5 h-5 text-gray-500 hover:text-black" />
                </button>
              </div>

              {/* 🔹 Categories List */}
              <ul className="space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Women's Fashion
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Men’s Fashion
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Electronics
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Home & Lifestyle
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Health & Beauty
                </li>
              </ul>

              {/* 🔹 Extra Buttons */}
              <div className="mt-4">
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  View More
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Electronics
          </button>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Medicine
          </button>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Sports & Outdoor
          </button>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Baby’s & Toys
          </button>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Groceries & Pets
          </button>
          <button className="flex hover:text-blue-500 items-center w-full px-4 py-2  hover:bg-gray-200 rounded-md">
            Health & Beauty
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className=" col-span-4 ">
        <BannerSlider />
      </div>
    </div>
  );
}
