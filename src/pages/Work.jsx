import React from 'react'
import BatteryGauge from 'react-battery-gauge';
import image from '../image/profile3.jpg';
import image1 from '../image/patrikapress.png';
import image2 from '../image/nayanarayani.jpg';
import image3 from '../image/max.png';
import image4 from '../image/presu.png';
import { Link } from 'react-router-dom';

const Work = () => {
  const data = [
  {
    value: 40,
    title: 'patrikapress ',
    description: 'News Portal',
    img: image1,
    link:'http://patrikapress.com/'

  },
  {
    value: 60,
    title: 'Nayanarayani',
    description: 'News Portal.',
    img: image2,
    link:'https://nayanarayani.com/'
  },
  {
    value: 40,
    title: 'Maxengineering',
    description: 'Engineering Website',
    img: image3,
    link:'https://maxengineering.com.np/'
  },
  {
    value: 60,
    title: 'Presu',
    description: 'Skincare website',
    img: image4
  },
];
  return (
  <>
   <div className="basis-[58%] border h-[85vh] mt-10 ml- -2 mr-8 bg-white rounded-r-md  overflow-auto">
        <div className="About flex flex-col ">
          <div className="text-[25px] py-4 ml-4 font-bold text-[#4c7753] cursor-pointer ">
            Work
          </div>
          <hr className=" flex my-2  h-full w-full bg-gray-800 " />

          <div className="grid grid-cols-2 gap-4 place-content-stretch mt-4 h-48">
      {data.map((item, index) => (
        <div
          className="flex flex-col mr-4 border-r-2 border-[#7A7A7A]-4 justify-center items-center"
          key={index}
        >
         
          <h1 className="bg-[#ffffff] rounded p-2 w-[40%] h-[40%] shadow-md">
            
            {/* <BatteryGauge value={item.value} className="w-10 h-10" /> */}
          <Link to={item.link} target="blank">
            <img src={item.img} alt="" className='w-full h-full' />
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
  )
}

export default Work