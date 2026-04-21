import React from "react";
import {
  FaFileAlt,
  FaPenAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: FaUser, label: "About" },
    { path: "/resume", icon: FaFileAlt, label: "Resume" },
    { path: "/work", icon: FaPenAlt, label: "Work" },
    { path: "/contact", icon: FaPhoneAlt, label: "Contact" },
  ];

  return (
    <nav className="sm:hidden flex justify-center items-center bg-white  fixed top-0 left-0 w-full z-50 shadow-lg shadow-[#86a987]/80 ">
      <div className="flex flex-row font-semibold">

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link key={index} to={item.path}>
              <div
                className={`flex flex-col items-center gap-1 p-4 cursor-pointer transition-all duration-200
                ${isActive ? "text-[#4c7753]" : "text-gray-600"}
                hover:text-[#4c7753]`}
              >
                <Icon
                  className=" hover:scale-125 active:scale-110   text-lg
                    transition-transform duration-200
                    group-hover:scale-125
                    group-active:scale-110"
                />
                <p className="text-sm">{item.label}</p>
              </div>
            </Link>
          );
        })}

      </div>
    </nav>
  );
};

export default Navbar;