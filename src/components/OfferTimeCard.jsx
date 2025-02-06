"use client";
import React, { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function OfferTimeCard({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`flex items-center space-x-2 text-center text-black ${ubuntu.className}`}
    >
      {/* Days */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Days</p>
        <p className="text-3xl font-bold text-red-500">{timeLeft.days}</p>
      </div>

      {/* Colon */}
      <span className="text-3xl font-bold text-red-500 mt-5">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Hours</p>
        <p className="text-3xl font-bold text-red-500">{timeLeft.hours}</p>
      </div>

      {/* Colon */}
      <span className="text-3xl font-bold text-red-500 mt-5">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Minutes</p>
        <p className="text-3xl font-bold text-red-500">{timeLeft.minutes}</p>
      </div>

      {/* Colon */}
      <span className="text-3xl font-bold text-red-500 mt-5">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">Seconds</p>
        <p className="text-3xl font-bold text-red-500">{timeLeft.seconds}</p>
      </div>
    </div>
  );
}
