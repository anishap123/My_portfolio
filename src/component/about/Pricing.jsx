import React from "react";
import { FaFrownOpen, FaWordpress } from "react-icons/fa";
import BatteryGauge from 'react-battery-gauge';

const Pricing = () => {

  
  return (
    <>
      <div className="font-semibold text-[#4c7753]  text-[24px]">
        Pricing
      </div>
      <hr className="flex my-2 h-1 w-[5%] bg-[#4c7753]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col mr-4 border-r-2 sm:  sm:border-[#7A7A7A]-4  justify-center items-center p-4">
          <h1 className="bg-[#bbdac0] rounded-full p-2">
            <BatteryGauge value={80} className="w-10 h-10" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">
            React js
          </h2>
          <p className="flex text-[16px] text-[#7A7A7A] text-center">
            
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="bg-[#bbdac0] rounded-full p-2">
            <BatteryGauge value={90} className="w-10 h-10" />
          </h1>
          <h2 className="flex text-[20px] font-semibold text-[#54595F]">
            Wordpress Development ........
          </h2>
          <p className="flex text-[16px] text-[#7A7A7A] text-center">
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
