import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useTabContext } from "@mui/lab";
import { useAddJobsMutation } from "../../services/job/jobApiSlice";

const AddJobsDialog = () => {
  const [open, setOpen] = React.useState(false);

  const [addJobs] = useAddJobsMutation()

  const [companyName, setCompanyName] = useState("");
  const [postName, setPostName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setDescription] = useState("");
  const [postDate, setPostDate] = useState("");
  const [salary, setSalary] = useState("");
  const [noOfPost, setNoOfPost] = useState("");
  const [logo, setLogo] = useState("");
  const [experianceLevel, setExperiancLevel] = useState("");
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState("");
  const [incentives, setIncentives] = useState("");
  const [essentialRequirements, setRequirements] = useState("");
  const [seatNo, setSeatNo] = useState("");

  const submitHandler = async(e) => {
    e.target.value;

    const res = await addJobs({
        "companyName": companyName,
        "postName": postName,
        "jobLocation": jobLocation,
        "address": address,
        "skills": skills,
        "jobDescription": jobDescription,
        "postDate": "2023-11-10",
        "salary": salary,
        "noOfPost": 3,
        "logo":logo,
        "experienceLevel": experianceLevel,
        "jobType": jobType,
        "status": status,
        "incentives": incentives,
        "essentialRequirements": essentialRequirements,
        "seatNo": "A123",
        "User_Id": 1000
    })
  console.log(res)

  };

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Add Jobs</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto">
          <CardBody className="flex flex-col gap-4">
            <form>
              <h1 className="text-center">Add Jobs</h1>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Company Name"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="postName"
                  value={postName}
                  onChange={(e) => {
                    setPostName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="joblocation"
                  value={jobLocation}
                  onChange={(e) => {
                    setJobLocation(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="skills"
                  value={skills}
                  onChange={(e) => {
                    setSkills(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="job Description"
                  value={jobDescription}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="postDate"
                  value={postDate}
                  onChange={(e) => {
                    setPostDate(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="salary"
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                
                <Input
                  type="number"
                  label="No Of Post"
                  value={noOfPost}
                  onChange={(e) => {
                    setNoOfPost(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="logo"
                  value={logo}
                  onChange={(e) => {
                    setLogo(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="experiancelevel"
                  value={experianceLevel}
                  onChange={(e) => {
                    setExperiancLevel(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Job Type"
                  value={jobType}
                  onChange={(e) => {
                    setJobType(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="incentives"
                  value={incentives}
                  onChange={(e) => {
                    setIncentives(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  label="Essential Requirments"
                  value={essentialRequirements}
                  onChange={(e) => {
                    setRequirements(e.target.value);
                  }}
                />
              </div>

              <Button onClick={submitHandler}>Submit</Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
};

export default AddJobsDialog;
