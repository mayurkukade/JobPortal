import { Card, CardBody, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import whatsapp from "../Images/homeImages/whatsapp-8.svg";
import { Spinner } from "@material-tailwind/react";

import  { useState,useRef } from "react";

import emailjs from "@emailjs/browser";
const StillHaveDout = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_z2dqrdr",
        "template_akvt99h",
        form.current,
        "PBa6HAOGgexX7XV_k"
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
      <div className="flex justify-center mt-[8rem] mb-10">
        <Card className="w-full max-w-[50rem] p-5 shadow-lg">
          <CardBody className="mb-6 p-0">
            <Typography
              variant="h3"
              className="text-center flex justify-center items-center"
            >
              <img src={whatsapp} alt="whats" className="w-10" /> Still in
              doubt? We are here to help you out!
            </Typography>
            <div className=" flex justify-center flex-col gap-3 items-center mt-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="w-72 ">
                  <Input className="text-black font-medium" label="Name" name="user_name" required />
                </div>
                <div className="w-72">
                  <Input
                    className="text-black font-medium"
                    name="mobile_number"
                    type="tel"
                    label="WhatsApp Number"
                    required
                  />
                </div>
                <div className="w-72">
                  <Input
                    className="text-black font-medium"
                    type="email"
                    name="user_email"
                    required
                    label="Email"
                  />
                </div>
                <Button
                  type="submit"
                  loading={loading}
                  className="mt-3 h-12 bg-primary"
                >
                {loading ? <Spinner className="h-6 w-6" /> : "Contact Us"}{" "}
                </Button>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default StillHaveDout;
