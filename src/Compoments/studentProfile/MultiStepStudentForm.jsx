import React from "react";
import {
  Input,
  Select,
  Option,
  Button,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import { CiCamera } from "react-icons/ci";
import { motion } from "framer-motion";

export default function StudentMultiStep() {
  const [step1, setStep1] = React.useState(true);
  const [step2, setStep2] = React.useState(false);
  const [step3, setStep3] = React.useState(false);
  const [step4, setStep4] = React.useState(false);
 

  const togglestep2 = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);

    document
      .getElementById("Personal")
      .setAttribute(
        "style",
        "background : #fc7f03 ; transition: background-color 1s ease-in-out;"
      );
    document.getElementById("Education").removeAttribute("style");
    document.getElementById("Profesional").removeAttribute("style");
    document.getElementById("Resume").removeAttribute("style");
  };

  const togglestep3 = () => {
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);

    document
      .getElementById("Education")
      .setAttribute(
        "style",
        "background : #fc7f03 ; transition: background-color 1s ease-in-out;"
      );
    document.getElementById("Personal").removeAttribute("style");
    document.getElementById("Profesional").removeAttribute("style");
    document.getElementById("Resume").removeAttribute("style");
  };
  const togglestep4 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
    setStep4(false);

    document
      .getElementById("Profesional")
      .setAttribute(
        "style",
        "background : #fc7f03 ; transition: background-color 1s ease-in-out;"
      );
    document.getElementById("Personal").removeAttribute("style");
    document.getElementById("Education").removeAttribute("style");
    document.getElementById("Resume").removeAttribute("style");
  };
  const togglestep5 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(true);

    document
      .getElementById("Resume")
      .setAttribute(
        "style",
        "background : #fc7f03 ; transition: background-color 1s ease-in-out;"
      );
    document.getElementById("Personal").removeAttribute("style");
    document.getElementById("Education").removeAttribute("style");
    document.getElementById("Profesional").removeAttribute("style");
  };
  const togglestep6 = () => {};
  const togglestep7 = () => {};
  const togglestep8 = () => {};

  function handleSubmit(e) {
    e.preventDefault();

    // Validation code

    // if (name.length < 4) {
    //   alert("First Name should at least four char");
    //   return;
    // }

    // if (number.length < 10 || number.length >= 11) {
    //   alert(" Mobile Number only ten number ");
    //   return;
    // }

    // First card
    // console.log("name :-  " + name);
    // console.log("number :-  " + number);
    // console.log("email :-  " + email);
    // console.log("company :-  " + company);
    // console.log("freshorexpradio :-  " + freshorexpradio);
    // console.log("startdate :-  " + startdate);
    // console.log("enddate :-  " + enddate);

    // Second Card
    // console.log("qualification :-  " + qualification);
    // console.log("specialization :-  " + specialization);
    // console.log("courseradio :-  " + courseradio);
    // console.log("startdate1 :-  " + startdate1);
    // console.log("enddate1 :-  " + enddate1);
    // console.log("developer :-  " + developer);

    // //Third Card
    // console.log("discribe :-  " + discribe);
    // console.log("salary :-  " + salary);
    // console.log("gender :-  " + gender);

    // Reset Value
    // setName(" ");
    // setNumber(" ");
    // setEmail(" ");
    // setCompany(" ");
    // setFreshorexpradio(" ");
    // setStartdate(" ");
    // setEnddate(" ");

    // setQualification(" ");
    // setSpecialization(" ");
    // setCourseradio(" ");
    // setStartdate1(" ");
    // setEnddate1(" ");
    // setDeveloper(" ");

    // setDiscribe(" ");
    // setSalary(" ");
    // setGender(" ");
  }

  return (
    <div className="flex justify-center">
      <div className="mt-10 ml-2">
        <div className="sm:flex hidden">
          <motion.div
            id="Personal"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep2}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer"
          >
            <p className="text-black text-md">Personal Details</p>
          </motion.div>

          <div className="w-[3.125rem]">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Education"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep3}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer"
          >
            <p className="text-black text-md">Education</p>
          </motion.div>

          <div className="w-[3.125rem]">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Profesional"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep4}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer"
          >
            <p className="text-black text-md">Profesional Details</p>
          </motion.div>

          <div className="w-[3.125rem]">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Resume"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep5}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer"
          >
            <p className="text-black text-md">Resume </p>
          </motion.div>

          <div className="w-[3.125rem]  md:block hidden">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Certifications"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep6}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer md:block hidden"
          >
            <p className="text-black text-md">Certifications</p>
          </motion.div>

          <div className="w-[3.125rem]  md:block hidden">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Skill"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep7}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer  md:block hidden"
          >
            <p className="text-black text-md">Skill & Recommendations</p>
          </motion.div>

          <div className="w-[3.125rem]  md:block hidden">
            <hr className="border border-gray-500 mt-4" />
          </div>

          <motion.div
            id="Information"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep8}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer  md:block hidden"
          >
            <p className="text-black text-md">Additional Information</p>
          </motion.div>
        </div>
        {/* Form start */}
        <div className="border-gray-100 border mt-5">
          <form onSubmit={handleSubmit}>
            {/* first part */}
            {step1 && (
              <motion.div
                className=""
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, stiffness: 30, type: "spring" }}
              >
                  <div className="bg-gray-100 py-2  w-full  ">
                    <p className="pl-2">Personal Details</p>
                  </div>

                {/* Main Code start */}
                <div className="flex flex-wrap">
                  
                {/* left part start*/}
                  <div className="sm:w-[30rem] ">
                    {/* First part */}
                  <div className="flex">
                      <label htmlFor="" className="mt-5">
                        Profile Picture :-
                      </label>
                      <div className="w-20 h-20 rounded-full border-gray-100 border sm:ml-[6.25rem] ml-10">
                        <CiCamera className="w-10 h-10 mt-4 ml-4" />
                        <div className="pl-2 py-1 rounded-md bg-orange-600">
                          <button className="text-xs">Add Picture</button>
                        </div>
                      </div>
                    </div>

                    {/* Second part */}
                    <div className="flex mt-5">
                    <p>Name : - </p>
                    <div className="sm:w-72 sm:ml-28 ml-20">
                      <Input type="text" label="Enter Name" />
                    </div>
                  </div>

                  {/* Third Part */}
                  <div className="flex mt-5">
                  <p>Gender : - </p>
                    <div className="sm:w-72 sm:ml-[6.38rem] ml-[4.30rem]">
                      <Select label="Select">
                        <Option>Male</Option>
                        <Option>Female</Option>
                      </Select>
                    </div>
                    </div>

                    {/* Fourth part */}

                    <div className="flex mt-5">
                    <p>D.O.B.</p>
                    <div className="sm:w-72 sm:ml-[7.80rem] ml-[6rem]">
                      <Input type="date" />
                    </div>
                    </div>

                     {/* Fifth part */}
                     <div className="flex mt-5">
                    <p>Current Location :- </p>
                    <div className="sm:w-72 ml-[0.9rem] sm:ml-[2.5rem] ">
                      <Select label="Select">
                        <Option>Delhi</Option>
                        <Option>Mumbai</Option>
                        <Option>Chennai</Option>
                        <Option>Pune</Option>
                        <Option>Nagpur</Option>
                        <Option>Amravati</Option>
                      </Select>
                    </div>
                    </div>

                    {/* sixth part */}
                    <div className="flex mt-5">
                      <p>Preffered Location :- </p>
                      <div className="sm:w-72 sm:ml-7 ml-[0.2rem] ">
                        <Input type="text" label="Location" />
                      </div>
                    </div>
                  </div>
                  {/* left part end*/}

                  {/* right part start */}
                  <div className="sm:ml-[20rem] ">

                    {/* First part */}
                  <div className=" ">
                      <div className="flex mt-5">
                        <label className="mt-2">Phone :-</label>

                        <div className="sm:w-72 sm:ml-[5.313rem] ml-[5.3rem]">
                          <Input type="number" label="Enter Mobile Number" />
                        </div>
                      </div>
                      <div>
                        <div className="flex mt-5">
                          <label className="mt-2">Industries :-</label>

                          <div className="sm:w-72 ml-16">
                            <Input type="number" label="Industries" />
                          </div>
                        </div>
                      </div>
                    </div>
                 {/* second part */}

                 <div className="flex mt-5">
                      <p>Functional Area :- </p>
                      <div className="sm:ml-6 ml-[1.5rem] sm:w-72">
                        <Select label="Functional Area">
                          <Option>A</Option>
                          <Option>B</Option>
                          <Option>c</Option>
                        </Select>
                      </div>
                    </div>

                    {/* Third part */}

                    <div className="flex mt-5">
                    <div className="flex">
                      <p>Notice Period :- </p>
                      <div className="sm:ml-10 ml-[2.5rem] sm:w-72">
                        <Select label="Notice Period">
                          <Option>1 month</Option>
                          <Option>2 months</Option>
                          <Option>3 months</Option>
                        </Select>
                      </div>
                    </div>
                    </div>

                     {/* Fourth part */}

                     <div className="flex mt-5">
                   <div className="flex">
                      <p>Experience :- </p>
                      <div className="sm:ml-[3.70rem] ml-[3.6rem] sm:w-72">
                        <Select label="Experience">
                          <Option>1 month</Option>
                          <Option>2 months</Option>
                          <Option>3 months</Option>
                        </Select>
                      </div>
                    </div>
                     </div>

                     {/* Fifth part */}
                       <div className="flex mt-5">
                    <div className="flex">
                      <p>Anual Salary :- </p>
                      <div className="sm:ml-[3.2rem] ml-[3rem] sm:w-72">
                        <Select label="Anual Salary">
                          <Option>1 LPA</Option>
                          <Option>2 LPA</Option>
                          <Option>3 LPA</Option>
                        </Select>
                      </div>
                    </div>
                       </div>

                       {/* sixth part */}
                       <div className="flex mt-5">
                      <p>Expected Salary :- </p>
                      <div className="sm:ml-[1.7rem] ml-[1.5rem] sm:w-72">
                        <Select label="Anual Salary">
                          <Option>1 LPA</Option>
                          <Option>2 LPA</Option>
                          <Option>3 LPA</Option>
                        </Select>
                      </div>
                    </div>

                  </div>
                 {/* right part end */}

                 <div className="mt-10 flex w-full justify-center  ">
                    <Button className="bg-orange-900 " onClick={togglestep3}>
                      Save & Next{" "}
                    </Button>
                  </div>
                </div>
              </motion.div>
              
            )}

            {/* first part end */}

            {/* Second part Start */}

            {step2 && (
              <motion.div
                className="ml-2"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, stiffness: 30, type: "spring" }}
              >
                <div className="bg-gray-100 py-2 sm:w-[81.25rem] w-full ">
                  <p className="pl-2">Education</p>
                </div>

                <div className="flex flex-wrap ">
                  <div className="flex ">
                    <div className="flex ">
                    <label htmlFor="" className="mt-5">
                      Institute : -
                    </label>
                    <div className="sm:ml-48 ml-10 sm:w-72 mt-5">
                      <Input className="" type="text" label="Institute" />
                    </div>
                    </div>
                  </div>

                  <p className="ml-3 text-orange-800 text-sm mt-7">Edit</p>
                  <div className="sm:ml-10 ml-[6rem] ">
                  <Checkbox  />
                  <label className="sm:text-lg text-[0.95rem] ">This is the most relevent qualification</label>
                  </div>
                  
                </div>

                <div className="flex flex-wrap mt-5">
                  <p>Batch : - </p>
                  <div className="sm:ml-52 ml-16 sm:w-72">
                    <Select label="YYYY">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                  </div>
                  <p className="ml-5 mt-2">To</p>
                  <div className="sm:ml-14 ml-[7.9rem] mt-2 sm:w-72">
                    <Select label="YYYY">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                  </div>
                </div>

                <div className="flex mt-5">
                  <p>Course type : - </p>
                  <div className="sm:ml-[10.313rem] ml-[1.45rem] sm:w-72">
                    <Select label="Select">
                      <Option>A</Option>
                      <Option>B</Option>
                      <Option>C</Option>
                      <Option>D</Option>
                    </Select>
                  </div>
                </div>

                <div className="flex mt-5">
                  <p>Degree : - </p>
                  <div className="sm:ml-[12.5rem] ml-[3.5rem] sm:w-72">
                    <Select label="Select">
                      <Option>A</Option>
                      <Option>B</Option>
                      <Option>C</Option>
                      <Option>D</Option>
                    </Select>
                  </div>
                </div>

                <div className="mt-5 sm:ml-[16.875rem] ml-[8rem]">
                  <Button>+ Add Degree</Button>
                </div>

                <div className="mt-5  justify-center flex">
                  <div>
                    <Button variant="outlined" onClick={togglestep2}>
                      Back
                    </Button>
                  </div>
                  <div className="ml-3">
                    <Button className="bg-orange-800" onClick={togglestep4}>
                      Save & Next{" "}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Second part End */}

            {/* Third Part Start */}

            {step3 && (
              <motion.div
                className="ml-2"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, stiffness: 30, type: "spring" }}
              >
                <div className="bg-gray-100 py-2 sm:w-[81.25rem] w-full">
                  <p className="pl-2">Professional Details</p>
                </div>

                <div className="flex flex-wrap ">
                  <div className="flex">
                    <label htmlFor="" className="mt-7">
                      Designation : -
                    </label>
                    <div className="sm:ml-[10.6rem] ml-10 sm:w-72 mt-5">
                      <Input className="" type="text" label="Enter Value" />
                    </div>
                  </div>

                  <div className="sm:ml-10 ml-36 sm:mt-4 mt-1 flex ">
                    <Checkbox />
                    <label className="sm:text-xl sm:mt-2 mt-3 text-xs">I Currently work here</label>
                  </div>
                </div>

                <div className="flex mt-5">
                  <p>Organization : - </p>
                  <div className="sm:ml-[10.2rem] ml-10 sm:w-72">
                    <Input type="text" label="Organization" />
                  </div>
                  <p className="ml-3 text-orange-800 text-sm mt-2">Edit</p>
                </div>

                <div className="flex mt-5">
                  <p>Salary : - </p>
                  <div className="sm:ml-[13rem] ml-[5.4rem] sm:w-72">
                    <Select label="Select">
                      <Option>1 LPA</Option>
                      <Option>2 LPA</Option>
                      <Option>3 LPA</Option>
                      <Option>4 LPA</Option>
                    </Select>
                  </div>
                </div>

                <div className="flex   mt-5">
                  <p>Time Period : - </p>
                  <div className="sm:ml-[10.5rem] ml-[6.5rem] flex flex-wrap sm:w-72">
                    <div className="flex flex-wrap">
                      <div>
                    <Select label="MM" className="sm:w-72">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                    </div>
                     <div className="mt-5">
                    <Select label="YYYY" className="sm:w-72">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                    </div>
                    </div>

                    <p className="ml-5 mt-2 mr-2">To</p>

                  <div className="flex flex-wrap">
                    <div>
                    <Select label="MM" className="sm:w-72">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                    </div>
                    <div className="mt-5">
                    <Select label="YYYY" className="sm:w-72">
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:ml-[16.875rem] ml-[9.5rem]">
                  <Button>+ Add Position</Button>
                </div>

                <div className="mt-5 flex justify-center">
                  <div>
                    <Button variant="outlined" onClick={togglestep3}>
                      Back
                    </Button>
                  </div>
                  <div className="ml-3">
                    <Button className="bg-orange-800" onClick={togglestep5}>
                      Save & Next{" "}
                    </Button>
                  </div>
                  <p className="ml-1 mt-2 cursor-pointer">Skip </p>
                </div>
              </motion.div>
            )}
            {/* Third Part End */}

            {/* Fourth part start */}

            {step4 && (
              <motion.div
                className="ml-2"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, stiffness: 30, type: "spring" }}
              >
                <div className="bg-gray-100 py-2 sm:w-[81.25rem] ">
                  <p className="pl-2">Please upload your resume here</p>
                </div>

                <div className="flex mt-5 ">
                  <p>Attach Resume :- </p>

                  <div className="sm:ml-[17.9rem] ml-[3rem]  h-5">
                    <input type="file" className="w-64 h-8" />
                  </div>
                </div>

                <div className="flex mt-5">
                  <p>Upload Video Profile :- </p>

                   <div className="flex flex-wrap">
                  <div className="sm:ml-[15.625rem] ml-14 sm:w-72 ">
                    <input type="file" id="img" name="img" className="w-64" accept="video/*" />
                  </div>

                  <div className="sm:mt-0 mt-2 sm:ml-0 ml-14">
                    <Button className="bg-orange-800">
                      Create Video Profile
                    </Button>
                  </div>
                  </div>
                </div>

                <div className="flex mt-5">
                  <p>Cover Latter :- </p>

                  <div className="sm:ml-[19.3rem] sm:w-[50%] w-[100%]  ">
                    <Textarea
                      type="text"
                      label="A thought and well written cover letter helps you exhibite information."
                    />
                  </div>
                </div>

                <div className="sm:ml-[25rem] ml-16 ">
                  <Checkbox label="Include cover latter while applying" />
                </div>

                <div className="mt-5 justify-center  flex">
                  <div>
                    <Button variant="outlined" onClick={togglestep4}>
                      Back
                    </Button>
                  </div>
                  <div className="ml-3">
                    <Button className="bg-orange-800">Save & Next </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fourth part end */}

          </form>
        </div>
        {/* Form end */}
      </div>
    </div>
  );
}
