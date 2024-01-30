import Aashna from "../Images/mentor/Aashna.jpg";
import Aayushi from "../Images/mentor/Aayushi.jpg";
import Amet from "../Images/mentor/Amet.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

function MentorCards() {
  return (
    <div>
      <p className="text-3xl m-10 ml-4 sm:ml-40 text-left">All Mentors</p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
          {/* First Card */}
          <div className="mb-6 sm:mb-0">
            <Card className="sm:w-[390px]">
              <CardHeader floated={false} className="h-80">
                <img src={Aashna} alt="profile-picture" className="h-full" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Aashna Singh
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  Co-Founder & COO at MoooFarm
                </Typography>
                <Typography color="blue-gray" className="text-sm" textGradient>
                  Industries: Agriculture & Allied Industries
                </Typography>
                <div>
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Operations</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Business Development</Button> */}
                  {/* <Button className="m-1 bg-blue-gray-100 text-black rounded-full">Intrepreneurship</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Brand Management</Button> */}
                  <div className="flex">
                    <Chip variant="outlined" value="Operations" className="m-2 rounded-full w-28 text-center" />
                    <Chip variant="outlined" value="Business Development" className="m-2 rounded-full w-44 text-center" />
                  </div>
                  <div className="flex">
                    <Chip variant="outlined" value="Intrepreneurship" className="m-2 rounded-full w-36 text-center" />
                    <Chip variant="outlined" value="Brand Management" className="m-2 rounded-full w-44 text-center" />
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" className="bg-light-blue-500" fullWidth={true}>
                  Connect @ Rs.699
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Second Card  */}
          <div className="mb-6 sm:mb-0">
            <Card className="sm:w-[390px]">
              <CardHeader floated={false} className="h-full">
                <img src={Aayushi} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-left">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Aayushi Batra
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  Senior Consultant at EY Parthenon GDS
                </Typography>
                <Typography color="blue-gray" className="text-sm" textGradient>
                  Industries:
                  Consulting & Advisory Services |
                  Banking & Financial Services |
                  Education, Training & Careers |
                  Content Writing & Marketing
                </Typography>
                <div>
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Strategy Consulting</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Research</Button> */}
                  {/* <Button className="m-1 bg-blue-gray-100 text-black rounded-full">Data Analysis</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Business Analysis</Button> */}
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Management Consulting</Button> */}
                  <div className="flex">
                    <Chip variant="outlined" value="Strategy Consulting" className="m-2 rounded-full w-40 text-center" />
                    <Chip variant="outlined" value="Research" className="m-2 rounded-full w-28 text-center" />
                  </div>
                  <div className="flex">
                    <Chip variant="outlined" value="Data Analysis" className="m-2 rounded-full w-32 text-center" />
                    <Chip variant="outlined" value="Business Analysis" className="m-2 rounded-full w-40 text-center" />
                  </div>
                  <Chip variant="outlined" value="Management Consulting" className="m-2 rounded-full w-44 text-center" />
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" className="bg-light-blue-500" fullWidth={true}>
                  Connect @ Rs.499
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Third Card */}
          <div className="mb-6 sm:mb-0">
            <Card className="sm:w-[390px]">
              <CardHeader floated={false} className="h-full">
                <img src={Amet} alt="profile-picture" className="rounded-xl w-full h-full"/>
              </CardHeader>
              <CardBody className="text-left">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Aditya Pillai
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  Associate consultant at Infosys Pvt Ltd
                </Typography>
                <Typography color="blue-gray" className="text-sm" textGradient>
                  Industries: Content Writing & Marketing
                </Typography>
                <div>
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Branding</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Customer Service</Button> */}
                  {/* <Button className="m-1 bg-blue-gray-100 text-black rounded-full">Digital Marketing</Button> */}
                  <div className="flex">
                    <Chip variant="outlined" value="Branding" className="m-2 rounded-full w-24 text-center" />
                    <Chip variant="outlined" value="Customer Service" className="m-2 rounded-full w-40 text-center" />
                  </div>
                  <div className="flex">
                    <Chip variant="outlined" value="Digital Marketing" className="m-2 rounded-full w-36 text-center" />
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" className="bg-light-blue-500" fullWidth={true}>
                  Connect @ Rs.499
                </Button>
              </CardFooter>
            </Card>
          </div>
          </div>
          </div>
    </div>
  )
}

export default MentorCards