
import React from "react";
import { Button,Input } from "@material-tailwind/react";
import { CiShare2 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";


export const TABLE_HEAD = ["title", "Candidates", "Postated by", "Posted on","Action","Icon" ];
export const TABLE_ROWS = [
  {
    title: "Customer Support Associate",
    Candidate: 15,
    Postatedby : "Sumit",
    Postedon : "13 Nov 2023",
    Action : <Button variant='outlined' className='text-blue-500 '>Broadcast</Button>,
    Icon : <CiShare2 className='w-[25px] h-[25px]' />,
  },
 
];

 export const data = [
  {
    label: "Search Talent",
    value: "html",
    desc: <div className="">
        <div className="m-5 ">

           <div className="flex w-full justify-center">
             <p><b>Talent Pool</b></p>
           </div>
             <div>
               <Input label="search"  icon={<IoIosSearch /> } />
             </div>

             <div className="flex mt-5">
               {/* left side */}
                <div className="border border-gray-400 rounded-md h-[500px] w-[250px]">
                   <div className="border border-gray-400 rounded-md m-2 p-2">
                     <p className="text-md">Canditate Name</p>  
                     <p className="text-xs">Skill</p>  
                   </div>
                </div>

                {/* Right side */}
                 <div className="flex justify-center items-center h-[500px] w-[800px] border border-gray-400 rounded-md ml-2 bg-blue-gray-800">
                   <div>
                     <p className="text-white text-xl">Content</p>
                   </div>
                 </div>
             </div>
        </div>
    </div>
  },
  {
    label: "Backup Resume",
    value: "react",
    desc: ``,
  },
];