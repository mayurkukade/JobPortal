import { Avatar, Button } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { useGetStudentQuery } from "../services/studentApi/studentApiSlice.js";
import {Input} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

const Myprofile = () => {
 const {id} = useParams()
  const {
    data: studentBasicDetailsApi,
    isLoading,
    isError,
    isSuccess,
  } = useGetStudentQuery(id);
  console.log(studentBasicDetailsApi);
  let basicDetails;
  if (isLoading) {
    basicDetails = <p>loading</p>;
  } else if (isError) {
    basicDetails = <p>error</p>;
  } else if (isSuccess) {
    basicDetails = studentBasicDetailsApi?.response;
  }

  return (
    <div className="grid grid-cols-4   gap-1">
      <div className="bg-[#F8F8FF]">
        <div className="flex flex-col items-center mt-5 ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            withBorder={true}
            className="p-0.5"
            size="xxl"
          />
          <h3 className="mt-5 capitalize">{basicDetails.fullName}</h3>
          <h5 className="lowercase">{basicDetails.email}</h5>
          <h5>{basicDetails.moNumber}</h5>
          <div className="flex gap-8">
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"
                  clipRule="evenodd"
                />
                <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
              </svg>
              1 year 5 months
            </p>

            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Pune
            </p>
          </div>
          <div className="w-[18rem] h-0.5 bg-blue-gray-400 mt-5 mb-5 "></div>

          <div className="mb-5 space-y-4 cursor-pointer ">
            <div className="flex gap-2 ">
              <div className="p-1 m-1 rounded-full bg-blue-gray-200  ">
                <FaXTwitter size={"22"} />
              </div>
              <div className="border rounded-xl p-1 border-black ">
                <p className="mr-8 ml-8"> Connect with Twitter</p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="p-1 m-1 rounded-full bg-blue-gray-200  ">
                <VscGithub size={"22"} />
              </div>
              <div className="border rounded-xl p-1 border-black ">
                <p className="mr-8 ml-8"> Connect with Twitter</p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="p-1 m-1 rounded-full bg-blue-gray-200  ">
                <TiSocialLinkedinCircular size={"22"} />
              </div>
              <div className="border rounded-xl p-1 border-black ">
                <p className="mr-8 ml-8"> Connect with Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffefe] col-span-2 p-5">
        <h3 className="text-2xl p-1 font-poppins">Profile</h3>

        <div className=" flex items-center gap-5 mb-5 mt-5">
          <div className="rounded-full bg-blue-gray-300 p-1 m-1">
            <span>
              <CgProfile size={"22"} />
            </span>
          </div>
          <p className="text-2xl">Profesional Details</p>
        </div>
        <div>
          <h3>Reactjs Developer</h3>
          <p>Optical Arc Pvt. Ltd.</p>
          <p>May 1996 to Present</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5 items-center">
          <div className="rounded-full bg-blue-gray-200 p-1 m-1">
            <span>
              <HiOutlineAcademicCap size={"22"} />
            </span>
          </div>
          <p className="text-2xl">Education Details</p>
        </div>
        <div>
          <h3>B Tech / BE (Full Time) </h3>
          <p>Rashtrasant Tukadoji Maharaj Nagpur University</p>
          <p>2016 - 2021</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5 items-center">
          <div className="rounded-full bg-blue-gray-200 p-1 m-1">
            {" "}
            <span>
              <AiOutlineSafetyCertificate size={"22"} />
            </span>
          </div>
          <p className="text-2xl">Certification Details</p>
        </div>
        <div>
          <p>XYZ Certification</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5 items-center">
          <div className="rounded-full bg-blue-gray-200 p-1 m-1">
            {" "}
            <span>
              <CiCircleMore size={"22"} />
            </span>
          </div>
          <p className="text-2xl">More Details</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div>
              <p>Date of Birth:</p>
              <p>Gender:</p>
              <p>Current Location:</p>
              <p>Preferred Location:</p>
              <p>Notice Period:</p>
            </div>
            <div>
              <p>7th May 1996</p>
              <p>Male</p>
              <p>Pune</p>
              <p>Anywhere</p>
              <p>1 month</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div>
                <p>Functional Area :</p>
                <p>Annual Salary :</p>
                <p>Expected Salary :</p>
              </div>
              <div>
                <p>Full-Stack Development</p>
                <p>3 INR (lakhs/year)</p>
                <p>5 INR (lakhs/year) | Negotiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F8FF]">
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-full bg-blue-gray-200 p-1 m-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
          </div>
          <p className="text-xl">Send a Recommendation</p>
        </div>
        <p className="mt-2 ml-5 text-justify mr-5">
          Enhance your profile with recommendations of your work and skills.
          Candidates with recommendations have higher likelihood of being
          shortlisted.
        </p>
        <div className="flex-col mr-5 ml-5 mt-5">
          <p>Request a recommendation from -</p>
        </div>
        <div className="flex justify-center mt-2 ml-5 mr-5">
        <Input  />
        
        </div>
        <Button className="ml-5 mt-2">Send</Button>

        <div></div>
      </div>
    </div>
  );
};

export default Myprofile;
