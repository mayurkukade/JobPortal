import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useAddItTrainingMutation } from "../../services/itTraining/itTrainingSlice";

export function ItTrainingDialog() {
  const [open, setOpen] = React.useState(false);

  const [domain, setDomain] = useState("");
  const [mode, setMode] = useState("");
  const [mentor, setMentor] = useState();
  const [cost, setCost] = useState("");
  const [topic, setTopic] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();

  const [addItTraining] = useAddItTrainingMutation();
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

  const handleOpen = () => setOpen((cur) => !cur);
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
        duration,
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
          handleOpen()
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <>
      <Button onClick={handleOpen}>Add Training</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] ">
          <CardBody className="flex flex-col gap-4 ">
            <form onSubmit={onSubmitHandler}>
              <h1 className="text-center text-lg">Add Training</h1>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Domain"
                  name="domain"
                  value={domain}
                  onChange={onChangeDomain}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="mode"
                  name="mode"
                  value={mode}
                  onChange={onChangeMode}
                  required
                />
              </div>

              <div className="mb-4">
                <Input
                  type="text"
                  label="mentor"
                  name="mentor"
                  value={mentor}
                  onChange={onChangeMentor}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="number"
                  label="cost"
                  name="cost"
                  value={cost}
                  onChange={onChangeCost}
                  required
                />
              </div>

              <div className="mb-4">
                <Input
                  type="text"
                  label="topic"
                  name="topic"
                  value={topic}
                  onChange={onchangeTopic}
                  required
                />
              </div>

              <div className="mb-4">
                <Input
                  type="date"
                  label="Start a Date"
                  onChange={onChangeStartDate}
                  value={startDate}
                />
              </div>

              <div className="mb-4">
                <Input
                  type="date"
                  label="End a Date"
                  onChange={onchangeEndDate}
                  value={endDate}
                />
              </div>

              <div className="mb-4">
                <Input
                  type="text"
                  label="duration"
                  name="duration"
                  value={duration}
                  onChange={onChangeDuration}
                  required
                />
              </div>

              <Button type="onSubmit" className="block m-auto">
                Add Training
              </Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
