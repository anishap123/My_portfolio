import React from "react";
import image from "../image/profile3.jpg";
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
            <div className=" basis-[35%]  h-[90vh] mt-6 ml-2 mx-auto     max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-white">

      <div className="h-[100%] w-[100%] ">
        <div className="flex h-[60%] w-[100%] ">
          <img className=" h-full w-full rounded-t-lg " src={image} alt=" " />
        </div>
        
        <div className="flex flex-col items-center justify-between h-[40%]">
          <div className="p-5">
            <h5 className="mb-2 text-[34px] font-bold tracking-tight text-gray-900 dark:text-black">
              Anisha Poudel
            </h5>

            <h1 className="flex justify-center  text-[14px]  text-[#4c7753] mt-1 ml-3 p-2 ">
              <span className="relative  h-[20px] w-36 overflow-hidden">
                <span className="absolute h-full w-full -translate-y-full animate-slide leading-none ">
                  Front-End Developer
                </span>
                <span className="ml-2 absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:0.90s]">
                  UI/UX Designer
                </span>
              </span>
            </h1>

            <hr className=" flex my-2   w-full bg-gray-800 mt-4" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-row gap-3 justify-center mt-4 ">
              <Link to="https://www.facebook.com/anishapoudel.anishapoudel/">
              <FaFacebook className="text-blue-500 text-lg" target="blank" />
              </Link>
              <Link to="https://www.instagram.com/anishaa_poudel/ ">
              <FaInstagram className="text-red-400 text-lg" />
              </Link>
              <Link to="https://www.tiktok.com/@poudelanisha1">
              <FaTiktok className="text-lg text-black" />
              </Link>
              <Link to="https://twitter.com/Anishap29213390">
              <FaTwitter className="text-lg text-blue-400" />
              </Link>
              <Link to="https://github.com/anishap123">
              <FaGithub className="text-lg text-black" />
              </Link>
              <FaLinkedinIn className="text-lg text-blue-400" />
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProfileCard;
