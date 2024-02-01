/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button} from "@material-tailwind/react";
import jobOffer from "../../asset/job_offer.svg";
import { Input } from "@material-tailwind/react";
import ReactTextTransition, { presets } from "react-text-transition";

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
  setJobName,
  recomdatedJobs,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [jobFocus, setJobFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);

  console.log(recomdatedJobs);
  const jobRecomadated = recomdatedJobs?.map((item, index) => (
    <div key={index}>{item.companyName}</div>
  ));
  console.log(jobRecomadated);

  const cityRecomadated = recomdatedJobs?.map((item, index) => (
    <div key={index}>{item.jobLocation}</div>
  ));
  console.log(cityRecomadated);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterFlag(true);

    setMainFilter({ jobSearch, city, experiance });
  };

  const handleReset = () => {
    setFilterFlag(false);
    setSearch("");
    setCity("");
    setExperiance("");
  };
  const texts = ["ACCESS", "CONNECTIONS", "JOBS", "OPPORTUNITYS"];

  // const getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  const handleSelectJob = (job) => {
    console.log(job);
    setSearch(job);
    setJobFocus(false);
  };
  const handleSelectCity = (city) => {
    setCity(city);
    setCityFocus(false);
  };

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTextIndex(getRandomInt(0, texts.length));
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [texts.length]);

  return (
    <div className="bg-primary md:h-[13rem]   flex   ">
      <div className="container mx-auto flex  ">
        <div className="xxs:flex xxs:flex-col xxs:items-center xxs:w-full ss:flex ss:flex-col ss:items-start">
          <div className=" md:text-[2rem] text-[20px] font-Inter text-[#FFF] p-2 xxs:text-center ss:text-start ">
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
          </div>
          <p className=" md:text-[1.25rem] text-[15px] text-[#a5b4fc] font-Inter xxs:text-center ss:text-start  mt-2">
            Preferable helps you find the perfect job for you.
          </p>

          <div className="flex flex-wrap mt-5 gap-1 xxs:hidden ss:block ss:flex ">
            <div className="  rounded-md flex  items-center ">
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
                onFocus={() => setJobFocus(true)}
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
                onFocus={() => setCityFocus(true)}
              />
            </div>

            <div className="  rounded-md flex items-center ">
              <select
                id="experiance"
                name="experiance"
                value={experiance}
                onChange={(e) => setExperiance(e.target.value)}
                className="h-10 border border-gray-300 rounded-md w-[12rem]"
                placeholder="Experiance Level"
                required
              >
                <option></option>
                <option value={"0 years"}>Fresher</option>
                <option value={"1 years"}>1 year</option>
                <option value={"2 years"}>2 year</option>
                <option value={"3 years"}>3 year</option>
                <option value={"4 years"}>4 year</option>
                <option value={"5 years"}>5 year</option>
                <option value={"6 years"}>6 year</option>
              </select>
            </div>

            <div className="flex ml-2 mr-2">
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
              <Button
                variant="outlined"
                onClick={handleReset}
                className="ml-2 text-white"
              >
                reset
              </Button>
            </div>
          </div>
          <div className="sm:hidden flex gap-1 flex-col justify-center ">
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
              onFocus={() => setJobFocus(true)}
            />
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
              onFocus={() => setCityFocus(true)}
            />

            <select
              id="experiance"
              name="experiance"
              value={experiance}
              onChange={(e) => setExperiance(e.target.value)}
              className="h-10 border border-gray-300 rounded-md w-auto"
              placeholder="Experiance Level"
              required
            >
              <option></option>
              <option value={"0 years"}>Fresher</option>
              <option value={"1 years"}>1 year</option>
              <option value={"2 years"}>2 year</option>
              <option value={"3 years"}>3 year</option>
              <option value={"4 years"}>4 year</option>
              <option value={"5 years"}>5 year</option>
              <option value={"6 years"}>6 year</option>
            </select>
            <div className="flex mt-2 mb-2">
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
              <Button
                variant="outlined"
                onClick={handleReset}
                className="ml-2 text-white"
              >
                reset
              </Button>
            </div>
          </div>
          <div className=" flex w-[13rem]    justify-between  ">
            <div>
              {!jobSearch.length == 0 && jobFocus && (
                <ul className="bg-gray-300 absolute   z-[1000] w-[12.5rem] space-y-2  h-40 overflow-y-auto text-left p-2">
                  {jobRecomadated.map((item, index) => {
                
                    return (
                      <>
                        <div
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => handleSelectJob(item.props.children)}
                        >
                          {item}
                        </div>
                      </>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="">
              {!city.length == 0 && cityFocus && cityRecomadated && (
                <ul className="bg-gray-300 absolute   z-[1000] w-[12.5rem] space-y-2  h-40 overflow-y-auto text-left p-2">
                  {cityRecomadated.map((item, index) => {
                   
                    return (
                      <>
                        <div
                          key={index}
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                          onClick={() => handleSelectCity(item.props.children)}
                        >
                          {item}
                        </div>
                      </>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        <img
          src={jobOffer}
          className="mt-5 w-[20rem] xxs:hidden xs:hidden ss:block "
        />
      </div>
    </div>
  );
}
