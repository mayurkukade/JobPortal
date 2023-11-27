// import React from 'react'
 import Navbars from '../Navbars'
// import JobDetailsHeader from './JobDetailsHeader'
// import MainPart from './MainPart'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Navbar,
} from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CheckIcon,
} from "@material-tailwind/react";
import { ThemeProvider,DefaultTheme } from "@material-tailwind/react";


const theme = {
  tabPanel: {
    defaultProps: {
      className: "",
    },
    styles: {
      base: {
        width: "w-full",
        height: "h-max",
        color: "text-gray-700",
        p: "p-4",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-light",
        lineHeight: "leading-relaxed",
      },
    },
  },
};
import Lens from "../Images/Lenskart.png";
import { useGetAllJobQuery } from '../../services/job/jobApiSlice';
export default function JobDetails() {

  const {data:jobData} = useGetAllJobQuery()
  
  const data = [
    {
      label: "Lenskart",
      value: "html",
      designation: "Full Stack developer",
      location: "Pune,Maharashtra,India",

      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },

    {
      label: "Wipro",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Optical Arc Pvt. Ltd.",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Infosys",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Zoho",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    }
  ];

  return (
    <>

   <Navbars/>
    <div className="container mx-auto m-12  ">
      {/* <JobDetailsHeader/>
      <MainPart/> */}
      
      <Tabs value="html" orientation="vertical"  className="h-[80vh]"   >
        <TabsHeader className=" max-h-[80vh]  overflow-y-auto "  >
          {jobData?.list?.map(({ label, jobId,companyName, icon,postName,jobLocation }) => (
            
            <Tab key={jobId} value={jobId} className="flex items-start">
              <div className="flex">
              <Card className="w-[25rem] xl:w-[40rem] flex-row mb-2 h-[9rem]">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-1/5 shrink-0 rounded-r-none "
            >
              <img
                src={Lens}
                className="md:w-[3.875rem] md:h-[2.75rem] mt-7 ml-5"
                alt=""
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-[#5594d5]"
              >
              {postName}
              </Typography>
              <Typography variant="h6" color="gray" className=" uppercase">
                {companyName}
              </Typography>
              <Typography color="gray" className=" font-normal">
                {jobLocation}
              </Typography>
              <Typography color="green" className=" font-normal">
                3 hours ago
              </Typography>
              <Typography color="green" className=" font-normal"></Typography>
            </CardBody>
          </Card>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="overflow-y-auto max-h-[400px]">
          {jobData?.list?.map(({ jobId,jobDescription, desc }) => (
            <TabPanel key={jobId} value={jobId} className="py-0   ">
              {jobDescription}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
     
    </div>
    </>
  );
}
