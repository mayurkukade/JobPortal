import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";
import opticalraclogo from "../Images/Opticalarclogo.png";
import { VscAccount } from "react-icons/vsc";
import { useCompanyByUserIdQuery } from "../../services/Recruiter/recruiterApiSlice";
import { IoCopyOutline } from "react-icons/io5";
import { IconButton, Typography } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { useauthHooks } from "../hooks/authHooks";
import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
} from "@material-tailwind/react";

const RecruiterSidebar = () => {
  const Sidebar_animation = {
    open: {
      width: "14rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4.6rem",

      transition: {
        damping: 40,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(true);
  const { useDecode } = useauthHooks();
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false)
  console.log(useDecode);
  const {
    data: companyDetails,
    isLoading,
    isError,
    isSuccess,
  } = useCompanyByUserIdQuery("1001");
  let content;
  if (isLoading) {
    content = <p>Loading..</p>;
  } else if (isError) {
    content = <p>Error...</p>;
  } else if (companyDetails) {
    content = companyDetails;
  }

  console.log(content);

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
                  x: 0,

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
        <Card className="  shadow-xl shadow-blue-gray-900/5">
          <List className="text-wrap">
            <ListItem>
              <Avatar src={opticalraclogo} size="lg" className="p-1 " />
              <p className="text-wrap text-primary text-lg font-poppins">
                {isSuccess
                  ? content?.responseData?.companyName
                  : null && "Company Name"}
              </p>
            </ListItem>
          </List>
        </Card>
        <Card className="h-[calc(100vh-2rem)] w-full  max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          {/* <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" className={isOpen ? 'display' : 'hidden'}>
              Sidebar
            </Typography>
          </div> */}
          <List>
            <Link to={"/recruiter"}>
              <div className="flex w-[10.5rem] justify-center items-center">
                <ListItem>
                  <span className="text-xs mr-2">Ref.No.</span>
                  <span className="text-darkBlueBackground font-Montserrat font-semibold text-start">
                    {" "}
                    {isSuccess ? (
                      <div className="flex justify-center items-center gap-2">
                        {content?.responseData?.refNo}{" "}
                      </div>
                    ) : (
                      null && "Company Name"
                    )}
                  </span>
                </ListItem>
                <Tooltip content={copied?'copied':'copy'}>
                <IconButton
                className="bg-transparent h-6"
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy(content?.responseData?.refNo);
            setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-black" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-black" />
          )}
        </IconButton>
        </Tooltip>
              </div>
            </Link>
            <Link to={"/recruiter"}>
              <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                <ListItemPrefix>
                  <RxDashboard className="h-6 w-6" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>

            <Link to={"/recruiter/jobs"}>
              <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                <ListItemPrefix>
                  <BsBriefcase className="h-6 w-6" />
                </ListItemPrefix>
                jobs
              </ListItem>
            </Link>
            <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
              <ListItemPrefix>
                <IoIosPeople className="h-6 w-6" />
              </ListItemPrefix>
              Talent Pool
            </ListItem>
            <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
              <ListItemPrefix>
                <MdOutlineSpaceDashboard className="h-6 w-6" />
              </ListItemPrefix>
              Career Page
            </ListItem>
            <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
              <ListItemPrefix>
                <TfiBag className="h-6 w-6" />
              </ListItemPrefix>
              Interviews
            </ListItem>
            <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
              <ListItemPrefix>
                <IoChatbubblesOutline className="h-6 w-6" />
              </ListItemPrefix>
              Chats
            </ListItem>
            <ListItem className="hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
              <ListItemPrefix>
                <VscAccount className="h-6 w-6" />
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
