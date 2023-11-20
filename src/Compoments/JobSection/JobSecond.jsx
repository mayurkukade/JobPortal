import React from "react";
import Job from "../Images/job.svg";
import Skill from "../Images/skill.svg";
import Assis from "../Images/assist.svg";
import Inter from "../Images/inter.svg";
import Lens from "../Images/Lenskart.png";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CheckIcon,
} from "@material-tailwind/react";
export default function JobSecond() {
  return (
    <div className="mx-auto container  mt-20 ">
      <div className="flex flex-wrap gap-12 lg:justify-center ">
        {/* Left-side  */}

        <div className="   w-[21rem] h-[30rem]  ">
          <Card
            color="white"
            variant="gradient"
            className="w-full max-w-[20rem] p-8"
          >
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4 ">
                <li className="flex items-center gap-4"></li>
                <li className="flex items-center gap-4">
                  <img src={Job} className="w-[1.5rem] h-[3rem]" alt="" />
                  <Typography className="font-normal cursor-pointer hover:text-primary">
                    Applied Jobs
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <img src={Skill} className="w-[1.5rem] h-[3rem]" alt="" />
                  <Typography className="font-normal cursor-pointer hover:text-primary">
                    Skill Assesment
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <img src={Assis} className="w-[1.5rem] h-[3rem]" alt="" />
                  <Typography className="font-normal cursor-pointer hover:text-primary">
                    Interview prep
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <img src={Inter} className="w-[1.5rem] h-[3rem]" alt="" />
                  <Typography className="font-normal cursor-pointer hover:text-primary">
                    Saved Jobs
                  </Typography>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Right side */}

        <div className="w-[25rem] xl:w-[40rem]  ">
          <Card className="   flex-row mb-5 ">
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
                color="#03a9f4"
                className="text-[#5594d5]"
              >
                Full Stack Web Developer
              </Typography>
              <Typography variant="h6" color="gray" className=" uppercase">
                lenskart
              </Typography>
              <Typography color="gray" className=" font-normal">
                India(Remote)
              </Typography>
              <Typography color="green" className=" font-normal">
                3 hours ago
              </Typography>
              <Typography color="green" className=" font-normal"></Typography>
            </CardBody>
          </Card>
          <Card className="w-[25rem] xl:w-[40rem] flex-row mb-2">
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
                Full Stack Web Developer
              </Typography>
              <Typography variant="h6" color="gray" className=" uppercase">
                lenskart
              </Typography>
              <Typography color="gray" className=" font-normal">
                India(Remote)
              </Typography>
              <Typography color="green" className=" font-normal">
                3 hours ago
              </Typography>
              <Typography color="green" className=" font-normal"></Typography>
            </CardBody>
          </Card>
          <Card className="w-[25rem] xl:w-[40rem] flex-row mb-2">
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
                Full Stack Web Developer
              </Typography>
              <Typography variant="h6" color="gray" className=" uppercase">
                lenskart
              </Typography>
              <Typography color="gray" className=" font-normal">
                India(Remote)
              </Typography>
              <Typography color="green" className=" font-normal">
                3 hours ago
              </Typography>
              <Typography color="green" className=" font-normal"></Typography>
            </CardBody>
          </Card>
          <Card className="w-[25rem] xl:w-[40rem] flex-row mb-2">
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
                Full Stack Web Developer
              </Typography>
              <Typography variant="h6" color="gray" className=" uppercase">
                lenskart
              </Typography>
              <Typography color="gray" className=" font-normal">
                India(Remote)
              </Typography>
              <Typography color="green" className=" font-normal">
                3 hours ago
              </Typography>
              <Typography color="green" className=" font-normal"></Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
