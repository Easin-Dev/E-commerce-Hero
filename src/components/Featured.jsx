"use client";

import Image from "next/image";

export default function ProductGrid() {
  return (
    <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left Side - Single Card */}
      <div className="md:col-span-1 relative group overflow-hidden rounded-xl h-[100%]">
        <Image
          src="https://i.ibb.co.com/SX961bVs/martin-katler-ca-Nzzoxls8-Q-unsplash.jpg"
          alt="PlayStation 5"
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">PlayStation 5</h2>
          <p className="text-sm">Black and White version coming soon.</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Side - Three Cards */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Single Card */}
        <div className="relative group overflow-hidden rounded-xl md:col-span-2 h-[400px]">
          <Image
            src="https://i.ibb.co.com/8ns7Mbx5/images-2.jpg"
            alt="Women’s Collections"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Women’s Collections</h2>
            <p className="text-sm">Featured collections with a unique vibe.</p>
            <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="relative group overflow-hidden rounded-xl h-[400px]">
          <Image
            src="https://i.ibb.co.com/fz2q6R2z/michael-c-j89-WIerd8e-Q-unsplash.jpg"
            alt="Speakers"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Speakers</h2>
            <p className="text-sm">Amazon wireless speakers.</p>
            <button className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl h-[400px]">
          <Image
            src="https://i.ibb.co.com/hRf1JY6c/jeroen-van-roij-s-LQt9-Pjs-Ccs-unsplash.jpg"
            alt="Perfume"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Perfume</h2>
            <p className="text-sm">GUCCI INTENSE OUD EDP</p>
            <button className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
