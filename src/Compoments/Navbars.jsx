import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Pref from "./Images/preferable-icon 1.png";
// import { useState } from "react";
// import { useEffect } from "react";


import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";

export default function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);
  // const [theme, setTheme] = useState("light");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();
  const studentFormNavigate = () => {
    navigate("/studentSignUp");
    handleOpen();
  };
  const tpoFormNavigate = () => {
    navigate("/tpo");
    handleOpen();
  };
  const RecruiterFormNavigate = () => {
    navigate("/recruitersignup");
    handleOpen();
  };

  // const token = Cookies.get("jwtToken");
  // console.log(token)

  const isAuthenticatedSelector = Cookies.get("cookie");
  console.log(isAuthenticatedSelector);

  const tokenSelector = useSelector((state) => state.authSlice.token);
  console.log(tokenSelector);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p className="flex items-center text-white">
          Home
        </p>
      </Typography>
      <Link to="/jobsection">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <p className="flex items-center text-white">Jobs</p>
        </Typography>
      </Link>
      {/* <Link to="/skills">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <p className="flex items-center text-white">Courses</p>
        </Typography>
      </Link> */}
<Link to={'/pricingpage'}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <p className="flex items-center text-white">Pricing</p>
      </Typography>
</Link>
      <Link to={"/mentor"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <p className="flex items-center text-white">Mentor</p>
        </Typography>
      </Link>
      <Link to={"/studyabroad"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <p className="flex items-center text-white">Study Abroad</p>
        </Typography>
      </Link>
      {/* <Link to="/aboutus">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <p className="flex items-center text-white">About Us</p>
        </Typography>
      </Link> */}
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={handleThemeSwitch}
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <button className="flex items-center text-white">
          {theme == "light" ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </Typography> */}
    </ul>
  );

  return (
    <Navbar className="  sticky top-0 z-30 h-max max-w-full rounded-none px-4 py-2 lg:px-8   bg-primary">
      <div className=" flex items-center justify-between text-blue-gray-900 xl:ml-[4.2rem]">
       <Link to={'/'}>
        <Typography
          as="a"
          
          className="mr-4 cursor-pointer py-1.5 font-medium text-[#CF4307] text-2xl xl:text-4xl xl:ml "
        >
          <img src={Pref} className="w-10 ml-10 lg:block hidden" alt="" />
          <div className="ml-2 text-white">Preferable</div>
        </Typography>
        </Link>
        {/* <Typography className="lg:block hidden">
          <input
            type="search"
            className="bg-[#373737] text-white pl-2 w-52 h-10 rounded-md"
            placeholder="Search"
          />
        </Typography> */}
        <div className="hidden lg:block">{navList}</div>

        <div className="flex items-center gap-x-1">
          {isAuthenticatedSelector ? (
            <Profile />
          ) : (
            <>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                <span className="text-white">Sign In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleOpen}
              >
                <span className="text-accent">Sign up</span>
              </Button>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to={"/signin"}>
              <Button fullWidth variant="text" size="sm">
                <span>Sign In</span>
              </Button>
            </Link>

            <Button
              fullWidth
              onClick={handleOpen}
              variant="gradient"
              className="w-fit"
              size="sm"
            >
              <span>Sign Up</span>
            </Button>

            <Dialog open={open} handler={handleOpen}>
              <DialogHeader className="flex justify-center">
                Choose your signup profile
              </DialogHeader>
              <DialogBody className="flex gap-10 justify-center">
                <Button onClick={studentFormNavigate}>STUDENT</Button>

                <Button onClick={RecruiterFormNavigate}>RECRUITER</Button>
                <Button onClick={tpoFormNavigate}>
                  TRAINING PLACEMENT OFFICER
                </Button>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
