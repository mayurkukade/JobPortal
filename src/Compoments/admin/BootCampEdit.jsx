
import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  Card,
  CardBody,
} from "@material-tailwind/react";

import { useBootCampUpdateMutation } from "../../services/bootcamp/bootCampSlice";
import { useBootCampGetByIdQuery } from "../../services/bootcamp/bootCampSlice";
import { useParams } from "react-router-dom";

const BootCampEdit = () => {
    const {id} = useParams()
    const {data,isLoading} = useBootCampGetByIdQuery(id)
const [bootCampUpdate] = useBootCampUpdateMutation()
  

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
  if(isLoading){
    return <p>Loading...</p>
}

  const handleChange = (field) => (event) => {
    setBootcamp({
      ...bootcamp,
      [field]: event.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.target.value;
    const BootCampUpdatedData =       {
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
console.log(bootcamp)
    const res = await bootCampUpdate({
        BootCampUpdatedData,id
    }
    
    
      
);
    console.log(res);
  };

 

  return (
    <>
   
     
        <Card className="mx-auto ">
          <CardBody className="flex flex-col gap-4">
            <form>
              <h1 className="text-center">Edit Bootcamp</h1>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Title"
              
                  onChange={handleChange("bootcampTital")}
                  defaultValue={data.bootcamp.bootcampTital}
                />
                <Input
                  type="text"
                  label="Bootcamp Details"
                  name="bootcampDetails"
                  defaultValue={data.bootcamp.bootcampDetails}
                  onChange={handleChange("bootcampDetails")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="date"
                  label="Bootcamp Date"
                  defaultValue={data.bootcamp.bootcampDate}
                  onChange={handleChange("date")}
                />
                <Input
                  type="text"
                  label="Bootcamp Camp Date"
                  defaultValue={data.bootcamp.bootcampDate}
                  onChange={handleChange("bootcampDate")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Time"
                  defaultValue={data.bootcamp.time}
                  onChange={handleChange("time")}
                />
                <Input
                  type="text"
                  label="Status"
                  defaultValue={data.bootcamp.status}
                  onChange={handleChange("status")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Bootcamp Location"
                  defaultValue={data.bootcamp.location}
                  onChange={handleChange("location")}
                />
                <Input
                  type="text"
                  label="Tag Line"
                  defaultValue={data.bootcamp.tagLine}
                  onChange={handleChange("tagLine")}
                />
              </div>
              <div className="mb-4 flex gap-5">
                <Input
                  type="text"
                  label="Photo"
                  defaultValue={''}
                  onChange={handleChange("photo")}
                />
                <Input
                  type="text"
                  label="Price"
                  defaultValue={data.bootcamp.price}
                  onChange={handleChange("price")}
                />
              </div>

              <Button onClick={submitHandler}>Submit</Button>
            </form>
          </CardBody>
        </Card>
  
    </>
  );
};

export default BootCampEdit;
