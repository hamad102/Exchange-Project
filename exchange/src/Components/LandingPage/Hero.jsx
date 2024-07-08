import React from 'react';
import { MdShowChart } from "react-icons/md";

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mt-28 text-8xl text-center p-5'>
        Start your <span className='text-purple-700 italic'>trading journey</span><br/> right now!
      </div>
      <div className='mt-4 bg-purple-300 px-5 py-1 text-base rounded-md flex gap-2 items-center'>
        <MdShowChart size={22} />First Crypto Indices Exchange
      </div>
      {/* <div className='text-slate-500 flex gap-2 text-center mt-4 text-lg '>
        Trade with safety, confidence and make your money <br /> work for you
      </div> */}
    </div>
  )
}

export default Hero;
