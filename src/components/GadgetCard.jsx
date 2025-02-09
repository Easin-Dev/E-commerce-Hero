"use client";

import { motion } from "framer-motion";

export default function GadgetCard() {
  return (
    <div className="flex items-center justify-center  my-20">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-black p-8 rounded-3xl shadow-2xl w-[90%] max-w-7xl">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-white space-y-4">
          <p className="text-green-400 font-semibold">Categories</p>
          <h1 className="text-5xl font-bold">Enhance Your Music Experience</h1>
          <div className="flex space-x-4 text-center">
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center items-center rounded-full">
              <p className="text-lg font-bold">23</p>
              <span className="text-xs font-bold">Hours</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center items-center rounded-full">
              <p className="text-lg font-bold">05</p>
              <span className="text-xs font-bold">Days</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center items-center rounded-full">
              <p className="text-lg font-bold">59</p>
              <span className="text-xs font-bold">Minutes</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col justify-center items-center rounded-full">
              <p className="text-lg font-bold">35</p>
              <span className="text-xs font-bold">Seconds</span>
            </div>
          </div>
          <button className="btn btn-info w-56">Buy Now!</button>
        </div>

        {/* Right Side - 3D Image */}
        <motion.div
          initial={{ scale: 0.9, rotateY: 0 }}
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full md:w-1/2 flex justify-center items-center"
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
