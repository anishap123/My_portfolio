import React from "react";
import {
  FaDatabase,
  FaFrownOpen,
  FaReacteurope,
  FaWordpress,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MyServices = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔥 Data array
  const services = [
    {
      icon: <FaReacteurope />,
      title: "Front-end",
      desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
    },
    {
      icon: <FaDatabase />,
      title: "Back-End",
      desc: "Handling data storage and implementing APIs to support the functionality of your web or mobile application.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress",
      desc: "WordPress development services to improve business websites.",
    },
    {
      icon: <FaFrownOpen />,
      title: "WordPress Security",
      desc: "Building and maintaining secure, high-performance WordPress websites.",
    },
  ];

  return (
    <>
      <div className="font-semibold text-[#4c7753] mt-4 text-[24px]  ">
        My Services
      </div>
      <hr className="flex my-2 h-1 w-[8%] bg-[#4c7753]" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 px-4 sm:px-6 lg:px-4"
        variants={container}
        initial="hidden"
        animate="visible"
        
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col p-4  border border-gray-300 rounded-lg 
            hover:bg-gradient-to-l from-white to-[#b3cab7] hover:shadow-xl"
          >
            <div className="mt-2 text-[#4c7753] text-[36px] 
            transition-transform duration-500 group-hover:rotate-12">
              {service.icon}
            </div>

            <h2 className="text-[20px] font-semibold text-[#54595F] mt-2">
              {service.title}
            </h2>

            <p className="text-[16px] text-[#7A7A7A]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MyServices;