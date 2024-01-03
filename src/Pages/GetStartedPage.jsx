import { Button, Input } from "@material-tailwind/react";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const GetStartedPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ik9vhy8",
        "template_kk8z3cr",
        form.current,
        "pKSapdiBTt527GzRH"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("You get reply within 24 hours");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <p className="text-primary text-3xl mx-auto container mt-10 mb-10 ">
        "Empowering Students, Connecting Recruiters, Guiding Training, and
        Facilitating Placement: Your Pathway to Success!"
      </p>
      <div className="mx-auto container p-5 bg-primary mb-10">
        <form className="m-5 sm:m-10" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-5">
            <div className="w-full sm:w-72 mb-5 sm:mb-0">
              <p className="text-gray-200">First Name</p>
              <Input className="text-white" name="user_name" required />
            </div>
            <div className="w-full sm:w-72">
              <p className="text-gray-200">Last Name</p>
              <Input className="text-white" name="last_name" required />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-5">
            <div className="w-full sm:w-72 mb-5 sm:mb-0">
              <p className="text-gray-200">Mobile</p>
              <Input className="text-white" name="mobile_number" type="tel" required />
            </div>
            <div className="w-full sm:w-72">
              <p className="text-gray-200">Email</p>
              <Input className="text-white" type="email" name="user_email" required />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-5">
            <div className="w-full sm:w-72 mb-5 sm:mb-0">
              <p className="text-gray-200">Select Your Role</p>
              <select
                className="w-full rounded-lg mt-2 bg-primary border text-white h-10"
                name="user_role"
              >
                <option value="Student">Student</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Training Placement Officer">
                  Training Placement Officer
                </option>
                <option value="Mentor">Mentor</option>
              </select>
            </div>
            <div className="w-full sm:w-72">
              <p className="text-gray-200">What are you looking for</p>
              <select
                className="w-full rounded-lg mt-2 bg-primary border text-white h-10"
                name="user_service"
              >
                <option value="jobs">Jobs</option>
                <option value="bootcamp">Bootcamp</option>
                <option value="MS/MBA">MS/MBA</option>
                <option value="Hiring/Post JObs">Hiring/Post Jobs</option>
                <option value="Mentor">Mentor</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-5">
            <div className="w-full sm:w-[40rem] mt-5">
              <p className="text-gray-200">How can we help?</p>
              <Textarea className="text-white" name="message" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="p-5 bg-white text-primary flex items-center "
              loading={loading}
              type="submit"
            >
              {loading ? <Spinner className="h-6 w-6" /> : "Get Started"}{" "}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetStartedPage;
