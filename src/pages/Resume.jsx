import React from "react";
import { FaCode, FaFrownOpen, FaWordpress } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Resume = () => {
  const dataItems = [
    { name: "React JS", percentage: 80 },
    { name: "Next JS", percentage: 75 },
    { name: "Html/Css", percentage: 80 },
    { name: "Wordpress", percentage: 90 },
    { name: "Django", percentage: 30 },

    // Add more data items as needed
  ];

  // education skill
  const educationData = [
    {
      id: 1,
      title: "Bachelor in Computer Application",
      grade: "grade",
      university: "Tribhuvan University (2019 - 2024)",
      description:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      id: 1,
      title: "Higher Education (11 & 12)",
      grade: "grade",
      university: "Gurukul Secondary School (2017 - 2018)",
      description:
        "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
    },
    {
      id: 1,
      title: "Secondary School Education",
      grade: "grade",
      university: "Shree Mahendra H.S School (2015-2016)",
      description:
        "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
    },
  ];
  const percentage = 66;

  // front-end
  const data = [
    { percentage: 80, title: "React " },
    { percentage: 80, title: "Html/Css" },
    { percentage: 85, title: "Bootstrap" },
    { percentage: 90, title: "Tailwind Css" },
  ];

  return (
    <>
      <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3 bg-white rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-sm overflow-auto">
        <div className="About flex flex-col  ">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer ">
            Resume
          </div>
          <hr className=" flex my-2  h-full w-full bg-gray-800 " />

          <div className=" py-4 ml-6 mt-3 mb-20 w-[90%] flex  justify-between mr-3 sm:flex-row flex-col">
            <div className="flex  w-[100%] flex-col sm:mr-2 mr-2">
              <p className="ml-4 text-[15px] text-sm text-[#4c7753]">
                2015-2023
              </p>
              <h4 className="pl-4 pb-4 text-[20px] font-semibold w-[100%] text-[#54595F] ">
                EDUCATIONAL QUALITY
              </h4>
              <ol className="relative border-l border-gray-200 dark:border-gray-500  ">
                <ul>
                  {educationData.map((item) => (
                    <li
                      key={item.id}
                      className="mb-10 ml-6 border p-2 rounded-md shadow-md bg-gradient-to-r from-[#e0e3e5] to-[#ffffff]"
                    >
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#bbdac0] rounded-full -left-3 ring-8 ring-white">
                        <svg
                          className="w-2.5 h-2.5  dark:text-[#4c7753]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>

                      <h3 className="flex items-center mb-1 text-lg font-semibold text-[#54595F]">
                        {item.title}{" "}
                        <span className=" ml-2 bg-white text-sm font-medium mr-2 px-2.5 py-1 rounded dark:bg-white text-[#4c7753] shadow-md">
                          {item.grade}
                        </span>
                      </h3>

                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {item.university}
                      </time>
                      <hr className="flex my-2 h-full w-full bg-gray-800" />
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </ol>
            </div>
            <div className="flex justify-start w-[100%] flex-col ml-6  ">
              <p className=" text-[15px] text-sm text-[#4c7753]">2019-2025</p>
              <h4 className=" pb-3 text-[20px] font-semibold w-[100%] text-[#54595F] ">
                DEVELOPMENT SKILL
              </h4>

              <div>
                <p className=" text-[15px] text-sm dark:text-gray-800 flex font-medium">
                  <FaCode className="text-[25px] text-[#4c7753] mr-3" /> CODING
                </p>
                <hr className=" flex my-2   w-[25%] bg-gray-800 " />

                {dataItems.map((item, index) => (
                  <div key={index} className="mr-6 sm:mr-2">
                    <div className="flex justify-between mb-2 mt-2  ">
                      <span className="text-base font-medium text-[#54595F] ">
                        {item.name}
                      </span>
                      <span className="text-sm font-medium text-[#4c7753] dark:text-black">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 ">
                      <div
                        className="bg-[#4c7753] h-2 rounded-full"
                        style={{
                           width: `${item.percentage}%`
                           
                          
                  

                      }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[15px] text-sm dark:text-gray-800 flex font-medium">
                <FaCode className="text-[25px] text-[#4c7753] mr-3" /> FRONT-END
              </p>
              <hr className=" flex my-2   w-[25%] bg-gray-800 " />

              <div class="grid grid-cols-2  place-content-stretch mt-2 h-48 ...">
                {data.map((item, index) => (
                  <div className="flex flex-col items-center mr-6 sm:mr-2" key={index}>
                    <h1 className="text-[#4c7753] p-4">
                      <CircularProgressbar 
                        value={item.percentage}
                        text={`${item.percentage}%`}
                        styles={{
                          path: {
                            stroke: '#4c7753', // Green color
                          },
                          text: {
                            fill: '#4c7753', // Green color
                            fontSize: '20px',
                          },
                        }}
                      />
                    </h1>
                    <h2 className="flex text-[20px] font-semibold text-[#54595F] text-center">
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
