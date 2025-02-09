"use client";

import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck size={40} className="text-white" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones size={40} className="text-white" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-24 py-20">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full border-8 border-gray-300">
            {feature.icon}
          </div>
          <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
          <p className="text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
