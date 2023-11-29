import React from "react";

import lenskart from "../../asset/techmahindra.png";

import Marquee from "react-fast-marquee";

const PlacementCompany = () => {
  return (
    <div className="flex justify-center container mx-auto ">
      <div className="mt-10">
        <div className="">
          <p className="md:text-[34px] text-center font-semibold font-[Poppins]  ">
            Our Placement Patners
          </p>
        </div>
        <div className=" m-8 container  mx-auto">
          <Marquee>
            <div className="md:ml-10 ml-2 md:bg-primary flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2  md:bg-primary  flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
            <div className="md:ml-10 ml-2 bg-[#FFF5D6] flex justify-center rounded-md">
              <img src={lenskart} className="w-20" alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PlacementCompany;
