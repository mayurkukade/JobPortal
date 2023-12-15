import { useEffect, useState } from "react";
import { Button,Select,Option } from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import ReactTextTransition, { presets } from "react-text-transition";
import { useJobFilterQuery } from "../../services/job/jobApiSlice";
import { useGetAllJobQuery } from "../../services/job/jobApiSlice";
export default function JobHeader({
  jobSearch,
  setSearch,
  city,
  setCity,
  experiance,
  setExperiance,
  setMainFilter,
  setFilterFlag,
  jobName,
  setJobName
}) {
  const [textIndex, setTextIndex] = useState(0);
  const { data, isLoading, error, isSuccess } = useGetAllJobQuery();
  console.log(data)




 const handleSubmit =  (e) => {
  e.preventDefault();
  setFilterFlag(true)

  setMainFilter({ jobSearch, city, experiance });
};

const handleReset = ()=>{
  setFilterFlag(false)
}
  const texts = ["ACCESS", "CONNECTIONS", "JOBS", "OPPORTUNITYS"];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex(getRandomInt(0, texts.length));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);
  
  return (
    <div className="bg-darkBlueBackground md:h-[12rem]     ">
      <div className="container mx-auto p-5 w-fit">
        <p className=" md:text-[2rem] text-[20px] font-Inter text-[#FFF] text  ">
          Find Better
          <section className="inline">
            <ReactTextTransition
              springConfig={presets.gentle}
              className="big"
              delay={200}
              inline
            >
              &nbsp;
              <span className="text-accent font-semibold">
                {texts[textIndex]}
              </span>
            </ReactTextTransition>
          </section>
        </p>
        <p className=" md:text-[1.25rem] text-[15px] text-[#a5b4fc] font-Inter  mt-2">
          Preferable helps you find the perfect job for you.
        </p>

        <div className="flex flex-wrap mt-5 gap-1">
          {/* <div className="  rounded-md flex items-center ">
            <Input
              placeholder="Job Title"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              name="jobName"
              onChange={(e) => setJobName(e.target.value)}
              value={jobName}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div> */}
          <div className="  rounded-md flex items-center ">
            <Input
              placeholder="Company Name"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              name="jobSearch"
              onChange={(e) => setSearch(e.target.value)}
              value={jobSearch}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div>
          <div className="  rounded-md flex items-center ">
            <Input
              placeholder="Location"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div>
          <div className="  rounded-md flex items-center ">
            {/* <Input
              placeholder="Experiance"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              name="experienceLevel"
              onChange={(e) => setExperiance(e.target.value)}
              value={experiance}
              className="bg-white h-[52px] w-[23rem]"
            /> */}

            <select
            id="experiance"
            name="experiance"
            value={experiance}
            onChange={(e)=>setExperiance(e.target.value)}
            className="h-10 border border-gray-300 rounded-md w-[10rem]"
            placeholder="Experiance Level"
            required
          >
            <option></option>
            <option value={"0 years"}>Fresher</option>
            <option value={"1 years"}>1 year</option>
            <option value={"2 years"}>2 year</option>
            <option value={"3 years"}>3 year</option>
            <option value={"4 years"}>4 year</option>
           
          </select>
     
          </div>
          
          <div className="flex items-center ml-2 mr-2">
            <Button variant="outlined" onClick={handleSubmit}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-fit h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  color="white"
                />
              </svg>
            </Button>
            <Button variant="outlined" onClick={handleReset} className="ml-2">
             reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
