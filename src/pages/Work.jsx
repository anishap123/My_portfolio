import React from "react";
import Experience from "../component/work/Experience";


const Work = () => {
  const workdata = [
    {
      id: 1,
      title: "Nayanarayani",
      description: "news portal site",
      img: "../images/nayanarayani.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Patrikapress",
      description: "news portal site",
      img: "/images/patrikapress.png",
      link: "https://patrikapress.com/",
    },
    {
      id: 3,
      title: "Maxengineering",
      description: "engineering website",
      img: "/images/max.png",
      link: "#",
    },
    {
      id: 4,
      title: "Presu",
      description: "skincare website",
      img: "/images/presu.png",
      link: "#",
    },
    {
      id: 5,
      title: "Dohocare",
      description: "Hospitals Related Projects",
      img: "/images/dohocare.png",
      link: "https://j2d2.co.uk/wp-content/uploads/2024/05/Dohocare-Seed-funding-R-1-proposal-2024-25.pdf",
    },
    {
      id: 6,
      title: "Digital Menu System",
      description: "Hotel Website",
      img: "/images/acetech.jpeg",
      link: "#",
    },
  ];

  return (
    <>
    <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3 bg-white rounded-md overflow-auto">
      
      <div className="flex flex-col">
        <div className="text-[25px] py-4  ml-4 font-bold text-[#4c7753]">
          Work
        </div>

        <hr className="my-2 w-full bg-gray-800" />
        <div className="font-semibold text-[#4c7753] mt-2 pl-4 text-[24px]">
       Project
      </div>
      <hr className=" flex my-2 ml-4  h-1 w-[5%] bg-[#4c7753]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
          {workdata.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              
              {/* Image */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-3 rounded shadow-md w-[150px] h-[100px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>
              </a>

              {/* Title */}
              <h2 className="mt-3 text-[18px] font-semibold text-[#54595F]">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] text-[#7A7A7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Experience />
      </div>
    </div>
    
    </>
  );
};

export default Work;