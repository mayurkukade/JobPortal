import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { IoIosPeople,IoMdClipboard } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline,IoPersonAddOutline  } from "react-icons/io5";
import { FaIndianRupeeSign , FaArrowRightFromBracket } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuUserMinus2 } from "react-icons/lu";


export default function () {
  return (
    <div className='flex justify-center'>

      <div className='sm:grid sm:grid-cols-12 gap-6'>

        {/* Leftside of page */}
        <div className='sm:col-span-2 mt-5 sm:flex hidden justify-center ml-2 '>
         {/* Dashboard */}
         <div className='border border-gray-300 rounded-md p-4'>
        <div>
          <h2 className='ml-9'><RxDashboard className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm'>Dashboard</p>
         </div>
         
         {/* Jobs */}
        <div className='mt-5 ml-3'>
           <h2 className='ml-6'><BsBriefcase className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-4'>jobs</p>
         </div>

         {/* Talent Pool */}
        <div className='mt-5 ml-2'>
           <h2 className='ml-6'><IoIosPeople className='w-[30px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-3'>Talent <br /> Pool</p>
         </div>

         {/* Career Page */}
        <div className='mt-5 ml-2'>
           <h2 className='ml-6'><MdOutlineSpaceDashboard className='w-[25px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-3'>Career <br /> Page</p>
         </div>

         {/* interviews */}
        <div className='mt-5'>
           <h2 className='ml-8'><TfiBag className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm '>interviews</p>
         </div>

         {/* chats */}
        <div className='mt-5 ml-2'>
           <h2 className='ml-6'><IoChatbubblesOutline className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-3'>chats</p>
         </div>

         {/* pricing */}
        <div className='mt-20'>
           <h2 className='ml-7'><FaIndianRupeeSign  className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-3'>pricing</p>
         </div>

         {/* account*/}
        <div className='mt-5'>
           <h2 className='ml-7'><VscAccount  className='w-[20px] h-[30px] ' /></h2>
           <p className='uppercase text-sm ml-2 '>account</p>
         </div>
         </div>
        </div>

        {/* Rightside of page */}
        <div className='sm:col-span-10 mt-5'>

          {/* First part */}
          <div className='sm:grid sm:grid-cols-12 gap-4'>
              
              {/* Total Jobs */}
            <div className='col-span-3 border border-gray-300 rounded-md'>
              
               <div className='flex p-5'>
                <div>
                   <p>Total Jobs</p>
                   <p className='text-4xl mt-4'>1</p>
                 </div>
                   
                 <div className='ml-28'>
                  <h2 className=''><BsBriefcase className='w-[30px] h-[40px] ' /></h2>
                 </div>
               </div>

            </div>

              {/* Total Application */}
            <div className='col-span-3 border border-gray-300 rounded-md'>
              
               <div className='flex p-5'>
                <div>
                   <p>Total Application</p>
                   <p className='text-4xl mt-4'>15</p>
                 </div>
                   
                 <div className='ml-10'>
                 <h2 className='ml-6'><IoIosPeople className='w-[40px] h-[40px] ' /></h2>
                 </div>
               </div>

            </div>

              {/* Shortlisted */}
            <div className='col-span-3 border border-gray-300 rounded-md'>
              
               <div className='flex p-5'>
                <div>
                   <p>Shortlisted</p>
                   <p className='text-4xl mt-4'>0</p>
                 </div>
                   
                 <div className='ml-28'>
                  <h2 className=''><IoPersonAddOutline  className='w-[30px] h-[40px] ' /></h2>
                 </div>
               </div>

            </div>

              {/* Rejected */}
            <div className='col-span-3 border border-gray-300 rounded-md'>
              
               <div className='flex p-5'>
                <div>
                   <p>Rejected</p>
                   <p className='text-4xl mt-4'>0</p>
                 </div>
                   
                 <div className='ml-28'>
                  <h2 className=''><LuUserMinus2 className='w-[30px] h-[40px] ' /></h2>
                 </div>
               </div>

            </div>

          </div>

          <div className='mt-36'>
            <p> <b>Quick Links</b> </p>
          </div>

               {/* Second Part */}
          <div className='sm:grid sm:grid-cols-12 mt-10 gap-4'>
            {/* Career page */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex'>
                 <h2 className='ml-6 mt-4'><MdOutlineSpaceDashboard className='w-[40px] h-[40px] ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Career Page</b></p>
                    <p className='text-xs'>Your Personilised Career page</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-12'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

            {/* Published Job */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex '>
               <h2 className='ml-6'><BsBriefcase className='w-[30px] h-[40px] mt-4 ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Published Job</b></p>
                    <p className='text-xs'>See your Published Job</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-20'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

            {/* Talent Pool */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex'>
                 <h2 className='ml-6 mt-4'><IoIosPeople className='w-[40px] h-[40px] ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Talent Pool</b></p>
                    <p className='text-xs'>Find The best candidate</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-12'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

            {/* Expertia Chat */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex'>
                 <h2 className='ml-6 mt-4'><IoChatbubblesOutline className='w-[40px] h-[40px] ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Expertia Chat</b></p>
                    <p className='text-xs'>Instantly chat with candiatate</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-12'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

            {/* Interviews */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex'>
                 <h2 className='ml-6 mt-4'><TfiBag className='w-[40px] h-[40px] ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Interviews</b></p>
                    <p className='text-xs'>Expert Interviews services</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-12'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

            {/* Assesments */}
             <div className='sm:col-span-4 bg-blue-100 pb-6 rounded-md'>
               <div className='flex'>
                 <h2 className='ml-6 mt-4'><IoMdClipboard className='w-[40px] h-[40px] ' /></h2>
                  <div className='ml-5 mt-4'>
                    <p className='text-lg'><b>Assesments</b></p>
                    <p className='text-xs'>Instantly acesss your canditate</p>
                  </div>
                  <div className='mt-5'>
                  <h2 className='ml-8'><FaArrowRightFromBracket className='w-[30px] h-[30px] ' /></h2>
                  </div>
               </div>
             </div>

          </div>
        </div>

      </div>

    </div>
  )
}
