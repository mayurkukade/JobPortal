import Lens from "../Images/Lenskart.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

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
import { Button } from "@material-tailwind/react";
import {
  useGetSavedJobBYUserIdQuery,
  usePostSaveJobMutation,
  useDeleteSaveJobMutation,
} from "../../services/savedJob/savedJobsApiSlice";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {
  useGetApplicationByUserIdQuery,
  useStudentApplyPostMutation,
} from "../../services/studentApplication/studentApplicationApiSlice";
import { Toaster } from "react-hot-toast";

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
  data,
  isSuccess,
  isLoading,
}) {
  const [postSaveJob] = usePostSaveJobMutation();
  const [deleteSaveJob] = useDeleteSaveJobMutation();
  const [studentApplyPost] = useStudentApplyPostMutation();
  const getCookie = Cookies.get("cookie");

  const decodeCookie = jwtDecode(getCookie);
  console.log(decodeCookie.userId);
  const {
    data: StudentAppliedList,
    isLoading: studentAppliedListLoading,
    isError: studentAppliedError,
    isSuccess: studentAppliedSuccess,
  } = useGetApplicationByUserIdQuery(decodeCookie?.userId, {
    refetchOnMountOrArgChange: true,
  });
  console.log(StudentAppliedList);
  const { data: getSavedJob } = useGetSavedJobBYUserIdQuery(
    decodeCookie?.userId
  );
  console.log(data);

  console.log(data);
  const uniqueJobIdsSet = new Set();
  const uniqueStudentAppliedJob = new Set();

  console.log(data);
  getSavedJob?.list?.forEach((item) => {
    uniqueJobIdsSet.add(item.jobId); // Convert to string if needed
  });

  StudentAppliedList?.response?.forEach((item) => {
    uniqueStudentAppliedJob.add(item.jobId);
  });
  console.log(uniqueStudentAppliedJob);

  console.log(data);
  const uniqueJobIdsArray = Array.from(uniqueJobIdsSet).map(Number);
  console.log(data);

  const uniqueArrayStudentAppliedList = Array.from(uniqueStudentAppliedJob).map(
    Number
  );
  console.log(uniqueArrayStudentAppliedList);

  const mainFilter = filterFlag ? mainFilterData : data;

  const saveButtonClick = async (jobId) => {
    if (uniqueJobIdsArray.includes(jobId)) {
      await deleteSaveJob(jobId);
    } else {
      const res = await postSaveJob({
        userId: decodeCookie.userId,
        jobId,
      });
      console.log(res);
    }
  };

  const applyButtonHandler = async (jobId) => {
    console.log(jobId);

    const res = await studentApplyPost({
      date: "2023-12-14",
      time: "12:30:00",
      userId: decodeCookie.userId,
      recruiterNote: "Excellent candidate",
      jobId,
      studentApplicationStatus: "Pending",
    });
    console.log(res);
    toast.success("Applied Successfully");
    if (res.error) {
      toast.error(res.error.data.message);
    }
  };

  if (mainfilterLoading) {
    <p>Loading...</p>;
  }

  if (mainFilterIsError) {
    <p>Error ...</p>;
  }
  if (studentAppliedListLoading) {
    <p>Loading...</p>;
  }
  if (studentAppliedError) {
    <p>Error</p>;
  }

  // Add other dependencies if needed
  const jobData = mainFilter?.list?.map((item) => {
    return (
      <div key={item.jobId} className="mt-2 pl-1 pr-1">
        <Toaster position="top-center" reverseOrder={false} />
        <Card
          shadow-lg
          className=" bg-[#e6f4f1]  w-full max-w-[45rem] mb-5 hover:shadow-xl z-12 "
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-3 pt-0 pb-3"
          >
            <Link to={`/jobdetails/${item.jobId}`} target="_blank">
              <Avatar
                size="lg"
                variant="square"
                src={Lens}
                alt="tania andrew"
                className="object-cover p-3 w-fit "
              />
            </Link>

            <div className="flex w-full flex-col gap-0.5 ">
              <div className="flex items-center justify-between ">
                <Link to={`/jobdetails/${item.jobId}`} target="_blank">
                  <Typography className="text-primary font-semibold ss:text-lg xxs:text-sm">
                    {item.postName}
                  </Typography>
                </Link>
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
                    <Link to={`/jobdetails/${item.jobId}`}>
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
                    </Link>
                  </div>
                  <div>
                    <svg
                      onClick={() => saveButtonClick(item.jobId)}
                      // onClick={()=>setToggle(!saveToggle)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        uniqueJobIdsArray.includes(item.jobId)
                          ? "#184ca8"
                          : "none"
                      }
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div color="blue-gray" className="flex justify-between">
                <Link to={`/jobdetails/${item.jobId}`} target="_blank">
                  <div className=" flex justify-start gap-3 xs:text-xs ">
                    <Typography>{item.companyName}</Typography>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex justify-center items-center ">
                      <PiSuitcaseSimpleDuotone />
                      <Typography>{item.experienceLevel} years</Typography>
                    </div>
                    <div className="flex justify-center items-center">
                      <MdCurrencyRupee />
                      <p>Not Disclosed</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <CiLocationOn />
                      <Typography>{item.jobLocation}</Typography>
                    </div>
                    <div className="xxs:hidden xs:hidden ss:block ss:flex ss:items-center ">
                      <CiCalendarDate />
                      <Typography>{item.postDate}</Typography>
                    </div>
                  </div>
                  <div className="ss:hidden xxs:flex xxs:items-center">
                    <CiCalendarDate />
                    <Typography>{item.postDate}</Typography>
                  </div>
                </Link>
                <div className="flex  justify-end gap-2 mr-2 xxs:hidden">
                  <Typography>Premium</Typography>
                  <Typography>Info</Typography>

                  <Typography>Save</Typography>
                </div>
              </div>
              <button
                className={` w-[5rem] rounded p-1 text-center  ${
                  uniqueArrayStudentAppliedList.includes(item.jobId)
                    ? "bg-gray-500  "
                    : "bg-primary  text-white"
                } `}
                onClick={() => applyButtonHandler(item.jobId)}
                disabled={uniqueArrayStudentAppliedList.includes(item.jobId)}
              >
                {uniqueArrayStudentAppliedList.includes(item.jobId)
                  ? "Applied"
                  : "Apply"}
              </button>
            </div>
          </CardHeader>
        </Card>
      </div>
    );
  });

  let fetchedJob;
  if (isSuccess) {
    fetchedJob = jobData;
  } else if (isLoading) {
    <p>loading</p>;
  } else {
    console.log("error");
  }
  // Dependency array with saveToggle as a dependency

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
