import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import { useStudentRegisterPostMutation } from "../../services/Registration/registrationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Navbars from "../Navbars";
const StudentSignUpForm = () => {
  const [fullNameState, setFullName] = useState("");
  const [emailState, setEmail] = useState("");
  const [mobileNumberState, setMobileNumber] = useState();
  const [passwordState, setPasswordState] = useState("");
  const [referenceState, setReferenceState] = useState("");
  const [genderState, setGender] = useState("");

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await studentRegisterPost({
        fullName: fullNameState,
        email: emailState,
        moNumber: mobileNumberState,
        password: passwordState,
        status: "active",
        roles: "STUDENT",
        date: new Date(),
        ref: referenceState,
        gender: genderState,
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

  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh]">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center   h-full">
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Student Register
              </Typography>

              <Input
                type="text"
                label="Full Name"
                name="fullName"
                value={fullNameState}
                onChange={onChangeFullName}
                required
              />

              <Input
                type="text"
                label="email"
                name="emailState"
                value={emailState}
                onChange={onChangeEmail}
                required
              />

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
                <option></option>
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
              <Link to={'/signin'}>
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

export default StudentSignUpForm;
