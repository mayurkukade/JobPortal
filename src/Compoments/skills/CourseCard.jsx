import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import { Rating } from "@material-tailwind/react";

const CourseCard = () => {
  const [rated, setRated] = React.useState(4);
  return (
    <Card className="mt-6 w-96">
    
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://plus.unsplash.com/premium_photo-1661290236551-cf71e23bd0eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <p className="font-Montserrat">UNIVERSITY OF TEXAS</p>
        <p  className="mb-2 text-xl font-medium font-poppins ">
          PG Program in Artificial Intelligence & Machine Learning
        </p>

        <Typography>
          <span className="text-lg font-semibold font-Montserrat">Skills you'll gain :</span>{" "}
          Algorithms, Applied Machine Learning, Artificial Neural Networks,
        </Typography>
        <div className="flex items-center gap-2 font-bold text-blue-gray-500 mt-2">
          {rated}.7
          <Rating value={4} readonly  />
          <Typography
            color="blue-gray"
            className="font-medium text-blue-gray-500"
          >
            Based on 134 Reviews
          </Typography>
        </div>
        <div className="flex gap-4 mt-2">
          <p className="text-lg font-poppins">Beginner Course </p>
          <p className="text-lg font-poppins">1-4 weeks</p>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={"/skills/details"} target="_target">
          <Button className="bg-primary">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
