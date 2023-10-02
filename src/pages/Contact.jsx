import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaCode, FaFacebook, FaFacebookSquare, FaGitSquare, FaGithubSquare, FaMailBulk, FaPhone, FaTwitterSquare, FaVoicemail } from "react-icons/fa";
import image from '../image/contactimg.png';
import ContactForm from "../component/contact/ContactForm";
const Contact = () => {
  return (
    <>
      <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3  bg-white rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-sm overflow-auto">
        <div className="About flex flex-col ">
          
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer ">
            Contact
          </div>
          <hr className=" flex my-2  h-full w-full bg-[#4c7753] " />
          {/* <div className="flex w-[100%] justify-center text-[35px] font-medium text-[#54595F] hover:text-[#4c7753] ">Contact Me</div> */}

          <div className=" py-4 ml-2   w-[98%] flex  justify-between  sm:flex-row flex-col ">
          <div className="flex w-full sm:w-[35%] flex-col shadow rounded-md bg-slate-100">
              <div className="rounded-md p-3">
                <img src={image} alt="" className="h-full w-full rounded" />
              </div>
              <h2 className="ml-4 text-[#54595F] font-semibold text-xl sm:text-2xl">Anisha Poudel</h2>
              <div className="flex text-gray-400 ml-4 font-sans">I am available for freelance work. Connect with me via and call in to my account.</div>
              <span className="flex flex-row ml-4 mt-3">
                <FaPhone className="text-[#4c7753] mt-1" />
                <p className="ml-3 text-[#54595F] text-sm sm:text-base">9865316915</p>
              </span>
              <span className="flex flex-row ml-4 mt-1">
                <FaMailBulk className="text-[#4c7753] mt-1" />
                <p className="ml-3 text-sm text-[#54595F] mr-1 sm:text-base">anishapoudel570@gmail.com</p>
              </span>
              <h2 className="ml-4 text-[#54595F] text-base sm:text-xl mt-4">FIND WITH ME</h2>
              <span className="flex flex-row ml-2 mt-1 gap-2 sm:justify-center mb-4 p-2">
                <FaFacebookSquare className="text-[35px] text-blue-400 shadow-md p-2 bg-white" />
                <FaGithubSquare className="text-[35px] shadow-md p-2 bg-white" />
                <FaTwitterSquare className="text-[35px] text-blue-400 shadow-md p-2 bg-white" />
              </span>
            </div>
            
          <ContactForm />
          </div>
          <div className="flex w-[100%] justify-center  mb-4  ml-2 sm:-ml-0 mr-4 sm:mr-0">
         
            <iframe  className="w-[96%] mr-3  rounded"
            src="https://maps.google.com/maps?width=2058&amp;height=240&amp;hl=en&amp;q=chitwan avatar petroll&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
           
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
