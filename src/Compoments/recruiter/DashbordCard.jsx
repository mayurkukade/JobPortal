import React from "react";
import { TfiBag } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { TiUserDelete } from "react-icons/ti";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";
import { IoChatbubblesOutline, IoPersonAddOutline } from "react-icons/io5";
import {FaArrowRightFromBracket} from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuUserMinus2 } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
const DashbordCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl font-Montserrat font-semibold">Total Jobs</p>
            <FaBriefcase size={28} />
          </div>
          <p className="text-3xl ">1</p>
        </div>
        <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl font-Montserrat font-semibold">
              Total Application
            </p>
            <IoIosPeople size={35} />
          </div>
          <p className="text-3xl ">38</p>
        </div>
        <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl font-Montserrat font-semibold">Shortlisted</p>
            <TiUserAdd size={35} />
          </div>
          <p className="text-3xl ">5</p>
        </div>
        <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl font-Montserrat font-semibold">Rejected</p>
            <TiUserDelete size={35} />
          </div>
          <p className="text-3xl ">33</p>
        </div>
      </div>

      <div className="mt-[8rem]">
        <p className="text-black">Quick Links</p>

        <div className="grid grid-cols-3 grid-rows-2 gap-4  xxs:grid-cols-1 ss:grid-cols-3 ">
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
            <div className="flex justify-between items-center">
              
              <MdOutlineSpaceDashboard size={35} />
              <div>
                <p>Career Page</p>
                <p>Your Personilised Career Page</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            
          </div>
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
          <Link to='/recruiter/publishedjob'>
            <div className="flex justify-between items-center">
              
              <BsBriefcase size={35} />
              <div>
                <p>Published Job</p>
                <p>See your Published Job</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            </Link>
          </div>
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
            <div className="flex justify-between items-center">
              
              <IoIosPeople size={35} />
              <div>
                <p>Talent Pool</p>
                <p>Find The best candidate</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            
          </div>
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
            <div className="flex justify-between items-center">
              
              <IoChatbubblesOutline size={35} />
              <div>
                <p>Expertia Chat</p>
                <p>Instantly chat with candiatate</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            
          </div>
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
            <div className="flex justify-between items-center">
              
              <MdAssignmentAdd size={35} />
              <div>
                <p>Interviews</p>
                <p>Expert Interviews services</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            
          </div>
          <div className="bg-primary p-4 flex gap-12 flex-col shadow-md rounded-xl">
            <div className="flex justify-between items-center">
              
              <FaListCheck size={35} />
              <div>
                <p>Assesments</p>
                <p>Instantly access your candiatate</p>
              </div>
              <FaArrowRightFromBracket size={35} />
            </div>
            
          </div>
         
        </div>
      </div>
    </>
  );
};

export default DashbordCard;
