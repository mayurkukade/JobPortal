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
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh]">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center h-full">
          <form
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
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
