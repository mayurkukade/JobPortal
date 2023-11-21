import React from "react";
import jobs from "../Images/jobs.jpg";
import top from "../Images/top.jpg";
import upskills from "../Images/upskills.webp";
import hiring from "../Images/hiring.jpg";


export default function HomeCard() {
  return (
    <div className="flex mt-5 justify-center ml-2 ">
      <div className="sm:grid sm:grid-cols-12">
          {/* first card start */}

        <div class="relative flex flex-col   shadow-md sm:col-span-3 rounded-xl mt-3 sm:ml-2 bg-clip-border">
          <div class="relative  mx-4 -mt-6   shadow-lg   bg-clip-border shadow-blue-gray-500/40">
            <img src={jobs} className="rounded-md" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Apply Now
            </h5>
            
            <ul style={{ listStyleType: 'disc' }}>
               <li>Apply to unlimited jobs</li>
               <li>Comprehensive career planning</li>
               <li>Customized mentoring (1-1)</li>
               <li>Interview / resume guidance</li>
           </ul>

           
          </div>
          <div class="p-6 pt-0">
          <button
              class="select-none rounded-lg border-1 border-blue-600 py-3 text-black px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Learn More
            </button>
          </div>
        </div>
       {/* first card end */}

          {/* second card start */}

        <div class="relative flex flex-col   shadow-md sm:col-span-3 rounded-xl mt-3 sm:ml-2  bg-clip-border">
          <div class="relative  mx-4 -mt-6   shadow-lg   bg-clip-border shadow-blue-gray-500/40">
            <img src={top} className="rounded-md" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Stand at the top
            </h5>
            
            <ul style={{ listStyleType: 'disc' }}>
               <li>Rank Your self</li>
               <li>Unlimited re-test</li>
               <li>Startup bootcamps</li>
               <li>Learn skill online </li>
           </ul>

           
          </div>
          <div class="p-6 pt-0 ">
          <button
              class="select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Learn More
            </button>
          </div>
        </div>
       {/* second card end */}

          {/* Third card start */}

        <div class="relative flex flex-col   shadow-md sm:col-span-3 rounded-xl mt-3 sm:ml-2  bg-clip-border">
          <div class="relative  mx-4 -mt-6   shadow-lg   bg-clip-border shadow-blue-gray-500/40">
            <img src={upskills} className="rounded-md" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Upskill & Education
            </h5>
            
            <ul style={{ listStyleType: 'disc' }}>
               <li>MS/MBA research</li>
               <li>Application consultation</li>
               <li>courses for upskill</li>
               <li>Campus tours</li>
           </ul>

           
          </div>
          <div class="p-6 pt-0">
          <button
              class="select-none rounded-lg border-1 border-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Learn More
            </button>
          </div>
        </div>
       {/* Third card end */}

          {/* Fourth card start */}

        <div class="relative flex flex-col   shadow-md sm:col-span-3 rounded-xl mt-3 sm:ml-2 bg-clip-border">
          <div class="relative  mx-4 -mt-6   shadow-lg   bg-clip-border shadow-blue-gray-500/40">
            <img src={hiring } className="rounded-md" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
             Hiring Made Easy
            </h5>
            
            <ul style={{ listStyleType: 'disc' }}>
               <li>end to end hiring services</li>
               <li>0 fee for job listing</li>
               <li>Application tracking system</li>
               <li>AI base assisment</li>
           </ul>

           
          </div>
          <div class="p-6 pt-0">
            <button
              class="select-none rounded-lg border-1 border-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Learn More
            </button>
          </div>
        </div>
       {/* Fourths card end */}

      </div>
    </div>
  );
}
