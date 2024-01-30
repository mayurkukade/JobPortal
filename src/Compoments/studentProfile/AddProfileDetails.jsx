import { useState } from "react";

import Cookies from "js-cookie";
import SkillAndRecommendations from "./SkillAndRecommendations";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import ProfessionalDetails from "./ProfessionalDetails";
import Resume from "./Resume";
import { jwtDecode } from "jwt-decode";
import Certification from "./Certification";
import toast, { Toaster } from "react-hot-toast";
// import AdditionalInformation from "./components/multistepForms/AdditionalInformation";
import { Button } from "@material-tailwind/react";
import { Stepper, Step } from "@material-tailwind/react";
import { format } from "date-fns";
import { useAddStudentProfileMutation } from "../../services/studentApi/studentApiSlice";

const AddProfileDetails = () => {
  const [step, setStep] = useState(0);
  const [birthDate, setBirthDate] = useState();
  const [formPersonalDetails, setFormPersonalDetails] = useState({
    profilePicture: null,
    name: "",
    gender: "",
    dateOfBirth: "",
    currentLocation: "",
    preferredLocation: "",
    phone: "",
    industry: "",
    functionalArea: "",
    noticePeriod: "",
    experience: "",
    annualSalary: "",
    expectedSalary: "",
  });

  const [degrees, setDegrees] = useState([
    { institute: "", batchFrom: "", batchTo: "", course: "", degree: "" },
  ]);

  const [professionalDetails, setProfessionalDetails] = useState([
    {
      designation: "",
      organization: "",
      salary: "",
      fromDateProfessionalDetails: "",
      fromMonthProfessionalDetails: "",
      toFromDateProfessionalDetails: "",
      toFromMonthProfessionalDetails: "",
    },
  ]);

  const [certificationInputForm, setCertificationInputForm] = useState([
    {
      certificate: "",
      institute: "",
      durationFrom: "",
      durationTo: "",
    },
  ]);

  const [skillsInputForm, setSkillsInputForm] = useState([]);

  const isAuthenticatedSelector = Cookies.get("cookie");
  const decodejwt = jwtDecode(isAuthenticatedSelector);
  console.log(decodejwt);
  const userId = decodejwt?.userId;
  console.log(userId);

  console.log(professionalDetails);

  console.log(degrees);
  const dateResult = birthDate ? format(birthDate, "MM-dd-yy") : null;
  console.log(dateResult);

  const personalDetails = () => {
    console.log(formPersonalDetails);
    console.log("click");
  };

  const educationDetails = () => {
    console.log(degrees);
  };
  const ProfessionalDetailsHandle = () => {
    console.log(professionalDetails);
  };

  const certificationHandle = () => {
    console.log(certificationInputForm);
  };
  const skillsHandle = () => {
    console.log(skillsInputForm);
  };
  const [studentRegisterPost] = useAddStudentProfileMutation();

  const submitHandler = async () => {
    if(skillsInputForm.length === 0){
   return   toast.error('Please add skills');
    }
    const res = await studentRegisterPost({
      userId,
      experienceType: "Some Experience",
      workExperience: formPersonalDetails.experience,
      lastWorkDuration: "Full Time",
      lastCompany: "ABC Corp",
      lastSalary: formPersonalDetails.annualSalary,
      previousDesignation: "Software Developer",
      careerBreak: "No",
      highestLevelOfEud: "Master's Degree",
      currentLocation: formPersonalDetails.currentLocation,
      availableToJoin: "1 month",
      specialization: "Computer Science",
      course: "MCA",
      courseDuration: "3 years",
      skills: skillsInputForm,
      degrees: degrees,
      certificates: certificationInputForm,
      shortAboutYourself:
        "Passionate software developer with a strong background in Java development.",
    });

    console.log(res);
    if (res?.data) {
      toast.success(res?.data?.message);
    }
  };

  const NextStep = () => {
    if (step === 0) {
      personalDetails();
    }
    if (step === 1) {
      educationDetails();
    }
    if (step === 2) {
      ProfessionalDetailsHandle();
    }
    if (step === 4) {
      certificationHandle();
    }
    if (step === 5) {
      skillsHandle();

      return submitHandler();
    }
    setStep((prev) => prev + 1);
  };

  const BackStep = () => {
    if (step <= 0) return;
    setStep((prev) => prev - 1);
  };

  console.log(formPersonalDetails);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full py-4 px-8  ">
        <Stepper activeStep={step}>
          <Step
            onClick={() => setStep(0)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Personal Details</p>
          </Step>
          <Step
            onClick={() => setStep(1)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Education</p>
          </Step>
          <Step
            onClick={() => setStep(2)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Professional Details</p>
          </Step>
          <Step
            onClick={() => setStep(3)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Resume</p>
          </Step>
          <Step
            onClick={() => setStep(4)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Certification</p>
          </Step>
          <Step
            onClick={() => setStep(5)}
            className="w-fit p-3 flex items-center cursor-pointer"
          >
            <p>Skill And Recommendations</p>
          </Step>
          {/* <Step
          onClick={() => setStep(1)}
          className="w-fit p-3 flex items-center cursor-pointer"
        >
          <p>Additional Information</p>
        </Step> */}
        </Stepper>
      </div>
      {step == 0 && (
        <PersonalDetails
          formPersonalDetails={formPersonalDetails}
          setFormPersonalDetails={setFormPersonalDetails}
          dateOfBirth={birthDate}
          setBirthDate={setBirthDate}
        />
      )}
      {step == 1 && <Education degrees={degrees} setDegrees={setDegrees} />}
      {step == 2 && (
        <ProfessionalDetails
          professionalDetails={professionalDetails}
          setProfessionalDetails={setProfessionalDetails}
        />
      )}
      {step == 3 && <Resume />}
      {step == 4 && (
        <Certification
          certificationInputForm={certificationInputForm}
          setCertificationInputForm={setCertificationInputForm}
        />
      )}
      {step == 5 && (
        <SkillAndRecommendations
          skillsInputForm={skillsInputForm}
          setSkillsInputForm={setSkillsInputForm}
        />
      )}
      {/* {step == 6 && <AdditionalInformation />} */}
      {/* {CurrentStepComponent && (
      <CurrentStepComponent
        formPersonalDetails={formPersonalDetails}
        setFormPersonalDetails={setFormPersonalDetails}
        dateOfBirth = {birthDate}
        setBirthDate = {setBirthDate}
      />
    )} */}

      <div className="flex gap-2 justify-center m-5">
        <Button
          onClick={BackStep}
          disabled={step == 0}
          className=" bg-indigo-800"
        >
          Back
        </Button>
        <Button onClick={NextStep} className=" bg-indigo-800">
          Next
        </Button>
      </div>
    </>
  );
};

export default AddProfileDetails;
