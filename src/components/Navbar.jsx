"use client";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { AiOutlineLike } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const nav = [
    { path: "/home", name: "Home" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
    { path: "/signUp", name: "Sign Up" },
  ];

  return (
    <div className={`  flex items-center justify-around py-4 border-b-2`}>
      {/* ✅ ফন্ট অ্যাপ্লাই করা */}
      <div className={`text-2xl font-semibold`}>Exclusive</div>
      <div className="flex gap-24">
        {nav?.map((item) => (
          <div key={item.name} className="hover:border-b-2 border-black">
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <button className="btn btn-circle">
          <AiOutlineLike size={24} />
        </button>
        <button className="btn btn-circle btn-outline">
          <FiShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
}
