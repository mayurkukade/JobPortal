import { useEffect, useRef, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";

import { Button, Input } from "@material-tailwind/react";
import {
  useEmailVerifyMutation,
  useStudentRegisterPostMutation,
  useOtpVerifyMutation,
} from "../../services/Registration/registrationSlice";
const USER_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RecruiterForm = () => {
  const [mobileNumberState, setMobileNumber] = useState();
  const [passwordState, setPasswordState] = useState("");
  const [referenceState, setReferenceState] = useState("");
  const [genderState, setGender] = useState("");
  const [refCompanyState, setRefCompany] = useState("");

  const [fullNameState, setFullName] = useState("");
  const [isValidFullName, setValidFullName] = useState("");
  const [isFullNameFocus, setIsFullNameFocus] = useState("");

  const [emailState, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");

  const [isValidPwd,setIsValidPwd] = useState("")
  const [isPwdFocus,setIsFocus] = useState("")
  const [showpwd, setHidePwd] = useState(false);

  const [isVerifyOpen, setVerifyOpen] = useState(false);
  const [OTP, setOTP] = useState("");
  const [loader, setLoader] = useState(false);

  const [emailVerify] = useEmailVerifyMutation();
  const [otpVerify] = useOtpVerifyMutation();
 
  const userRef = useRef();

  const navigate = useNavigate();
  const { countries } = useCountries();
  const [country, setCountry] = useState(221);
  const { name, flags, countryCallingCode } = countries[country];

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
    if (res?.error?.data?.message) {
      return toast.error(res?.error?.data?.message);
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
    console.log(formattedDate);
    console.log(
      fullNameState,
      emailState,
      mobileNumberState,
      passwordState,
      formattedDate,
      referenceState,
      genderState,
      refCompanyState
    );
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

      if (res && res?.error && res?.error?.data && res?.error?.data?.code) {
        return toast.error(res?.error?.data?.message);
      }
      if (res?.data?.code) {
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  useEffect(() => {
    setValidFullName(USER_REGEX.test(fullNameState));
  }, [fullNameState]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setIsEmailValid(EMAIL_REGEX.test(emailState));
  }, [emailState]);

  useEffect(()=>{
    setIsValidPwd(PWD_REGEX.test(passwordState))
      },[passwordState])
  console.log(isEmailValid);
  console.log(isValidFullName);
  console.log(mobileNumberState);
  return (
    <form className=" space-y-3 " onSubmit={onSubmitHandler}>
      <Input
        type="text"
        label="Full Name"
        name="fullName"
        ref={userRef}
        value={fullNameState}
        onChange={onChangeFullName}
        aria-invalid={isValidFullName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setIsFullNameFocus(true)}
        onBlur={() => setIsFullNameFocus(false)}
        required
      />
      <p
        id="uidnote"
        className={
          isFullNameFocus && fullNameState && !isValidFullName
            ? "visible text-red-700 text-sm"
            : "hidden"
        }
      >
        4 to 24 characters.
        <br />
        add fullname,give space between firstname and lastname.
        <br />
        must begin with a letter.
        <br />
        letters, numbers, underscores, hyphens allowed.
      </p>
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
          disabled={!isEmailValid}
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
            disabled={!(OTP.length === 4)}
          >
            Verify
          </Button>
        </div>
      )}

      <div className="relative flex w-auto">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries.map(({ name, flags, countryCallingCode }, index) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                  onClick={() => setCountry(index)}
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  {name} <span className="ml-auto">{countryCallingCode}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={mobileNumberState}
          onChange={onChangeMobileNumber}
          className="w-auto rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          maxLength={10}
          minLength={10}
          required
        />
      </div>

      <Input
                  type={showpwd ? "password" : "text"}
                label="password"
                name="password"
                value={passwordState}
                onChange={onChangePassword}
                aria-invalid={isValidPwd?"false":"true"}
                aria-describedby="uidpwd"
                onFocus={()=>setIsFocus(true)}
                onBlur={()=>setIsFocus(false)}
                icon={
          showpwd ? (
            <FaEye
              size={"1.2rem"}
              onClick={() => setHidePwd(!showpwd)}
              className="cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              size={"1.2rem"}
              onClick={() => setHidePwd(!showpwd)}
              className="cursor-pointer"
            />
          )
        }
                required
              />
 <p
        id="uidpwd"
        className={
          isPwdFocus && passwordState && !isValidPwd
            ? "visible text-red-700 text-sm"
            : "hidden"
        }
      >
        8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
      </p>
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
  );
};

export default RecruiterForm;
