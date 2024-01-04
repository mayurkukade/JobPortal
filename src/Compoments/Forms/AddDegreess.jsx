
import React from 'react'
import {
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { useSelector ,useDispatch } from 'react-redux'
import { removeDegree } from '../../features/AddDegreeslice'; 
import { motion } from "framer-motion";
import StudentMultiStep from './StudentMultiStep';

export default function AddDegree({ deleteDegreeHandler }) {
    
  const degree = useSelector(state => state.degree);

const dispatch = useDispatch()

  return (
    <div className='flex'>

         
           <div>
           <div className="bg-gray-100 py-4 sm:w-[81.25rem] w-full ">
             
           </div>

           <div className="flex flex-wrap ">
             <div className="flex ">
               <div className="flex ">
               <label htmlFor="" className="mt-5">
                 Institute : -
               </label>
               <div className="sm:ml-48 ml-10 sm:w-72 mt-5">
                 <Input className="" type="text" label="Institute"  />
                 
               </div>
               </div>
             </div>

             <p className="ml-3 text-orange-800 text-sm mt-7">Edit</p>
             <div className="sm:ml-10 ml-[6rem] ">
             <Checkbox  />
             <label className="sm:text-lg text-[0.95rem] ">This is the most relevent qualification</label>
             </div>
             
           </div>

           <div className="flex flex-wrap mt-5">
             <p>Batch : - </p>
             <div className="sm:ml-52 ml-16 sm:w-72">
               <select label="YYYY" className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                 <option value="">Select</option>
                 <option value="2020">2020</option>
                 <option value="2021">2021</option>
                 <option value="2022">2022</option>
                 <option value="2023">2023</option>
               </select>
             </div>
             

             <p className="ml-5 mt-2">To</p>
             <div className="sm:ml-14 ml-[7.9rem] sm:w-72">
               <select label="YYYY" className="appearance-none sm:w-full w-44  bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none  ">
               <option value="">Select</option>
                 <option value="2020">2020</option>
                 <option value="2021">2021</option>
                 <option value="2022">2022</option>
                 <option value="2023">2023</option>
               </select>
             </div>
             
           </div>
           

           <div className="flex mt-5">
             <p>Course type : - </p>
             <div className="sm:ml-[10.2rem] ml-[1.45rem] sm:w-72">
               <select label="Select" className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
               <option value="">Select</option>
               <option value="A">A</option>
               <option value="B">B</option>
               <option value="C">c</option>
               </select>
             </div>
           </div>
           

           <div className="flex mt-5">
             <p>Degree : - </p>
             <div className="sm:ml-[12.3rem] ml-[3.5rem] sm:w-72">
               <select label="Select"  className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
               <option value="">Select</option>
               <option value="A">A</option>
               <option value="B">B</option>
               <option value="C">c</option>
               </select>
             </div>
           </div>
           
            <div className="mt-5 sm:ml-[16.875rem] ml-[8rem]">
           <div>
             <Button>+ Add Degree</Button>
           </div>
           <Button
             className="mt-5 bg-blue-500"
             onClick={deleteDegreeHandler}
               >
               Delete
            </Button>
          </div>
         </div>
     
        
    </div>
  )
}
