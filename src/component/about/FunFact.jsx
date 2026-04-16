import React from 'react'
import { FaArtstation, FaMusic, FaSketch, FaWordpress } from 'react-icons/fa'

const FunFact = () => {
  return (
   <>
     <div className="font-semibold text-[#4c7753] mt-2  text-[24px]">
        FunFact 
      </div>
      <hr className=" flex my-2  h-1 w-[5%] bg-[#4c7753]" />
      <div class="grid grid-cols-2 gap-4 place-content-stretch  mt-2  h-48 ...">
        <div className=" flex flex-col mr-4  justify-center items-center ">
          <div className='custom-spin'>
          <h1 className="bg-[#bbdac0]   transform rotate-45 mb-3  ">
            <FaMusic className=" text-[#4c7753] transform -rotate-45 p-2  text-[36px] text-center" />
          </h1> 
          </div>
          <h3 className="flex text-[20px] font-semibold text-[#7A7A7A] text-center">
          Singing and listening 
          <br/>
           to music
          </h3>


        </div>
        <div className=" flex flex-col justify-center items-center">
        <div className='custom-spin'>
        <h1 className="bg-[#bbdac0]   transform rotate-45 mb-3">
            <FaSketch className=" text-[#4c7753] text-[36px] p-1  " />
          </h1>
          </div>
          <h2 className="flex text-[20px] font-semibold text-[#7A7A7A] text-center ">
            Drawing and
            <br />
            Nail Art
          </h2>
        </div>

      </div>
      
   </>
  )
}

export default FunFact