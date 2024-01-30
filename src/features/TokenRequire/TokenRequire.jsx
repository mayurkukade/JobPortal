import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";



const TokenRequire = ({ allowedRoles }) => {
  console.log(allowedRoles);
  const cookiesJwt = Cookies.get("cookie");
  let userAuthRoles = [];

  try {
  
    const decodejwt = jwtDecode(cookiesJwt);
    userAuthRoles = decodejwt.authorities[0];
    console.log(userAuthRoles)
    console.log(cookiesJwt);
  } catch (error) {
   
  
    // toast.error('please login first')
  }

  const location = useLocation();

  // eslint-disable-next-line react/prop-types
  const content = allowedRoles.includes(userAuthRoles) ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );

  return <div>
 
  {content}</div>;
};

export default TokenRequire;

