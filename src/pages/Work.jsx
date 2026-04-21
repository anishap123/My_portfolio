import React from "react";
import { motion } from "framer-motion";
import Experience from "../component/work/Experience";

const Work = () => {
  const workdata = [
    
    {
      id: 1,
      title: "Patrikapress",
      description: "news portal site",
      img: "/images/patrikapress.png",
      link: "https://patrikapress.com/",
    },
    {
      id: 2,
      title: "Nayanarayani",
      description: "news portal site",
      img: "../images/nayanarayani.jpg",
      link: "https://nayanarayani.com/?p=6778",
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
    <div className="... overflow-auto custom-scrollbar basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:ml-0 sm:mr-8 mr-3 bg-white rounded-xl shadow-lg shadow-[#86a987]/80">
      
      <div className="flex flex-col">
        
        {/* Title */}
        <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753]">
          Work
        </div>

        <hr className="my-2 w-full bg-[#4c7753] h-[2px]" />

        {/* Experience */}
        <Experience />

        {/* Projects Title */}
        <div className="font-semibold text-[#4c7753] mt-4 pl-4 text-[24px]">
          Projects
        </div>

        <hr className="my-2 ml-4 h-1 w-[5%] bg-[#4c7753]" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {workdata.map((item) => (
            
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center text-center 
              bg-white rounded-xl p-4 hover:shadow-[#86a987]
              shadow-md hover:shadow-xl 
              transition-all duration-300"
            >
              
              {/* Image */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-50 p-3 rounded-lg w-[150px] h-[100px] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-contain 
                    group-hover:scale-110 transition duration-300"
                  />
                </div>
              </a>

              {/* Title */}
              <h2 className="mt-3 text-[18px] font-semibold text-gray-700 group-hover:text-[#4c7753] transition">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] text-gray-500">
                {item.description}
              </p>

              {/* Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-1 text-sm bg-[#4c7753] text-white rounded-full 
                opacity-0 group-hover:opacity-100 transition duration-300"
              >
                View Project
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;