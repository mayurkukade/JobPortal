import {useState} from 'react'
import { Spinner } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { Link ,useNavigate} from 'react-router-dom';

  import toast from "react-hot-toast";
  import OtpInput from "react-otp-input";
  
  import { Button, Input } from "@material-tailwind/react";
  import {
    useEmailVerifyMutation,
    useStudentRegisterPostMutation,
    useOtpVerifyMutation,
  } from "../../services/Registration/registrationSlice";
  const RecruiterForm = () => {
    const [fullNameState, setFullName] = useState("");
  const [emailState, setEmail] = useState("");
  const [mobileNumberState, setMobileNumber] = useState();
  const [passwordState, setPasswordState] = useState("");
  const [referenceState, setReferenceState] = useState("");
  const [genderState, setGender] = useState("");
  const [refCompanyState, setRefCompany] = useState("");

  const [isVerifyOpen, setVerifyOpen] = useState(false);
  const [OTP, setOTP] = useState("");
  const [loader, setLoader] = useState(false);

  const [emailVerify] = useEmailVerifyMutation();
  const [otpVerify] = useOtpVerifyMutation();

  const navigate = useNavigate();

  const [studentRegisterPost] = useStudentRegisterPostMutation();

  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
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

  const onChangeCompanyRef = (e) => {
    setRefCompany(e.target.value);
  };
  const sendEmailHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const res = await emailVerify({
      email: emailState,
    });
    setLoader(false);
    if(res?.error?.data?.message){
      return  toast.error(res?.error?.data?.message)
      }
      
    
    if (res.data && res.data.status) {
      toast.success("Send OTP");
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
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    console.log(formattedDate)
    console.log(
      fullNameState,
      emailState,
      mobileNumberState,
      passwordState,
      formattedDate,
      referenceState,
      genderState,
      refCompanyState
    )
    try {
      const res = await studentRegisterPost({
        fullName: fullNameState,
        email: emailState,
        moNumber: mobileNumberState,
        password: passwordState,
        status: "active",
        roles: "HR",
        date: formattedDate,
        ref: referenceState,
        gender: genderState,
        designation: "Hr",
        hrstatus: "Active",
        refNoOfCompany: refCompanyState,
      });
     

      if (
        res &&
        res?.error &&
        res?.error?.data &&
        res?.error?.data?.code
      ) {
      return  toast.error(res?.error?.data?.message);
      } 
      if(res?.data?.code)
      {
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <form className=" space-y-3 " onSubmit={onSubmitHandler}>
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

              <Input
                type="number"
                label="mobile number"
                name="mobileNumber"
                value={mobileNumberState}
                onChange={onChangeMobileNumber}
                required
              />

              <Input
                type="password"
                label="password"
                name="password"
                value={passwordState}
                onChange={onChangePassword}
                required
              />

              {/* <Input
                type="text"
                label="reference"
                name="reference"
                value={referenceState}
                onChange={onchangeReference}
                required
              /> */}

              <select
                id="gender"
                name="gender"
                value={genderState}
                onChange={onChangeGender}
                className="mt-1 p-2 border  border-gray-300 rounded-md w-full"
                placeholder="Gender"
                required
              >
                <option> Select Gender</option>
                <option value={"male"}>Male</option>
                <option value="female">Female</option>
              </select>

              <Input
                type="text"
                label="reference company"
                name="referenceCompany"
                value={refCompanyState}
                onChange={onChangeCompanyRef}
                required
              />

              <Button type="onSubmit" className="block m-auto">
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
            </form>
  )
}

export default RecruiterForm
