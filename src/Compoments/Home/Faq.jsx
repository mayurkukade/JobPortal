import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function Faq() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
<>
<Typography
          variant="h1"
          className="text-center pt-[8rem] text-primary mb-10  "
        >
          Frequently Asked Questions
        </Typography>
        <div className="container mx-auto w-full flex justify-center p-5 mb-10">
     
    <div className="max-w-xl">
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Preferable?</AccordionHeader>
        <AccordionBody>
        Preferable is a comprehensive platform dedicated to student recruitment, upskilling education, and career development. We connect students with opportunities and resources to enhance their skills and launch successful careers.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        How can I sign up on Preferable?
        </AccordionHeader>
        <AccordionBody>
        Signing up is easy! Click on the "Sign Up" button on the homepage, fill in your details, and create an account to access our range of services.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What courses are available for upskilling?
        </AccordionHeader>
        <AccordionBody>
        Our platform offers a variety of courses covering a wide range of skills, from technical subjects to soft skills. Explore our course catalog to find the perfect fit for your goals.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        What is the benefit of AI-based assessments for job seekers?
        </AccordionHeader>
        <AccordionBody>
        AI-based assessments provide job seekers with a fair and objective evaluation of their skills, helping employers make informed decisions. It enhances the hiring process for both candidates and companies.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        How do AI-based assessments impact the hiring process for employers?
        </AccordionHeader>
        <AccordionBody>
        Employers can identify top talent efficiently using AI-based assessments. It streamlines the screening process and ensures a more accurate match between candidates and job requirements.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        Is there personalized career guidance available?
        </AccordionHeader>
        <AccordionBody>
        Yes, our platform offers personalized career guidance services. Connect with experienced mentors who can provide insights and advice tailored to your specific career goals.
        </AccordionBody>
      </Accordion>

    </div>
      
    </div>
</>
    
  );
}