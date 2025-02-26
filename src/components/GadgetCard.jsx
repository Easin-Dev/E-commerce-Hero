"use client";

import { motion } from "framer-motion";

export default function GadgetCard() {
  return (
    <div className="flex items-center justify-center my-10 px-4 md:px-10">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-black p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-7xl">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
          <p className="text-green-400 font-semibold">Categories</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Enhance Your Music Experience
          </h1>
          <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
            {["Hours", "Days", "Minutes", "Seconds"].map((unit, index) => (
              <div
                key={index}
                className="bg-white text-black w-14 h-14 md:w-16 md:h-16 flex flex-col justify-center items-center rounded-full"
              >
                <p className="text-base md:text-lg font-bold">
                  {index * 10 + 5}
                </p>
                <span className="text-xs font-bold">{unit}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-info w-full md:w-56">Buy Now!</button>
        </div>

        {/* Right Side - 3D Image */}
        <motion.div
          initial={{ scale: 0.9, rotateY: 0 }}
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
        >
          <img
            src="https://i.ibb.co.com/mVKffkQx/vecteezy-3d-megaphone-speaker-11964949-1.png"
            alt="Gadget"
            className="max-w-xs md:max-w-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
