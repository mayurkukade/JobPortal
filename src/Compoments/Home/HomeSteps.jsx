import { Button, Card,  Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import applyjobsvg from "../Images/homeImages/Group 39647.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

import arrowline from "../Images/homeImages/vector-section-1 (1).svg";
import step from "../Images/homeImages/Group 39648.png";
import step4 from "../Images/homeImages/Group 39656.png";
import step3 from "../Images/homeImages/vector-section-2.svg";
import graduate2 from "../Images/homeImages/graduate2.png";
import step5 from "../Images/homeImages/vector-section-5.svg";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import hrimage from "../Images/homeImages/Group 39659.png";
import { MdPersonSearch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
const HomeSteps = () => {
  return (
    <section className=" bg-[#f3f8ff] h-fit ">
      <div className=" container mx-auto">
        <Typography
          variant="h1"
          className="text-center pt-[3rem] text-primary mb-5 "
        >
          Let's find your Mojo
        </Typography>

        {/* section 1st */}
        <div className="flex justify-between bg-[#e6f4f1] rounded-3xl p-5   items-start  ">
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

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
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

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
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

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
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

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
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
              <Link to={"/jobsection"}>
                <Button className="ml-11 mt-3 bg-primary flex gap-2 items-center">
                  Get Started Now <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <img
            alt="img"
            src={applyjobsvg}
            className="xxs:hidden mt-[6rem] ss:block w-[25rem] lg:w-[35rem]"
          />
        </div>
        <img
          alt="img"
          src={arrowline}
          className="flex flex-col md:ml-[15rem] "
        />
        {/* section two */}
        <div className="flex justify-between items-start bg-[#ede9fb] rounded-3xl p-5 pt-10 ">
          <img
            alt="img"
            src={step}
            className="xxs:hidden mt-[6rem] ss:block w-[25rem] ss:w-[25rem] lg:w-[35rem] "
          />
          <div>
            <div className="ml-[5rem]   border rounded-2xl  p-5">
              <Typography
                variant="h6"
                className=" flex items-center gap-2 text-white rounded-md w-fit bg-primary px-2 ml-[3.5rem] "
              >
                <IoStatsChartOutline /> Stand at the top
              </Typography>
              <div className=" flex items-center gap-2  mt-1">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">1</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Rank Yourself
                  </p>
                  <p>with Precision through Our Assignment Skills Tests</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                At Preferable, we believe in quantifying skills objectively, and
                our Assignment Skills Tests set the gold standard for assessment
                precision. Take charge of your learning journey by gauging your
                abilities through hands-on assignments tailored to your field.
              </Typography>
              <div className=" flex items-center gap-2  mt-1">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">2</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Unlimited Re-tests
                  </p>
                  <p>Maximize Your Learning with Unlimited Re-tests</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                At Preferable, we believe in the power of continuous
                improvement. With our unlimited re-tests feature, you have the
                flexibility to revisit and reinforce your knowledge.
                {/* Whether
                you're preparing for exams, certifications, or assessments, our
                commitment to your success means you can retake tests as many
                times as needed. Embrace a learning journey that adapts to your
                pace and ensures you master the material thoroughly. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">3</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Startup Bootcamps
                  </p>
                  <p>
                    Ignite Your Entrepreneurial Journey with Startup Bootcamps
                  </p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Unleash your entrepreneurial spirit with our immersive Startup
                Bootcamps. Designed for aspiring business leaders and
                innovators, our bootcamps provide hands-on experiences, expert
                mentorship, and practical insights to turn your startup dreams
                into reality.
                {/* From ideation to execution, join a community of
                like-minded individuals and learn the essential skills to thrive
                in the dynamic world of startups. Fuel your passion, accelerate
                your learning, and launch your startup with confidence. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">4</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Learn Skills Online
                  </p>
                  <p>Empower Your Future with Online Learning</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Embark on a journey of continuous skill development through our
                comprehensive online learning platform. Access a diverse range
                of courses and acquire in-demand skills that align with the
                evolving needs of industries.
                {/* With our user-friendly interface,
                engaging content, and expert-led sessions, learning has never
                been more accessible. Elevate your career, pursue your passions,
                and stay ahead in a competitive job market. Explore, learn, and
                grow at your own pace with [Your Website Name]. */}
              </Typography>

              <Link to={"/jobsection"}>
                <Button className="ml-11 mt-3 bg-primary flex gap-2 items-center">
                  Get Started Now <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img alt="img" src={step3} className="flex flex-col md:ml-[40rem] " />
        {/* section third */}
        <div className="flex justify-between bg-[#e6f4f1] rounded-3xl p-5  items-start  w-full">
          <div>
            <div className="ml-[5rem] mt-5 mb-10 border rounded-2xl  p-5">
              <Typography
                variant="h6"
                className=" flex items-center gap-2 text-white rounded-md w-fit bg-primary px-2 ml-[3.5rem] "
              >
                <FaGraduationCap />
                Upskill and Education
              </Typography>
              <div className=" flex items-center gap-2  mt-1">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">1</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    MS / MBA Research
                  </p>
                  <p>
                    Unlock the Doors to Advanced Learning with MS/MBA Research
                  </p>
                </div>
              </div>

              <Typography className=" text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Delve into the world of advanced education with our MS/MBA
                research offerings. Our programs are designed for those seeking
                a deeper understanding of their field, providing opportunities
                for groundbreaking research and academic excellence.
                {/* Join a
                community of scholars, engage in meaningful research, and propel
                your career to new heights. Your journey towards an advanced
                degree starts here. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">2</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Application Consultation
                  </p>
                  <p>
                    Navigate the Application Process with Expert Consultation
                  </p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Embarking on your academic journey is a significant step, and
                our expert application consultation service is here to guide
                you. Whether you're applying for a master's program or an MBA,
                our seasoned consultants provide personalized advice to ensure
                your application stands out.
                {/* From crafting compelling personal
                statements to navigating admission requirements, trust us to
                streamline the process and maximize your chances of success. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">3</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Courses for Upskills
                  </p>
                  <p>Tailored Courses for Targeted Upskilling</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Empower yourself with our specialized courses designed for
                targeted upskilling. Whether you're looking to acquire technical
                expertise or enhance your leadership skills, our curated courses
                cater to diverse professional needs.
                {/* With industry-relevant
                content and expert instructors, each course is a step towards
                your personal and professional growth. Take charge of your
                career development with courses that align with your
                aspirations. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">4</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Campus Tours
                  </p>
                  <p>
                    Immerse Yourself in Future Possibilities with Campus Tours
                  </p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Get a firsthand look at your educational journey with our campus
                tours. Whether you're considering an advanced degree or
                exploring new upskilling opportunities, our virtual and
                in-person tours offer an immersive experience.
                {/* Discover
                state-of-the-art facilities, interact with faculty, and envision
                your academic future. Your path to success begins with a tour
                that opens doors to a world of possibilities. */}
              </Typography>
              <Link to={"#"}>
                <Button className="ml-11 mt-3 bg-primary flex gap-2 items-center">
                  Get Started Now <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <img
            alt="img"
            src={graduate2}
            className="xxs:hidden mt-[7rem] ss:block w-[35rem] ss:w-[28rem] "
          />
        </div>
        <img alt="img" src={step4} className="flex flex-col  md:ml-[20rem] " />

        {/* section fourth */}
        <div className="flex justify-between  items-start pt-10  rounded-3xl p-5 bg-[#ede9fb] ">
          <img
            alt="img"
            src={hrimage}
            className="xxs:hidden mt-[6rem] ss:block w-[25rem] lg:w-[35rem]"
          />
          <div>
            <div className="ml-[5rem]   border rounded-2xl  p-5">
              <Typography
                variant="h6"
                className=" flex items-center gap-2 text-white rounded-md w-fit bg-primary px-2 ml-[3.5rem] "
              >
                <MdPersonSearch /> Hiring Made Easy
              </Typography>
              <div className=" flex items-center gap-2  mt-1">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">1</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    End-to-End Hiring Services
                  </p>
                  <p>Our End-to-End Hiring Services Have You Covered</p>
                </div>
              </div>

              <Typography className="  text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Experience a seamless hiring process with our end-to-end
                services. We take care of everything, from crafting compelling
                job listings to conducting interviews and facilitating the
                onboarding process.
                {/* Let us handle the details so you can focus
                on what matters most – building a talented and motivated team. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-3">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">2</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    ZERO Fees for Job Listing
                  </p>
                  <p>Enjoy Zero Fees for Job Listings</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Budget constraints shouldn't limit your ability to find the
                right candidates. At Preferable, we believe in providing equal
                opportunities for all businesses.
                {/* Enjoy the
                freedom to post job listings without worrying about fees. Your
                perfect hire is just a click away, without any financial
                barriers. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">3</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    Application Tracking System
                  </p>
                  <p>Stay on Top of Applications with Our ATS</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Streamline your recruitment process with our intuitive
                Application Tracking System (ATS). Effortlessly manage and track
                applications in real-time.
                {/* From initial submission to the final
                decision, our ATS ensures that you have a clear and organized
                view of your hiring pipeline. Make informed decisions and hire
                with confidence. */}
              </Typography>
              <div className=" flex items-center gap-2  mt-5">
                <p className="bg-primary rounded-full text-white px-3 py-1 font-bold ">
                  <span className="text-lg">4</span>
                </p>{" "}
                <div className="ml-2">
                  <p className="text-primary font-poppins font-semibold text-2xl">
                    AI-Based Assessment
                  </p>
                  <p>Smart Hiring Decisions with AI-Based Assessment</p>
                </div>
              </div>

              <Typography className="text-justify mt-3 font-poppins font-extralight ml-12 max-w-[55rem]">
                Leverage the power of artificial intelligence for smarter
                hiring. Our AI-based assessment tools provide valuable insights
                into candidates' skills, ensuring a more informed
                decision-making process.
                {/* Identify top talent efficiently and
                effectively, saving time and resources while ensuring a better
                match for your organization. */}
              </Typography>
              <Link to={"#"}>
                <Button className="ml-11 mt-3 bg-primary flex gap-2 items-center">
                  Get Started Now <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img alt="img" src={step5} className="flex flex-col sm:ml-[18rem]" />
        <div className=" flex flex-col items-center pb-[6rem]">
          <p className="text-center text-3xl font-semibold font-poppins text-primary mt-2">
            The Result
          </p>
          <p className="text-primary mb-10 bg-[#e6f4f1] leading-8 p-5 rounded-3xl flex justify-center max-w-3xl text-justify font-poppins font-medium text-xl">
            At Preferable, we're not just a platform, we're architects of
            success. Students, TPOs, and HR professionals converge on our
            platform to orchestrate transformative journeys. From interactive
            bootcamps and skill-enhancing assignments to exclusive MS/MBA
            opportunities, we're the nexus for career growth. Elevate careers,
            discover top talent, and watch your business thrive. Join us in
            shaping futures and fostering success, because when students
            succeed, businesses flourish.
          </p>
          <div className="flex flex-wrap gap-5">
  <Card className="w-full sm:w-fit shadow-lg">
    <div className="flex flex-col sm:flex-row justify-between p-5 gap-5 items-center">
      <div className="px-2 bg-primary rounded-full py-2">
        <FaArrowTrendUp color="white" size={"45"} />
      </div>
      <div>
        <p className="text-3xl font-semibold text-primary font-poppins">
          11 LPA
        </p>
        <p className="text-lg font-poppins font-medium">Average CTC</p>
      </div>
    </div>
  </Card>

  <Card className="w-full sm:w-fit shadow-lg">
    <div className="flex flex-col sm:flex-row justify-between p-5 gap-5 items-center">
      <div className="px-2 bg-primary rounded-full py-2">
        <GiReturnArrow color="white" size={"45"} />
      </div>
      <div>
        <p className="text-3xl font-semibold text-primary font-poppins">
          40%
        </p>
        <p className="text-lg font-poppins font-medium">Return</p>
        <p className="text-lg font-poppins font-medium">on investment</p>
      </div>
    </div>
  </Card>

  <Card className="w-full sm:w-fit shadow-lg">
    <div className="flex flex-col sm:flex-row justify-between p-5 gap-5 items-center">
      <div className="px-2 bg-primary rounded-full py-2">
        <PiStudentBold color="white" size={"45"} />
      </div>
      <div>
        <p className="text-3xl font-semibold text-primary font-poppins">
          95%
        </p>
        <p className="text-lg font-poppins font-medium">Students</p>
        <p className="text-lg font-poppins font-medium">bag dream</p>
      </div>
    </div>
  </Card>
</div>

        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
