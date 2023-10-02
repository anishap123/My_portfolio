import React from "react";
import { FaAngular, FaCodeBranch, FaDatabase, FaFrownOpen, FaReacteurope, FaWordpress } from "react-icons/fa";

const MyServices = () => {
  return (
    <>
      <div className="font-semibold text-[#4c7753] mt-6 text-[24px]">My Services</div>
      <hr className="flex my-2 h-1 w-[8%] bg-[#4c7753]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg  hover:bg-gradient-to-l from-white to-[#b3cab7]">
          <h1 className="text-[#4c7753]">
            <FaReacteurope className="mt-2 text-[#4c7753] text-[36px]" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">Front-end</h2>
          <p className="flex text-[16px] text-[#7A7A7A]">Modern and mobile-ready website that will help you reach all of your marketing</p>
        </div>
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg  hover:bg-gradient-to-l from-white to-[#b3cab7]">
          <h1 className="text-[#4c7753]">
            <FaDatabase className="mt-2 text-[#4c7753] text-[36px]" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">Back-End</h2>
          <p className="flex text-[16px] text-[#7A7A7A]">handling data storage, and implementing APIs to support the functionality of your web or mobile application.</p>
        </div>
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg  hover:bg-gradient-to-l from-white to-[#b3cab7]">
          <h1 className="text-[#4c7753]">
            <FaWordpress className="mt-2 text-[#4c7753] text-[36px]" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">Wordpress</h2>
          <p className="flex text-[16px] mb-4 text-[#7A7A7A]">WordPress development services improve business websites.</p>
        </div>
        <div className="flex flex-col p-4 border border-gray-300 rounded-lg  hover:bg-gradient-to-l from-white to-[#b3cab7]">
          <h1 className="text-[#4c7753]">
            <FaFrownOpen className="mt-2 text-[#4c7753] text-[36px]" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">Wordpress-Security</h2>
          <p className="flex text-[16px]  text-[#7A7A7A]">building and maintaining WordPress websites, ensuring functionality, security, and performance.</p>
        </div>
      </div>
    </>
  );
};

export default MyServices;
