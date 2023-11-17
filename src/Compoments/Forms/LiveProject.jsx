import { Input } from '@material-tailwind/react'
import React from 'react'
import { Button } from '@material-tailwind/react'


export default function LiveProject() {
  return (
    <div className='flex justify-center'>
      <div>
        <p className='text-[2rem] font-Inter'>Carrier Planning</p>
        <hr className='border-black' />

        <p className='text-[1.8rem] font-Inter pb-5 pt-5 ml-36'>Live Project</p>

        <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select Domain</label>
         <div className="md:w-[30rem] w-[24rem] mt-3 bg-Details sm:ml-0 ml-2">
             <Input label="Eg. Data Analysis" />
          </div>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>

          <div className="">
            <input type="text" className='md:w-[30rem] h-[5rem] w-[24rem] mt-3 bg-Details sm:ml-0 ml-2' />
          </div>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Internship</p>

          <div>
            <input type="text" placeholder='Business Analyst Documentation' className='md:w-[20rem] h-[5rem] w-[10rem] mt-3 pl-5 bg-Details sm:ml-0 ml-2' />
          </div>

          <Button
          type="next"
          className="sm:w-24 sm:h-10  mt-5  border-2 rounded-md bg-save"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
