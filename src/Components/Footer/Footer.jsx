import React from "react";
import logo from "../../assets/logo-BfNap0Pe.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative z-50 rounded-lg bg-white">
        <div className="w-full max-w-7xl mx-auto p-4 md:py-4 ">
          <div className="sm:flex sm:justify-between sm:items-center py-3">
            <Link to="" className="flex items-center mb-3 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
              <img className="w-full max-w-15" src={logo} alt="footer-logo" />
              <span className="text-2xl font-semibold whitespace-nowrap">Recipe</span>
            </Link>
            <span className="text-blue-700 font-bold text-2xl">Route</span>
          </div>
          <hr className="border-gray-200 my-2 sm:mx-auto lg:my-8"/>
            <span className="sm:text-center block text-gray-500 sm:mb-2">© 2026 <a className="cursor-pointer hover:underline">Moataz Akram™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
