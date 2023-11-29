import { Button, Radio, Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";

export default function MultiStepForm() {
  // First card
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [freshorexpradio, setFreshorexpradio] = React.useState("");
  const [startdate, setStartdate] = React.useState("");
  const [enddate, setEnddate] = React.useState("");

  // Second card
  const [qualification, setQualification] = React.useState("");
  const [specialization, setSpecialization] = React.useState("");
  const [courseradio, setCourseradio] = React.useState("");
  const [startdate1, setStartdate1] = React.useState("");
  const [enddate1, setEnddate1] = React.useState("");
  const [developer, setDeveloper] = React.useState("");

  // Third Card
  const [discribe, setDiscribe] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [step1, setStep1] = React.useState(true);
  const [step2, setStep2] = React.useState(false);
  const [step3, setStep3] = React.useState(false);

  const togglestep2 = () => {
    setStep2(!step2);
    setStep1(!step1);
  };

  const togglestep3 = () => {
    setStep3(!step3);
    setStep2(!step2);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // First card
    console.log("name :-  " + name);
    console.log("number :-  " + number);
    console.log("email :-  " + email);
    console.log("company :-  " + company);
    console.log("freshorexpradio :-  " + freshorexpradio);
    console.log("startdate :-  " + startdate);
    console.log("enddate :-  " + enddate);

    // Second Card
    console.log("qualification :-  " + qualification);
    console.log("specialization :-  " + specialization);
    console.log("courseradio :-  " + courseradio);
    console.log("startdate1 :-  " + startdate1);
    console.log("enddate1 :-  " + enddate1);
    console.log("developer :-  " + developer);

    //Third Card
    console.log("discribe :-  " + discribe);
    console.log("salary :-  " + salary);
    console.log("gender :-  " + gender);

    // Reset Value
    setName(" ");
    setNumber(" ");
    setEmail(" ");
    setCompany(" ");
    setFreshorexpradio(" ");
    setStartdate(" ");
    setEnddate(" ");

    setQualification(" ");
    setSpecialization(" ");
    setCourseradio(" ");
    setStartdate1(" ");
    setEnddate1(" ");
    setDeveloper(" ");

    setDiscribe(" ");
    setSalary(" ");
    setGender(" ");
  }

  const handleSelectChange = (e) => {
    if (e.target && e.target.value) {
      setQualification(e.target.value);
    }
  };
  const handleSelectChange1 = (e) => {
    if (e.target && e.target.value) {
      setDeveloper(e.target.value);
    }
  };

  function Radio({ name, value, onChange, label, checked }) {
    return (
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-darkBlueBackground">
      <form onSubmit={handleSubmit}>
        {/* first part */}
        {step1 && (
          <div className="bg-white p-5 rounded-md">
            <label htmlFor="First Name"> Name :- </label>
            <Input
              type="text"
              label="Enter your Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-faintBackgroundBlue "
            />
            <br />

            <label htmlFor="Mobile Number">Mobile Number :- </label>
            <Input
              type="Number"
              label="Enter your Number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-faintBackgroundBlue   "
            />
            <br />

            <label htmlFor="Email"> Email :- </label>
            <Input
              type="email"
              label="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-faintBackgroundBlue "
            />
            <br />

            <div className="flex">
              <div className="flex">
                <Radio
                  name="type"
                  value="fresher"
                  onChange={(e) => setFreshorexpradio(e.target.value)}
                  
                  checked={freshorexpradio === "fresher"} // Check if the value matches the default
                  />
                  <label className="ml-2 mr-2">Fresher</label>
                <Radio
                  name="type"
                  value="experience"
                  onChange={(e) => setFreshorexpradio(e.target.value)}
                  
                  checked={freshorexpradio === "experience"} // Check if the value matches the default
                />
                <label className="ml-2">Experience</label>
              </div>
            </div>

            <div className="mt-5">
              <p className="pt-3">Company :- </p>
              <div className="">
                <Input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  label="Company Name"
                  className=""
                />
              </div>
            </div>

            <div className="flex mt-5">
              <p className="ml-20 text-Inter">Start Date</p>
              <p className="ml-16 text-Inter">End Date</p>
            </div>

            <div className="flex">
              <div className="w-[10rem] h-[2rem]  flex items-center justify-center ml-2">
                <Input
                  type="text"
                  value={startdate}
                  onChange={(e) => setStartdate(e.target.value)}
                  label="Eg.2020"
                />
              </div>
              <div className="w-[10rem] h-[2rem]  flex items-center justify-center ml-12 mr-2">
                <Input
                  type="text"
                  value={enddate}
                  onChange={(e) => setEnddate(e.target.value)}
                  label="Eg.2023"
                />
              </div>
            </div>

            <div className=" flex justify-end min-w-full">
              <Button className=" mt-5 " onClick={togglestep2}>
                Next
              </Button>
            </div>
          </div>
        )}

        {/* first part end */}

        {/* Second part Start */}

        {step2 && (
          <div className="bg-white p-5 rounded-md">
            <p className="text-[2rem]">Education</p>
            <hr className="border-1 border-black" />

            <p className="text-[1.5rem] mt-5">Highest Qualification</p>

            <div className="w-52 ">
              <select
                value={qualification}
                onChange={handleSelectChange}
                className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none "
              >
                <option value="">Select Qualification</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="P.Hd.">P.Hd.</option>
              </select>
            </div>

            <p className="text-[1.5rem] mt-5">Course</p>
            <div className="w-48">
              <Input type="search" label="Search" />
            </div>
            <p className="text-[1.5rem] mt-5">Specialization</p>

            <div className="flex w-[12rem] h-[2rem] mt-2  items-center justify-center">
              <Input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                label="Eg.Data Analysis"
              />
            </div>

            <p className="text-[1.5rem] mt-5">University Institution</p>

            <div className="flex w-[12rem] h-[2rem] mt-2  items-center justify-center">
              <Input type="search" label="Search" />
            </div>

            <p className="text-[1.5rem] mt-5">Course Type</p>

            <div className="flex flex-wrap mt-2 ">
              <Radio
                name="courseType"
                value="Full Time"
                onChange={(e) => setCourseradio(e.target.value)}
                checked={courseradio === "Full Time"}
               
              />
                <label className="ml-2 mr-2">Full Time</label>
              <Radio
                name="courseType"
                value="Part Time"
                onChange={(e) => setCourseradio(e.target.value)}
                checked={courseradio === "Part Time"}
                
              />
              <label className="ml-2 mr-2">Part Time</label>
              <Radio
                name="courseType"
                value="Distant Learning"
                onChange={(e) => setCourseradio(e.target.value)}
                checked={courseradio === "Distant Learning"}
                
              />
              <label className="ml-2 mr-2">Distant Learning</label>
            </div>

            <div className="flex mt-5">
              <p className="ml-20 text-Inter">Start Date</p>
              <p className="ml-16 text-Inter">End Date</p>
            </div>

            <div className="flex">
              <div className="w-[10rem] h-[2rem]  flex items-center justify-center ml-2">
                <Input
                  type="text"
                  value={startdate1}
                  onChange={(e) => setStartdate1(e.target.value)}
                  label="Eg.2020"
                />
              </div>
              <div className="w-[10rem] h-[2rem]  flex items-center justify-center ml-12 mr-2">
                <Input
                  type="text"
                  value={enddate1}
                  onChange={(e) => setEnddate1(e.target.value)}
                  label="Eg.2023"
                />
              </div>
            </div>

            <p className="text-[1.5rem] mt-5">Key Skills</p>

            <div className="md:w-[30rem] md:h-[4rem] h-10 w-48 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Version
              </label>
              <div className="relative">
                <select
                  value={developer}
                  onChange={handleSelectChange1}
                  className="appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Version</option>
                  <option value="Frontend">FrontEnd</option>
                  <option value="Backend">BackEnd</option>
                  <option value="Database">Database</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-8 8H0l10-10 10 10h-2l-8-8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" flex justify-end min-w-full md:mb-0 mb-5 mt-10">
              <Button className=" mt-5 " onClick={togglestep3}>
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Second part End */}

        {/* Third Part Start */}

        {step3 && (
          <div className="bg-white p-5 rounded-md">
            <p className="text-[2rem]">Resume Upload</p>
            <hr className="border-1 border-black" />

            <div className="flex mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 138 145"
                fill="none"
              >
                <rect x="0.5" y="0.5" width="137" height="144" stroke="black" />
                <path
                  d="M73.6824 25.1716C72.1203 23.6095 69.5877 23.6095 68.0256 25.1716L42.5697 50.6274C41.0076 52.1895 41.0076 54.7222 42.5697 56.2843C44.1318 57.8464 46.6645 57.8464 48.2266 56.2843L70.854 33.6569L93.4814 56.2843C95.0435 57.8464 97.5762 57.8464 99.1383 56.2843C100.7 54.7222 100.7 52.1895 99.1383 50.6274L73.6824 25.1716ZM74.854 86.5L74.854 28L66.854 28L66.854 86.5L74.854 86.5Z"
                  fill="black"
                />
                <path
                  d="M28 66.2681L37.0349 105.746L110.232 108.122L118.4 69.2022"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
              <p className="text-[2rem] ml-5">
                <u>Upload Resume</u>{" "}
              </p>
            </div>

            <p className="text-[1.5rem] mt-5">
              Short Description about Yourself
            </p>
            <div className="w-96">
              <Textarea
                label="Message"
                value={discribe}
                onChange={(e) => setDiscribe(e.target.value)}
              />
            </div>

            <p className="text-[1.5rem] mt-5">Preffered work Location </p>
            <div className="flex flex-wrap">
              <Input type="search" label="Search" />
            </div>

            <p className="text-[1.5rem] mt-5">Preffered Salary </p>
            <Input
              type="text"
              label="Preffered Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />

            <p className="text-[1.5rem] mt-5">Gender </p>

            <Radio
              name="genderType"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
             
              checked={gender === "Male"}
            />
              <label className="ml-2 mr-2">Male</label>
            <Radio
              name="genderType"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              
              checked={gender === "Female"}
            />
              <label className="ml-2 mr-2">Female</label>

            <div className=" flex justify-end min-w-full">
              <Button className=" mt-5 " type="submit">
                Submit
              </Button>
            </div>
          </div>
        )}

        {/* Third Part End */}
      </form>
    </div>
  );
}
