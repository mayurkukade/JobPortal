import React from "react";
import preferable from "../Images/preferable.png";

export default function Header() {
  return (
    <div className="flex flex-wrap  justify-center">

      {/* left side of container */}
      <div className="md:pt-36 pt-20 md:spl-[50px]">
        <p className=" md:text-6xl text-5xl font-[Poppins] font-semibold text-[#160202]">
          We Help
          <br />
          <span className="text-[#FF8400] stroke-brown-900 ">You</span> Get The
          <br />
          Right <span className="text-[#FF8400] ">Job</span>
        </p>

        <p className="mt-10 font-[Poppins] text-2xl">Join us and take your career to the <br /> next level.</p>

          <div className="flex mt-10"> 
          <p className="text-2xl font-[Poppins] pt-4">How does it work?</p>           
        <button className="bg-[#FF8400] md:ml-10 ml-5 content-center font-bold w-44 h-10 rounded-3xl mt-3">
          Get Started
        </button>
        </div> 
      </div>

      {/* Right side of container */}

      <div className="md:ml-[100px] mt-5">
        <img
          className="md:h-[600px] h-[550px] w-[750px] "
          src={preferable}
          alt="image"
        />
      </div>
    </div>
  );
}
