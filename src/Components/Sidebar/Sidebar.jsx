import React, { useEffect } from "react";
import logo from "../../assets/logo-BfNap0Pe.png";
import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";

export default function Sidebar() {

  useEffect(() => {
    initFlowbite()
  }, [])
  

  return (
    <>
      <div className="bg-[#f4f2ee]">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="text-heading bg-transparent cursor-pointer box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 border-e border-default">
            <div>
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <ul className="space-y-4 mt-6 font-medium">
              <li className="bg-primary rounded-xl font-bold text-[19px] hover:scale-105 shadow-lg shadow-orange-300 hover:shadow-orange-50 transition-all mb-6">
                <Link
                  to="/"
                  className="flex items-center p-2 px-6 text-light py-1.5 rounded-base"
                >
               <i className="fa-solid fa-utensils"></i>
                  <span className="ms-3">Meals</span>
                </Link>
              </li>
              <li className="rounded-xl text-lg hover:scale-105 transition-all mb-6 border border-gray-300">
                <Link
                  to="/"
                  className="flex items-center px-6 p-2 py-1.5 rounded-base"
                >
                  <i className="fa-solid fa-utensils"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Ingredients
                  </span>
                </Link>
              </li>
              <li className="rounded-xl text-lg hover:scale-105 transition-all mb-6 border border-gray-300">
                <Link
                  to="/"
                  className="flex items-center px-6 p-2 py-1.5 rounded-base"
                >
                 <i className="fa-solid fa-utensils"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Area</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
