import { Card, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
const WatchCounter = () => {
  // Set your target end date
  const endDate = new Date("2024-03-14T00:00:00");

  // State to hold the remaining time in seconds
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Update the remaining time every second
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Function to calculate the remaining time
  function calculateRemainingTime() {
    const currentTime = new Date();
    const timeDifference = endDate - currentTime;
    const remainingSeconds = Math.max(0, Math.floor(timeDifference / 1000));
    return remainingSeconds;
  }

  // Convert seconds to days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (3600 * 24));
  const hours = Math.floor((remainingTime % (3600 * 24)) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  return (
    <Card className="xxs:p-1 ss:p-5 mt-12 text-center flex ">
      <h2 className="text-2xl text-primary font-poppins font-medium">
        Registration End In:
      </h2>
      <div className="flex justify-center gap-4  bg-primary p-2 text-white">
        <div>
          <p className="text-3xl">{days}</p>
          <p>Days</p>
        </div>
        <div className="flex items-center text-4xl">:</div>
        <div>
          <p className="text-3xl">{hours}</p>
          <p>Hours</p>
        </div>
        <div className="flex items-center text-4xl">:</div>
        <div>
          <p className="text-3xl">{minutes}</p>
          <p>minutes</p>
        </div>
        <div className="flex items-center text-4xl">:</div>
        <div>
          <p className="text-3xl">{seconds}</p>
          <p>seconds</p>
        </div>
      </div>
      {/* <p>Target End Date: {endDate.toString()}</p> */}
      <div></div>
      <div className="mt-3 flex flex-col gap-1 justify-center">
        <p> Register Now to Secure Your Seat by Clicking on the Link Below👇</p>
        <div className="flex justify-center">
       <Link to={'/event/register'}><Button className="w-[10rem] bg-primary">Register Now</Button></Link>   
        </div>
      </div>
      <div className="flex gap-1 justify-center mt-5">
        <Link to="https://www.linkedin.com/in/sumit-jadhav-b4993937/">
          {" "}
          <FaLinkedin size={25} color="blue" />{" "}
        </Link>
        <Link to="https://www.instagram.com/preferable_crafting_careers/?hl=en">
          {" "}
          <FaInstagramSquare size={25} color="red" />
        </Link>
        <Link to="https://twitter.com/Preferable_edu">
          {" "}
          <FaSquareXTwitter size={25} color="black" />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61555474696142">
          {" "}
          <FaFacebookSquare size={25} color="blue" />
        </Link>
        <Link to="https://www.youtube.com/channel/UCyVNBzY69OnzZKg2WI9oNlg">
          {" "}
          <IoLogoYoutube size={25} color="red" />
        </Link>
        
      
       

       
      </div>
    </Card>
  );
};

export default WatchCounter;
