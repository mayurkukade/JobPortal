
import { Input } from '@material-tailwind/react'
import React from 'react'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function MentorBooking() {
  return (
    <div className='flex justify-center'>
      <div>
        <p className='lg:text-[1.8rem] md:text-2xl font-Inter pb-10 pt-10 sm:ml-0 ml-2  '>Mentor Booking</p>
        <hr className='border-1 border-black' />

        <div>
           <p className='lg:text-[2rem] md:text-2xl font-Inter pb-10 pt-10 sm:ml-0 ml-2 '>Mentor Booking</p>
        </div>
         
         <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select Domain</label>
         <div className="md:w-[30rem] w-[24rem] mt-3 bg-Details sm:ml-0 ml-2">
             <Input label="Eg. Data Analysis" />
          </div>

          <div className='mt-10'>
            <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select Mentorship Type</label>
            <div className='flex'>
            <div className=" bg-Details sm:ml-0 ml-2">
                   <Input label="Select Stream " />
             </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 132 106" fill="none">
                   <rect width="132" height="106" fill="#D9D9D9"/>
                   <rect width="132" height="106" fill="black" fill-opacity="0.2"/>
                   <path d="M66 76L36.5551 38.5L95.4449 38.5L66 76Z" fill="black"/>
                 </svg>
              </div>

              <Button variant ="text" className='bg-Details w-64 rounded-none sm:ml-0 ml-2'>Distance Lerning</Button>
          </div>
          
          <div className='mt-5'>
            <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select slot</label>
            <div className='flex flex-wrap'>

                <div className='sm:w-[12rem] sm:ml-5 ml-2 sm:mt-0 mt-2'>
                  <Input type="date"  />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className='ml-5 sm:block hidden' viewBox="0 0 88 88" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 0C20.5413 0 19.1424 0.579462 18.1109 1.61091C17.0795 2.64236 16.5 4.04131 16.5 5.5V11H11C8.08262 11 5.28473 12.1589 3.22182 14.2218C1.15892 16.2847 0 19.0826 0 22V77C0 79.9174 1.15892 82.7153 3.22182 84.7782C5.28473 86.8411 8.08262 88 11 88H77C79.9174 88 82.7153 86.8411 84.7782 84.7782C86.8411 82.7153 88 79.9174 88 77V22C88 19.0826 86.8411 16.2847 84.7782 14.2218C82.7153 12.1589 79.9174 11 77 11H71.5V5.5C71.5 4.04131 70.9205 2.64236 69.8891 1.61091C68.8576 0.579462 67.4587 0 66 0C64.5413 0 63.1424 0.579462 62.1109 1.61091C61.0795 2.64236 60.5 4.04131 60.5 5.5V11H27.5V5.5C27.5 4.04131 26.9205 2.64236 25.8891 1.61091C24.8576 0.579462 23.4587 0 22 0ZM22 27.5C20.5413 27.5 19.1424 28.0795 18.1109 29.1109C17.0795 30.1424 16.5 31.5413 16.5 33C16.5 34.4587 17.0795 35.8576 18.1109 36.8891C19.1424 37.9205 20.5413 38.5 22 38.5H66C67.4587 38.5 68.8576 37.9205 69.8891 36.8891C70.9205 35.8576 71.5 34.4587 71.5 33C71.5 31.5413 70.9205 30.1424 69.8891 29.1109C68.8576 28.0795 67.4587 27.5 66 27.5H22Z" fill="black"/>
                </svg>

                <div className='sm:w-[12rem] sm:ml-5 ml-2 sm:mt-0 mt-2'>
                  <Input type="time" />
                </div>

                <p className='sm:text-[1.1rem] font-Inter text-[#4BC42D] ml-5 pt-2'>Available</p>

            </div>
          </div>

          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Mentor Name</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>Mr. XYZ    Education Details</p>
         
          <p className='lg:text-[1.5rem] md:text-2xl font-Inter mt-5 sm:ml-0 ml-2  '>Cost</p>
          <p className='lg:text-[1.1rem] md:text-2xl font-Inter mt-2 sm:ml-0 ml-2  '>2500/- Per Session (1 Hr)</p>
           
          <Link to="/Forms/ITItraning">
               <Button>
                 Next
               </Button>
               </Link>
      </div>
    </div>
  )
}
