import { Button, Input } from "@material-tailwind/react";
import OtpInput from "react-otp-input";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import {
  useEmailVerifyMutation,
  useStudentRegisterPostMutation,
  useOtpVerifyMutation,
} from "../../services/Registration/registrationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Navbars from "../Navbars";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const TpoSignUpForm = () => {
  const [fullNameState, setFullName] = useState("");
  const [emailState, setEmail] = useState("");
  const [mobileNumberState, setMobileNumber] = useState();
  const [passwordState, setPasswordState] = useState("");
  const [referenceState, setReferenceState] = useState("");
  const [genderState, setGender] = useState("");
  const [isVerifyOpen, setVerifyOpen] = useState(false);
  const [OTP, setOTP] = useState("");
  const [loader, setLoader] = useState(false);

  const [colleges, setColleges] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [dist, setDist] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPindCode] = useState("");
  console.log(colleges,address,state,dist,city,pincode)

  const [validEmail, setVaidEmail] = useState();
  const [emailVerify] = useEmailVerifyMutation();
  const [otpVerify] = useOtpVerifyMutation();

  console.log(emailState);

  const navigate = useNavigate();

  const [studentRegisterPost] = useStudentRegisterPostMutation();
  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onChangeMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  const onchangeReference = (e) => {
    setReferenceState(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onChangeCollege = (e) => {
    setColleges(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangeState = (e) => {
    setState(e.target.value);
  };
  const onChangeDist = (e) => {
    setDist(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangePinCode = (e) => {
    setPindCode(e.target.value);
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
      toast.success("Email has been verified");
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
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (
    //   !fullNameState ||
    //   !emailState ||
    //   !mobileNumberState ||
    //   !passwordState ||
    //   !genderState
    // ) {
    //   return toast.error("please fill all fields");
    // }
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    console.log(formattedDate)
    try {
      const res = await studentRegisterPost({
        fullName: fullNameState,
        moNumber: mobileNumberState,
        collageName: colleges,
        email: emailState,
        password: passwordState,
        address,
         state,
        dist,
        ref: referenceState,
        roles: "TPO",
        date: new Date(),
        city,
        pincode,
        type: "Hr",
        status: "active",
        gender: genderState,
        establishedDate: "2023-12-10",
      });
      console.log(res);
      if (
        res &&
        res.error &&
        res.error.data &&
        res.error.data.code === "Unsuccessful"
      ) {
        toast.error("Unsuccessful registration");
      } else {
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  console.log(validEmail);

  useEffect(() => {
    setVaidEmail(emailRegex.test(emailState));
  }, []);

  console.log(validEmail);
  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh] ">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center p-5 bg-blue-gray-900 ">
          <Card className="mx-auto w-full max-w-[30rem]">
            <CardBody className="flex flex-col gap-4 ">
              <Typography variant="h4" color="blue-gray">
                Training Placement Officer
              </Typography>

              <Input
                type="text"
                label="Full Name"
                name="fullName"
                value={fullNameState}
                onChange={onChangeFullName}
                required
              />
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
                <div className="flex gap-5">
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

              <Input
                type="text"
                label="College Name"
                name="CollegeName"
                value={colleges}
                onChange={onChangeCollege}
                required
              />
              <div className="flex gap-4">
                <Input
                  type="number"
                  label="mobile number"
                  name="mobileNumber"
                  value={mobileNumberState}
                  onChange={onChangeMobileNumber}
                  required
                />
                <Input
                  type="text"
                  label="Address"
                  name="address"
                  value={address}
                  onChange={onChangeAddress}
                  required
                />
              </div>

              <div className="flex gap-4">
                <Input
                  type="text"
                  label="State"
                  name="state"
                  value={state}
                  onChange={onChangeState}
                  required
                />
                <Input
                  type="text"
                  label="Distict"
                  name="dist"
                  value={dist}
                  onChange={onChangeDist}
                  required
                />
              </div>

              <div className="flex w-auto gap-4">
                <Input
                  type="text"
                  label="City"
                  name="city"
                  value={city}
                  onChange={onChangeCity}
                  required
                />
                <Input
                  type="text"
                  label="Pin Code"
                  name="pincode"
                  value={pincode}
                  onChange={onChangePinCode}
                  required
                />
              </div>

              <Input
                type="password"
                label="password"
                name="password"
                value={passwordState}
                onChange={onChangePassword}
                required
              />

              <Input
                type="text"
                label="reference"
                name="reference"
                value={referenceState}
                onChange={onchangeReference}
                required
              />

              <select
                id="gender"
                name="gender"
                value={genderState}
                onChange={onChangeGender}
                className="h-10 border border-gray-300 rounded-md w-full"
                placeholder="Gender"
                required
              >
                <option>Gender</option>
                <option value={"male"}>Male</option>
                <option value="female">Female</option>
              </select>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="onSubmit"
                className="block m-auto mb-2"
                onClick={onSubmitHandler}
              >
                Sign Up
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Already have an account?
                <Link to={"/signin"}>
                  <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign In
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default TpoSignUpForm;
