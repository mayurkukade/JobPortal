import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase, BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople, IoMdClipboard } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline, IoPersonAddOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuUserMinus2 } from "react-icons/lu";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Hidden } from "@mui/material";
const RecruiterSidebar = () => {
  const Sidebar_animation = {
    open: {
      width: "12rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        damping: 40,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="  text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem]
        h-screen overflow-hidden 
         "
      >
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: 10,

                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          className=" w-full h-fit z-50 right-2 p-5  cursor-pointer flex justify-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoIosArrowBack size={25} />
        </motion.div>
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          {/* <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" className={isOpen ? 'display' : 'hidden'}>
              Sidebar
            </Typography>
          </div> */}
          <List>
            <Link to={"/recruiter"}>
              <ListItem>
                <ListItemPrefix>
                  <RxDashboard className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>

            <Link to={'/recruiter/jobs'}>

            

            <ListItem>
              <ListItemPrefix>
                <BsBriefcase className="h-5 w-5" />
              </ListItemPrefix>
              jobs
            </ListItem>
            </Link>
            <ListItem>
              <ListItemPrefix>
                <IoIosPeople className="h-5 w-5" />
              </ListItemPrefix>
              Talent Pool
              <ListItemSuffix>
               
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <MdOutlineSpaceDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Career Page
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <TfiBag className="h-5 w-5" />
              </ListItemPrefix>
              Interviews
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <IoChatbubblesOutline className="h-5 w-5" />
              </ListItemPrefix>
              Chats
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <VscAccount className="h-5 w-5" />
              </ListItemPrefix>
              Accounts
            </ListItem>
          </List>
        </Card>
      </motion.div>
    </>
  );
};

export default RecruiterSidebar;
