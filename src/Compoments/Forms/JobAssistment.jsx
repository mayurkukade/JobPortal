import { Button } from '@material-tailwind/react'
import React from 'react'
import { Input } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function JobAssistment() {
  return (
    <div className='flex justify-center'>
        <div>
           <p className='lg:text-[2rem] md:text-2xl font-Inter pb-10 pt-10  '>Assesment</p>
           <hr className='border-1 border-black' />
           <div className='flex mt-5 justify-center'>
             <div >

               <div className='flex'>
               <div>
                 <Button variant="outlined" className='bg-Details rounded-none md:w-36 w-28  sm:text-[1.2rem]' >Jobs</Button>
               </div>
               <div>
                 <Button variant="outlined" className='bg-Details rounded-none  sm:text-[1.2rem]' >Assesment</Button>
               </div>
               <div>
                 <Button variant="outlined" className='bg-Details rounded-none  sm:text-[1.2rem]' >Jobs Assistance</Button>
               </div>
             </div>

             <div className='flex mt-5'>
                
                 <p className='sm:text-[1.2rem] pt-2'>Select Stream</p>
                 <div className="md:w-72 ml-10 bg-Details">
                   <Input label="Select Stream " />
                 </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 132 106" fill="none">
                   <rect width="132" height="106" fill="#D9D9D9"/>
                   <rect width="132" height="106" fill="black" fill-opacity="0.2"/>
                   <path d="M66 76L36.5551 38.5L95.4449 38.5L66 76Z" fill="black"/>
                 </svg>
               </div>
               
             <div className='flex mt-5'>
                
                 <p className='sm:text-[1.2rem] pt-2'>Select Subject</p>
                 <div className="md:w-72 ml-10 bg-Details">
                   <Input label="Select Subject " />
                 </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 132 106" fill="none">
                   <rect width="132" height="106" fill="#D9D9D9"/>
                   <rect width="132" height="106" fill="black" fill-opacity="0.2"/>
                   <path d="M66 76L36.5551 38.5L95.4449 38.5L66 76Z" fill="black"/>
                 </svg>
               </div>
               <Link to="/Forms/MentorBooking">
               <Button>
                 Next
               </Button>
               </Link>
             </div>
           </div>
        </div>
      
    </div>
  )
}
