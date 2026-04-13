import React, { useState, useEffect } from "react";
import MyServices from "../component/about/MyServices";
import Pricing from "../component/about/Pricing";
import FunFact from "../component/about/FunFact";
import { FaGlobeEurope, FaMusic, FaSketch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

const About = () => {
  const birthdate = "2001-09-28";
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDateObj = new Date(birthdate);
      const currentDate = new Date();

      let yearsDiff = currentDate.getFullYear() - birthDateObj.getFullYear();
      const monthsDiff = currentDate.getMonth() - birthDateObj.getMonth();
      const daysDiff = currentDate.getDate() - birthDateObj.getDate();

      if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        yearsDiff -= 1;
      }

      setAge(yearsDiff);
    };

    calculateAge();
    const timer = setInterval(calculateAge, 1000);
    return () => clearInterval(timer);
  }, [birthdate]);

  const languages = [
    {
      name: "Dutch",
      level: "Intermediate",
      flag: "https://flagcdn.com/w40/nl.png",
    },
    {
      name: "English",
      level: "Fluent",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      name: "Nepali",
      level: "Native",
      flag: "https://flagcdn.com/w40/np.png",
    },
  ];

  return (
    <>
    <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:ml-0 sm:mr-8 mr-3 bg-white rounded-md overflow-auto shadow-md">
      <div className="flex flex-col">
        {/* ---------- ABOUT HEADER ---------- */}
        <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753]">
          About Me
        </div>
        <hr className="my-2 w-full bg-[#4c7753] h-[2px]" />

        {/* ---------- ABOUT INTRO ---------- */}
        <div className="flex flex-col ml-4 mr-4">
          <h2 className="font-semibold text-[#54595F] text-[20px]">
            Hello! I’m <span className="text-[#4c7753]">Anisha Poudel</span>
          </h2>
          <p className="text-[#7A7A7A] mt-3 leading-relaxed">
            A passionate{" "}
            <span className="font-semibold">Frontend Developer </span>
            with 3+ years of experience creating modern, responsive, and
            user-friendly web applications. Skilled in{" "}
            <span className="font-semibold">
              React.js, Next.js, Tailwind CSS, Bootstrap
            </span>
            , and <span className="font-semibold">WordPress</span>, with
            additional experience in backend collaboration using{" "}
            <span className="font-semibold">Django</span>. I’ve contributed to a
            variety of projects-from news portals to international web platforms
            always focused on clean, efficient, and scalable solutions.
          </p>

          {/* ---------- PERSONAL INFO ---------- */}
          {/* <div className="flex flex-col sm:flex-row justify-between mt-6 text-[#7A7A7A]">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <span className="font-semibold text-[#54595F]">AGE:</span> {age}
            </div>
            <div className="w-full sm:w-1/2">
              <span className="font-semibold text-[#54595F]">RESIDENCE:</span>{" "}
              Belgium (Temporary Address)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-4 text-[#7A7A7A]">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <span className="font-semibold text-[#54595F]">
                PERMANENT ADDRESS:
              </span>{" "}
              Bharatpur-9, Chitwan, Nepal
            </div>
            <div className="w-full sm:w-1/2">
              <span className="font-semibold text-[#54595F]">
                CURRENT ADDRESS:
              </span>{" "}
              Antwerp, Belgium
            </div>
          </div> */}
        </div>

        {/* ---------- SERVICES ---------- */}
        <div className="text-[25px] py-2 ml-4 mt-6 sm:mt-8">
          <MyServices />
        </div>

        {/* ---------- PRICING ---------- */}
        <div className="text-[25px] py-4 ml-4 mt-3 sm:mt-6 mb-6 sm:mb-10">
          <Pricing />
        </div>

        {/* ---------- FUN FACT ---------- */}
        <div className="text-[25px] py-4 ml-4 mb-6">
          <FunFact />
        </div>
        <div className="text-[25px] py-4 ml-4 mb-2">
          <div className="py-6 px-4">
            <div className="py-6 px-4">
              {/* Title */}
              <div className="mb-4">
                <h2 className="text-[22px] font-bold text-[#4c7753]">
                  Languages
                </h2>
                <div className="w-20 h-1 bg-[#4c7753] mt-2 rounded-full"></div>
              </div>

              {/* Language List */}
              <div className="flex flex-col gap-5">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#bbdac0] rounded-xl px-5 py-4 hover:scale-[1.02] transition duration-300"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src={lang.flag}
                        alt={`${lang.name} Flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-[#4c7753] font-semibold text-[18px]">
                        {lang.name}
                      </h3>
                      <p className="text-[#4c7753] text-[14px] mt-1">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
