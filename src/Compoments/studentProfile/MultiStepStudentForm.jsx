// MultiStepForm.js
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Card, CardBody, Input, Textarea } from "@material-tailwind/react";
import "tailwindcss/tailwind.css";
import { Select, Option } from "@material-tailwind/react";
import { useAddStudentProfileMutation } from "../../services/studentApi/studentApiSlice";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const steps = [
  { label: "Step 1", content: "Educations Details" },
  { label: "Step 2", content: "Career Details" },
  { label: "Step 3", content: "About" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [highEducation, setHighEducation] = useState("");
  const [specialization, setSpecialization] = useState();
  const [course, setCourse] = useState();
  const [courseDuration, setCourseDuration] = useState();
  const [skills, setSkills] = useState([]);
  const [currentSkills, setCurrentSkills] = useState("");

  const [experianceType, setExperianceType] = useState("");
  const [workExperiance, setExperiance] = useState("");
  const [lastWorkDuration, setLastWorkDuration] = useState("");
  const [lastSalary, setLastSalary] = useState("");
  const [previousDesignation, setPreviousDesignation] = useState("");
  const [careerBreak, setCareerBreak] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [availableToJoin, setAvailableToJoin] = useState("");
  const [lastCompany, setLastCompany] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [preferredSalary, setPrefeeredSalary] = useState("");

  console.log(skills);

  const [addStudentProfile] = useAddStudentProfileMutation();

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const addSkills = (e) => {
    e.preventDefault();
    setSkills([...skills, currentSkills]);
  };
  const onDelete = (myId) => {
    const updates = skills.filter((each, idx) => idx !== myId);
    setSkills(updates);
  };

  const handleVersionChange = (value) => {
    setHighEducation(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const studentFormData = {
      experienceType: experianceType,
      workExperience: workExperiance,
      lastWorkDuration: lastWorkDuration,
      lastCompany: lastCompany,
      lastSalary: lastSalary,
      previousDesignation: previousDesignation,
      careerBreak: careerBreak,
      highestLevelOfEud: highEducation,
      currentLocation: currentLocation,

      availableToJoin: availableToJoin,
      specialization: specialization,
      course: course,
      courseDuration: courseDuration,
      skills: skills,

      shortAboutYourself: aboutYourself,
      preferredSalary: preferredSalary,
    };
    const getCookies = Cookies.get("cookie");
    console.log(getCookies);
    const decodeToken = jwtDecode(getCookies);
    const userId = decodeToken.userId;
    const id = userId;
    const res = await addStudentProfile({ studentFormData, id });
    console.log(res);
  };
  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        {steps[currentStep].content}
      </Typography>
      <Card className="mx-auto w-full max-w-[24rem]">
        <form>
          {/* Your form fields go here */}
          {currentStep === 0 && (
            <div>
              <CardBody className="flex flex-col gap-2">
                <Select
                  label="Select Version"
                  value="highEducation"
                  onChange={(value) => handleVersionChange(value)}
                >
                  <Option value="BE">Bachelor of engineering</Option>
                  <Option value="Btech">Bachelor of Technology</Option>
                  <Option value="Diploma">Diploma In Engineering</Option>
                </Select>
                <Input
                  label="specilization"
                  name="specilization"
                  onChange={(e) => setSpecialization(e.target.value)}
                  size="xs"
                />

                <Input
                  label="Course"
                  name="course"
                  onChange={(e) => setCourse(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Course Duration"
                  name="courseduration"
                  onChange={(e) => setCourseDuration(e.target.value)}
                  size="xs"
                />

                <Input
                  label="Skills"
                  type="text"
                  size="xs"
                  value={currentSkills}
                  onChange={(e) => setCurrentSkills(e.target.value)}
                />
                <button onClick={addSkills}>+</button>

                {skills.map((skill, index) => {
                  return (
                    <div key={index} className="flex gap-4">
                      {skill}
                      <button onClick={() => onDelete(index)}>-</button>
                    </div>
                  );
                })}
              </CardBody>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <CardBody className="flex flex-col gap-2">
                <Input
                  label="experiance"
                  name="experianceType"
                  value={experianceType}
                  onChange={(e) => setExperianceType(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Work Experiance"
                  name="workExperiance"
                  value={workExperiance}
                  onChange={(e) => setExperiance(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Last Work Duration"
                  name="lastWorkDuration"
                  value={lastWorkDuration}
                  onChange={(e) => setLastWorkDuration(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Last Salary"
                  name="lastSalary"
                  value={lastSalary}
                  onChange={(e) => setLastSalary(e.target.value)}
                  size="xs"
                />
                <Input
                  label="preferred Salary"
                  name="preferred salary"
                  value={preferredSalary}
                  onChange={(e) => setPrefeeredSalary(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Last Company"
                  name="lastcompany"
                  value={lastCompany}
                  onChange={(e) => setLastCompany(e.target.value)}
                  size="xs"
                />
                <Input
                  label="Previous Designation"
                  name="previousDesignation"
                  value={previousDesignation}
                  onChange={(e) => setPreviousDesignation(e.target.value)}
                  size="xs"
                />
                <Input
                  label="careerBreak"
                  name="careerBreak"
                  value={careerBreak}
                  onChange={(e) => setCareerBreak(e.target.value)}
                  size="xs"
                />
                <Input
                  label="currentLocation"
                  name="currentLocation"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  size="xs"
                />
                <Input
                  label="availableToJoin"
                  name="availableToJoin"
                  value={availableToJoin}
                  onChange={(e) => setAvailableToJoin(e.target.value)}
                  size="xs"
                />
              </CardBody>
            </div>
          )}

          {currentStep === 2 && (
            <div className="flex justify-center">
              <Textarea
                label="About yourself"
                onChange={(e) => {
                  setAboutYourself(e.target.value);
                }}
                value={aboutYourself}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-2 flex justify-around mb-5">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="mr-2"
            >
              Previous
            </Button>
            {currentStep === 2 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MultiStepForm;
