import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginApiMutation } from "../../services/Registration/registrationSlice";
import { Toaster } from "react-hot-toast";
import Navbars from "../Navbars";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/authSlice/authSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useauthHooks } from "../hooks/authHooks";
import { useGetDegreeStudentProfileQuery } from "../../services/studentApi/studentApiSlice";

const SignIn = () => {
  const [emailState, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [passwordState, setPasswordState] = useState("");



  const newuserFlag = useSelector((state) => state.newUserSlice.isNewUser);
  console.log(newuserFlag);
 
  const [loginApi] = useLoginApiMutation();

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

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  const dispatch = useDispatch();
  async function onSubmitHandler(e) {
    e.preventDefault();
    console.log(emailState, passwordState);
    try {
      const res = await loginApi({
        username: emailState,

        password: passwordState,
      });

      console.log(res);

      if (res?.data) {
        dispatch(loginSuccess({ user: emailState, token: res }));
        navigate("/")
        const { useDecode } = useauthHooks();
        console.log(useDecode);

      
        const userFullName = useDecode?.fullName;
        if ( useDecode?.roles.includes("STUDENT")) {
          setTimeout(async () => {
            const capitalizedFullName = userFullName
              ? userFullName.charAt(0).toUpperCase() + userFullName.slice(1)
              : ""; // Capitalize the first letter of the full name

            return await toast.success(
              `Welcome to preferable, ${capitalizedFullName.split(" ")[0]} 👋`
            );
          }, 500);
        //   await navigate("/edit/profile");
        // } else {
        //   await navigate("/");
        }
      } else if (res?.error) {
        console.log(res)
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  }

  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh] sm:h-[86.5vh] xs:h-[90.5vh]">
        <Toaster position="top-center" reverseOrder={true} />
        <div className="flex justify-center items-center h-full ">
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign In.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input
                label="Email"
                size="lg"
                onChange={onChangeEmail}
                value={emailState}
              />
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input
                label="Password"
                size="lg"
                type="password"
                onChange={onChangePassword}
                value={passwordState}
              />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={onSubmitHandler} fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold cursor-pointer"
                  onClick={handleOpen}
                >
                  Sign up
                </Typography>
              </Typography>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="flex justify-center">
                  Choose your signup profile
                </DialogHeader>
                <DialogBody className="flex gap-10 justify-center">
                  <Button onClick={studentFormNavigate}>STUDENT</Button>
                  <Button onClick={tpoFormNavigate}>TPO</Button>
                  <Button onClick={RecruiterFormNavigate}>RECEUITER</Button>
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
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default SignIn;
