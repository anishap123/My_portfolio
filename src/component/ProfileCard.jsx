import React from "react";
import image from "../image/ppsizephoto1.jpeg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>

      <div className="w-full sm:w-[35%] h-[90vh] mt-20 sm:mt-6 sm:ml-2 sm:mr-0 mx-auto max-w-md 
    bg-white 
    border-sm border-[#86a987] 
    rounded-lg 
    shadow-lg shadow-[#86a987]/80 
   
    transition-all duration-300">

        <div className="h-[60%] sm:h-[60%] w-[%] sm:w-[100%]">
          <div className="triangle flex h-full relative">
            <img
              className="h-full w-full rounded-t-lg  object-cover"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between h-[40%] sm:h-[50%]">
          <div className="p-5">
            <h5 className="mb-2 text-[24px] sm:text-[34px] font-bold tracking-tight text-gray-900 dark:text-black hover:text-[#4c7753]">
              Anisha Poudel
            </h5>

            <h1 className="flex justify-center text-[12px] sm:text-[14px] text-[#4c7753] mt-1 ml-3 p-2 ">
              <span className="relative h-[20px] sm:h-[24px] w-36 sm:w-40 overflow-hidden font-semibold">
                <span className="absolute h-full w-full -translate-y-full animate-slide leading-none">
                  Front-End Developer
                </span>
                <span className="ml-2 absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:0.90s]">
                  UI/UX Designer
                </span>
              </span>
            </h1>

            <hr className="flex my-2 w-full bg-gray-800 mt-4" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-row gap-3 justify-center mt-4">
              <Link to="https://www.facebook.com/anishapoudel.anishapoudel/">
                <FaFacebook className="text-blue-500 text-lg transition-transform duration-200 hover:scale-125 active:scale-110" target="blank" />
              </Link>
              <Link to="https://www.instagram.com/anishaa_poudel/">
                <FaInstagram className="text-red-400 text-lg transition-transform duration-200 hover:scale-125 active:scale-110" />
              </Link>
              <Link to="https://www.tiktok.com/@poudelanisha1">
                <FaTiktok className="text-lg transition-transform duration-200 hover:scale-125 active:scale-110 text-black" />
              </Link>
              <Link to="https://twitter.com/Anishap29213390">
                <FaTwitter className="text-lg transition-transform duration-200 hover:scale-125 active:scale-110 text-blue-400" />
              </Link>
              <Link to="https://github.com/anishap123">
                <FaGithub className="text-lg transition-transform duration-200 hover:scale-125 active:scale-110 text-black" />
              </Link>
              <Link to="https://www.linkedin.com/in/anisha-poudel-0905842a4/">
              <FaLinkedinIn className="text-lg transition-transform duration-200 hover:scale-125 active:scale-110 text-blue-400" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default ProfileCard;
