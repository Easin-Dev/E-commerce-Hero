"use client";
import { useTranslations } from "next-intl";
import React from "react";
import LocalSwicher from "./local-swicher";
import { IoEarthOutline } from "react-icons/io5";

export default function OfferCard() {
  const t = useTranslations("offerCardText");
  return (
    <div className="bg-black text-white py-2 flex flex-col sm:flex-row sm:justify-between items-center sm:px-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl">{t("title")}</h1>
      <div className="text-xs sm:text-sm flex gap-2 items-center mt-2 sm:mt-0">
        <IoEarthOutline size={20} className="sm:w-5 sm:h-5" />
        <LocalSwicher />
      </div>
    </div>
  );
}
