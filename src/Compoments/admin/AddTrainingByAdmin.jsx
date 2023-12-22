import { Button, Input } from "@material-tailwind/react";

import { useState } from "react";
import { useStudentRegisterPostMutation } from "../../services/Registration/registrationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useAddItTrainingMutation } from "../../services/itTraining/itTrainingSlice";

const AddTrainingByAdmin = () => {
  const [domain, setDomain] = useState("");
  const [mode, setMode] = useState("");
  const [mentor, setMentor] = useState();
  const [cost, setCost] = useState("");
  const [topic, setTopic] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();

  const [addItTraining] = useAddItTrainingMutation()
  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };
  const onChangeMode = (e) => {
    setMode(e.target.value);
  };
  const onChangeMentor = (e) => {
    setMentor(e.target.value);
  };
  const onChangeCost = (e) => {
    setCost(e.target.value);
  };

  const onchangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const onchangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await addItTraining({
        domain,
        mode,
        mentor,
        cost,
        topic,
        startDate,
        endDate,
        duration
      });
      console.log(res);
      if (
        res &&
        res.error &&
        res.error.data &&
        res.error.data.code === "Unsuccessful"
      ) {
        toast.error("Unsuccessful registration");
      } else {
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
console.log(domain,mode,mentor,cost,topic,startDate,endDate,duration)
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center  h-full">
        <form
          className="bg-white p-5 space-y-3 w-[25rem] "
          onSubmit={onSubmitHandler}
        >
          <h1 className="text-center text-lg">Add Training</h1>

          <Input
            type="text"
            label="Domain"
            name="domain"
            value={domain}
            onChange={onChangeDomain}
            required
          />

          <Input
            type="text"
            label="mode"
            name="mode"
            value={mode}
            onChange={onChangeMode}
            required
          />

          <Input
            type="text"
            label="mentor"
            name="mentor"
            value={mentor}
            onChange={onChangeMentor}
            required
          />

          <Input
            type="number"
            label="cost"
            name="cost"
            value={cost}
            onChange={onChangeCost}
            required
          />

          <Input
            type="text"
            label="topic"
            name="topic"
            value={topic}
            onChange={onchangeTopic}
            required
          />

          <Input type="date" label="Start a Date" onChange={onChangeStartDate} value={startDate} />
          <Input type="date" label="End a Date" onChange={onchangeEndDate} value={endDate} />

          <Input
            type="text"
            label="duration"
            name="duration"
            value={duration}
            onChange={onChangeDuration}
            required
          />
          <Button type="onSubmit" className="block m-auto">
            Add Training
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddTrainingByAdmin;
