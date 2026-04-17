import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "IT Officer",
    company: "Gurukul College",
    logoUrl: "/images/gurukul.png",
    duration: "05/2025 - 07/2025",
    points: [
      "Maintained and organized student and library records using Excel",
      "Automated grade management with Excel & Google Sheets",
      "Improved reporting workflow by creating digital reports",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AceTech Media and Technology Pvt Ltd",
    logoUrl: "/images/acetech.jpeg",
    duration: "09/2022 - 10/2024",
    points: [
      "Developed responsive and modern websites using React.js and Next.js",
      "Built user-friendly interfaces improving client satisfaction",
      "Performed testing and code reviews for better performance",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "J2-D2 Limited",
    logoUrl: "/images/j2d2.png",
    duration: "08/2023 - 02/2024",
    points: [
      "Developed DohaCare project using React.js, Redux, and Tailwind CSS",
      "Collaborated with remote teams and improved workflow",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Dream Tech Nepal",
    logoUrl: "/images/dreamtechnepal.png",
    duration: "01/2022 - 08/2022",
    points: [
      "Built and launched multiple news portals",
      "Created portfolio and consultancy websites for clients",
    ],
  },
];

const Experience = () => {
  // Parent animation (stagger)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white text-gray-800 py-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-semibold text-[#4c7753] mt-2 text-[22px] sm:text-[24px]">
          Experience
        </div>

        <hr className="my-2 h-1 w-[50px] bg-[#4c7753]" />

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#bbdac0] hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[45%]">
                  <div
                    className="p-4 sm:p-6 bg-gradient-to-r from-[#bbdac0] to-[#ffffff] 
                    border border-gray-100 rounded-xl shadow-lg 
                    hover:shadow-emerald-200 hover:border-[#bbdac0] 
                    transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Mobile Date */}
                    <span className="text-xs font-bold text-[#4c7753] mb-2 block md:hidden">
                      {exp.duration}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-[#4c7753] font-semibold text-sm mb-3">
                      {exp.company}
                    </p>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 mt-2 h-1.5 w-1.5 bg-[#4c7753] rounded-full"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Logo + Date */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center">
                  <div
                    className="flex items-center justify-center w-14 h-14 bg-white 
                    border-2 border-[#4c7753] rounded-full shadow-md overflow-hidden 
                    transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={exp.logoUrl}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`absolute whitespace-nowrap text-sm font-bold text-gray-500 ${
                      index % 2 === 0
                        ? "right-full mr-10"
                        : "left-full ml-10"
                    }`}
                  >
                    {exp.duration}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;