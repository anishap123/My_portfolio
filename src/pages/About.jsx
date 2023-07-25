import React from "react";
import MyServices from "../component/about/MyServices";
import Pricing from "../component/about/Pricing";
import FunFact from "../component/about/FunFact";

const About = () => {
  return (
    <>
      <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3 bg-white rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-sm overflow-auto">
        <div className="About flex flex-col">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer">
            About Me
          </div>
          <hr className="flex my-2 h-full w-full bg-gray-800" />
          <div className="flex ml-4 flex-col">
            <h2 className="font-semibold text-[#54595F] text-[20px]">
              Hello ! I am Anisha Poudel.
            </h2>
            <br />
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              nostrum voluptatem similique praesentium corporis soluta, placeat
              enim, esse expedita, saepe veritatis error fugit quasi nesciunt?
              Earum, officia! Doloremque, ipsum quae!
            </p>
            <div className="flex flex-col sm:flex-row justify-between mt-6 text-[#7A7A7A] ">
              <h2 className="w-full sm:w-[50%]">
                <span className="font-semibold text-[#54595F]">AGE : .....</span>
                22
              </h2>
              <h2 className="w-full sm:w-[50%] mt-4 sm:mt-0">
                <span className="font-semibold text-[#54595F]">
                  {" "}
                  RESIDENCE : ....
                </span>
                Bharatpur 9, Chitwan
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-4 text-[#7A7A7A]">
              <h2 className="w-full sm:w-[50%] mt-4 sm:mt-0">
                <span className="font-semibold text-[#54595F]">
                  {" "}
                  ADDRESS : ...
                </span>
                Bharatpur 9, Chitwan
              </h2>
            </div>
          </div>
          <div className="text-[25px] py-4 ml-4 mt-3 mb-6 sm:mb-20">
            <MyServices />
          </div>
          <div className="text-[25px] py-4 ml-4 mt-40 sm:mt-10 mb-6 sm:mb-10">
            <Pricing />
          </div>
          <div className="text-[25px] py-4 ml-4">
            <FunFact />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
