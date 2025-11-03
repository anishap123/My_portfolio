import React from "react";
import {
  FaCode,
  FaWordpress,
  FaFigma,
  FaCanva,
  FaPhotoshop,
} from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Resume = () => {
  const dataItems = [
    { name: "React JS", percentage: 80 },
    { name: "Next JS", percentage: 75 },
    { name: "Html/Css", percentage: 80 },
    { name: "Wordpress", percentage: 90 },
    { name: "Django", percentage: 30 },
  ];

  const educationData = [
    {
      id: 1,
      title: "Bachelor in Computer Application",
      complete: "complete",
      university: "Tribhuvan University (2019 - 2024)",
      description:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 2,
      title: "Higher Education (11 & 12)",
      complete: "complete",
      university: "Gurukul Secondary School (2017 - 2018)",
      description:
        "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
    },
    {
      id: 3,
      title: "Secondary School Education",
      complete: "complete",
      university: "Shree Mahendra H.S School (2015-2016)",
      description:
        "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
    },
  ];

  const data = [
    { percentage: 80, title: "React " },
    { percentage: 90, title: "Html/Css" },
    { percentage: 85, title: "Bootstrap" },
    { percentage: 90, title: "Tailwind Css" },
  ];

  const designtoolsdata = [
    { percentage: 90, title: "Canva" },
    { percentage: 80, title: "Figma" },
    { percentage: 70, title: "Photoshop" },
  ];

  return (
    <>
      <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3 bg-white rounded-md overflow-auto shadow-md">
        <div className="About flex flex-col">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer">
            Resume
          </div>
          <hr className="flex my-2 h-full w-full bg-gray-800" />

          <div className="py-4 ml-6 mt-3 mb-20 w-[90%] flex justify-between mr-3 sm:flex-row flex-col">
            {/* Education Section */}
            <div className="flex w-[100%] flex-col sm:mr-2 mr-2">
              <p className="ml-4 text-[15px] text-sm text-[#4c7753]">
                2015-2023
              </p>
              <h4 className="pl-4 pb-4 text-[20px] font-semibold text-[#54595F]">
                EDUCATIONAL QUALITY
              </h4>
              <ol className="relative border-l border-gray-200 dark:border-gray-500">
                <ul>
                  {educationData.map((item) => (
                    <li
                      key={item.id}
                      className="mb-10 ml-6 border p-2 rounded-md shadow-md bg-gradient-to-r from-[#e0e3e5] to-[#ffffff]"
                    >
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#bbdac0] rounded-full -left-3 ring-8 ring-white"></span>

                      <h3 className="flex items-center mb-1 text-lg font-semibold text-[#54595F]">
                        {item.title}
                        <span className="ml-2 bg-white text-sm font-medium px-2.5 py-1 rounded text-[#4c7753] shadow-md">
                          {item.complete}
                        </span>
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                        {item.university}
                      </time>
                      <hr className="flex my-2 h-full w-full bg-gray-800" />
                      <p className="mb-4 text-base font-normal text-gray-500">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </ol>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col w-[100%] ml-6">
              <p className="text-[15px] text-sm text-[#4c7753]">2019-2025</p>
              <h4 className="pb-3 text-[20px] font-semibold text-[#54595F]">
                DEVELOPMENT SKILL
              </h4>

              {/* Coding Section */}
              <p className="text-[15px] text-sm dark:text-gray-800 flex font-medium">
                <FaCode className="text-[25px] text-[#4c7753] mr-3" /> CODING
              </p>
              <hr className="flex my-2 w-[25%] bg-gray-800" />

              {dataItems.map((item, index) => (
                <div key={index} className="mr-6 sm:mr-2 mb-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-[#54595F]">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium text-[#4c7753]">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#4c7753] h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              {/* Front-end Section */}
              <p className="mt-10 text-[15px] text-sm dark:text-gray-800 flex font-medium">
                <FaCode className="text-[25px] text-[#4c7753] mr-3" /> FRONT-END
              </p>
              <hr className="flex my-2 w-[25%] bg-gray-800" />

              <div className="grid grid-cols-2 gap-5 mt-4">
                {data.map((item, index) => (
                  <div
                    className="flex flex-col items-center p-3 bg-gradient-to-r from-[#eef7f0] to-[#ffffff] rounded-xl shadow-md hover:shadow-lg transition duration-300"
                    key={index}
                  >
                    <div className="text-[#4c7753] p-2 w-20">
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={{
                          path: { stroke: "#4c7753" },
                          text: { fill: "#4c7753", fontSize: "16px" },
                        }}
                      />
                    </div>
                    <h2 className="text-[18px] font-semibold text-[#54595F] text-center mt-2">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>

              {/* Design Tools Section */}
              <p className="mt-10 text-[15px] text-sm dark:text-gray-800 flex font-medium">
                🎨 DESIGN TOOLS
              </p>
              <hr className="flex my-2 w-[35%] bg-gray-800" />

              <div className="grid grid-cols-3 gap-5 mt-4">
                {designtoolsdata.map((item, index) => (
                  <div
                    className="flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f8f2] to-[#ffffff] shadow-md rounded-2xl py-4 px-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    key={index}
                  >
                    <div className="text-[#4c7753] w-16 mb-2">
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={{
                          path: { stroke: "#4c7753" },
                          text: { fill: "#4c7753", fontSize: "14px" },
                        }}
                      />
                    </div>
                    <h2 className="text-[18px] font-semibold text-[#54595F] text-center">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
