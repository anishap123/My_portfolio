import React from "react";
import Sidebar from "../component/Sidebar";
import ProfileCard from "../component/ProfileCard";
import About from "./About";

const Main = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />

        <div className=" basis-[35%]  h-[90vh] mt-6 ml-2 mx-auto     max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
          <ProfileCard />
        </div>
        
        <div className="basis-[58%] border h-[85vh] mt-10 ml- -2 mr-8 bg-white rounded-r-md ">
          <About />
        </div>
      </div>
    </>
  );
};

export default Main;
