import React from "react";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 4);

export default function OfferCountdownTimer() {
  return (
    <div>
      <div className={` ${ubuntu.className}`}>
        <h1 className="text-5xl font-bold text-black mt-1">
          Browse By Categorys
        </h1>
      </div>
    </div>
  );
}
