import React from "react";
import RecruiterSidebar from "../recruiter/RecruiterSidebar";
import { Outlet } from "react-router-dom";
const RecruiterLayout = () => {
  return (
    <>
      <div className="flex gap-5">
        <RecruiterSidebar />
        <div className=" text-white w-full flex-1 mx-auto py-4 ">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default RecruiterLayout;
