import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Work = () => {
  const [workdata, setWorkdata] = useState([]);
  const baseurl = 'http://127.0.0.1:8000/';

  useEffect(() => {
    axios.get(baseurl + 'works').then((response) => {
      setWorkdata(response.data);
    });
  }, []);

  return (
    <>
      <div className="basis-[58%] border h-auto sm:h-[85vh] mt-10 ml-2 sm:-ml-0 sm:mr-8 mr-3 bg-white rounded-r-md sm:rounded-r-md rounded-l-md sm:rounded-l-sm overflow-auto">
        <div className="About flex flex-col mb-4 sm:mb-0">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer">
            Work
          </div>
          <hr className=" flex my-2 h-full w-full bg-gray-800 " />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-stretch mt-4 sm:h-48">
            {workdata.map((item) => (
              <div
                key={item.id}
                className="flex flex-col mr-4 sm:border-r-2 border-[#7A7A7A]-4 justify-center items-center ml-2 sm:ml-0 sm:mr-0"
              >
                <h1 className="bg-[#ffffff] rounded p-2 w-[40%] h-[40%] shadow-md">
                  <Link to={item.link} target="_blank">
                  <img src={`${baseurl}${item.img}`} alt="" className="w-full h-full" />
                    
              
                  </Link>
                </h1>

                <h2 className="flex text-[20px] font-semibold text-[#54595F]">
                  {item.title}
                </h2>

                <p className="flex text-[16px] text-[#7A7A7A] text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
