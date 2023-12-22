import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";

import { useAddmentorMutation } from "../../services/mentor/mentorSlice";


const MentorDialog = () => {
  const [open, setOpen] = React.useState(false);

  const [addmentor] = useAddmentorMutation()




  const [mentor, setMentorForm] = useState({
    specialityOfMentor: "",
    skills: "",

    subject: "",
    mentorInfo: "",
    achievements: "",
    socalMediaLinkF: "",
    aboutAs: "",
    socalMediaLinkL: "",
    socalMediaLinkF1: "",
    socalMediaLinkInsta:"",
    cost:"",
    userUser:1000
  });
  const handleChange = (field) => (event) => {
    setMentorForm({
      ...mentor,
      [field]: event.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.target.value;
    const res = await addmentor({
        
            specialityOfMentor: mentor.specialityOfMentor,
            skills: mentor.skills,
            subject: mentor.subject,
            mentorInfo: mentor.mentorInfo,
            achievements: mentor.achievements,
            socalMediaLinkF: mentor.socalMediaLinkF,
            aboutAs: mentor.aboutAs,
            socalMediaLinkL: mentor.socalMediaLinkL,
            socalMediaLinkF1: mentor.socalMediaLinkF1,
            socalMediaLinkInsta: mentor.socalMediaLinkInsta,
            cost: mentor.cost,
            "userUser": 1000
        
        
    })

    console.log(res)
  
  };

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Add Bootcamp</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto ">
          <CardBody className="flex flex-col gap-4">
            <form>
              <h1 className="text-center">Add Mentor</h1>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="specialityOfMentor"
                  value={mentor.specialityOfMentor}
                  onChange={handleChange("specialityOfMentor")}
                />
                <Input
                  type="text"
                  label="Skills"
                  name="skills"
                  value={mentor.skills}
                  onChange={handleChange("skills")}
                />
              </div>
              {/* <div className="mb-4 flex gap-5">
                <Input
                  type="date"
                  label="Bootcamp Date"
                  value={bootcamp.date}
                  onChange={handleChange("date")}
                />
                <Input
                  type="text"
                  label="Bootcamp Camp Date"
                  value={bootcamp.bootcampDate}
                  onChange={handleChange("bootcampDate")}
                />
              </div> */}
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="subject"
                  value={mentor.subject}
                  onChange={handleChange("subject")}
                />
                <Input
                  type="text"
                  label="mentorInfo"
                  value={mentor.mentorInfo}
                  onChange={handleChange("mentorInfo")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="achievements"
                  value={mentor.achievements}
                  onChange={handleChange("achievements")}
                />
                <Input
                  type="text"
                  label="socalMediaLinkF"
                  value={mentor.socalMediaLinkF}
                  onChange={handleChange("socalMediaLinkF")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="socalMediaLinkF1"
                  value={mentor.socalMediaLinkF1}
                  onChange={handleChange("socalMediaLinkF1")}
                />
                <Input
                  type="text"
                  label="socalMediaLinkInsta"
                  value={mentor.socalMediaLinkInsta}
                  onChange={handleChange("socalMediaLinkInsta")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="cost"
                  value={mentor.cost}
                  onChange={handleChange("cost")}
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

export default MentorDialog;
