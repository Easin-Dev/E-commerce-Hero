"use client";
import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function categoryText({ categoryText }) {
  return (
    <div>
      <h1 className={`${ubuntu.className} border-l-8 rounded border-red-500 `}>
        <span className="ml-2 text-2xl text-red-500 font-bold">
          {categoryText}
        </span>
      </h1>
    </div>
  );
}
