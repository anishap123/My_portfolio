import React from "react";
import BatteryGauge from "react-battery-gauge";

const Pricing = () => {
  return (
    <>
      <div className="font-semibold text-[#4c7753] text-[24px]">
        Pricing
      </div>

      <hr className="my-2 h-1 w-[5%] bg-[#4c7753]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        
        <div className="flex flex-col border-r-2 sm:border-[#7A7A7A] justify-center items-center p-4">
          <div className="bg-[#bbdac0] rounded-full p-2">
            <BatteryGauge value={80} className="w-10 h-10" />
          </div>
          <h2 className="text-[20px] font-semibold text-[#54595F] mt-2">
            React Js
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <div className="bg-[#bbdac0] rounded-full p-2">
            <BatteryGauge value={90} className="w-10 h-10" />
          </div>
          <h2 className="text-[20px] font-semibold text-[#54595F] mt-2">
            Wordpress Development
          </h2>
        </div>

      </div>
    </>
  );
};

export default Pricing;