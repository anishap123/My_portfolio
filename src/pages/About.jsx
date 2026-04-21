import React from "react";
import MyServices from "../component/about/MyServices";
import Pricing from "../component/about/Pricing";
import FunFact from "../component/about/FunFact";
import Languages from "../component/about/Languages";
import ScrollReveal from "../component/animation/ScrollReveal";

const About = () => {
 

  return (
    <>
      <div className="... overflow-auto custom-scrollbar basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:ml-0 sm:mr-8 mr-3 bg-white rounded-md shadow-lg shadow-[#86a987]/80">
        <div className="flex flex-col">
          {/* ---------- ABOUT HEADER ---------- */}
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753]">
            About Me
          </div>
          <hr className="my-2 w-full bg-[#4c7753] h-[2px]" />

          {/* ---------- ABOUT INTRO ---------- */}

          <div className="flex flex-col ml-4 mr-2">
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
              <span className="font-semibold">Django</span>. I’ve contributed to
              a variety of projects-from news portals to international web
              platforms always focused on clean, efficient, and scalable
              solutions.
            </p>
          </div>

          {/* ---------- SERVICES ---------- */}
          <ScrollReveal>
            <div className="text-[25px] py-2 ml-4 mt-6 sm:mt-8">
              <MyServices />
            </div>
          </ScrollReveal>

          {/* ---------- PRICING ---------- */}
          <ScrollReveal>
            <div className="text-[25px] py-4 ml-4 mt-3 sm:mt-6 mb-6 sm:mb-10">
              <Pricing />
            </div>
          </ScrollReveal>
          {/* ---------- FUN FACT ---------- */}
          <ScrollReveal>
            <div className="text-[25px] py-4 ml-4 mb-6">
              <FunFact />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <Languages />
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default About;
