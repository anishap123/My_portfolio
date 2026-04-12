import React from "react";

const experiences = [
  {
    role: "IT Officer",
    company: "Gurukul College",
    // 1. ADD LOGO URL HERE (Can be local path or URL)
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
  return (
    <section className="bg-white text-gray-800 py-20 px-4 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="font-semibold text-[#4c7753] mt-2 pl-4 text-[24px]">
          Experience
        </div>
        <hr className=" flex my-2 ml-4  h-1 w-[5%] bg-[#4c7753]" />

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#4c7753] hidden md:block"></div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* 1. Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-emerald-100 hover:border-[#4c7753] transition-all duration-300 relative">
                    {/* Date for Mobile Only */}
                    <span className="text-xs font-bold text-[#4c7753] mb-2 block md:hidden">
                      {exp.duration}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#4c7753] font-semibold text-sm mb-4">
                      {exp.company}
                    </p>

                    <ul className="space-y-3">
                      {experiences[index].points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="mr-2 mt-2 h-1.5 w-1.5 shrink-0 bg-[4c7753] rounded-full"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Central Dot and Date Container */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center">
                  
                  {/* The Circle - Modified to contain the image */}
                  <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-[#4c7753] rounded-full shadow-md overflow-hidden">
                    {/* 2. REPLACED INNER DOT WITH LOGO IMAGE */}
                    <img 
                      src={exp.logoUrl} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* THE DATE */}
                  <div
                    className={`absolute whitespace-nowrap text-sm font-bold text-gray-500 ${
                      index % 2 === 0 ? "right-full mr-10" : "left-full ml-10"
                    }`}
                  >
                    {exp.duration}
                  </div>
                </div>

                {/* 3. Spacer */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;