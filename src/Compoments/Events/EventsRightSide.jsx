import starupStats from "../../Compoments/Images/eventsImg/startup-stats.png";
import { Button, Card, Typography } from "@material-tailwind/react";
import sumit from '../Images/mentor/Sumit Jadhav.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  CardHeader,
  CardBody
} from "@material-tailwind/react";

const TABLE_ROWS = [
  {
    name: "Details",
    job: "6 Months🗓️",
  },
  {
    name: "Masterclass Frequency",
    job: "Saturdays and Sundays (timings adjusted as per participants’ convenience)⏳",
  },
  {
    name: "Venue",
    job: "Fully Online💻",
  },
  {
    name: "Fees",
    job: "INR 5000 /- Month Only💳",
  },
  {
    name: "First Session Commencement",
    job: "March 16, 2024⏰",
  },
  {
    name: "Seats",
    job: "Limited Seats (for small focus groups)🧑‍💻",
  },
];
const TABLE_ROWS2 = [
  {
    name: "Essay Submission",
    job: "Kick off your journey by sharing your story and future goals in a 1000-word essay",
  },
  {
    name: "Psychometric Tests",
    job: "Engage in thorough psychometric and aptitude assessments, evaluated by professionals for personalized insights",
  },
  {
    name: "Industry-Specific Assessments",
    job: "Take verbal and written assessments tailored to your chosen industry",
  },
  {
    name: "Mentorship Matching",
    job: "Receive end-to-end mentorship from mentors like Sumit Jadhav, CEO of Optical Arc Pvt Ltd",
  },
  {
    name: "Additional Courses",
    job: "Get access to a variety of invaluable mentor-backed courses like Business and Financial Modeling, Understanding Entrepreneurship and Start-Ups, and Presenting Your Ideas through Business Communication",
  },
];
const TABLE_ROWS3 = [
  {
    name: "Ideation Phase💡",
    job: "Cultivate and refine your entrepreneurial idea from 0 to 1; build your Minimal Viable Product (MVP) and develop your pitch deck",
  },
  {
    name: "Incubation Phase⚙️",
    job: "Craft a tangible prototype ready for market testing; build software and tech infrastructures ",
  },
  {
    name: "Acceleration Phase📈",
    job: " Formulate your Go To Market (GTM) strategies; perfect your Product-Market Fit; explore funding opportunities for your venture",
  },
  {
    name: "Corporate Phase💰",
    job: "Collaborate with industry-specific investors and seasoned entrepreneurs; discover avenues to present your business as a sustainable and financially viable enterprise",
  },
];

const EventsRightSide = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col mt-3 ">
      <Typography variant="h3" className="text-center">
        Welcome to <span className="text-primary ">Preferable’s</span> Company
        Kickstarter: Elevating Your Entrepreneurial Aspirations! 🚀
      </Typography>
      <p className="mt-5 text-lg mb-2 text-center text-navyblue font-Montserrat font-semibold">
        Program Details: When, Where, and How🗒️:{" "}
      </p>
      <div className="flex justify-center">
        <Card className="h-full w-full md:w-fit">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <tbody>
                {TABLE_ROWS.map(({ name, job }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const rowClasses = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  const nameClasses = "font-medium md:w-[8rem] md:p-3 ";
                  const jobClasses = "font-normal p-1";

                  return (
                    <tr key={name} className={rowClasses}>
                      <td className={nameClasses}>
                        <Typography variant="h6" color="blue-gray">
                          {name}
                        </Typography>
                      </td>
                      <td className={`${jobClasses} md:bg-blue-gray-50/50 `}>
                        <Typography variant="paragraph" color="blue-gray">
                          {job}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <Typography className="p-5 text-xl text-balance mt-10 ">
        India, with the third largest startup ecosystem globally, is a thriving
        hub for entrepreneurial ventures. Embracing a consistent annual growth
        of 12-15%, the Indian startup landscape is dynamic and promising. In
        2018, the country boasted around 50,000 startups, with approximately
        8900-9300 being technology-led. The momentum continued in 2019,
        witnessing the birth of 1300 new tech startups, equivalent to 2-3
        startups each day. Fast forward to 2023, and the Indian startup
        ecosystem is more robust than ever.
      </Typography>

      <section className="text-center text-balance p-5 text-xl">
        <p>
          The graph below illustrates the whopping increase in the number of
          startups in India from 2016 to 2022.
        </p>
        <div className="flex justify-center m-5 p-5">
          <img src={starupStats} alt="stats" />
        </div>

        <p>
          With such a vibrant backdrop, Preferable introduces “Company
          Kickstarter”, a program designed to elevate your entrepreneurial
          aspirations and tap into the thriving Indian startup wave.
        </p>
      </section>

      <section>
        <Typography variant="h4"> Program Overview:</Typography>
        <div className="flex justify-center mt-1 mb-10">
          <Card className="h-full w-full md:w-fit">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left">
                <tbody>
                  {TABLE_ROWS2.map(({ name, job }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const rowClasses = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    const nameClasses = "font-medium md:w-[8rem] md:p-3 ";
                    const jobClasses = "font-normal p-1 w-[40rem]";

                    return (
                      <tr key={name} className={rowClasses}>
                        <td className={nameClasses}>
                          <Typography variant="h6" color="blue-gray">
                            {name}
                          </Typography>
                        </td>
                        <td className={`${jobClasses} md:bg-blue-gray-50/50 `}>
                          <Typography variant="paragraph" color="blue-gray">
                            {job}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>
      <section>
        <Typography variant="h4">Program Phases:</Typography>
        <div className="flex justify-center mt-1 mb-10">
          <Card className="h-full w-full md:w-fit">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left">
                <tbody>
                  {TABLE_ROWS3.map(({ name, job }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const rowClasses = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    const nameClasses = "font-medium md:w-[8rem] md:p-3 ";
                    const jobClasses = "font-normal p-1 w-[40rem]";

                    return (
                      <tr key={name} className={rowClasses}>
                        <td className={nameClasses}>
                          <Typography variant="h6" color="blue-gray">
                            {name}
                          </Typography>
                        </td>
                        <td className={`${jobClasses} md:bg-blue-gray-50/50 `}>
                          <Typography variant="paragraph" color="blue-gray">
                            {job}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-5">
        <Typography variant="h4">Meet Your Chief Mentor:</Typography>
        <div className="flex justify-center mt-2">
          {/* <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem] mt-5"
          >
            <CardHeader
              color="transparent"
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
                  <Typography variant="h5" color="blue-gray">
                    Sumit Jadhav
                  </Typography>
                  <div className="5 flex items-center gap-0"></div>
                </div>
                <Typography color="blue-gray">
                  CEO @ Optical Arc Pvt Ltd.
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                As a self-made entrepreneur and currently the CEO of Optical Arc
                Pvt Ltd, Sumit Jadhav brings over 8 years of rich experience in
                various entrepreneurial domains such as Flipkart, Toppr,
                Electricpe, and Udaan. His proactive and achievement-oriented
                approach, coupled with a focus on customer experience,
                innovation, and efficiency, makes him the perfect chief guiding
                force for your entrepreneurial journey.
              </Typography>
            </CardBody>
          </Card> */}
          <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={sumit}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                Tania Andrew
              </Typography>
              <Typography color="blue-gray" variant="h6">
                Frontend Lead @ Google
              </Typography>
              <Typography color="blue-gray" className="mt-2">
                As a self-made entrepreneur and currently the CEO of
                <Link to={"https://www.opticalarc.com/"}>
                  {" "}
                  <span className="text-primary"> Optical Arc Pvt Ltd</span>
                </Link>{" "}
                , Sumit Jadhav brings over 8 years of rich experience in various
                entrepreneurial domains such as Flipkart, Toppr, Electricpe, and
                Udaan. His proactive and achievement-oriented approach, coupled
                with a focus on customer experience, innovation, and efficiency,
                makes him the perfect chief guiding force for your
                entrepreneurial journey.
              </Typography>
              <div className="flex  mt-5 ">
            <Link to="https://www.linkedin.com/in/sumit-jadhav-b4993937/" >
              <FaLinkedin size={25} color="blue" />
              </Link>
             
              </div>
              
            </CardBody>
          </Card>
        </div>
      </section>
      <section className="p-5 text-xl text-balance mt-10 text-center ">
        <p>
          Enroll in Preferable’s Company Kickstarter program today and let your
          entrepreneurial journey begin!
        </p>
        <div className="flex justify-center  flex-col mt-8">
          <p className="  text-center text-xl">
            Register Now for the First Session commencing on March 16, 2024
            TODAY by Clicking on the Link Below👇
          </p>
        </div>
        <div className="flex justify-center">
          <Button className="w-fit mt-2 bg-primary">Register Now</Button>
        </div>
        <p className="mt-5 text-center">
          For more information regarding Preferable’s services,
          <br />
          please visit:
      
          <Link to="https://preferable.co.in/"  target="_blank" >
            <span className="text-2xl text-primary">Preferable</span>{" "}
          </Link>
        </p>
      
      </section>
      <p>
          You can also visit our social media handles for a more comprehensive
          understanding about Preferable:
        </p>
        <div className="flex gap-1 justify-center mt-5">
        <Link to="https://www.linkedin.com/in/sumit-jadhav-b4993937/">
          {" "}
          <FaLinkedin size={25} color="blue" />{" "}
        </Link>
        <Link to="https://www.instagram.com/preferable_crafting_careers/?hl=en">
          {" "}
          <FaInstagramSquare size={25} color="red" />
        </Link>
        <Link to="https://twitter.com/Preferable_edu">
          {" "}
          <FaSquareXTwitter size={25} color="black" />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61555474696142">
          {" "}
          <FaFacebookSquare size={25} color="blue" />
        </Link>
        <Link to="https://www.youtube.com/channel/UCyVNBzY69OnzZKg2WI9oNlg">
          {" "}
          <IoLogoYoutube size={25} color="red" />
        </Link>
        
      
       

       
      </div>
    </div>
  );
};

export default EventsRightSide;
