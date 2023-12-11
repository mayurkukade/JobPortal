import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
const AdminRequire = ({ allowedRoles }) => {
  console.log(allowedRoles);
  const cookiesJwt = Cookies.get("cookie");
  const decodejwt = jwtDecode(cookiesJwt);
  const userAuthRoles = decodejwt.authorities[0];

  console.log(cookiesJwt);
  const location = useLocation();

  const content =
    // eslint-disable-next-line react/prop-types

    allowedRoles.includes(userAuthRoles) ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    );

  return <div>{content}</div>;
};

export default AdminRequire;
