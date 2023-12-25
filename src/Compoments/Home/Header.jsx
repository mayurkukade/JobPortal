
import { Button } from "@material-tailwind/react";
import preferable from "../Images/preferable2.png";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div className="flex bg-background dark:bg-dark container mx-auto ">
      {/* left side of container */}
      <div className="md:pt-20 md:mb-8  md:spl-[50px]  ">
        <p className=" md:text-6xl font-[Poppins] font-semibold dark:text-white text-text xl:text-8xl ">
          We Help
          <div className="pt-3">
            <span className="text-accent    ">You</span>  To Carft
          </div>
          <div className="pt-3">
           Your  <span className="text-accent ">Career</span>
          </div>
        </p>

        <p className="mt-10 dark:text-white font-[Poppins] md:text-2xl xl:text-2lg">
          Join us and take your career to the <br /> next level.
        </p>

        <div className="flex md:mt-[3rem] gap-4 ">
          <Button
            className="bg-white text-primary"
            size="lg"
          >
            How does it work?
          </Button>
          <Button
           className="bg-primary text-white"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Right side of container */}

      <div className="hidden md:block  ">
        <img
          className=" md:h-[32.5rem]  md:w-[41.875rem] md:right-0   xl:w-[60rem] xl:h-[46.375rem] absolute  "
          src={preferable}
          alt="image"
        />
      </div>
    </div>
  );
}
