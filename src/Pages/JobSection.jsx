import React, { useState } from "react";
import JobHeader from "../Compoments/JobSection/JobHeader";
import JobSecond from "../Compoments/JobSection/JobSecond";
import { useGetAllJobQuery } from "../services/job/jobApiSlice";
import { useJobFilterQuery } from "../services/job/jobApiSlice";
export default function JobSection() {
  const [jobSearch, setSearch] = useState("");
  const [jobName,setJobName] = useState("")
  const [city, setCity] = useState("");
  const [experiance, setExperiance] = useState("");
  const [mainFilter, setMainFilter] = useState({});
  const [filterFlag,setFilterFlag] = useState(false)
  const {
    data: mainFilterData,
    isLoading: mainfilterLoading,
    isError: mainFilterIsError,
    
  } = useJobFilterQuery(mainFilter);
  const { data, isLoading, error, isSuccess,isFetching } = useGetAllJobQuery(  { refetchOnMountOrArgChange: true });
  console.log(data)
  console.log(isFetching)
  console.log(isSuccess)
  console.log(isLoading)
  console.log(error)
console.log(mainFilterData)
const recomdatedJobs = data?.list?.filter(job =>
  job.companyName.toLowerCase().includes(jobSearch.toLowerCase()) &&
  job.jobLocation.toLowerCase().includes(city.toLowerCase()) &&
  job.experienceLevel.toLowerCase().includes(experiance.toLowerCase())
);
console.log(recomdatedJobs);
console.log(mainFilterData)

  
  return (
    <>
    
      <JobHeader
        jobSearch={jobSearch}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        experiance={experiance}
        setExperiance={setExperiance}
        setMainFilter={setMainFilter}
        setFilterFlag={setFilterFlag}
        setJobName = {setJobName}
        jobName = {jobName}
        recomdatedJobs = {recomdatedJobs}
      />
      <JobSecond
        mainFilterData={mainFilterData}
        mainfilterLoading={mainfilterLoading}
        mainFilterIsError={mainFilterIsError}
        filterFlag ={filterFlag}
        data ={data}
        isSuccess={isSuccess}
        isLoading = {isLoading}
        isFetching = {isFetching}
        error = {error}
      />
    </>
  );
}
