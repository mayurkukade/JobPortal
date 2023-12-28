import { Typography } from "@material-tailwind/react";
import React from "react";
import applyjobsvg from "../Images/homeImages/Group 39647.png";
import arrowline from "../Images/homeImages/vector-section-1 (1).svg";
import step from "../Images/homeImages/Group 39648.png";
import step4 from "../Images/homeImages/Group 39656.png";
import step3 from "../Images/homeImages/vector-section-2.svg";
import graduate2 from "../Images/homeImages/graduate2.png";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import hrimage from "../Images/homeImages/Group 39659.png";

const HomeSteps = () => {
  return (
    <section className=" bg-[#f3f8ff] h-fit ">
      <div className=" container mx-auto">
        <Typography variant="h1" className="text-center pt-[3rem] text-primary">
          Let's find your Mojo
        </Typography>

{/* section 1st */}
        <div className="flex justify-between bg-[#e6f4f1] rounded-3xl p-5 mt-8 items-center ">
          <div>
            <div className="ml-[5rem] mt-5 mb-10 border rounded-2xl  p-5">
              <Typography
                variant="h6"
                className=" flex items-center gap-2 text-white rounded-md w-fit bg-primary px-2 ml-[3.5rem] "
              >
                <PiSuitcaseSimpleDuotone /> Apply job ease
              </Typography>
              <div className=" flex items-center gap-2  mt-1">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">1</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Apply for unlimited jobs
                  </p>
                  <p>Unlock Your Career Potential with Endless Opportunities</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-screen-md">
                At <span>Preferable</span>, we believe in removing barriers to
                your success. Our exclusive "Apply for Unlimited Jobs" feature
                empowers you to explore a vast array of career possibilities
                without any restrictions.
                {/* Whether you're a recent graduate or a seasoned professional,
                seize the chance to apply to as many jobs as you desire and open
                doors to new opportunities. Your dream career awaits – start
                applying today! */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">2</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Comprehensive Career Planning
                  </p>
                  <p>
                    Crafting Your Path to Success with Comprehensive Career
                    Planning
                  </p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12">
                Embark on a personalized journey towards success with our
                comprehensive career planning services. Our expert career
                counselors are here to guide you through strategic planning,
                helping you define and achieve your professional goals.
                {/* From
                identifying your strengths to outlining a step-by-step roadmap,
                we ensure that your career trajectory aligns with your
                aspirations. Take control of your future with [Your Website
                Name] and pave the way for a fulfilling career. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">3</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    1:1 Customized Mentoring
                  </p>
                  <p>Personalized Guidance for Your Unique Journey</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12">
                At Preferable, we understand that every career journey is
                unique. That's why we offer customized mentoring with a
                dedicated mentor assigned to you on a one-on-one basis.
                {/* Receive
                personalized advice, insights, and support tailored to your
                specific needs. Whether you're navigating a career transition or
                seeking guidance on skill development, our mentors are here to
                empower you. Elevate your career with individualized mentoring –
                because your success is our priority. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">4</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Interview / Resume Guidance
                  </p>
                  <p>Confidence in Every Step: Interview and Resume Guidance</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12">
                Nail your next interview and make a lasting impression with our
                expert interview and resume guidance. Our seasoned professionals
                are here to provide insights on creating a standout resume and
                mastering the art of interviews. 
                {/* From crafting impactful resumes
                to honing your interview skills, we've got you covered. Gain the
                confidence you need to showcase your talents and land the job
                you deserve. Partner with [Your Website Name] for interview and
                resume guidance that propels you towards success. */}
              </Typography>
            </div>
          </div>
          <img alt="img" src={applyjobsvg} className="w-[25rem]" />
        </div>
        <img
          alt="img"
          src={arrowline}
          className="flex flex-col md:ml-[30rem] "
        />
        <div className="flex justify-between items-center">
          <img alt="img" src={step} className="w-[25rem] ml-[10rem] " />
          <div className=" mt-5 mb-10 border rounded-2xl   mr-[8rem]">
            <Typography
              variant="h6"
              className=" flex items-center gap-2  text-primary rounded-lg w-fit bg-faintgreen px-2 "
            >
              <IoStatsChartOutline /> State at the top
            </Typography>
            <Typography variant="lead">Rank yourself</Typography>
            <Typography variant="lead">Unlimited re-tests</Typography>
            <Typography variant="lead">Startup bootcamps</Typography>
            <Typography variant="lead">Learn skills online</Typography>
          </div>
        </div>
        <img alt="img" src={step3} className="flex flex-col md:ml-[20rem] " />
        {/* section third */}
        <div className="flex justify-between bg-faintgreen rounded-3xl p-5  items-center w-full">
          <div>
            <div className="ml-[5rem] mt-5 mb-10 border rounded-2xl  p-5">
              <Typography
                variant="h6"
                className=" flex items-center gap-2 text-white rounded-lg w-fit bg-primary px-2 "
              >
                <FaGraduationCap /> Upskill & Education
              </Typography>
              <Typography variant="lead">MS / MBA research</Typography>
              <Typography variant="lead">Application consultation</Typography>
              <Typography variant="lead">Courses for upskills</Typography>
              <Typography variant="lead">Campus tours</Typography>
            </div>
          </div>
          <img alt="img" src={graduate2} className="w-[25rem]" />
        </div>
        <img alt="img" src={step4} className="flex flex-col md:ml-[20rem] " />

        {/* section fourth */}
        <div className="flex justify-between   ">
          <img
            alt="img"
            src={hrimage}
            className="w-[25rem] h-fit ml-20 mb-10"
          />
          <div className="   border rounded-2xl    mr-[8rem]">
            <Typography
              variant="h6"
              className=" flex items-center gap-2  text-primary rounded-lg w-fit bg-faintgreen px-2 "
            >
              <IoStatsChartOutline /> Hiring made easy
            </Typography>
            <Typography variant="lead">End to End Hiring services</Typography>
            <Typography variant="lead">0 fees for job listing</Typography>
            <Typography variant="lead">Application tracking system</Typography>
            <Typography variant="lead">AI based assessment</Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
