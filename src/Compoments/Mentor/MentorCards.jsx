import Aashna from "../Images/mentor/Aashna.jpg";
import sumit from "../Images/mentor/Sumit Jadhav.jpeg";
import Mayur from "../Images/mentor/MayurPingale.jpeg";
import { FaLinkedin } from "react-icons/fa";

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
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
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
                    <Chip
                      variant="outlined"
                      value="Operations"
                      className="m-2 rounded-full w-28 text-center"
                    />
                    <Chip
                      variant="outlined"
                      value="Business Development"
                      className="m-2 rounded-full w-44 text-center"
                    />
                  </div>
                  <div className="flex">
                    <Chip
                      variant="outlined"
                      value="Intrepreneurship"
                      className="m-2 rounded-full w-36 text-center"
                    />
                    <Chip
                      variant="outlined"
                      value="Brand Management"
                      className="m-2 rounded-full w-44 text-center"
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button
                  size="lg"
                  className="bg-light-blue-500"
                  fullWidth={true}
                >
                  Connect @ Rs.699
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Second Card  */}
          <div className="mb-6 sm:mb-0">
            <Card className="sm:w-[390px] h-fit">
            
            <CardHeader floated={false} className="h-80">
                <img src={sumit} alt="profile-picture" />
              </CardHeader>
             
              <CardBody className="text-left">
           
                <div color="blue-gray" className=" flex items-center">
                  <Typography variant="h4">Sumit Jadhav</Typography>
                  <a href="https://www.linkedin.com/in/sumit-jadhav-b4993937/">
                    {" "}
                    <FaLinkedin
                      className="ml-2 h-5 cursor-pointer "
                      color="blue"
                    />
                  </a>
                </div>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  Founder - Preferable.co.in || Opticalarc.com
                </Typography>
                {/* <Typography color="blue-gray" className="text-sm" textGradient>
                  Industries:
                  Supply Chain Management|
                  GTM |
                  Operations, Category Management |
                  Sales & Service across various domains, such as Ecommerce, Pharma, and Edtech
                </Typography> */}
                <div>
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Strategy Consulting</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Research</Button> */}
                  {/* <Button className="m-1 bg-blue-gray-100 text-black rounded-full">Data Analysis</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Business Analysis</Button> */}
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Management Consulting</Button> */}

                  {/* <Chip variant="outlined" value="CEO at Optical Arc" className="m-2 rounded-full w-fit text-center" /> */}
                  <Chip
                    variant="filled"
                    color="blue"
                    value="Supply Head at ElectricPe"
                    className="m-2 rounded-full w-fit text-center"
                  />

                  <Chip
                    variant="filled"
                    value="Regional Sourcing Head, Pharma at Udaan"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />
                  <Chip
                    variant="filled"
                    value="General Manager Growth at Toppr"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />

                  <Chip
                    variant="filled"
                    value="Business Development Manager at Flipkart"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-primary mt-5"
                  fullWidth={true}
                >
                  Contact Now
                </Button>
              </CardBody>
         
               
             
            </Card>
          </div>
          <div className="mb-6 sm:mb-0">
            <Card className="sm:w-[390px] h-fit">
            <CardHeader floated={false} className="h-80">
                <img src={Mayur} alt="profile-picture" />
              </CardHeader>
             
             
              <CardBody className="text-left">

           
                <div color="blue-gray" className=" flex items-center mt-2">
                  <Typography variant="h4">Mayur Pingale</Typography>
                  <a  href="https://www.linkedin.com/in/mayur-pingale-18aa6b44/">
                    {" "}
                    <FaLinkedin
                      className="ml-2 h-5 cursor-pointer "
                      color="blue"
                    />
                  </a>
                </div>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                 Senior Technical Consultant at Arorian Technologies GmbH
                </Typography>
                {/* <Typography color="blue-gray" className="text-sm" textGradient>
                  Industries:
                  Supply Chain Management|
                  GTM |
                  Operations, Category Management |
                  Sales & Service across various domains, such as Ecommerce, Pharma, and Edtech
                </Typography> */}
                <div>
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Strategy Consulting</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Research</Button> */}
                  {/* <Button className="m-1 bg-blue-gray-100 text-black rounded-full">Data Analysis</Button> */}
                  {/* <Button className="bg-blue-gray-100 text-black rounded-full">Business Analysis</Button> */}
                  {/* <Button className="m-2 bg-blue-gray-100 text-black rounded-full">Management Consulting</Button> */}

                  {/* <Chip variant="outlined" value="CEO at Optical Arc" className="m-2 rounded-full w-fit text-center" /> */}
                  <Chip
                    variant="filled"
                    color="blue"
                    value="Senior Technical Consultant"
                    className="m-2 rounded-full w-fit text-center"
                  />

                  <Chip
                    variant="filled"
                    value="Software Engineer"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />
                  <Chip
                    variant="filled"
                    value="Windchill customisation"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />

                  <Chip
                    variant="filled"
                    value="Business Development Manager at Flipkart"
                    className="m-2 rounded-full w-fit text-center"
                    color="blue"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-primary mt-5"
                  fullWidth={true}
                >
                  Contact Now
                </Button>
              </CardBody>
         
               
             
            </Card>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default MentorCards;
