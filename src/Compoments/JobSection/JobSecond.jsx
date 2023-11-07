import React from 'react'
import Job from "../Images/job.svg"
import Skill from "../Images/skill.svg"
import Assis from "../Images/assist.svg"
import Inter from "../Images/inter.svg"
import Lens from "../Images/Lenskart.png"

export default function JobSecond() {
  return (
    <div className='flex justify-center  mt-20 '>
      <div className='flex flex-wrap'>
        {/* Left-side  */}

        <div className='w-[20rem] h-[30rem] bg-[#DCE1F6] rounded-lg md:ml-20 ml-10'>

          <div className='flex ml-10 mt-5'>
           <img src={Job} className='w-[1.5rem] h-[3rem]' alt="" />
           <p className='text-[1.5rem] pl-5 pt-2 font-Inter'>Applied Jobs</p>
          </div>
           <br />
          <div className='flex ml-10 mt-5'>
           <img src={Skill} className='w-[1.5rem] h-[3rem]' alt="" />
           <p className='text-[1.5rem] pl-5 pt-2 font-Inter'>Skill Assessment</p>
          </div>
          <br />
          <div className='flex ml-10 mt-5'>
           <img src={Assis} className='w-[1.5rem] h-[3rem]' alt="" />
           <p className='text-[1.5rem] pl-5 pt-2 font-Inter'>Skill Assessment</p>
          </div>
          <br />
          <div className='flex ml-10 mt-5'>
           <img src={Inter} className='w-[1.5rem] h-[3rem]' alt="" />
           <p className='text-[1.5rem] pl-5 pt-2 font-Inter'>Skill Assessment</p>
          </div>

        </div>

         {/* Right side */}

         <div className='md:ml-20'>

           <div className='flex bg-[#DCE1F6] rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] justify-center'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[2rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1.5rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1.5rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>

           <div className='flex bg-[#DCE1F6] rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] mt-10 justify-center'>
             <div className='flex items-center  '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[2rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1.5rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1.5rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>

           <div className='flex bg-[#DCE1F6] rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] mt-10 justify-center'>
             <div className='flex items-center  '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[2rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1.5rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1.5rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>


           <div className='flex bg-[#DCE1F6] rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] mt-10 justify-center'>
             <div className='flex items-center  '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[2rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1.5rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1.5rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>


           <div className='flex bg-[#DCE1F6] rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] mt-10 justify-center'>
             <div className='flex items-center  '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[2rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1.5rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1.5rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>


         </div>

      </div>
    </div>
  )
}
