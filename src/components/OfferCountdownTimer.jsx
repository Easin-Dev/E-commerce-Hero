import React from "react";
import OfferTimeCard from "./OfferTimeCard";

const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 4);

export default function OfferCountdownTimer() {
  return (
    <div className="px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-24">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Offer Time
        </h1>
        <OfferTimeCard targetDate={offerEndDate} />
      </div>
    </div>
  );
}
