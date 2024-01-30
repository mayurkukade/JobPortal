import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import {
  useEmailVerifyMutation,
  useOtpVerifyMutation,
  useStudentRegisterPostMutation
} from "../../services/Registration/registrationSlice";
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
    password:""
  });
  const navigate = useNavigate()
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
    if(res?.error?.data?.message){
    return  toast.error(res?.error?.data?.message)
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
    console.log(res)
    if(res?.error?.status == '400'){
      toast.error(res.error.data.message);
    }
    if (res.data && res.data.status) {
      toast.success("Email is verified");
    }
  };

  const submitHandle = async(e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    console.log(formattedDate)
   try {
    const res = await studentRegisterPost({
      fullName: inputField.fullName, 
    email:emailState,
    moNumber:inputField.mobileNumber,
    password: inputField.password,
    status: "active",
    roles : "COMPANY",
    date:formattedDate,
    ref:"shjshj",
    gender:"Male",
     companyStatus:"ACTIVE",
    companyName: inputField.companyName,
    gestnNo: inputField.gstNumber,
    companyServices: inputField.companyServices,
    companyType: inputField.companyType,
    companyLevel: inputField.companyLevel,
    logo: "Company Logo URL",
    officeAddress: inputField.officeAddress,
    companyLocations: inputField.companyLocation,
    oneCompanyDoc: "Document URL",
   
    })
    console.log(res)
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
  return (
    <>
      <form
        className=" space-y-3 flex justify-center flex-col "
        onSubmit={submitHandle}
      >
        <div className="flex gap-2">
          <Input
            label="your fullname"
            name="fullName"
            onChange={onChangeHandle}
            value={inputField.fullName}
          />
          <Input
            label="comapny name"
            name="companyName"
            onChange={onChangeHandle}
            value={inputField.companyName}
          />
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
          <Input
            label="Company Level"
            name="companyLevel"
            value={inputField.companyLevel}
            onChange={onChangeHandle}
          />
        </div>
        <div className="flex gap-2">
          <Input
            label="Office Address"
            name="officeAddress"
            value={inputField.officeAddress}
            onChange={onChangeHandle}
          />
          <Input
            label="Company Location"
            name="companyLocation"
            value={inputField.comnpanyLocation}
            onChange={onChangeHandle}
          />
        </div>
        <div className="flex gap-2">
          <Input
            label="mobile number"
            name="mobileNumber"
            value={inputField.mobileNumber}
            onChange={onChangeHandle}
          />
          <Input
          type="password"
            label="password"
            name="password"
            value={inputField.password}
            onChange={onChangeHandle}
          />
        </div>
        <input
        type="file"
        id="fileInput"
        accept=".pdf"
        
      />
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
