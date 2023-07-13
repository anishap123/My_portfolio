import {React, useState} from 'react'
import { FaBookDead, FaPenAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
    <div className="basis-[7%] h-[65vh] border ml-4 mt-8 bg-white rounded-md shadow-sm">
    <div className="flex flex-col ">
    <div className=" flex mb-2  items-center gap-2 p-4 flex-col cursor-pointer ">
      <FaUser className='text-[#4c7753]'/>
      <p className='hover:text-[#4c7753]'>About</p>
      
    
    </div> 
    <hr className= " flex my-2  h-full w-full bg-gray-800 " />
    <div className=" flex items-center gap-2 p-4 flex-col hover:text-[#4c7753] cursor-pointer ">
      <FaBookDead className=' hover:text-[#4c7753]'/>
      <p>Resume</p>
    
    </div>
    <hr className=" flex my-2 border-blue-gray-500" />
    <div className=" flex items-center gap-2 p-4 flex-col cursor-pointer hover:text-[#4c7753] ">
      <FaPenAlt className='hover:text-[#4c7753]' />
      <p>Work</p>
    
    </div>
    <hr className=" flex my-2 border-blue-gray-500" />
    <div className=" flex   items-center gap-2 p-4 flex-col cursor-pointer hover:text-[#4c7753]">
      <FaPhoneAlt className='hover:text-[#4c7753]' />
      <p>Contact</p>
    
    </div>
    

       
    </div>
    </div>
    
    </>
  )
}

export default Sidebar;
