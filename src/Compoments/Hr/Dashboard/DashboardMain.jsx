
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase,BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople, IoMdClipboard } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline, IoPersonAddOutline } from "react-icons/io5";
import {FaArrowRightFromBracket} from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuUserMinus2 } from "react-icons/lu";
import {Input} from "@material-tailwind/react";
import Cards from '../../Home/Cards'
import {motion} from 'framer-motion'
import TalentPool from "../Dashboard Compoment/TalentPool";
import CareerPage from "../Dashboard Compoment/CareerPage";
import Interview from "../Dashboard Compoment/Interview";
import Pricing from "../Dashboard Compoment/Pricing";
import Accountss from "../Dashboard Compoment/Accountss";
import JobSection from "../Dashboard Compoment/JobSection";
import { useNavigate } from 'react-router-dom';



export default function () {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const navigate = useNavigate()

  function Dashboard() {
   if(open1==true){
    setOpen1(open1)
   }else{
    setOpen1(!open1)
   }

   if(open2==true){
    setOpen2(!open2)
   }
   if(open3==true){
    setOpen3(!open3)
  }
   if(open4==true){
    setOpen4(!open4)
  }
   if(open5==true){
    setOpen5(!open5)
  }
   if(open6==true){
    setOpen6(!open6)
  }
   if(open7==true){
    setOpen7(!open7)
  }
  if(open9==true){
    setOpen9(!open9)
  }

  document.getElementById('dashboard').setAttribute("style","background : #bdbddb");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  function Jobs() {
     if(open2==false){
      setOpen2(!open2)
     }
     if(open1==true){
      setOpen1(!open1)
    }
     if(open3==true){
      setOpen3(!open3)
    }
     if(open4==true){
      setOpen4(!open4)
    }
     if(open5==true){
      setOpen5(!open5)
    }
     if(open6==true){
      setOpen6(!open6)
    }
     if(open7==true){
      setOpen7(!open7)
    }
    if(open9==true){
      setOpen9(!open9)
    }
    document.getElementById('jobs').setAttribute("style","background : #bdbddb");
    document.getElementById('dashboard').removeAttribute("style");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  function Talent_Pool() {
    if(open3==false){
      setOpen3(!open3)
    }
    if(open2==true){
      setOpen2(!open2)
     }
     if(open1==true){
      setOpen1(!open1)
    }
     if(open4==true){
      setOpen4(!open4)
    }
     if(open5==true){
      setOpen5(!open5)
    }
     if(open6==true){
      setOpen6(!open6)
    }
     if(open7==true){
      setOpen7(!open7)
    }
    if(open9==true){
      setOpen9(!open9)
    }
    document.getElementById('talent').setAttribute("style","background : #bdbddb")
    document.getElementById('dashboard').removeAttribute("style");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  function career (){
   if(open4==false){
    setOpen4(!open4)
   }
   if(open3==true){
    setOpen3(!open3)
  }
  if(open2==true){
    setOpen2(!open2)
   }
   if(open1==true){
    setOpen1(!open1)
  }
   if(open5==true){
    setOpen5(!open5)
  }
   if(open6==true){
    setOpen6(!open6)
  }
   if(open7==true){
    setOpen7(!open7)
  }
  if(open9==true){
    setOpen9(!open9)
  }
  document.getElementById('career').setAttribute("style","background : #bdbddb")
  document.getElementById('dashboard').removeAttribute("style");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  function interview (){
   if(open5==false){
    setOpen5(!open5)
   }
   if(open4==true){
    setOpen4(!open4)
   }
   if(open3==true){
    setOpen3(!open3)
  }
  if(open2==true){
    setOpen2(!open2)
   }
   if(open1==true){
    setOpen1(!open1)
  }
   if(open6==true){
    setOpen6(!open6)
  }
   if(open7==true){
    setOpen7(!open7)
  }
  if(open9==true){
    setOpen9(!open9)
  }
  document.getElementById('interview').setAttribute("style","background : #bdbddb")
  document.getElementById('dashboard').removeAttribute("style");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  function chat (){
  if(open6==false){
    setOpen6(!open6)
  }
  if(open5==true){
    setOpen5(!open5)
   }
   if(open4==true){
    setOpen4(!open4)
   }
   if(open3==true){
    setOpen3(!open3)
  }
  if(open2==true){
    setOpen2(!open2)
   }
   if(open1==true){
    setOpen1(!open1)
  }
   if(open7==true){
    setOpen7(!open7)
  }
  if(open9==true){
    setOpen9(!open9)
  }
  document.getElementById('chat').setAttribute("style","background : #bdbddb")
  document.getElementById('dashboard').removeAttribute("style");
  document.getElementById('account').removeAttribute("style");
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')
  }

  // function Price (){
  //   if(open7==false){
  //     setOpen7(!open7)
  //   }
  //   if(open6==true){
  //     setOpen6(!open6)
  //   }
  //   if(open5==true){
  //     setOpen5(!open5)
  //    }
  //    if(open4==true){
  //     setOpen4(!open4)
  //    }
  //    if(open3==true){
  //     setOpen3(!open3)
  //   }
  //   if(open2==true){
  //     setOpen2(!open2)
  //    }
  //    if(open1==true){
  //     setOpen1(!open1)
  //   }
  //   if(open9==true){
  //     setOpen9(!open9)
  //   }
  //   document.getElementById('price').setAttribute("style","background : #bdbddb")
  //   document.getElementById('dashboard').removeAttribute("style");
  // document.getElementById('account').removeAttribute("style");
  //   document.getElementById('jobs').removeAttribute('style')
  //   document.getElementById('talent').removeAttribute('style')
  //   document.getElementById('career').removeAttribute('style')
  //   document.getElementById('interview').removeAttribute('style')
  //   document.getElementById('chat').removeAttribute('style')
  // }

  function account (){

    if(open9==false){
      setOpen9(!open9)
    }
    if(open1==true){
      setOpen1(!open1)
    }
     if(open2==true){
      setOpen2(!open2)
    }
     if(open3==true){
      setOpen3(!open3)
    }
     if(open4==true){
      setOpen4(!open4)
    }
     if(open5==true){
      setOpen5(!open5)
    }
     if(open6==true){
      setOpen6(!open6)
    }
     if(open7==true){
      setOpen7(!open7)
    }
    document.getElementById('account').setAttribute("style","background : #bdbddb");
    document.getElementById('dashboard').removeAttribute('style')
    document.getElementById('jobs').removeAttribute('style')
    document.getElementById('talent').removeAttribute('style')
    document.getElementById('career').removeAttribute('style')
    document.getElementById('interview').removeAttribute('style')
    document.getElementById('chat').removeAttribute('style')
    document.getElementById('price').removeAttribute('style')

  }

  function navigation () {
    navigate("/PublishJob");
  }

  return (
    <div className="flex justify-center">
      <div className="sm:grid sm:grid-cols-12 bg-gray-50">
        {/* Leftside of page */}
        <div className="sm:col-span-2 mt-5 sm:flex hidden justify-center ml-2 ">
           <div className="border border-gray-300 rounded-md p-4">
            {/* Dashboard */}
            <motion.div onClick={Dashboard} id="dashboard" className="cursor-pointer rounded-md px-2" whileHover={{ scale : 1.1}}>
              <h2 className="ml-9">
                <RxDashboard className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm">Dashboard</p>
            </motion.div>

            {/* Jobs */}
            <motion.div whileHover={{ scale : 1.1}} id="jobs" className="mt-5 ml-3 cursor-pointer rounded-md px-2" onClick={Jobs}>
              <h2 className="ml-6">
                <BsBriefcase className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-4">jobs</p>
            </motion.div>

            {/* Talent Pool */}
            <motion.div whileHover={{ scale : 1.1}} id="talent" className="mt-5 ml-3 cursor-pointer rounded-md px-2" onClick={Talent_Pool} >
              <h2 className="ml-6">
                <IoIosPeople className="w-[30px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">
                Talent <br /> Pool
              </p>
            </motion.div>

            {/* Career Page */}
            <motion.div whileHover={{ scale : 1.1}} onClick={career} id="career" className="mt-5 ml-3 cursor-pointer rounded-md px-2">
              <h2 className="ml-6">
                <MdOutlineSpaceDashboard className="w-[25px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">
                Career <br /> Page
              </p>
            </motion.div>

            {/* interviews */}
            <motion.div  whileHover={{ scale : 1.1}} onClick={interview} id="interview" className="mt-5  cursor-pointer rounded-md px-2">
              <h2 className="ml-8">
                <TfiBag className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ">interviews</p>
            </motion.div>

            {/* chats */}
            <motion.div whileHover={{ scale : 1.1}} onClick={chat} id="chat" className="mt-5 ml-3 cursor-pointer rounded-md px-2">
              <h2 className="ml-6">
                <IoChatbubblesOutline className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">chats</p>
            </motion.div>

            {/* pricing */}
            {/* <motion.div  whileHover={{ scale : 1.1}} onClick={Price} id="price" className="mt-20 cursor-pointer rounded-md px-2">
              <h2 className="ml-7">
                <FaIndianRupeeSign className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">pricing</p>
            </motion.div> */}

            {/* account*/}
            <motion.div  whileHover={{ scale : 1.1}} onClick={account} id="account" className="mt-5 cursor-pointer rounded-md px-2">
              <h2 className="ml-7">
                <VscAccount className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-2 ">account</p>
            </motion.div>
          </div>
        </div>

        {/* Rightside of page */}

        {open1 && (
          <div className="sm:col-span-10 mt-5 bg-gray-50">
            {/* First part */}
            <div className="sm:grid sm:grid-cols-12 gap-4">
              {/* Total Jobs */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Total Jobs</p>
                    <p className="text-4xl mt-4">1</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <BsBriefcase className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Total Application */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Total Application</p>
                    <p className="text-4xl mt-4">15</p>
                  </div>

                  <div className="ml-10">
                    <h2 className="ml-6">
                      <IoIosPeople className="w-[40px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Shortlisted */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Shortlisted</p>
                    <p className="text-4xl mt-4">0</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <IoPersonAddOutline className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Rejected */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Rejected</p>
                    <p className="text-4xl mt-4">0</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <LuUserMinus2 className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-36">
              <p>
                {" "}
                <b>Quick Links</b>{" "}
              </p>
            </div>

            {/* Second Part */}
            <div className="sm:grid sm:grid-cols-12 mt-10 gap-4">
              {/* Career page */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <MdOutlineSpaceDashboard className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Career Page</b>
                    </p>
                    <p className="text-xs">Your Personilised Career page</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Published Job */}
              <motion.div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md cursor-pointer" whileHover={{scale : 1.1}} onClick={navigation}>
                <div className="flex ">
                  <h2 className="ml-6">
                    <BsBriefcase className="w-[30px] h-[40px] mt-4 " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Published Job</b>
                    </p>
                    <p className="text-xs">See your Published Job</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-20">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Talent Pool */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoIosPeople className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Talent Pool</b>
                    </p>
                    <p className="text-xs">Find The best candidate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Expertia Chat */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoChatbubblesOutline className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Expertia Chat</b>
                    </p>
                    <p className="text-xs">Instantly chat with candiatate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Interviews */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoChatbubblesOutline className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Interviews</b>
                    </p>
                    <p className="text-xs">Expert Interviews services</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Assesments */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoChatbubblesOutline className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Assesments</b>
                    </p>
                    <p className="text-xs">Instantly acesss your canditate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-8">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {open2 && (
          <div className="sm:col-span-10 mt-20 bg-gray-50">
            <JobSection/>
          </div>
        )}

        {open3 && (
          <div className="w-[1100px] bg-gray-50">
            <TalentPool/>
          </div>
        )}

        {open4 && (
          <div className="w-[1100px] bg-gray-50">
            <CareerPage/>
        </div>
        )}

        {open5 && (
           <div className="w-[1100px] bg-gray-50">
           <Interview/>
         </div>
        )}

        {open6 && (
           <div className="mt-10 w-[300px] rounded-md h-[500px] border border-gray-200 bg-gray-50">
             <p className="text-bold text-lg ml-5"><b>Chats</b></p>

             <div className="flex mt-5 ml-5">
            <p><BsFillPeopleFill className="w-[20px] h-[20px] mt-2" /></p>
            <div className="ml-5">
              <Input type="search" label="Search People" /> 
            </div>
             </div>
           </div>
        )}

        {open7 && (
          <div className=" h-[800px] flex ml-0 bg-gray-50">
            <Cards/>
          </div>
        )}

         {open8 && (
          <div className="mt-48 bg-gray-50 ">
             <Pricing/>
          </div>
         )}

         {open9 && (
           <div className="w-[1100px] bg-gray-50">
          <Accountss/>
         </div>
         )}

      </div>
    </div>
  );
}
