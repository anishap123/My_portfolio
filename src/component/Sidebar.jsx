import React from "react";
import {
  FaBookDead,
  FaPenAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: FaUser, label: "About" },
    { path: "/resume", icon: FaBookDead, label: "Resume" },
    { path: "/work", icon: FaPenAlt, label: "Work" },
    { path: "/contact", icon: FaPhoneAlt, label: "Contact" },
  ];

  return (
    <div className="hidden sm:flex w-[65vh] h-[8%] md:w-[8%] border ml-4 mt-8 bg-white rounded-md shadow-lg shadow-[#86a987]/80 ">
      <div className="flex flex-col font-semibold w-full">

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <React.Fragment key={index}>

              <Link to={item.path}>
                <div
                  className={`group flex flex-col items-center gap-2 p-4 cursor-pointer font-sans transition-all duration-200 font-semibold
                  ${isActive ? "text-[#4c7753]" : "text-black]"}
                  hover:text-[#4c7753]`}
                >
                  <Icon
                    className="
                      text-lg
                      transition-transform duration-200
                      group-hover:scale-125
                      group-active:scale-110
                    "
                  />

                  <p className="text-sm">{item.label}</p>
                </div>
              </Link>

              {/* Divider except last item */}
              {index !== navItems.length - 1 && (
                <hr className="my-2 border-gray-200 w-full" />
              )}

            </React.Fragment>
          );
        })}

      </div>
    </div>
  );
};

export default Sidebar;