import { Button } from "@material-tailwind/react";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useCountries } from "use-react-countries";
import { state } from "../Data/StateIndia";
import { industries } from "../Data/Industry.js";
import { noticePeriodDays } from "../Data/Notice.js";
import { experienceDurations } from "../Data/Experiance.js";
import { annualSalaryRanges } from "../Data/AnnualSalary.js";
import { useState } from "react";
import { useUploadFilesMutation } from "../../services/fileUplaod/uploadFile.js";
// eslint-disable-next-line react/prop-types
const PersonalDetails = ({ formPersonalDetails, setFormPersonalDetails }) => {
  const [birthDate, setBirthDate] = useState();
  


  const { countries } = useCountries();
  const [country, setCountry] = React.useState(221);
const [uploadFiles] = useUploadFilesMutation()
  const { name, flags, countryCallingCode } = countries[country];
  console.log(name);
  const dateResult = birthDate ? format(birthDate, "MM-dd-yy") : null;
  console.log(dateResult);

  const personalDetailsOnChange = (e) => {
    const { name, value } = e.target;
    setFormPersonalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = async(event) => {
    const file = event.target.files[0];
  console.log(file)
    const formData = new FormData();
 console.log(formData)
    formData.append('image', file);
    formData.append('documentType', file.type); // Assuming you want to append the file type
    formData.append('userId', '1102');
  
  
    try {
      // Call the upload mutation with the FormData
      const response = await uploadFiles(formData);
      console.log(response);
      toast.success('Successfully toasted!')
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  
  
  
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <p className="text-xl w-auto bg-gray-400 p-2 ">Personal Details</p>
      <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-12 p-5 mt-5 ">
        <div className="md:space-y-12 space-y-4 col-span-1 ">
          <p>Profile Picture</p>
          <p>Name</p>
          <p>Gender</p>
          <p>Date Of Birth</p>
          <p>Current Location</p>
          <p>Preferred Location</p>
        </div>
        <div className="md:space-y-8 space-y-4 col-span-2 ">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <Input
            type="text"
            label="Name"
            name="name"
            onChange={personalDetailsOnChange}
            // eslint-disable-next-line react/prop-types
            value={formPersonalDetails.name}
          />
          <select
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full"
            onChange={personalDetailsOnChange}
            name="gender"
          >
            <option>Gender</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>

          <Popover placement="bottom">
            <PopoverHandler>
              <Input
                label="Select a Date"
                onChange={() => null}
                value={birthDate ? format(birthDate, "PPP") : ""}
              />
            </PopoverHandler>
            <PopoverContent>
              <DayPicker
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                showOutsideDays
                className="border-0"
                classNames={{
                  caption:
                    "flex justify-center py-2 mb-4 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "flex items-center",
                  nav_button:
                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                  nav_button_previous: "absolute left-1.5",
                  nav_button_next: "absolute right-1.5",
                  table: "w-full border-collapse",
                  head_row: "flex font-medium text-gray-900",
                  head_cell: "m-0.5 w-9 font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal",
                  day_range_end: "day-range-end",
                  day_selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  day_today: "rounded-md bg-gray-200 text-gray-900",
                  day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  day_disabled: "text-gray-500 opacity-50",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                  IconRight: ({ ...props }) => (
                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>

          <select
            onChange={personalDetailsOnChange}
            name="currentLocation"
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto "
          >
            <option>Select Current Location</option>
            <optgroup label="---Top Metropolitan Cities---">
              <option>Ahmedabad</option>
              <option>Bangalore</option>
              <option>Chandigarh</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Gurgaon</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Noida</option>
              <option>Pune</option>
            </optgroup>
            {state?.states?.map((stateData, index) => {
              return (
                <optgroup key={index} label={stateData?.state}>
                  {stateData?.districts?.map((city, cityIndex) => (
                    <option key={cityIndex}>{city}</option>
                  ))}
                </optgroup>
              );
            })}
          </select>
          <select
            onChange={personalDetailsOnChange}
            name="preferredLocation"
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto "
          >
            <option>Select Preferred Location</option>
            <optgroup label="---Top Metropolitan Cities---">
              <option>Ahmedabad</option>
              <option>Bangalore</option>
              <option>Chandigarh</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Gurgaon</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Noida</option>
              <option>Pune</option>
            </optgroup>
            {state?.states?.map((stateData, index) => {
              return (
                <optgroup key={index} label={stateData?.state}>
                  {stateData?.districts?.map((city, cityIndex) => (
                    <option key={cityIndex}>{city}</option>
                  ))}
                </optgroup>
              );
            })}
          </select>
        </div>
        <div className="md:space-y-12 space-y-4 col-span-1 ">
          <p>Phone</p>
          <p>Industry</p>

          <p>Notice Peroid</p>
          <p>Experiance</p>
          <p>Annual Salary</p>
          <p>Expected Salary</p>
        </div>
        <div className="md:space-y-8 space-y-4 col-span-2  ">
          <div className="relative flex w-full max-w-[24rem]">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}{" "}
                      <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Input
              type="tel"
              onChange={personalDetailsOnChange}
              name="phone"
              value={personalDetailsOnChange.phone}
              placeholder="Mobile Number"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              min={10}
              max={10}
            />
          </div>
          <select
            onChange={personalDetailsOnChange}
            value={personalDetailsOnChange.industry}
            name="industry"
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto"
          >
            {industries.map((industrie, index) => {
              return <option key={index}>{industrie}</option>;
            })}
          </select>
          {/* <select className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto">
            <option>Male</option>
            <option>Female</option>
          </select> */}

          <select
            name="noticePeriod"
            onChange={personalDetailsOnChange}
            value={personalDetailsOnChange.noticePeriodDays}
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-y-auto"
          >
            {noticePeriodDays.map((notice, index) => {
              return <option key={index}>{notice}</option>;
            })}
          </select>

          <select
            onChange={personalDetailsOnChange}
            name="experiance"
            value={personalDetailsOnChange.experience}
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-x-auto"
          >
            {experienceDurations.map((experienceDuration, index) => {
              return <option key={index}>{experienceDuration}</option>;
            })}
          </select>
          <select
            onChange={personalDetailsOnChange}
            name="annualSalary"
            value={personalDetailsOnChange.annualSalaryRanges}
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-x-auto"
          >
            {annualSalaryRanges.map((experienceDuration, index) => {
              return <option key={index}>{experienceDuration}</option>;
            })}
          </select>
          <select
            onChange={personalDetailsOnChange}
            name="expectedSalary"
            value={personalDetailsOnChange.expectedSalary}
            className="mt-1 p-2 border  border-gray-400 text-gray-700 rounded-md w-full overflow-x-auto"
          >
            {annualSalaryRanges.map((experienceDuration, index) => {
              return <option key={index}>{experienceDuration}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
