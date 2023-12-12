import React, { useState } from "react";
import JobHeader from "../Compoments/JobSection/JobHeader";
import JobSecond from "../Compoments/JobSection/JobSecond";
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
  console.log(mainFilterIsError);
  console.log(jobName)
  return (
    <div>
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
      />
      <JobSecond
        mainFilterData={mainFilterData}
        mainfilterLoading={mainfilterLoading}
        mainFilterIsError={mainFilterIsError}
        filterFlag ={filterFlag}
      />
    </div>
  );
}
