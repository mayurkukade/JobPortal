import React, { useState } from "react";
import { Rating, Typography } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { CardHeader } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import AboutSection from "./AboutSection";
const CourseDetails = () => {
  const [rated, setRated] = React.useState(4);
  const data = [
    {
      label: "About",
      value: "dashboard",
      // icon: Square3Stack3DIcon,
      desc: <AboutSection/>,
    },
    {
      label: "Modules",
      value: "profile",
      // icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Instructor",
      value: "settings",
      // icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <>
    <section>
      <div className="bg-navyblue flex items-center flex-row xxs:flex-col ss:flex-row p-20  ">
        <div className="font-poppins  container mx-auto p-2">
          <p className="text-xl text-textnavyblue font-medium">
            UNIVERSITY OF TEXAS
          </p>
          <p className="text-3xl text-textnavyblue font-medium mt-5">
            {" "}
            PG Program in Artificial Intelligence & Machine Learning
          </p>

          <div className="flex gap-3 mt-5 items-center">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="sm"
            />
            <div className="   text-textnavyblue">
              <p>Instructor: Rav Ahuja</p>
              <div className="flex gap-2 mt-3 ">
                <p className=" text-textnavyblue">Taught in </p>
                <Chip
                  value="English"
                  className="bg-textnavyblue text-navyblue"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold text-blue-gray-500 mt-5">
            {rated}.7
            <Rating value={4} readonly />
            <Typography
              color="blue-gray"
              className="font-medium text-blue-gray-500"
            >
              Based on 134 Reviews
            </Typography>
          </div>
          <p className="mt-2 text-textnavyblue ">23,000 Learners</p>
        </div>
        <CardHeader
          color="blue-gray"
          className="relative h-auto object-fill w-[30rem] xxs:w-[20rem] xxs:mt-2 xxs:mb-5"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661290236551-cf71e23bd0eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
          />
        </CardHeader>
      </div>

    </section>
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value}) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
  
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-white">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
</>
  );
};

export default CourseDetails;
