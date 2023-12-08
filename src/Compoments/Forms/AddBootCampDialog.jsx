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
import { useBootCampPostMutation } from "../../services/bootcamp/bootCampSlice";

const AddBootCampDialog = () => {
  const [open, setOpen] = React.useState(false);

  const [bootCampPost] = useBootCampPostMutation();

  const [bootcamp, setBootcamp] = useState({
    bootcampTital: "",
    bootcampDetails: "",

    bootcampDate: "",
    time: "",
    status: "",
    location: "",
    tagLine: "",
    photo: "",
    price: "",
  });
  const handleChange = (field) => (event) => {
    setBootcamp({
      ...bootcamp,
      [field]: event.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.target.value;
console.log(bootcamp)
    const res = await bootCampPost(
      {
        bootcampTital: bootcamp.bootcampTital,
        "bootcampDetails":bootcamp.bootcampDetails,
        "date":"2023-12-10",
        "bootcampDate":"2023-12-10",
        "time":bootcamp.time,
        "status":bootcamp.status,
        "location":bootcamp.location,
        "tagLine":bootcamp.tagLine,
        "photo":bootcamp.photo,
        "price":bootcamp.price
    }
    
      
);
    console.log(res);
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
        <Card className="mx-auto">
          <CardBody className="flex flex-col gap-4">
            <form>
              <h1 className="text-center">Add Jobs</h1>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Title"
                  value={bootcamp.bootcampTital}
                  onChange={handleChange("bootcampTital")}
                />
                <Input
                  type="text"
                  label="Bootcamp Details"
                  name="bootcampDetails"
                  value={bootcamp.bootcampDetails}
                  onChange={handleChange("bootcampDetails")}
                />
              </div>
              <div className="mb-4 flex gap-5">
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
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Time"
                  value={bootcamp.time}
                  onChange={handleChange("time")}
                />
                <Input
                  type="text"
                  label="Status"
                  value={bootcamp.status}
                  onChange={handleChange("status")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Location"
                  value={bootcamp.location}
                  onChange={handleChange("location")}
                />
                <Input
                  type="text"
                  label="Tag Line"
                  value={bootcamp.tagLine}
                  onChange={handleChange("tagLine")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Photo"
                  value={bootcamp.photo}
                  onChange={handleChange("photo")}
                />
                <Input
                  type="text"
                  label="Price"
                  value={bootcamp.price}
                  onChange={handleChange("price")}
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

export default AddBootCampDialog;
