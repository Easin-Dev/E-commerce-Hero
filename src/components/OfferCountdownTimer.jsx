import React from "react";
import OfferTimeCard from "./OfferTimeCard";

const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 4);

export default function OfferCountdownTimer() {
  return (
    <div>
      <div className={`flex items-center gap-24`}>
        <h1 className="text-5xl font-bold text-black">Offer Time</h1>
        <OfferTimeCard targetDate={offerEndDate} />
      </div>
    </div>
  );
}
