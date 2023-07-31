import React, { useState } from "react";
import { FaBookDead, FaPenAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return path === activeLink ? "active-link" : "";
  };

  return (
    <nav className="sm:hidden flex justify-center items-center bg-white shadow fixed top-0 left-0 w-full mb-0 z-50">
      <div className="flex flex-row ">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <div
            className={`flex mb-2 items-center gap-2 p-4 flex-col cursor-pointer ${isLinkActive(
              "/"
            )}`}
          >
            <FaUser className="hover:text-[#4c7753]" />
            <p className="">About</p>
          </div>
        </Link>

        <Link to="/resume" onClick={() => handleLinkClick("/resume")}>
          <div
            className={`flex items-center gap-2 p-4 flex-col hover:text-[#4c7753] cursor-pointer ${isLinkActive(
              "/resume"
            )}`}
          >
            <FaBookDead className="hover:text-[#4c7753]" />
            <p>Resume</p>
          </div>
        </Link>
        <hr className="my-2 h-full w-1 border-blue-gray-500" />
        <Link to="/work" onClick={() => handleLinkClick("/work")}>
          <div
            className={`flex items-center gap-2 p-4 flex-col cursor-pointer hover:text-[#4c7753] ${isLinkActive(
              "/work"
            )}`}
          >
            <FaPenAlt className="hover:text-[#4c7753]" />
            <p>Work</p>
          </div>
        </Link>
        <hr className="my-2 h-full w-1 border-blue-gray-500" />
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
          <div
            className={`flex items-center gap-2 p-4 cursor-pointer flex-col hover:text-[#4c7753] ${isLinkActive(
              "/contact"
            )}`}
          >
            <FaPhoneAlt className="hover:text-[#4c7753]" />
            <p>Contact</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
