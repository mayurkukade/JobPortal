import React from "react";
import preferable from "../Images/preferable2.png";

export default function Header() {
  return (
    <div className="flex bg-background container mx-auto " >

      {/* left side of container */}
      <div className="md:pt-20 md:mb-8 pt-20 md:spl-[50px]  ">
        <p className=" text-6xl font-[Poppins] font-semibold text-text ">
          We Help
          
          <div className="pt-3">
          <span className="text-accent  ">You</span> Get The</div>
          <div className="pt-3">
          Right <span className="text-accent ">Job</span></div>
        </p>

        <p className="mt-10 font-[Poppins] text-2xl">Join us and take your career to the <br /> next level.</p>

          <div className="flex mt-10"> 
          <button className="  font-[Poppins] w-44 h-12  mt-3 text-lg font-bold bg-secondary rounded-md">How does it work?</button>           
        <button className="bg-primary text-white md:ml-10 ml-5 content-center font-bold w-44 h-12 rounded-md mt-3">
          Get Started
        </button>
        </div> 
      </div>

      {/* Right side of container */}

      <div className="  ">
        <img
          className="md:h-[32.5rem] xl:h-[45.375rem] md:w-[41.875rem] md:right-0   xl:w-[60rem] absolute  "
          src={preferable}
          alt="image"
        />
      </div>
      
    </div>
  );
}
