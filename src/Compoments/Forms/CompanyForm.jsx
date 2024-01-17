import React, { useState } from "react";
import { ButtonGroup, Input } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { Button } from "@material-tailwind/react";

import {
  useEmailVerifyMutation,
  useOtpVerifyMutation,
} from "../../services/Registration/registrationSlice";
const CompanyForm = () => {
  const [emailState, setEmail] = useState("");
  const [isVerifyOpen, setVerifyOpen] = useState(false);
  const [OTP, setOTP] = useState("");
  const [loader, setLoader] = useState(false);

  const [emailVerify] = useEmailVerifyMutation();
  const [otpVerify] = useOtpVerifyMutation();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const res = await emailVerify({
      email: emailState,
    });
    setLoader(false);
    console.log(res);
    if (res.data && res.data.status) {
      toast.success("Sended OTP to your email");
      setVerifyOpen(true);
    }
  };
  const verifyHandler = async () => {
    const res = await otpVerify({
      email: emailState,
      otp: OTP,
    });
    if (res.data && res.data.status) {
      toast.success("Sended OTP to your email");
    }
  };
  const inputStyle = {
    width: "1.8rem", // Set your desired width
    height: "2rem", // Set your desired height
    textAlign: "center",
    fontSize: "1.3rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "5px", // Add some spacing between inputs
    marginBottom: "5px",
  };
  return (
    <>
      <form className=" space-y-3 flex justify-center flex-col ">
        <div className="flex gap-2">
          <Input label="your fullname" />
          <Input label="comapny name" />
        </div>
        <div className="flex gap-5">
          <Input
            type="text"
            label="email"
            name="emailState"
            value={emailState}
            onChange={onChangeEmail}
            required
          />

          <Button
            className="bg-primary flex justify-center items-center"
            onClick={sendEmailHandler}
          >
            {loader ? (
              <Spinner />
            ) : (
              <p className="text-[0.7rem] h-[0.7rem] flex justify-center items-center align-middle ">
                Send OTP
              </p>
            )}
          </Button>
        </div>
        {isVerifyOpen && (
          <div className="flex justify-between">
            <OtpInput
              value={OTP}
              onChange={setOTP}
              numInputs={4}
              renderSeparator={
                <span className="w-5 flex justify-center align-middle items-center">
                  -
                </span>
              }
              renderInput={(props) => <input {...props} />}
              inputStyle={inputStyle}
            />
            <Button
              className="w-fit h-9 align-middle items-center flex  bg-primary"
              onClick={verifyHandler}
            >
              Verify
            </Button>
          </div>
        )}
        <div className="flex gap-2">
          <Input label="GST Number" />
          <Input label="Company Services" />
        </div>
        <div className="flex gap-2">
          <Input label="Company Type" />
          <Input label="Company Level" />
        </div>
        <div className="flex gap-2">
          <Input label="Office Address" />
          <Input label="Company Location" />
        </div>
        <div className="flex gap-2">
     
          <Input label="mobile number" />
     
      

        </div>
        <div className="flex justify-center">
        <Button className=" w-fit">Sign Up</Button>
        </div>
        
      </form>
    </>
  );
};

export default CompanyForm;
