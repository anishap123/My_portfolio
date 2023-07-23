import { React, useState } from 'react';
import { FaBookDead, FaPenAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return path === activeLink ? 'active-link' : '';
  };

  return (
    <>
      <div className="w-[7%] h-[65vh] border ml-4 mt-8 bg-white rounded-md shadow-sm">
        <div className="flex flex-col">
          <Link to="/" onClick={() => handleLinkClick('/')}>
            <div className={`flex mb-2 items-center gap-2 p-4 flex-col cursor-pointer ${isLinkActive('/')}`}>
              <FaUser className="hover:text-[#4c7753]" />
              <p className="">About</p>
            </div>
          </Link>
          <hr className="flex my-2 h-full w-full bg-gray-800" />
          <Link to="/resume" onClick={() => handleLinkClick('/resume')}>
            <div className={`flex items-center gap-2 p-4 flex-col hover:text-[#4c7753] cursor-pointer ${isLinkActive('/resume')}`}>
              <FaBookDead className="hover:text-[#4c7753]" />
              <p>Resume</p>
            </div>
          </Link>
          <hr className="flex my-2 border-blue-gray-500" />
          <Link to="/work" onClick={() => handleLinkClick('/work')}>
            <div className={`flex items-center gap-2 p-4 flex-col cursor-pointer hover:text-[#4c7753] ${isLinkActive('/work')}`}>
              <FaPenAlt className="hover:text-[#4c7753]" />
              <p>Work</p>
            </div>
          </Link>
          <hr className="flex my-2 border-blue-gray-500" />
          <Link to="/contact" onClick={() => handleLinkClick('/contact')}>
            <div className={`flex items-center gap-2 p-4 flex-col cursor-pointer hover:text-[#4c7753] ${isLinkActive('/contact')}`}>
              <FaPhoneAlt className="hover:text-[#4c7753]" />
              <p>Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
