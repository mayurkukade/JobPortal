import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useAddJobsMutation } from "../../../services/job/jobApiSlice";

export default function PostJob() {
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
  
  const [addJobs] = useAddJobsMutation();

  const handleSubmit = async (e) => {
    
    const obj = {
      companyName: company,
      postName: job,
      jobLocation: location,
      address: address,
      skills: skillsArray,
      jobDescription: dispriction,
      postDate: "2023-11-10",
      salary: salary,
      noOfPost: 3,
      logo: "https://example.com/logo.png",
      experienceLevel: experince,
      jobType: type,
      status: "active",
      incentives: incentives,
      essentialRequirements: requriments,
      seatNo: "A123",
      User_Id: 1173,
    };
    const res = await addJobs(obj);

    console.log(res);

    
  };
  

  console.log(skillsArray)
  return (
    <div className="flex ">
      <div>
        <form
        
          className="bg-white rounded-md px-5 py-5 flex justify-center"
        >
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
              <div>
                <Input
                  type="text"
                  label="Skills"
                  value={inputArrayName}
                  onChange={(e) => setInputArrayName(e.target.value)}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setSkillsArray([
                      ...skillsArray,
                      inputArrayName ,
                   
                    ]);
                    setInputArrayName('')
                  }}
                >
                  Add
                </button>
                <ul>
        {
          skillsArray.map((item,index)=>(
            <>
              <li key={index}>{item}</li>
            </>
          ))
        }
      </ul>
              </div>
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
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
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
                  type="text"
                  label="Experince"
                  value={experince}
                  onChange={(e) => setExperince(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex">
              <div>
                <Input
                  type="text"
                  label="Job Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
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
              <Button className="w-full" type="submit" color="green" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
