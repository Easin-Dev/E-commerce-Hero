"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { AiOutlineLike, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ এটি বর্তমান পেজের URL রিটার্ন করবে
  const locale = pathname.split("/")[1] || "en";
  console.log(locale);
  const nav = [
    { path: "/", name: "Home" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
    { path: "/signUp", name: "Sign Up" },
  ];

  return (
    <div className="drawer drawer-mobile">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <div className="drawer-content flex flex-col md:flex-row items-center justify-between py-4 border-b-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-semibold">Exclusive</div>
          <div className="md:hidden flex items-center">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              {menuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </label>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-24 mb-4 md:mb-0">
          {nav?.map((item) => (
            <div key={item.name} className="hover:border-b-2 border-black">
              <Link href={`/${locale}/${item.path}`}>{item.name}</Link>
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
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-2/3 h-full bg-base-100">
          <li className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="btn btn-square btn-ghost"
            >
              <AiOutlineClose size={24} />
            </button>
          </li>
          {nav?.map((item) => (
            <li key={item.name}>
              <Link href={`/${locale}/${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
