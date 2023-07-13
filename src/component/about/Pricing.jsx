import React from "react";
import { FaFrownOpen, FaWordpress } from "react-icons/fa";

const Pricing = () => {
  return (
    <>
      <div className="font-semibold text-[#4c7753] mt-2  text-[24px]">
        Pricing
      </div>
      <hr className=" flex my-2  h-1 w-[5%] bg-gray-800 " />
      <div class="grid grid-cols-2 gap-4 place-content-stretch  mt-4  h-48 ...">
        <div className=" flex flex-col mr-4  border-r-2 border-[#7A7A7A]-4 justify-center items-center ">
          <h1 className="bg-[#bbdac0]  rounded-full p-2">
            <FaWordpress className=" text-[#4c7753] text-[36px] " />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">
            Wordpress Development
          </h2>

          <p className="flex text-[16px] text-[#7A7A7A] text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
        <h1 className="bg-[#bbdac0]  rounded-full p-2">
            <FaWordpress className=" text-[#4c7753] text-[36px] " />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">
            Wordpress Development
          </h2>

          <p className="flex text-[16px] text-[#7A7A7A] text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. .
          </p>
        </div>

      </div>
    </>
  );
};

export default Pricing;
