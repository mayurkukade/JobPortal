
import React from "react";
import Lens from "../Images/Lenskart.png"

const createJob = (id, title, company, location, postedTime) => ({
    id,
    title,
    company,
    location,
    postedTime,
  });

  const generateJobData = () => {
    return  [
      createJob(1, "Full Stack Developer", "Lenskart", "India (Remote)", "3 hours ago"),
      createJob(2, "Full Stack Developer", "Lenskart", "India (Remote)", "3 hours ago"),
      createJob(3, "Full Stack Developer", "Lenskart", "India (Remote)", "3 hours ago"),
     
    ];
  };
  const jobData = generateJobData();
export const JobSection =[
    {
       Job : <div> {jobData.map((job) => (
        <div key={job.id} className='flex bg-Details rounded-lg md:w-[40rem] w-[27rem] md:h-[15rem] mt-5 justify-center'>
          <div className='flex items-center'>
            <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem]' alt='' />
          </div>
          <div className='md:ml-20 ml-5 pt-7'>
            <p className='md:text-[2.5rem] text-[#CF4307] font-Inter'>{job.title}</p>
            <p className='md:text-[2rem] font-Inter'>{job.company}</p>
            <p className='md:text-[1.5rem] font-Inter'>{job.location}</p>
            <p className='md:text-[1.5rem] font-Inter text-[#005F59]'>{job.postedTime}</p>
          </div>
        </div>
      ))}</div>
    },
   
]