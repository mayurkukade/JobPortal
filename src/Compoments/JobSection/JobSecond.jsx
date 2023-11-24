import React from 'react'
import Job from "../Images/job.svg"
import Skill from "../Images/skill.svg"
import Assis from "../Images/assist.svg"
import Inter from "../Images/inter.svg"
import Lens from "../Images/Lenskart.png"
import { JobSection } from '../Data/JobSectionData'

export default function JobSecond() {
  return (
    <div className='flex justify-center  mt-20 '>
      <div className='flex flex-wrap'>
        {/* Left-side  */}

        <div className='w-[20rem] h-[30rem] bg-Details rounded-lg md:ml-20 ml-10'>

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

         <div className='sm:ml-20'>

           {JobSection.map(({Job}) =>(
             <div>
               {Job}
             </div>
           ))}
           
           </div>

      </div>
    </div>
  )
}
