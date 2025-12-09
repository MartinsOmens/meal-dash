import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#262626] text-gray-300 px-4 sm:px-6 lg:px-8 py-12 mt-auto" id="contact-us">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo & About */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Meal<span className="text-green-600">Dash</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            MealDash is dedicated to bringing you delicious meals from your favorite restaurants directly to your doorstep. Experience convenience and taste like never before.
          </p>
        </div>

        {/* Company Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-white text-lg sm:text-xl font-semibold">Company</h2>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-white text-lg sm:text-xl font-semibold">Get In Touch</h2>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li>Phone: +234 506 780 9950</li>
            <li>Email: mealdash@info.com</li>
            <li>Address: 123 Main Street, Lagos, Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MealDash. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
