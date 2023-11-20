import React from 'react'
import lenskart from "../Images/Lenskart.png"
import dot from "../Images/Dot.svg"
import Marquee from "react-fast-marquee";

export default function Placement() {
  return (
    <div className='flex justify-center '>
    
        <div className='mt-10'>
            <div className='flex justify-center'>
              <p className='text-3xl ml-10 font-semibold font-[Poppins]  md:w-[1100px] '>Our Placement Patners</p>
            </div>
            <div className=' mt-24'>
               <Marquee className='flex justify-center'>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                <div className='md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md'>
                 <img src={lenskart} className='w-20' alt="" />
                </div>
                </Marquee>

            </div>
            <div className='mt-20 md:flex justify-center hidden '>
                <img src={dot} alt="" />
            </div>

            <div className='mt-20 flex justify-center' >
                <p className='text-3xl font-semibold font-[Poppins] '>Testimonals Section</p>
            </div>
        </div>
      
    </div>
  )
}
