import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="flex justify-center ">
      <div>
        <p className="text-4xl  text-center py-5">Mentor Booking</p>
        <hr className="border-black" />
        
        {/* First Name */}
        <div className="flex mt-5 ">
          <label htmlFor="">Name :-</label>

          <div className="sm:w-96  sm:h-10 sm:ml-[5.8rem] ml-[5.6rem] bg-Details">
            <Input type="text" label="Name" />
          </div>

        </div>
        
        {/* Phone Number */}
        <div className="flex mt-5 ">
        <label htmlFor="Mobile Number">Phone :- </label>
        <div className="sm:w-96  sm:h-10 sm:ml-[5.5rem] ml-[5.4rem] bg-Details">
            <Input type="number" label="Mobile Number" />
          </div>
        </div>

         {/* Email */}
        <div className="flex mt-5 ">
        <label htmlFor="Email"> Email :- </label>
        
          <div className="sm:w-96  sm:h-10 sm:ml-[5.9rem] ml-[5.8rem] bg-Details">
            <Input type="email" label="Email" />
          </div>
        </div>

        {/* DOB */}
        <div className="flex mt-5 ">
        <label htmlFor="">DOB  :- </label>
        
        <div className="sm:w-96  sm:h-10 sm:ml-[6.2rem] ml-[6.1rem] bg-Details">
            <Input type="date" label="" />
          </div>
        </div>

         {/* Password */}
        <div className="flex mt-5 ">
        <label htmlFor="">Password :-</label>
        
        <div className="sm:w-96  sm:h-10 sm:ml-16 ml-16 bg-Details">
            <Input type="password" label="Enter Password" />
          </div>
        </div>
   {/* Confirm password */}
       <div className="flex mt-5 ">
        <label htmlFor="">Confirm password :-</label>
        <br />
        <div className="sm:w-96  sm:h-10 sm:ml-2 ml-2 bg-Details">
            <Input type="password" label="Enter Confirm Password" />
          </div>
        </div>
       <Link to="/Forms/LiveProject">
        <Button
          type="next"
          className="sm:w-48 sm:h-10  mt-5  border-2 rounded-md bg-save"
        >
          Register
        </Button>
        </Link>
      </div>
    </div>
  );
}
