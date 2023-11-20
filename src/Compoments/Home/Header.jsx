import React from "react";
import preferable from "../Images/preferable2.png";

export default function Header() {
  return (
    <div className="flex bg-background flex-wrap justify-center " >

      {/* left side of container */}
      <div className="md:pt-36 pt-20 md:spl-[50px]  ">
        <p className=" md:text-6xl text-4xl font-[Poppins] font-semibold text-[#160202] ">
          We Help
          
          <div className="pt-3">
          <span className="text-[#FF8400] stroke-brown-900 ">You</span> Get The</div>
          <div className="pt-3">
          Right <span className="text-[#FF8400] ">Job</span></div>
        </p>

        <p className="mt-10 font-[Poppins] text-2xl">Join us and take your career to the <br /> next level.</p>

          <div className="flex mt-10"> 
          <button className=" font-[Poppins] w-44 h-10  mt-3 text-lg font-bold bg-NavColour rounded-md">How does it work?</button>           
        <button className="bg-[#FF8400] md:ml-10 ml-5 content-center font-bold w-44 h-10 rounded-md mt-3">
          Get Started
        </button>
        </div> 
      </div>

      {/* Right side of container */}

      <div className="md:ml-[200px] lg:ml-[150px]  mt-14">
        <img
          className="md:h-[32rem] h-[32rem] w-[40rem]  "
          src={preferable}
          alt="image"
        />
      </div>
    </div>
  );
}
