import React,{useState,useEffect} from "react";
import { Avatar, Card, CardHeader, Typography } from "@material-tailwind/react";
import Lens from "../Images/Lenskart.png";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Toaster } from "react-hot-toast";
import { useGetApplicationByUserIdQuery } from "../../services/studentApplication/studentApplicationApiSlice";
import { useByIdJobsQuery } from "../../services/job/jobApiSlice";
import { useStudentApplyPostMutation } from "../../services/studentApplication/studentApplicationApiSlice";
const JobDetailsById = () => {
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useByIdJobsQuery(id);
  console.log(data);
  const [studentApplyPost] = useStudentApplyPostMutation();
  const getCookie = Cookies.get("cookie");
  const decodeCookie = jwtDecode(getCookie);
  console.log(decodeCookie.userId);
  const {
    data: StudentAppliedList,
    isLoading: studentAppliedListLoading,
    isError: studentAppliedError,
    isSuccess: studentAppliedSuccess,
  } = useGetApplicationByUserIdQuery(decodeCookie?.userId);
  console.log(StudentAppliedList);

  const uniqueStudentAppliedJob = new Set();
  StudentAppliedList?.response?.forEach((item) => {
    uniqueStudentAppliedJob.add(item.jobId);
  });
  const uniqueArrayStudentAppliedList = Array.from(uniqueStudentAppliedJob).map(
    Number
  );
  console.log(uniqueArrayStudentAppliedList);
  const applyButtonHandler = async () => {
    const res = await studentApplyPost({
      date: formattedDate,
      time: formattedTime,
      userId: decodeCookie.userId,
      recruiterNote: "Excellent candidate",
      jobId: id,
      studentApplicationStatus: "Pending",
    });
    console.log(res);
    toast.success("Applied Successfully");
    if (res.error) {
      toast.error(res.error.data.message);
    }
  };
  let content;
  if (isLoading) {
    content = <p>loading</p>;
  } else if (isSuccess) {
    content = data.object;
  } else {
    content = <p>error</p>;
  }
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedTimeStr = `${hours}:${minutes}:${seconds}`;
    setFormattedTime(formattedTimeStr);
    const formattedDateStr = `${year}-${month}-${day}`;
    setFormattedDate(formattedDateStr);
  }, []);

  console.log(formattedDate)
  console.log(formattedTime)
  return (
    <>
      <div className="bg-darkBlueBackground md:h-[12rem] ">
      <Toaster position="top-center" reverseOrder={false} />
        <div className="container mx-auto flex gap-12 ">
          <div>
            <Avatar
              size="xl"
              variant="square"
              src={Lens}
              alt="tania andrew"
              className="object-cover p-3 w-fit mt-12 bg-white"
            />
          </div>
          <div className="mt-10 space-y-1.5">
            <Typography className="text-white text-3xl">
              {content.companyName} - {content.postName}
            </Typography>
            <div className="flex text-white  gap-5">
              <Typography className="text-xl">
                {" "}
                {content.companyName}
              </Typography>
              <Typography className="text-xl flex gap-2 ">
                <span className="text-xl ">&#x2022;</span>
                {content.jobLocation}
              </Typography>
              <Typography className="text-xl flex gap-2">
                <span className="text-xl">&#x2022;</span>
                {content.experienceLevel}
              </Typography>
            </div>

            <div className="flex gap-2">
              {content?.skills?.map((item, index) => {
                console.log(item);
                return (
                  <Typography
                    className="bg-white rounded-[0.7rem] w-fit p-0.5 text-sm "
                    key={index}
                  >
                    <p className="p-1 ml-2 mr-2">{item}</p>
                  </Typography>
                );
              })}
            </div>

            <Typography className="text-white">
              Posted on : {content.postDate}
            </Typography>
          </div>
        </div>
      </div>
      <div className="container mx-aut flex gap-8 justify-between">
        <Card className=" w-[68%] h-auto p-7 ">
          <Typography className="text-lg">
            Position : Lead React.js Engineer
          </Typography>
          <Typography className="text-lg">Location : Location</Typography>
          <Typography className="text-lg">
            Position : Lead React.js Engineer
          </Typography>

          <Typography className="text-lg">Responsibility:</Typography>

          <Typography className="text-justify">
            - Lead a team of React developers, providing guidance and support
            throughout the development lifecycle. - Collaborate with
            cross-functional teams to define project requirements and deliver
            high-quality solutions. - Develop and maintain scalable and reusable
            React components. - Ensure code quality and adherence to best
            practices through code reviews and mentorship. - Stay up-to-date
            with the latest trends and advancements in React and related
            technologies. - Troubleshoot and resolve technical issues in a
            timely manner. - Continuously improve development processes and
            workflows. Requirements : - Strong experience in React.js
            development, including hands-on experience with React hooks and
            context API. - Proficient in JavaScript (ES6+) and modern web
            technologies (HTML5, CSS3). - Solid understanding of front-end
            development principles, including responsive design and
            cross-browser compatibility. - Experience with state management
            libraries like Redux or MobX. - Familiarity with front-end build
            tools like Webpack or Babel. - Strong problem-solving and debugging
            skills. - Excellent communication and leadership abilities. -
            Bachelor's degree in Computer Science or related field (or
            equivalent work experience). Nice to Have : - Experience with
            server-side rendering (SSR) using frameworks like Next.js. -
            Familiarity with TypeScript. - Knowledge of UI/UX design principles.
            If you are passionate about React development and have strong
            leadership skills, we would love to hear from you. Apply now to join
            our dynamic team and make an impact in the industry!
          </Typography>
          <div className="flex gap-5 mt-4">
            <button
              className={` w-[5rem] rounded p-1 text-center  ${
                uniqueArrayStudentAppliedList.includes(content.jobId)
                  ? "bg-gray-500  "
                  : "bg-primary  text-white"
              } `}
              onClick={() => applyButtonHandler(content.jobId)}
              disabled={uniqueArrayStudentAppliedList.includes(content.jobId)}
            >
              {uniqueArrayStudentAppliedList.includes(content.jobId)
                ? "Applied"
                : "Apply"}
            </button>
          </div>
        </Card>
        <Card className=" w-[30%] h-fit p-7 mt-10 ">
          <Typography>Posted by</Typography>
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem]"
          >
            <CardHeader
              color="blue-gray"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-white"
                  >
                    Anil Deshmukh
                  </Typography>
                </div>
                <Typography color="blue-gray" className="text-white">
                  Manager at Justdial Limited
                </Typography>
              </div>
            </CardHeader>
          </Card>
          <CardHeader className="shadow-lg">
            <div className="flex justify-center gap-10 p-1  ">
              {/* <div>
                <p className="text-center">811</p>
                <p>Job Views</p>
              </div> */}
              <div>
                <p className="text-center">333</p>
                <p>Applications</p>
              </div>
              <div>
                <p className="text-center">1272731</p>
                <p>Job Code</p>
              </div>
            </div>
          </CardHeader>

          <div className="mt-5 space-y-2">
            <Typography>Posted in</Typography>
            <Typography className="text-lg font-semibold">
              Backend Developer
            </Typography>
            <div className="w-auto h-0.5 bg-blue-gray-100" />
            <Typography>Functional Area</Typography>
            <Typography className="text-lg font-semibold">
              Full Stack Development
            </Typography>
          </div>
        </Card>
      </div>
    </>
  );
};

export default JobDetailsById;
