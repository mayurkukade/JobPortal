import React from 'react'
import Pref from "./Images/preferable-icon 1.png"
import {FooterData} from "./Data/FooterData"
import { Button } from "@material-tailwind/react";
import { DiGithubBadge } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export default function Footer1() {
  return (
    <div className='flex justify-center'>
      <div>
       <div className='flex flex-wrap'>
          
          {/* Preferable Icon */}
        <div className='sm:ml-10 ml-9 mt-14'>
           <img src={Pref} className='w-10 ml-16 mb-2 ' alt="" />
           <p className='ml-5 text-4xl '> Preferable</p>
           <p className='ml-5 text-sm'>Crafting Careers</p>
        </div>
          {/* Other Services */}
          <div className='flex flex-wrap'>
             {FooterData.map(({title,items})=>(
                <ul key={title}>
                  <div className='text-2xl font-Inter ml-14 mt-8 text-black pb-2'>
                    {title}
                  </div>
                  {items.map((link) =>(
                     <li>
                        <div className='text-sm font-Inter ml-14 text-black pb-2' >
                        {link}
                        </div>
                        
                     </li>
                  ))}
                </ul>
             ))}
          </div>
           
           <div>
              <p className='text-2xl font-Inter ml-14 mt-8 text-black pb-2'>Suscribe to our newsletter</p>
              <p className='text-sm font-Inter ml-14 text-black pb-2'>Curated content craft careers</p>

              <div className='flex ml-14 '>
                <input type="email" placeholder='Enter email' className='w-36 h-10 border-2 mt-2 border-black rounded-md p-2'/>
                 <Button className='bg-save ml-2 mt-2'>Subscribe</Button>
              </div>
           </div>
  
       </div>

       <hr className=' border-1 border-black' />

       <div className='flex mt-5'>
         <div>
            <p className='text-sm'>@2023 Preferable . All right reserved</p>
         </div>
          <div className='flex md:ml-[800px] '>
            
             <DiGithubBadge className='w-[40px] h-[40px] ' /> 
             <FaFacebook className='w-[32px] h-[32px] mt-1 ml-2 ' />
             <FaInstagram className='w-[32px] h-[32px] mt-1 ml-2 ' />
             <CiLinkedin className='w-[32px] h-[32px] mt-1 ml-2 ' />
         
          </div>
       </div>
      </div>
    </div>
  )
}
