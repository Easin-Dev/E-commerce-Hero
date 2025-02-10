"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
  };

  return (
    <div className="max-w-8xl mx-auto p-10">
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              📞 Call To Us
            </h3>
            <p className="text-gray-700">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-semibold">Phone: +880181112222</p>
          </div>
          <hr className="my-10" />
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              ✉️ Write To Us
            </h3>
            <p className="text-gray-700 ">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-semibold mt-3">Email: customer@exclusive.com</p>
            <p className="font-semibold">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="border p-2 w-full rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="border p-2 w-full rounded"
                required
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border p-2 w-full rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
