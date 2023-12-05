import React from "react";
import { Button, Input, Switch } from "@material-tailwind/react";
import { CiShare2 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Lens from '../Images/Lenskart.png'
import Code from '../Images/Code.jpeg'
import { FaRegCopy } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin,TiSocialYoutube } from "react-icons/ti";
import { FcBriefcase } from "react-icons/fc";

export const TABLE_HEAD = [
  "title",
  "Candidates",
  "Postated by",
  "Posted on",
  "Action",
  "Icon",
];
export const TABLE_ROWS = [
  {
    title: "Customer Support Associate",
    Candidate: 15,
    Postatedby: "Sumit",
    Postedon: "13 Nov 2023",
    Action: (
      <Button variant="outlined" className="text-blue-500 ">
        Broadcast
      </Button>
    ),
    Icon: <CiShare2 className="w-[25px] h-[25px]" />,
  },
];

export const data = [
  {
    label: "Search Talent",
    value: "html",
    desc: (
      <div className="">
        <div className="m-5 ">
          <div className="flex w-full justify-center">
            <p>
              <b>Talent Pool</b>
            </p>
          </div>
          <div>
            <Input label="search" icon={<IoIosSearch />} />
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
    ),
  },
  {
    label: "Backup Resume",
    value: "react",
    desc: ``,
  },
];

export const Career = [
  {
    label1: "Company Profile",
    value1: "html",
    desc1: (
      <div>
        <div className="w-full justify-end flex">
          <Button variant="outlined" className="text-blue-500">
            Edit Career Page
          </Button>
        </div>
            
            {/* div overlap code */}
        <div className="mt-5 ml-10 rounded-md flex  -space-x-[1000px]">
          <div className="w-full h-[300px]  rounded-md mix-blend-multiply z-20 bg-pink-50"  >
            
          </div>
            <div className="mix-blend-multiply w-20 h-20 flex items-center justify-center rounded-full mt-64  z-40 ">
              <img src={Lens} className='rounded-full w-full h-full border border-gray-400 ' />
            </div>
          
        </div>
         
         <div className="mt-10 ml-10">
           <p className="text-2xl text-black"><b>Company Name</b></p>
           <p className="text-xs text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolores dolore ut, beatae quisquam vero, cum officiis excepturi iste non <br />fugiat quibusdam quos qui, eius earum at facilis rerum reprehenderit quidem neque eaque. Aut non quae est, at inventore quis velit nisi <br /> placeat enim voluptate sunt magni magnam illum ullam?</p>
         </div>

          <div className="flex mt-5 ml-10 md:divide-x-2 md:divide-gray-900">
            <div>
              <p className="text-sm">Industry</p>
              <p className="text-xs">IT Services</p>
            </div>

            <div className="ml-3 pl-3">
              <p className="text-sm">Company Size</p>
              <p className="text-xs">11-50 employees</p>
            </div>

            <div className="ml-3 pl-3">
              <p className="text-sm">Headquater</p>
              <p className="text-xs">Pune-Maharashtra</p>
            </div>

          </div>
          
          <div className="flex mt-10 ml-10 w-full">
            <p className="text-md text-black"><b>10 Jobs</b></p>
            <p className="text-md text-black ml-96 mr-5 mt-2"><b>Intership</b></p>
            <Switch />
            <p className="text-md text-black ml-5 mr-5 mt-2"><b>Remote Only</b></p>
            <Switch />
          <div className="ml-5">
          <Input type="search" label="Search" icon={<IoIosSearch />} />
          </div>
        
          </div>

          <div className="border border-gray-500 w-[1000px] mt-5 ml-10 rounded-md">
            <div className="ml-3">
              <p className="text-md text-black">Post Name</p>
              <p className="text-xs ">Company Name</p>
              <p className="text-xs mt-10 ">Other Information</p>
            </div>
          </div>
      </div>
    ),
  },
  {
    label1: "Integrate",
    value1: "react",
    desc1: <div className="py-10 px-5">
               <div className="w-full flex justify-center border border-gray-500 rounded-md shadow-lg shadow-gray-600">

                <div>
                  <p className="text-2xl text-black ml-48 mt-5"><b>Your Career Page is Live</b></p>
                  <p className="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatum saepe quod, eaque sit animi incidunt. Recusandae nisi fugit eius.</p>
                  <div className="flex w-72 ml-48 mt-5">
                     <Input type="text"  />
                     <Button className="bg-gray-400 rounded-none">Copy</Button>
                     <div className="w-[100px] bg-gray-500">
                     <FaRegCopy className="w-[30px] h-[30px] pt-1" />
                     </div>
                     
                  </div>

                  <div className="flex w-72 ml-64 mt-5 py-5 ">
                  <IoShareSocialOutline className="w-[30px] h-[30px]" />
                  <TiSocialFacebook className="w-[30px] h-[30px]"/>
                  <TiSocialTwitter  className="w-[30px] h-[30px]"/>
                  <TiSocialLinkedin  className="w-[30px] h-[30px]"/>
                  <TiSocialYoutube  className="w-[30px] h-[30px]"/>
                  </div>
                </div>

               </div>

               <div className="flex w-full mt-10">
                  <div className="w-[450px]">
                     <hr className="border border-gray-500 mt-2" />
                  </div>
                  <span className="text-xs mx-2 ">Features and More</span>
                  <div className="w-[450px]">
                     <hr className="border border-gray-500 mt-2" />
                  </div>
               </div>

               <div className="flex w-full mt-5">
                  {/* First card */}
                 <div className="flex px-2 w-80 py-5 border border-gray-500 rounded-md ">
                   <div className="my-5">
                   <FcBriefcase className="w-5 h-5" />
                   </div>

                   <div className="ml-2">
                     <p className="text-black text-md">Career Page</p>
                     <p className="text-gray-500 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, quas.</p>
                   </div>
                 </div>
                  {/* Second card */}
                 <div className="flex px-2 w-80 py-5 ml-2 border border-gray-500 rounded-md ">
                   <div className="my-5">
                   <FcBriefcase className="w-5 h-5" />
                   </div>

                   <div className="ml-2">
                     <p className="text-black text-md">Career Page</p>
                     <p className="text-gray-500 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, quas.</p>
                   </div>
                 </div>
                  {/* Third card */}
                 <div className="flex px-2 w-80 py-5 ml-2 border border-gray-500 rounded-md ">
                   <div className="my-5">
                   <FcBriefcase className="w-5 h-5" />
                   </div>

                   <div className="ml-2">
                     <p className="text-black text-md">Career Page</p>
                     <p className="text-gray-500 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, quas.</p>
                   </div>
                 </div>

               </div>
    </div>,
  },
];
