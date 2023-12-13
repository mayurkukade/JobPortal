import Lens from "../Images/Lenskart.png";

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Select,
  Option,
} from "@material-tailwind/react";
import { useGetAllJobQuery } from "../../services/job/jobApiSlice";
import { calcLength } from "framer-motion";
import { useState } from "react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function JobSecond({
  mainFilterData,
  mainfilterLoading,
  mainFilterIsError,
  filterFlag,
}) {
  console.log(filterFlag);
  const { data, isLoading, error, isSuccess } = useGetAllJobQuery();
  console.log(isSuccess);
  console.log(data);

  const mainFilter = filterFlag ? mainFilterData : data;
  const jobData = mainFilter?.list?.map((item, index) => {
    console.log(item);
    return (
      <div key={item.jobId} className="mt-2">
        <Card
          color="white"
          shadow-lg
          className="w-full max-w-[48rem] mb-5 hover:shadow-xl  "
        >
          <Link to={`/jobdetails/${item.jobId}`} target="_blank">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="square"
                src={Lens}
                alt="tania andrew"
                className="object-cover p-3 w-fit"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {item.postName}
                  </Typography>
                  <div className="  flex items-center gap-6 ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer  "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer mr-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div color="blue-gray" className="flex justify-between">
                  <div className="flex justify-start gap-3">
                    <Typography>{item.companyName}</Typography>
                    <Typography>{item.experienceLevel}</Typography>
                    <Typography>{item.jobLocation}</Typography>
                    <Typography>{item.postDate}</Typography>
                  </div>
                  <div className="flex justify-end gap-2 mr-2">
                    <Typography>Premium</Typography>
                    <Typography>Info</Typography>
                    <Typography>Save</Typography>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Link>
        </Card>
      </div>
    );
  });

  let fetchedJob;
  if (isSuccess) {
    fetchedJob = jobData;
  } else if (isLoading) {
    <p>loading</p>;
  }
  return (
    <>
      {/* <div className="w-full  bg-blue-gray-50 h-[4rem] flex ">
        <div className="flex  gap-5 w-fit  items-center ml-9">
          <p className="">Filter:</p>
          <Select label="Any Exp.Level">
            <Option>0-1 years</Option>
            <Option>1-3 years</Option>
            <Option>4-6 years</Option>
            <Option>7-10years</Option>
            <Option>11-15years</Option>
            <Option>15+ years</Option>
          </Select>

          <Select label="Any Location">
            <Option>Pune</Option>
            <Option>Mumbai</Option>
            <Option>Delhi</Option>
            <Option>Bengluru</Option>
            <Option>Nashik</Option>
            <Option>Hydrabad</Option>
          </Select>
        </div>
      </div> */}
      <div className="mx-auto container ">
        <div className=" ">{fetchedJob}</div>
      </div>
    </>
  );
}
