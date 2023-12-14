import React from 'react'
import Lens from '../../Images/Lenskart.png'
import {Button,Dialog} from '@material-tailwind/react'
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaIndianRupeeSign  } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import {motion} from 'framer-motion'
import PostJob from '../DashboardFeatures/PostJob';



export default function DashboardNavbar() {
 // State to toggle the mobile menu
 const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

 // Post Job
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen((cur) => !cur);


 // Function to toggle mobile menu
 const toggleMobileMenu = () => {
   setMobileMenuOpen(!mobileMenuOpen);
 };

//  const handleMenuItemClick = () => {
//   setMobileMenuOpen(false);
// };

  return (
    <div className='flex justify-center bg-blue-gray-300  rounded-md'>

       {/* Mobile Menu Icon (Hamburger) */}
       <div className='md:hidden mt-2 text-white'>
          <a className='text-4xl' onClick={toggleMobileMenu}>&#8801;</a>
        </div>

      <div className='flex  items-center sm:ml-0 ml-2'>
        
        {/* Company name */}
        <div className='flex mt-2'>
           <div className=' sm:ml-5 '>
            
             <img src={Lens} className='rounded-full sm:w-16 ' />
          
          </div>
          <div className='ml-5'>
            <p className='font-inter sm:text-2xl'>Company Name</p>
            <p className='font-inter sm:text-sm text-xs'>Subheading</p>
          </div>
        </div>
        
        {/* Button */}

        <div className='sm:ml-[60rem] ml-10'>
            <Button onClick={handleOpen}>Post Job</Button>
        </div>
        
      </div>

      
         {/* Mobile menu Open */}
        {mobileMenuOpen && (
          <motion.div className={`fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-0 flex justify-start transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={toggleMobileMenu}
          initial ={{x : '-100vw'}}
          animate ={{x : 0}}
          transition={{delay : 0.2 , stiffness : 30, type : 'spring' }}>
           <div className={`border border-gray-300 rounded-md p-4 bg-white transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
           <div>
             <h2 className='ml-9'><RxDashboard className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm'>Dashboard</p>
            </div>
            
            {/* Jobs */}
           <div className='mt-5 ml-3'>
              <h2 className='ml-6'><BsBriefcase className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-4'>jobs</p>
            </div>
   
            {/* Talent Pool */}
           <div className='mt-5 ml-2'>
              <h2 className='ml-6'><IoIosPeople className='w-[30px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-3'>Talent <br /> Pool</p>
            </div>
   
            {/* Career Page */}
           <div className='mt-5 ml-2'>
              <h2 className='ml-6'><MdOutlineSpaceDashboard className='w-[25px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-3'>Career <br /> Page</p>
            </div>
   
            {/* interviews */}
           <div className='mt-5'>
              <h2 className='ml-8'><TfiBag className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm '>interviews</p>
            </div>
   
            {/* chats */}
           <div className='mt-5 ml-2'>
              <h2 className='ml-6'><IoChatbubblesOutline className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-3'>chats</p>
            </div>
   
            {/* pricing */}
           <div className='mt-20'>
              <h2 className='ml-7'><FaIndianRupeeSign  className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-3'>pricing</p>
            </div>
   
            {/* account*/}
           <div className='mt-5'>
              <h2 className='ml-7'><VscAccount  className='w-[20px] h-[30px] ' /></h2>
              <p className='uppercase text-sm ml-2 '>account</p>
            </div>
            </div>
            </motion.div>
        )}

        {/* Post Job */}

        <Dialog
        size='sm'
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
       <PostJob/>
      </Dialog>
        
    </div>
  )
}
