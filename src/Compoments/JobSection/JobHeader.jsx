import React from 'react'
import Location from "../Images/location.svg"
import down from "../Images/down.svg"

export default function JobHeader() {
  return (
    <div className='flex justify-center '>
        <div className='bg-BackHeader md:w-[85rem] md:h-[25rem]'>
          <p className=' md:text-[2.5rem] text-[20px] font-Inter text-[#FFF] md:pl-5 pl-10 mt-5'>Find Better Through ACCESS,Better CONNECTIONS,Better Jobs.</p>
          <p className=' md:text-[1.25rem] text-[15px] font-Inter text-[#FFF] md:pl-5 pl-10 mt-2'>Preferable helps you find the perfect job for you.</p>

          <div className='flex flex-wrap mt-5'>

            <div className='w-[25rem] h-[5rem] bg-white sm:mt-0 mt-5 ml-5 rounded-md flex items-center justify-center'>
              <p className='font-Inter text-[1.1rem] '>Job title,keywords or company name</p>
            </div>

            <div className='w-[25rem] h-[5rem] bg-white sm:mt-1 lg:mt-0 mt-5 ml-5 rounded-md flex items-center '>
              <p className='font-Inter text-[1.1rem] pl-5'>city or state</p>
              <img src={Location} className='w-[2.8125rem] h-[3.125rem] ml-60' alt="" />
            </div>

            <div className='w-[25rem] h-[5rem] bg-white sm:mt-0 mt-5 ml-5 rounded-md flex items-center '>
              <p className='font-Inter text-[1.1rem] pl-5'>Experience</p>
              <img src={down} className='w-[2.8125rem] h-[3.125rem] ml-60' alt="" />
            </div>

          </div>

          <div className='w-[15rem] h-[4.9375rem] bg-[#657ED4]  flex justify-center items-center rounded-md ml-5 mt-5'>
            <button className='px-1 py-0.5 text-[2.25rem] font-Inter'>Find Jobs</button>
          </div>
        </div>
      
    </div>
  )
}
