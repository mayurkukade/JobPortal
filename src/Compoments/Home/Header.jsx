import React from "react";
import preferable from "../Images/preferable2.png";

export default function Header() {
  return (
    <div className="flex bg-background container mx-auto ">
      {/* left side of container */}
      <div className="md:pt-20 md:mb-8  md:spl-[50px]  ">
        <p className=" md:text-6xl font-[Poppins] font-semibold text-text xl:text-8xl ">
          We Help
          <div className="pt-3">
            <span className="text-accent   ">You</span> Get The
          </div>
          <div className="pt-3">
            Right <span className="text-accent ">Job</span>
          </div>
        </p>

        <p className="mt-10 font-[Poppins] md:text-2xl xl:text-2lg">
          Join us and take your career to the <br /> next level.
        </p>

        <div className="flex md:mt-10 ">
          <button className="  font-[Poppins] md:w-44 md:h-12 xl:w-[12rem]  md:mt-3 md:text-lg xl:text-xl  font-bold bg-secondary rounded-md">
            How does it work?
          </button>
          <button className="bg-primary text-white md:ml-10 ml-5 content-center xl:text-xl font-bold w-44 h-12 rounded-md mt-3">
            Get Started
          </button>
        </div>
      </div>

      {/* Right side of container */}

      <div className="  ">
        <img
          className="md:h-[32.5rem]  md:w-[41.875rem] md:right-0   xl:w-[60rem] xl:h-[46.375rem] absolute  "
          src={preferable}
          alt="image"
        />
      </div>
    </div>
  );
}
