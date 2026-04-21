import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaMailBulk,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";
import image from "../image/contactimg.png";
import ContactForm from "../component/contact/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="  ... overflow-auto custom-scrollbar basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3  bg-white rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-sm  shadow-lg shadow-[#86a987]">
        <div className="About flex flex-col ">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer ">
            Contact
          </div>
          <hr className="my-2 w-full bg-[#4c7753] h-[2px] " />
        

          <div className=" py-4 ml-2   w-[98%] flex  justify-between  sm:flex-row flex-col ">
            <div className="flex w-full sm:w-[35%] flex-col shadow-md rounded-md bg-slate-100">
              <div className="rounded-md p-3">
                <img src={image} alt="" className="h-full w-full rounded" />
              </div>
              <h2 className="ml-4 text-[#54595F] font-semibold text-xl sm:text-2xl">
                Anisha Poudel
              </h2>
              <div className="flex text-gray-400 ml-4 font-sans">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </div>
              <span className="flex flex-row ml-4 mt-3">
                <FaPhone className="text-[#4c7753] mt-1" />
                <p className="ml-3 text-[#54595F] text-sm sm:text-base">
                  +32456860044
                </p>
              </span>
              <span className="flex flex-row ml-3 mt-1">
                <FaMailBulk className="text-[#4c7753] mt-1" />
                <p className=" text-sm text-[#54595F] mr-1 sm:text-base">
                  anishapoudel570@gmail.com
                </p>
              </span>
              <h2 className="ml-4 text-[#54595F] text-base sm:text-xl mt-4">
                FIND WITH ME
              </h2>
              <div className="flex justify-center gap-2 ml-4 mt-2 mb-4">

                <a
                  href="https://www.facebook.com/anishapoudel.anishapoudel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare className="text-[35px] text-blue-400 shadow-md p-2 bg-white" />
                </a>

                <a
                  href="https://github.com/anishap123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare className="text-[35px] shadow-md p-2 bg-white" />
                </a>

                <a
                  href="https://twitter.com/Anishap29213390"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitterSquare className="text-[35px] text-blue-400 shadow-md p-2 bg-white" />
                </a>

              </div>
            </div>

            <ContactForm />
          </div>
          <div className="flex w-[100%] justify-center  mb-4  ml-2 sm:-ml-0 mr-4 sm:mr-0">
            <iframe
              className="w-[96%] mr-3 rounded"
              src="https://maps.google.com/maps?width=2058&amp;height=240&amp;hl=en&amp;q=chitwan avatar petroll&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="chitwan location googlemap"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
