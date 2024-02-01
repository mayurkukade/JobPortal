import { HiOutlineAcademicCap } from "react-icons/hi";
import { useauthHooks } from "../hooks/authHooks";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { useGetDegreeStudentProfileQuery,useDegreeStudentProfileUpdateMutation } from "../../services/studentApi/studentApiSlice";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

const EducationDetails = () => {
  const [openEducationModel, setEducationModal] = useState(false);
  const [educationId,setEducationId] = useState("")
  const [degrees, setDegrees] = useState({
    institute: "",
    batchFrom: "",
    batchTo: "",
    course: "",
    degree: "",
  });
  const handleOpenEducation = (id) =>{
    setEducationModal(!openEducationModel);
    console.log(id)
    setEducationId(id)
  } 
  const { useDecode } = useauthHooks();
  const {
    data: studentdegree,
    isSuccess: studentDegreeSuccess,
    isLoading: studentDegreeLoading,
    isError: studentDegreeError,
  } = useGetDegreeStudentProfileQuery(useDecode?.userId);
const [degreeStudentProfileUpdate] = useDegreeStudentProfileUpdateMutation()
  let studentDegreefetched;
  if (studentDegreeLoading) {
    studentDegreefetched = <p>Loading...</p>;
  } else if (studentDegreeError) {
    studentDegreefetched = <p>Error</p>;
  } else if (studentDegreeSuccess) {
    studentDegreefetched = studentdegree;
  }

  const startYear = 1990;
  const endYear = 2030;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );


  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDegrees({
      ...degrees,
      [name]: value,
    });
  };



  const submitEducationDetails = async() => {
    console.log(degrees);
    const res = await degreeStudentProfileUpdate({degrees,educationId})
    console.log(res)
    if(res?.data?.status === 'success'){
        setDegrees({
            institute: "",
    batchFrom: "",
    batchTo: "",
    course: "",
    degree: "",
        });
    handleOpenEducation()
    }
  };
  return (
    <>
      <div className=" flex gap-5 mb-1 mt-5 items-center">
        <div className="rounded-full bg-blue-gray-200 p-1 m-1">
          <span>
            <HiOutlineAcademicCap size={"22"} />
          </span>
        </div>
        <p className="text-2xl">Education Details</p>
      </div>
      {studentDegreefetched?.list?.map((studentDegree, index) => {
        console.log(studentDegree.degreeId);
        return (
          <div key={index}>
            <div className="flex items-center gap-5 mt-5">
              <div className="flex items-center gap-10">
                <h3>
                  {studentDegree?.degree} {studentDegree?.course}{" "}
                </h3>
                <FaEdit
                  className="cursor-pointer"
                  onClick={() => handleOpenEducation(studentDegree?.degreeId)}
                />
              </div>
            </div>
            <p>{studentDegree?.institute}</p>
            <p>
              {studentDegree?.batchFrom} - {studentDegree?.batchTo}
            </p>
          </div>
        );
      })}
      <Dialog open={openEducationModel} handler={handleOpenEducation}>
        <DialogHeader>Education Details</DialogHeader>
        <form className="flex flex-col justify-center space-y-8 p-5  mt-5">
          <div className="space-y-8">
            <div className="flex justify-center gap-10 items-center w-[35rem]">
              <p className="w-20">Institute</p>
              <Input
                label="Institute"
                name="institute"
                onChange={handleOnchange}
                value={degrees.institute}
              />
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Batch</p>
              <div className="flex  gap-[1.3rem] items-center">
                <select
                  id="yearSelect"
                  name="batchFrom"
                  onChange={handleOnchange}
                  className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
                >
                  <option value="" disabled>
                    -- Select Year --
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                to
                <select
                  id="yearSelect"
                  name="batchTo"
                  onChange={handleOnchange}
                  className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
                >
                  <option value="" disabled>
                    -- Select Year --
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Course Type</p>
              <select
                name="course"
                onChange={handleOnchange}
                className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
              >
                <option>Select</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Online</option>
                <option>Bootcamp</option>
              </select>
            </div>
            <div className="flex gap-10 items-center w-[35rem]">
              <p className="w-20">Education Level</p>
              <select
                name="degree"
                onChange={handleOnchange}
                className="mt-1 p-2 border border-gray-700 rounded-md w-full overflow-x-auto"
              >
                <option>Select</option>
                <option>10th</option>
                <option>12th</option>
                <option>POLYTECHNIC</option>
                <option>LLM/LLB</option>
                <option>B.Tech/B.E</option>
                <option>MBBS</option>
                <option>BSC</option>
                <option>BA</option>
                <option>B.COM</option>
                <option>BBA</option>
                <option>BCA</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <Button className="w-fit ml-[7rem]" onClick={submitEducationDetails}>
            Submit
          </Button>
        </form>
      </Dialog>
    </>
  );
};

export default EducationDetails;
