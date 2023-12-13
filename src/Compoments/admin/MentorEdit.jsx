import { useParams } from "react-router-dom";
import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";
import {
  useGetIdMentorQuery,
  useUpdateMentorMutation,
} from "../../services/mentor/mentorSlice";
const MentorEdit = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetIdMentorQuery(id);
  const [mentor, setMentorForm] = useState({
    specialityOfMentor: data?.response?.specialityOfMentor,
    skills: data?.response?.skills,
    aboutAs: data?.response?.aboutAs,
    subject: data?.response?.subject,
    mentorInfo: data?.response?.mentorInfo,
    achievements: data?.response?.achievements,
    socalMediaLinkF: data?.response?.socalMediaLinkF,

    socalMediaLinkL: data?.response.socalMediaLinkL,
    socalMediaLinkF1: data?.response?.socalMediaLinkF1,
    socalMediaLinkInsta: data?.response?.socalMediaLinkInsta,
    cost: data?.response?.cost,

    mentorId: id,
  });

  console.log(mentor);
  const [updateMentor] = useUpdateMentorMutation();

  let getApiData;
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    getApiData = data?.response;
  }
  console.log(data.response);
  const handleChange = (field) => (event) => {
    setMentorForm({
      ...mentor,
      [field]: event.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.target.value;
    const res = await updateMentor({ mentor });
    console.log(res);
  };

  return (
    <>
      <Card className="mx-auto container ">
        <CardBody className="flex flex-col gap-4">
          <form>
            <h1 className="text-center">Add Mentor</h1>
            <div className="mb-4 flex gap-5">
              <Input
                type="text"
                label="specialityOfMentor"
                defaultValue={
                  mentor.specialityOfMentor ||
                  data?.response?.specialityOfMentor
                }
                onChange={handleChange("specialityOfMentor")}
              />
              <Input
                type="text"
                label="Skills"
                name="skills"
                defaultValue={mentor.skills || data?.response?.skills}
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
                defaultValue={getApiData.subject}
                onChange={handleChange("subject")}
              />
              <Input
                type="text"
                label="mentorInfo"
                defaultValue={getApiData.mentorInfo}
                onChange={handleChange("mentorInfo")}
              />
            </div>
            <div className="mb-4 flex gap-5">
              <Input
                type="text"
                label="achievements"
                defaultValue={getApiData.achievements}
                onChange={handleChange("achievements")}
              />
              <Input
                type="text"
                label="socalMediaLinkF"
                defaultValue={getApiData.socalMediaLinkF}
                onChange={handleChange("socalMediaLinkF")}
              />
            </div>
            <div className="mb-4 flex gap-5">
              <Input
                type="text"
                label="socalMediaLinkF1"
                defaultValue={getApiData.socalMediaLinkF1}
                onChange={handleChange("socalMediaLinkF1")}
              />
              <Input
                type="text"
                label="socalMediaLinkInsta"
                defaultValue={getApiData.socalMediaLinkInsta}
                onChange={handleChange("socalMediaLinkInsta")}
              />
            </div>
            <div className="mb-4 flex gap-5">
              <Input
                type="text"
                label="About As"
                defaultValue={getApiData.aboutAs}
                onChange={handleChange("aboutAs")}
              />
              <Input
                type="text"
                label="cost"
                defaultValue={getApiData.cost}
                onChange={handleChange("cost")}
              />
            </div>

            <Button onClick={submitHandler}>Submit</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default MentorEdit;
