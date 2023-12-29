import React from "react";
import {
  Input,
  Button,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import { CiCamera } from "react-icons/ci";
import { motion } from "framer-motion";
import {useDispatch} from 'react-redux'
import addDegree from '../../features/AddDegree'
import AddDegree from "./AddDegree";

export default function StudentMultiStep() {
  const [step1, setStep1] = React.useState(true);
  const [step2, setStep2] = React.useState(false);
  const [step3, setStep3] = React.useState(false);
  const [step4, setStep4] = React.useState(false);

  // First step
  const [name , setName] = React.useState("");
  const [gender , setGender] = React.useState("");
  const [dob , setDob] = React.useState("");
  const [curloct , setCurloct] = React.useState("");
  const [prefloct , setPrefloct] = React.useState("");
  const [phone , setPhone] = React.useState("");
  const [area , setArea] = React.useState("");
  const [peroid , setPeroid] = React.useState("");
  const [exp , setExp] = React.useState("");
  const [salary , setSalary] = React.useState("");
  const [expsalary , setExpsalary] = React.useState("");
  const [industries , setIndustries] = React.useState("");
 
  // second step
const [institute , setInstitute] = React.useState("");
const [batch1 , setBatch1] = React.useState("");
const [batch2 , setBatch2] = React.useState("");
const [course , setCourse] = React.useState("");
const [degree , setDegree] = React.useState("");

//Third step
const [designation , setDesignation] = React.useState("");
const [orgn , setOrgn] = React.useState("");
const [salary2 , setSalary2] = React.useState("");
const [timeMonth , setTimeMonth] = React.useState("");
const [timeYear , setTimeYear] = React.useState("");
const [timeMonth1 , setTimeMonth1] = React.useState("");
const [timeYear1 , setTimeYear1] = React.useState("");

// Fourth step
const [letter , setLetter] = React.useState("");

//Error  Step
const [errormsgname , setErrormsgname] = React.useState(false);
const [errormsgen , setErrormsgen] = React.useState(false);
const [errormsgdate , setErrormsgdate] = React.useState(false);
const [errormsgloct , setErrormsgloct] = React.useState(false);
const [errormsgpreffloct , setErrormsgpreffloct] = React.useState(false);
const [errormsgnum , setErrormsgnum] = React.useState(false);
const [errormsgarea , setErrormsgarea] = React.useState(false);
const [errormsgnotic , setErrormsgnotic] = React.useState(false);
const [errormsgexp , setErrormsgexp] = React.useState(false);
const [errormsgAnual , setErrormsgAnual] = React.useState(false);
const [errormsgexpsalary , setErrormsgexpsalary] = React.useState(false);

const [errormsginstit , setErrormsginstit] = React.useState(false);
const [errormsgbatch1 , setErrormsgbatch1] = React.useState(false);
const [errormsgbatch2 , setErrormsgbatch2] = React.useState(false);
const [errormsgbcourse , setErrormsgbcourse] = React.useState(false);
const [errormsgdegree , setErrormsgdegree] = React.useState(false);

const [errormsgdestion , setErrormsgdestion] = React.useState(false);
const [errormsgorg , setErrormsgorg] = React.useState(false);
const [errormsgslalary2 , setErrormsgslalary2] = React.useState(false);
const [errormsgthismonth , setErrormsgthismonth] = React.useState(false);
const [errormsgtimeyear , setErrormsgtimeyear] = React.useState(false);
const [errormsgtimemonth1 , setErrormsgtimemonth1] = React.useState(false);
const [errormsgtiyear1 , setErrormsgtiyear1] = React.useState(false);

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
    const validations = [
        { condition: name.length < 4, setError: setErrormsgname },
        { condition: gender === "", setError: setErrormsgen },
        { condition: dob === "", setError: setErrormsgdate },
        { condition: curloct === "", setError: setErrormsgloct },
        { condition: prefloct === "", setError: setErrormsgpreffloct },
        { condition: phone.length !== 10, setError: setErrormsgnum },
        { condition: area ==="" , setError: setErrormsgarea },
        { condition: peroid ==="" , setError: setErrormsgnotic },
        { condition: exp ==="" , setError: setErrormsgexp },
        { condition: salary ==="" , setError: setErrormsgAnual },
        { condition: expsalary ==="" , setError: setErrormsgexpsalary },
    ];

    for (const { condition, setError } of validations) {
        if (condition) {
            setError(true);
            return; // Exit the function if any condition fails
        } else {
            setError(false);
        }
    }

    // If all validations pass, proceed with the rest of the code
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);

    document.getElementById("Education").setAttribute(
        "style",
        "background : #fc7f03 ; transition: background-color 1s ease-in-out;"
    );
    document.getElementById("Personal").removeAttribute("style");
    document.getElementById("Profesional").removeAttribute("style");
    document.getElementById("Resume").removeAttribute("style");
};


  const togglestep4 = () => {

    const validation = [
      {condition1 : institute.length < 4 , setError1:setErrormsginstit },
      {condition1 : batch1 === "", setError1:setErrormsgbatch1 },
      {condition1 : batch2 === "", setError1:setErrormsgbatch2 },
      {condition1 : course === "", setError1:setErrormsgbcourse },
      {condition1 : degree === "", setError1:setErrormsgdegree },
    ];

    for (const { condition1, setError1 } of validation) {
      if (condition1) {
        setError1(true);
          return; // Exit the function if any condition fails
      } else {
        setError1(false);
      }
  }
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

    const validation = [
      {condition : designation.length < 4 , setError2:setErrormsgdestion },
      {condition : orgn.length < 4 , setError2:setErrormsgorg },
      {condition : salary2==="", setError2:setErrormsgslalary2 },
      {condition : timeMonth==="", setError2:setErrormsgthismonth },
      {condition : timeYear==="", setError2:setErrormsgtimeyear },
      {condition : timeMonth1==="", setError2:setErrormsgtimemonth1 },
      {condition : timeYear1==="", setError2:setErrormsgtiyear1 },
    ];

    for (const { condition, setError2 } of validation) {
      if (condition) {
        setError2(true);
          return; // Exit the function if any condition fails
      } else {
        setError2(false);
      }
  }
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

  function addDegreeHandler (e) {
    e.preventDefault();
    dispatch(addDegree());
  }

  function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      Name : name,
      Gender : gender,
      DOB : dob,
      currentLocation : curloct,
      PrefferedLocation : prefloct,
      Phone : phone,
      Industries :  industries,
      FunctionalArea : area,
      availableToJoin : peroid,
      workExperience : exp,
      lastSalary : salary,
      preferredSalary : expsalary,
      Institute :  institute, 
      Batch : batch1,
      Batch : batch2,
      specialization : course,
      highestLevelOfEud : degree,
      previousDesignation : designation,
      lastCompany : orgn,
      Salary : salary2,
      TimePeriod : timeMonth, 
      TimePeriod1 : timeMonth1 ,
      TimePeriod2 : timeYear, 
      TimePeriod3 : timeYear1,
      shortAboutYourself :  letter
    };
    console.log(obj);
    
    setName(" ");
    setGender(" ");
    setDob(" ");
    setCurloct(" ");
    setPrefloct(" ");
    setPhone(" ");
    setArea(" ");
    setPeroid(" ");
    setExp(" ");
    setSalary(" ");
    setExpsalary(" ");
    setIndustries(" ");
    setInstitute(" ");
    setBatch1(" ");
    setBatch2(" ");
    setCourse(" ");
    setDegree(" ");
    setDesignation(" ");
    setOrgn(" ");
    setSalary2(" ");
    setTimeMonth(" ");
    setTimeYear(" ");
    setTimeMonth1(" ");
    setTimeYear1(" ");
    setLetter(" ");
  }

  return (
    <div className="flex justify-center">
      <div className="mt-10 ml-2">
        <div className="sm:flex hidden justify-center">
          <motion.div
            id="Personal"
            whileHover={{ scale: 1.1 }}
            onClick={togglestep2}
            className="bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer"
            style={{ background: '#fc7f03' }}
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
                  <div className="bg-gray-100 py-2 sm:w-[81.25rem] w-full  ">
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
                      <Input type="text" label="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                      {errormsgname &&(<p className="text-red-500 text-xs">Name should be min 4 char. </p>)}
                    </div>
                  </div>

                  {/* Third Part */}
                  <div className="flex mt-5">
                  <p>Gender : - </p>
                    <div className="sm:w-72 sm:ml-[6.38rem] ml-[4.30rem]">
                      <select label="Select" onChange={(e) =>{if (e.target && e.target.value) {setGender(e.target.value);}}} value={gender} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                        <option value=" ">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errormsgen &&(<p className="text-red-500 text-xs">Select atleast one </p>)}
                    </div>
                    </div>

                    {/* Fourth part */}

                    <div className="flex mt-5">
                    <p>D.O.B.</p>
                    <div className="sm:w-72 sm:ml-[7.80rem] ml-[6rem]">
                      <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
                      {errormsgdate &&(<p className="text-red-500 text-xs">Select Date </p>)}
                    </div>
                    </div>

                     {/* Fifth part */}
                     <div className="flex mt-5">
                    <p>Current Location :- </p>
                    <div className="sm:w-72 ml-[0.9rem] sm:ml-[2.5rem] ">
                      <select label="Select" value={curloct} onChange={(e) => {if (e.target && e.target.value) {setCurloct(e.target.value);}}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                        <option value="">Select</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Amravati">Amravati</option>
                      </select>
                    </div>
                     
                    </div>{errormsgloct &&(<p className="text-red-500 text-xs ml-44">Select Proper Location </p>)}

                    {/* sixth part */}
                    <div className="flex mt-5">
                      <p>Preffered Location :- </p>
                      <div className="sm:w-72 sm:ml-7 ml-[0.2rem] ">
                        <Input type="text" label="Location" value={prefloct} onChange={(e) => setPrefloct(e.target.value)} />
                        {errormsgpreffloct &&(<p className="text-red-500 text-xs">Select Proper Location </p>)}
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
                          <Input type="number" label="Enter Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                          {errormsgnum &&(<p className="text-red-500 text-xs">Number must be 10 number </p>)}
                        </div>
                      </div>
                      <div>
                        <div className="flex mt-5">
                          <label className="mt-2">Industries :-</label>

                          <div className="sm:w-72 ml-16">
                            <Input type="text" label="Industries" value={industries} onChange={(e) => setIndustries(e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                 {/* second part */}

                 <div className="flex mt-5">
                      <p>Functional Area :- </p>
                      <div className="sm:ml-6 ml-[1.5rem] sm:w-72">
                        <select label="Functional Area" value={area} onChange={(e) => { if (e.target && e.target.value) {setArea(e.target.value); }}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none " >
                          <option value="">Select</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">c</option>
                        </select>
                      </div>
                    </div>
                    {errormsgarea &&(<p className="text-red-500 text-xs sm:ml-[9.5rem]">Select one </p>)}
                    {/* Third part */}

                    <div className="flex mt-5">
                    <div className="flex">
                      <p>Notice Period :- </p>
                      <div className="sm:ml-10 ml-[2.5rem] sm:w-72">
                        <select label="Notice Period" value={peroid} onChange={(e) => {  if (e.target && e.target.value) {setPeroid(e.target.value);}}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                          <option value="">Select</option>
                          <option value="1 month">1 month </option>
                          <option value="2 months">2 months</option>
                          <option value="3 months">3 months</option>
                        </select>
                      </div>
                    </div>
                    </div>
                    {errormsgnotic &&(<p className="text-red-500 text-xs sm:ml-[9.5rem]">Select one </p>)}
                     {/* Fourth part */}

                     <div className="flex mt-5">
                   <div className="flex">
                      <p>Experience :- </p>
                      <div className="sm:ml-[3.5rem] ml-[3.6rem] sm:w-72">
                        <select label="Experience" value={exp} onChange={(e) => {  if (e.target && e.target.value) {setExp(e.target.value);}}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                        <option value="">Select</option>
                          <option value="1 month">1 month </option>
                          <option value="2 months">2 months</option>
                          <option value="3 months">3 months</option>
                        </select>
                      </div>
                    </div>
                     </div>
                     {errormsgexp &&(<p className="text-red-500 text-xs sm:ml-[9.5rem]">Select one </p>)}
                     {/* Fifth part */}
                       <div className="flex mt-5">
                    <div className="flex">
                      <p>Anual Salary :- </p>
                      <div className="sm:ml-[3rem] ml-[3rem] sm:w-72">
                        <select label="Anual Salary" value={salary} onChange={(e) => { if (e.target && e.target.value) {setSalary(e.target.value);}}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                          <option value="">Select</option>
                          <option value="1 LPA">1 LPA</option>
                          <option value="2 LPA">2 LPA</option>
                          <option value="3 LPA">3 LPA</option>
                        </select>
                      </div>
                    </div>
                       </div>
                       {errormsgAnual &&(<p className="text-red-500 text-xs sm:ml-[9.5rem]">Select one </p>)}
                       {/* sixth part */}
                       <div className="flex mt-5">
                      <p>Expected Salary :- </p>
                      <div className="sm:ml-[1.4rem] ml-[1.5rem] sm:w-72">
                        <select label="Expexted Salary" value={expsalary} onChange={(e) => {if (e.target && e.target.value) {setExpsalary(e.target.value);}}} className="appearance-none w-full h bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                        <option value="">Select</option>
                          <option value="1 LPA">1 LPA</option>
                          <option value="2 LPA">2 LPA</option>
                          <option value="3 LPA">3 LPA</option>
                        </select>
                      </div>
                    </div>
                    {errormsgexpsalary &&(<p className="text-red-500 text-xs sm:ml-[9.5rem]">Select one </p>)}
                  </div>
                 {/* right part end */}

                 <div className="mt-10 flex w-full justify-center " >
                  <motion.div whileHover={{scale : 1.1}}>
                    <Button className="bg-orange-900 " onClick={togglestep3}>
                      Next{" "}
                    </Button>
                    </motion.div>
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
                      <Input className="" type="text" label="Institute" value={institute} onChange={(e) => setInstitute(e.target.value)} />
                      {errormsginstit &&(<p className="text-red-500 text-xs">Name should be min 4 char. </p>)}
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
                    <select label="YYYY" value={batch1} onChange={(e) => { if (e.target && e.target.value) {setBatch1(e.target.value); }}} className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                      <option value="">Select</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  {errormsgbatch1 &&(<p className="text-red-500 text-xs mt-3">Select one </p>)}

                  <p className="ml-5 mt-2">To</p>
                  <div className="sm:ml-14 ml-[7.9rem] sm:w-72">
                    <select label="YYYY" value={batch2} onChange={(e) => { if (e.target && e.target.value) {setBatch2(e.target.value); }}} className="appearance-none sm:w-full w-44  bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none  ">
                    <option value="">Select</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  {errormsgbatch2 &&(<p className="text-red-500 text-xs mt-3">Select one </p>)}
                </div>
                

                <div className="flex mt-5">
                  <p>Course type : - </p>
                  <div className="sm:ml-[10.2rem] ml-[1.45rem] sm:w-72">
                    <select label="Select" value={course} onChange={(e) => {if (e.target && e.target.value) {setCourse(e.target.value);}}} className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                    <option value="">Select</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">c</option>
                    </select>
                  </div>
                </div>
                {errormsgbcourse &&(<p className="text-red-500 text-xs sm:ml-[16.8rem] mt-1">Select one </p>)}

                <div className="flex mt-5">
                  <p>Degree : - </p>
                  <div className="sm:ml-[12.3rem] ml-[3.5rem] sm:w-72">
                    <select label="Select" value={degree} onChange={(e) => { if (e.target && e.target.value) { setDegree(e.target.value);}}} className="appearance-none sm:w-full w-44 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-md text-sm   leading-tight focus:outline-none ">
                    <option value="">Select</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">c</option>
                    </select>
                  </div>
                </div>
                {errormsgdegree &&(<p className="text-red-500 text-xs sm:ml-[16.8rem] mt-1">Select one </p>)}

                <div className="mt-5 sm:ml-[16.875rem] ml-[8rem]">
                  <Button onClick={addDegreeHandler}>+ Add Degree</Button>
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
                {/* <AddDegree/> */}
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
                      <Input className="" type="text" label="Enter Value" value={designation} onChange={(e) =>setDesignation(e.target.value)} />
                      {errormsgdestion &&(<p className="text-red-500 text-xs">Name should be min 4 char. </p>)}
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
                    <Input type="text" label="Organization" value={orgn} onChange={(e) => setOrgn(e.target.value)}/>
                    {errormsgorg &&(<p className="text-red-500 text-xs">Name should be min 4 char. </p>)}
                  </div>
                  <p className="ml-3 text-orange-800 text-sm mt-2">Edit</p>
                </div>

                <div className="flex mt-5">
                  <p>Salary : - </p>
                  <div className="sm:ml-[13rem] ml-[5.4rem] sm:w-72">
                    <select label="Select" value={salary2} onChange={(e) => { if (e.target && e.target.value) {setSalary2(e.target.value);}}} className="sm:w-72 h-10 border border-gray-400 rounded-md w-44">
                    <option value="">Select</option>
                    <option value="1 LPA">1 LPA</option>
                    <option value="2 LPA">2 LPA</option>
                    <option value="3 LPA">3 LPA</option>
                    </select>
                  </div>
                  {errormsgslalary2 &&(<p className="text-red-500 text-xs ml-2 mt-3">Select one </p>)}
                </div>

                <div className="flex   mt-5">
                  <p>Time Period : - </p>
                  <div className="sm:ml-[10.5rem] ml-[6.5rem] flex flex-wrap sm:w-72">
                    <div className="flex flex-wrap">
                      <div>
                    <select label="MM" className="sm:w-72 h-10 border border-gray-400 rounded-md w-44" value={timeMonth} onChange={(e) => { if (e.target && e.target.value) {setTimeMonth(e.target.value); }}}>
                    <option value="">Select</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sept">Sept</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                    </div>
                    {errormsgthismonth &&(<p className="text-red-500 text-xs ml-2 mt-3">Select one </p>)}
                     <div className="mt-5">
                    <select label="YYYY" className="sm:w-72 h-10 border border-gray-400 rounded-md w-44" value={timeYear} onChange={(e) => { if (e.target && e.target.value) {setTimeYear(e.target.value);}}}>
                    <option value="">Select</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                    </div>
                    {errormsgtimeyear &&(<p className="text-red-500 text-xs ml-2 mt-3">Select one </p>)}
                    </div>

                    <p className="ml-5 mt-2 mr-2">To</p>

                  <div className="flex flex-wrap">
                    <div>
                    <select label="MM" className="sm:w-72 h-10 border border-gray-400 rounded-md w-44" value={timeMonth1} onChange={(e) => {if (e.target && e.target.value) {setTimeMonth1(e.target.value);}}}>
                    <option value="">Select</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sept">Sept</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                    </div>
                    {errormsgtimemonth1 &&(<p className="text-red-500 text-xs ml-2 mt-3">Select one </p>)}
                    <div className="mt-5">
                    <select label="YYYY" className="sm:w-72 h-10 border border-gray-400 rounded-md w-44" value={timeYear1} onChange={(e) => {  if (e.target && e.target.value) {setTimeYear1(e.target.value);}}}>
                    <option value="">Select</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                    </div>
                    {errormsgtiyear1 &&(<p className="text-red-500 text-xs ml-2 mt-3">Select one </p>)}
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
                     value={letter}
                      onChange={(e) => setLetter(e.target.value)}
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
                    <Button className="bg-orange-800" type="submit">Submit </Button>
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
