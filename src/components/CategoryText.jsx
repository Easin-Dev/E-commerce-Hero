"use client";
import React from "react";
export default function categoryText({ categoryText }) {
  return (
    <div>
      <h1 className={` border-l-8 rounded border-red-500 `}>
        <span className="ml-2 text-2xl text-red-500 font-bold">
          {categoryText}
        </span>
      </h1>
    </div>
  );
}
