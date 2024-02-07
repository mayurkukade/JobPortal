import { useEffect, useState, useRef } from "react";
import { Input } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { state } from "../Data/StateIndia";
import { FaEye } from "react-icons/fa";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  useEmailVerifyMutation,
  useOtpVerifyMutation,
  useStudentRegisterPostMutation,
} from "../../services/Registration/registrationSlice";
import { useCountries } from "use-react-countries";
import { FaRegEyeSlash } from "react-icons/fa6";


const USER_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MOBILE_REGEX = /^[7-9][0-9]{9}$/;

const CompanyForm = () => {
  const [inputField, setInputField] = useState({
    fullName: "",
    companyName: "",
    gstNumber: "",
    companyServices: "",
    companyType: "",
    companyLevel: "",
    officeAddress: "",
    companyLocation: "",
    mobileNumber: "",
    password: "",
  });
  const { countries } = useCountries();
  const userRef = useRef();

  const [validName, setValidName] = useState(false);
  const [validFocus, setValidFocus] = useState(false);
  const [showpwd,setHidePwd] = useState(false)


  const [isEmailValid, setEmailValid] = useState(false);

  const [isMobileValid, setMobileVaild] = useState(false);

  const [country, setCountry] = useState(221);
  const { name, flags, countryCallingCode } = countries[country];

  const navigate = useNavigate();
  const [studentRegisterPost] = useStudentRegisterPostMutation();

  const onChangeHandle = (e) => {
    const { name, value } = e.target;

    setInputField((prevInputField) => ({
      ...prevInputField,
      [name]: value,
    }));
  };

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
    if (res?.error?.data?.message) {
      return toast.error(res?.error?.data?.message);
    }

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
    console.log(res);
    if (res?.error?.status == "400") {
      toast.error(res.error.data.message);
    }
    if (res.data && res.data.status) {
      toast.success("Email is verified");
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    console.log(formattedDate);
    try {
      const res = await studentRegisterPost({
        fullName: inputField.fullName,
        email: emailState,
        moNumber: inputField.mobileNumber,
        password: inputField.password,
        status: "active",
        roles: "COMPANY",
        date: formattedDate,
        ref: "shjshj",
        gender: "Male",
        companyStatus: "ACTIVE",
        companyName: inputField.companyName,
        gestnNo: inputField.gstNumber,
        companyServices: inputField.companyServices,
        companyType: inputField.companyType,
        companyLevel: inputField.companyLevel,
        logo: inputField.companyName,
        officeAddress: inputField.officeAddress,
        companyLocations: inputField.companyLocation,
        oneCompanyDoc: "Document URL",
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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(inputField.fullName));
  }, [inputField.fullName]);

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(emailState));
  }, [emailState]);

  useEffect(() => {
    setMobileVaild(MOBILE_REGEX.test(inputField.mobileNumber));
  }, [inputField.mobileNumber]);
  console.log(isMobileValid);
  console.log(isEmailValid);

  console.log(validName);
  console.log(inputField.mobileNumber);
  return (
    <>
      <form
        className=" space-y-3 flex justify-center flex-col "
        onSubmit={submitHandle}
      >
        <div className="flex gap-2">
          <Input
            label="full name"
            name="fullName"
            onChange={onChangeHandle}
            value={inputField.fullName}
            ref={userRef}
            autoComplete="off"
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setValidFocus(true)}
            onBlur={() => setValidFocus(false)}
          />

          <Input
            label="comapny name"
            name="companyName"
            onChange={onChangeHandle}
            value={inputField.companyName}
          />
        </div>
        <p
          id="uidnote"
          className={
            validFocus && inputField.fullName && !validName
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
            type="email"
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
        <div className="flex gap-2">
          <Input
            label="GST Number"
            name="gstNumber"
            value={inputField.gstNumber}
            onChange={onChangeHandle}
          />
          <Input
            label="Company Services"
            name="companyServices"
            value={inputField.companyServices}
            onChange={onChangeHandle}
          />
        </div>
        <div className="flex gap-2">
          <Input
            label="Company Type"
            name="companyType"
            value={inputField.companyType}
            onChange={onChangeHandle}
          />
          <select
            label="Company Level"
            name="companyLevel"
            value={inputField.companyLevel}
            onChange={onChangeHandle}
            className="border border-gray-700 w-[25rem] rounded-lg text-sm"
          >
            <option >Select employees</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-100</option>
            <option>101-200</option>
            <option>200+</option>
          </select>
        </div>
        <div className="flex gap-2">
          <Input
            label="Office Address"
            name="officeAddress"
            value={inputField.officeAddress}
            onChange={onChangeHandle}
          />
          {/* <Input
            label="Company Location"
            name="companyLocation"
            value={inputField.companyLocation}
            onChange={onChangeHandle}
          /> */}
          <select
            onChange={onChangeHandle}
            name="companyLocation"
            value={inputField.companyLocation}
            className="mt-1 text-sm p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto "
          >
            <option className="text-sm">Select Current Location</option>
            <optgroup label="---Top Metropolitan Cities---">
              <option>Ahmedabad</option>
              <option>Bangalore</option>
              <option>Chandigarh</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Gurgaon</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Noida</option>
              <option>Pune</option>
            </optgroup>
            {state?.states?.map((stateData, index) => {
              return (
                <optgroup key={index} label={`----${stateData?.state}----`}>
                  {stateData?.districts?.map((city, cityIndex) => (
                    <option key={cityIndex}>{city}</option>
                  ))}
                </optgroup>
              );
            })}
          </select>
        </div>
        <div className="flex gap-2">
          {/* <Input
            label="mobile number"
            name="mobileNumber"
            value={inputField.mobileNumber}
            onChange={onChangeHandle}
          /> */}
          <div className="relative flex w-full">
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
              <MenuList className="max-h-[20rem] w-auto">
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
                      {name}{" "}
                      <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={inputField.mobileNumber}
              onChange={onChangeHandle}
              className="w-full rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
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
         
          
        </div>
        <Input
            type={showpwd ?'password':'text'}
            label="password" 
            icon={showpwd?<FaEye size={'1.2rem'} onClick={()=>setHidePwd(!showpwd)} className="cursor-pointer" />:<FaRegEyeSlash size={'1.2rem'}  onClick={()=>setHidePwd(!showpwd)} className="cursor-pointer" />}
            name="password"
            value={inputField.password}
            onChange={onChangeHandle}
          />

        {/* <label
          htmlFor="fileInput"
          className="flex items-center gap-3 cursor-pointer box-border border-4 w-fit p-1 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload Files
        </label>
        <input type="file" id="fileInput" className="hidden"  accept=".pdf"/> */}

        <div className="flex justify-center">
          <Button className=" w-fit" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
};

export default CompanyForm;
