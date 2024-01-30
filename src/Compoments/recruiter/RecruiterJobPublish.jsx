import React,{useState,useEffect} from "react";
import {
  Button,
  Dialog,
  Card,
  
  CardBody,
  CardFooter,
  Typography,
  Input,
  
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useAddJobsMutation } from "../../services/job/jobApiSlice";
import {  Textarea } from "@material-tailwind/react";
import AllBootCampTable from "../table/AllBootCampTable";

const RecruiterJobPublish = () => {
    const [open, setOpen] = React.useState(false);
    const [company, setCompany] = React.useState("");
    const [job, setJob] = React.useState("");
  
    const [date, setDate] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [dispriction, setDispriction] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [experince, setExperince] = React.useState("");
    const [type, setType] = React.useState("");
    const [incentives, setIncentives] = React.useState("");
    const [requriments, setRequriments] = React.useState("");
  
    const [inputArrayName, setInputArrayName] = React.useState("");
  
    const [skillsArray, setSkillsArray] = React.useState([]);
  
    const [formattedDate, setFormattedDate] = useState("");
  
    const [addJobs] = useAddJobsMutation();
    console.log(formattedDate);
    console.log(date);
  
    const cookiesJwt = Cookies.get("cookie");
    console.log(cookiesJwt);
    const handleOpen = () => setOpen((cur) => !cur);

    const decodejwt = jwtDecode(cookiesJwt);
    console.log(decodejwt);
    const userId = decodejwt?.userId;
    console.log(userId);
    const handleSubmit = async (e) => {
      const obj = {
        companyName: company,
        postName: job,
        jobLocation: location,
        address: address,
        skills: skillsArray,
        jobDescription: dispriction,
        postDate: date,
        salary: salary,
        noOfPost: 3,
        logo: "https://example.com/logo.png",
        experienceLevel: experince,
        jobType: type,
        status: "active",
        incentives: incentives,
        essentialRequirements: requriments,
        seatNo: "A123",
        User_Id: userId,
      };
      const res = await addJobs(obj);
  
      console.log(res);
    };
    console.log(skillsArray)
  
    useEffect(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(currentDate.getDate()).padStart(2, "0");
  
      const formattedDateStr = `${year}-${month}-${day}`;
      setFormattedDate(formattedDateStr);
    }, []);
 
  return (
    <>
    
    <Button onClick={handleOpen} className="bg-primary font-Montserrat">Post Job</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        
    
          <form className="bg-white rounded-md px-5 py-5 flex justify-center">
          <div>
            <div>
              <p className="text-lg ml-3 font-bold">Post Job</p>
            </div>

            <div className="mt-2 flex">
              <div>
                <Input
                  type="text"
                  label="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="ml-1">
                <Input
                  type="text"
                  label="Job Title"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex">
              <div className="flex">
                <Input
                  type="text"
                  label="Skills"
                  value={inputArrayName}
                  onChange={(e) => setInputArrayName(e.target.value)}
                />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setSkillsArray([...skillsArray, inputArrayName]);
                    setInputArrayName("");
                  }}
                  className="ml-3"
                >
                  Add
                </Button>

              
              </div>
             
            </div>
            {skillsArray.map((item, index) => (
              <>
              <div
                    className="mt-1 ml-1  bg-gray-300 rounded-[0.7rem] inline-flex  w-fit p-0.5 text-sm "
                    key={index}
                  >
                    <p className="p-1 ml-2 mr-2 ">{item}</p>
                  </div>
                  </>
                ))}
            <div className="mt-3 flex">
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
               <div className="ml-1">
                <Input
                  type="date"
                  label="Post Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex">
              <div>
                <Input
                  type="number"
                  label="Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="ml-1">
                <Input
                  type="number"
                  label="Experince"
                  value={experince}
                  onChange={(e) => setExperince(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex justify-between">
            
                {/* <Input
                  type="text"
                  label="Job Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                /> */}

                <select className="w-full border rounded-lg border-gray-500"  onChange={(e) => setType(e.target.value)}>
  <option></option>
  <option value={"Full Time"}>Full Time</option>
  <option value={"Part Time"}>Part Time</option>
  <option value={"Contract"}>Contract</option>
</select>

              
              <div className="ml-1">
                <Input
                  type="text"
                  label="Incentives"
                  value={incentives}
                  onChange={(e) => setIncentives(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex">
              <div>
                <Input
                  type="text"
                  label="Requriments"
                  value={requriments}
                  onChange={(e) => setRequriments(e.target.value)}
                />
              </div>
              <div className="ml-1">
                <Input
                  type="text"
                  label="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <Textarea
                type="text"
                label="Job Dispriction"
                value={dispriction}
                onChange={(e) => setDispriction(e.target.value)}
              />
            </div>
            <div className="ml-5">
              <input type="file" placeholder="Select Logo" className="py-2" />
            </div>
            <div className="mt-2 ">
              <Button
                className="w-fit"
                type="submit"
                color="green"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
         
      </Dialog>

      

  
    </>
  )
}

export default RecruiterJobPublish
