import groupGraduate from "../Compoments/Images/mentor/feamale_graduate.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
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
          className="container mx-auto mt-[5rem] xxs:w-80 xxs:h-80 ss:h-[30rem] ss:w-[60rem]  absolute rounded-lg "
        />
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
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
                Offer guidance on the application process, including document
                preparation,language proficiency tests, and submission
                deadlines. Provide assistance in filling out application forms.
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
                Offer information on visa application procedures, required documents, and tips for a successful visa application. Consider providing a step-by-step guide.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
               Provide resources on finding suitable accommodation, such as on-campus housing, shared apartments, or homestays. Include information about the local housing market.

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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                Offer resources and courses to help students improve their language proficiency, especially if the destination country has a different primary language.
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
Guide students on budgeting for their studies abroad, including tuition fees, living expenses, and potential scholarships or financial aid.              </Typography>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
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
              Offer preparatory courses for standardized tests required for admissions, such as IELTS, TOEFL, GRE, or GMAT.

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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
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
                Include information on part-time job opportunities for international students and post-graduation job placement services.
              </Typography>
            </CardBody>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default StudyABroad;
