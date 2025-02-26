import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

export default function SignUpPage() {
  return (
    <div className="container max-w-7xl mx-auto border grid grid-cols-1 md:grid-cols-2 gap-4 my-10 p-6 md:p-14 items-center">
      <div className="flex justify-center">
        <Image
          src={
            "https://i.ibb.co.com/ZbqfWkV/cardmapr-nl-h-TUZW7-E7krg-unsplash.jpg"
          }
          width={400}
          height={450}
          alt="Signup Image"
          className="rounded-md w-full max-w-xs md:max-w-md"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-sm text-gray-600">Enter your details below</p>
        <div className="mt-6 flex flex-col items-center md:items-start">
          <input
            type="text"
            className="border-b p-2 w-full max-w-xs md:max-w-sm"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="border-b p-2 w-full max-w-xs md:max-w-sm mt-3"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="border-b p-2 w-full max-w-xs md:max-w-sm mt-3"
            placeholder="Enter your password"
          />
          <button className="mt-6 w-full max-w-xs md:max-w-sm py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
            Create Account
          </button>
          <button className="mt-4 w-full max-w-xs md:max-w-sm py-2 border rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 transition">
            <FaGoogle /> Sign up with Google
          </button>
          <p className="mt-5 text-gray-600">
            Already have an account?{" "}
            <Link href="/" className="text-red-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
