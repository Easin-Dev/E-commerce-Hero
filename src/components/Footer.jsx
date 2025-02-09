"use client";

import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          <div className="mt-4 flex   p-2 rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent input input-bordered border-white input-md w-full max-w-xs  placeholder-white"
            />
            <button className="btn btn-error">
              <Send />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg">Support</h3>
          <p className="text-gray-400 text-sm mt-2">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-gray-400">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Link</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-bold text-lg">Download App</h3>
          <p className="text-gray-400 text-sm mt-2">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 mt-2">
            <div className="bg-white p-2 rounded-lg">
              <img src="/qr-code.png" alt="QR Code" className="w-16 h-16" />
            </div>
            <div className="flex flex-col gap-2">
              <img src="/google-play.png" alt="Google Play" className="w-24" />
              <img src="/app-store.png" alt="App Store" className="w-24" />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
