"use client";
import { useTranslations } from "next-intl";
import React from "react";
import LocalSwicher from "./local-swicher";
import { IoEarthOutline } from "react-icons/io5";

export default function OfferCard() {
  const t = useTranslations("offerCardText");
  return (
    <div className="bg-black text-white py-2  flex justify-around">
      <h1 className="text-xl ml-24">{t("title")}</h1>
      <div className="text-xs">
        <div className="flex gap-2 items-center">
          <IoEarthOutline size={25} />
          <LocalSwicher />
        </div>
      </div>
    </div>
  );
}
