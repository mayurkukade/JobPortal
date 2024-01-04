import React from "react";
import { Chip } from "@material-tailwind/react";
import { FaListCheck } from "react-icons/fa6";
const AboutSection = () => {
  return (
    <div className="mx-auto container">
      <p className="text-lg font-poppins font-medium">What you'll learn</p>
      <ul className="flex">
        <li>
          <div className="flex gap-2">
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>
              Describe what is AI, its applications, use cases, and how it is
              transforming our lives
            </p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>
              Describe what is AI, its applications, use cases, and how it is
              transforming our lives
            </p>
          </div>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <div className="flex gap-2">
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>
              Describe what is AI, its applications, use cases, and how it is
              transforming our lives
            </p>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p>
              Describe what is AI, its applications, use cases, and how it is
              transforming our lives
            </p>
          </div>
        </li>
      </ul>

      <p className="text-lg font-poppins font-medium mt-5 mb-2">
        Skills you'll gain
      </p>
      <div className="flex gap-2">
        <Chip
          variant="outlined"
          value="Artificial Intelligence(AI)"
          className="w-fit"
        />
        <Chip variant="outlined" value="Data Science" className="w-fit" />
        <Chip variant="outlined" value="Machine Learning" className="w-fit" />
        <Chip variant="outlined" value="Deep Learning" className="w-fit" />
      </div>

      <p className="text-lg font-poppins font-medium mt-5">Assessments</p>
      <div className="flex items-center gap-2">
      <FaListCheck />
      <p>4 quizzes</p>
      </div>
      
    </div>
  );
};

export default AboutSection;
