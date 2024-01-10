import groupGraduate from "../Compoments/Images/studyAbroad/graduate_group.jpg";
import allCountries from "../Compoments/Images/studyAbroad/faq_img.png";
import admission from "../Compoments/Images/studyAbroad/Admission-in-university (1) (1).png";
import christin from "../Compoments/Images/studyAbroad/christina-wocintechchat-com-I33FqpWCg-0-unsplash (1) (1).jpg";
import testPrepare from "../Compoments/Images/studyAbroad/testPreparationcourses.jpg";
import topuniversity from "../Compoments/Images/studyAbroad/top-10-universities-in-the-world.png";
import languageLearn from "../Compoments/Images/studyAbroad/admissionassistance.jpg";
import accomodation from "../Compoments/Images/studyAbroad/accomodation.jpg";
import studentvisa from "../Compoments/Images/studyAbroad/studentvisa.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import StudyAbroadMarquee from "../Compoments/studyAbroad/StudyAbroadMarquee";
import Cards from "../Compoments/Home/Cards";
import StillHaveDout from "../Compoments/Home/StillHaveDout";
const StudyABroad = () => {
  return (
    <section>
      <div className="flex flex-col relative justify-center align-middle items-center">
        <div className="bg-primary h-80 w-full">
          <p className="text-center text-white ss:mt-4 xxs:text-2xl xxs:p-10 ss:text-4xl ss:p-2   font-Montserrat font-semibold ">
            Elevate Your Education, Illuminate Your Future with Seamless
            Admission Abroad
          </p>
        </div>
        <div className="bg-white h-80 w-full"></div>

        <img
          alt="heroimg"
          src={groupGraduate}
          className="container mx-auto mt-[5rem] xxs:w-80 xxs:h-80 ss:h-[28rem] p-5 ss:w-[60rem]  absolute rounded-lg "
        />
      </div>
      <p className="text-center text-3xl text-primary font-Montserrat font-semibold mb-5">
        {" "}
        Explore Opportunities with Our Partner Universities
      </p>
      <StudyAbroadMarquee />
      <div className="grid ss:grid-cols-3 ss:grid-rows-1  gap-4 container mx-auto justify-center p-5 mt-5 ">
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                loading="lazy"
                src={allCountries}
                className="h-[17rem] w-full"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Country Information
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Provide detailed information about popular study destinations,
                including visa requirements, cost of living, cultural aspects,
                and quality of education.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={topuniversity}
                className="h-[17rem] w-full"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                University Search and Rankings
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Implement a search feature that allows students to explore
                universities based on their preferred criteria.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={admission}
                alt="ui/ux review check"
                className="h-[17rem] w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Admissions Assistance
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                I can guide you through document preparation, language tests,
                and application form submission, ensuring a smooth application
                process.{" "}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid ss:grid-cols-3 ss:grid-rows-1  gap-4 container mx-auto justify-center p-5 ">
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={studentvisa}
                className="h-[17rem] w-full"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Student Visa Assistance
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Offer information on visa application procedures, required
                documents, and tips for a successful visa application. Consider
                providing a step-by-step guide.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={accomodation}
                className="h-[17rem] w-full"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Accommodation Services
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Provide resources on finding suitable accommodation, such as
                on-campus housing, shared apartments, or homestays. Include
                information about the local housing market.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={languageLearn}
                className="h-[17rem] w-full"
                alt="ui/ux review check"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Language Preparation
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Offer resources and courses to help students improve their
                language proficiency, especially if the destination country has
                a different primary language.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid ss:grid-cols-3 ss:grid-rows-1  gap-4 container mx-auto justify-center p-5 ">
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="h-[17rem] w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Financial Planning
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Guide students on budgeting for their studies abroad, including
                tuition fees, living expenses, and potential scholarships or
                financial aid.{" "}
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={testPrepare}
                alt="ui/ux review check"
                className="h-[17rem] w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Test Preparation Courses
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Offer preparatory courses for standardized tests required for
                admissions, such as IELTS, TOEFL, GRE, or GMAT.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={christin}
                alt="ui/ux review check"
                className="h-[17rem] w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Job Placement Services
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Include information on part-time job opportunities for
                international students and post-graduation job placement
                services.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className=" bg-[#e6f4f1] mt-12 ">
        <div className="container mx-auto ss:flex gap-5 justify-center items-center p-5">
          <p className="xxs:text-3xl xxs:text-center ss:text-5xl font-Montserrat font-semibold text-primary mb-2">
            Our Mission
          </p>

          <p className="text-primary  bg-[#e6f4f1] leading-8 p-5 rounded-3xl flex justify-center max-w-3xl text-justify font-poppins font-medium text-xl">
            At Preferable, our mission is to empower aspiring students to pursue
            global education, fostering cultural exchange and academic
            excellence. We believe in creating opportunities that transcend
            borders, enabling individuals to broaden their horizons and thrive
            in an increasingly interconnected world.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 items-center  p-5">
        <div className="text-primary mb-10  leading-8  rounded-3xl flex flex-col bg-faintBackgroundBlue p-5 justify-center max-w-3xl text-justify font-poppins font-medium text-xl">
          <span className="text-center text-3xl mb-5 font-Montserrat font-semibold">
            Join Us on Your Academic Adventure
          </span>
          <p>
            {" "}
            Whether you're dreaming of earning a degree from a renowned
            institution, experiencing a new culture, or building a global
            network, Preferable is here to turn those dreams into reality. Your
            academic adventure begins with us – a partner dedicated to opening
            doors, broadening perspectives, and shaping a future filled with
            success.
          </p>
        </div>
      </div>
<div className="mt-10">
<Cards />
</div>
    
      <StillHaveDout />
    </section>
  );
};

export default StudyABroad;
