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
           <div className="flex gap-4 justify-center mt-4">

              <a href="https://www.facebook.com/anishapoudel.fb/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-500 text-lg hover:scale-125 transition" />
              </a>

              <a href="https://www.instagram.com/anishaa_poudel/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-red-400 text-lg hover:scale-125 transition" />
              </a>

              <a href="https://www.tiktok.com/@poudelanisha1" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-black text-lg hover:scale-125 transition" />
              </a>

              <a href="https://twitter.com/Anishap29213390" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-lg hover:scale-125 transition" />
              </a>

              <a href="https://github.com/anishap123" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black text-lg hover:scale-125 transition" />
              </a>

              <a href="https://www.linkedin.com/in/anisha-poudel-0905842a4/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-400 text-lg hover:scale-125 transition" />
              </a>

            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default ProfileCard;
