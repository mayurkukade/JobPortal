import { Button, Input } from "@material-tailwind/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginApiMutation } from "../../services/Registration/registrationSlice";
import { Toaster } from "react-hot-toast";
import Navbars from "../Navbars";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/authSlice/authSlice";
import {
  
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  
  Checkbox,
} from "@material-tailwind/react";
const SignIn = () => {
  const [emailState, setEmail] = useState("");

  const [passwordState, setPasswordState] = useState("");

  const [loginApi] = useLoginApiMutation();

  const navigate = useNavigate();

  

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  const dispatch = useDispatch()
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(emailState,passwordState)
    try {
      const res = await loginApi({
        username: emailState,

        password: passwordState,
      });
  
    
   
  
      if (res && res.data) {
       
        toast.success("sign in successfully");
        
        dispatch(loginSuccess({user:emailState,token:res}))
      
        setTimeout(()=>{
            navigate("/");
        },500)
       
      } else {
        toast.error('sign in unsuccessfull');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh] sm:h-[86.5vh] xs:h-[90.5vh]">
        <Toaster position="top-center" reverseOrder={false} />
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
            <Typography className="-mb-2" variant="h6" >
              Your Email
            </Typography>
            <Input label="Email" size="lg" onChange={onChangeEmail} value={emailState} />
            <Typography className="-mb-2" variant="h6" >
              Your Password
            </Typography>
            <Input label="Password" size="lg" type="password" onChange={onChangePassword} value={passwordState}/>
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
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
               
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
          {/* <form
            className="bg-white p-5 space-y-3 w-[25rem]"
            onSubmit={onSubmitHandler}
          >
            <h1 className="text-center text-lg">Sign In</h1>

            <Input
              type="text"
              label="email"
              name="emailState"
              value={emailState}
              onChange={onChangeEmail}
              required
            />

            <Input
              type="text"
              label="password"
              name="password"
              value={passwordState}
              onChange={onChangePassword}
              required
            />

            <Button type="onSubmit" className="block m-auto">
              Sign In
            </Button>
            <p className="text-center">
              Don't have a account? Sign Up
            </p>
          </form> */}
        </div>
      </section>
    </>
  );
};

export default SignIn;
