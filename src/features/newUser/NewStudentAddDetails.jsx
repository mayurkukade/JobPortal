import React from "react";
import { useGetDegreeStudentProfileQuery } from "../../services/studentApi/studentApiSlice";
import { Outlet } from "react-router-dom";
import { useauthHooks } from "../../Compoments/hooks/authHooks";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const NewStudentAddDetails = () => {
  const { useDecode } = useauthHooks();
  console.log(useDecode);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetDegreeStudentProfileQuery(
    useDecode?.userId
  );
  const userFullName = useDecode?.fullName;
  console.log(isError);
  let content =
    isError && useDecode?.roles.includes("STUDENT") ? (
      <Navigate to="/edit/profile"  />
    ) : (
      <Outlet />
    );
  //   if (isError && useDecode?.roles.includes("STUDENT")) {
  // setTimeout(async () => {
  //     const capitalizedFullName = userFullName
  //       ? userFullName.charAt(0).toUpperCase() + userFullName.slice(1)
  //       : ""; // Capitalize the first letter of the full name
  //     return await toast.success(
  //       `Welcome to preferable, ${capitalizedFullName.split(" ")[0]} 👋`
  //     );
  //   }, 500);
  //   return navigate("/edit/profile");
  //   }

  return <div>{content}</div>;
};

export default NewStudentAddDetails;
