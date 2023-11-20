import  { useEffect,useState } from "react";
// import Location from "../Images/location.svg";
// import down from "../Images/down.svg";
import { motion } from "framer-motion";
import { Input } from "@material-tailwind/react";
import ReactTextTransition, { presets } from "react-text-transition";
export default function JobHeader() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'ACCESS',
    'CONNECTIONS',
    'JOBS',
    'OPPORTUNITYS'
  ]
  const getRandomInt = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(()=>{
    let interval = setInterval(()=>{
      setTextIndex(getRandomInt(0, texts.length));
    },2000)
    return () => {
      clearInterval(interval);
    };
  },[texts.length])
  return (
    <div className="bg-darkBlueBackground md:h-[18rem]  ">
      <div className="container mx-auto p-5">
        <p className=" md:text-[2rem] text-[20px] font-Inter text-[#FFF]  ">
          Find Better 
          <section className="inline">
          <ReactTextTransition
            springConfig={presets.gentle}
            className="big"
            delay={200}
            inline
          >
          &nbsp;<span className="text-accent font-semibold">
          { texts[textIndex]}
          </span>  
          </ReactTextTransition>
        
        </section>
        </p>
        <p className=" md:text-[1.25rem] text-[15px] text-[#a5b4fc] font-Inter  mt-2">
          Preferable helps you find the perfect job for you.
        </p>

        <div className="flex flex-wrap mt-5 gap-5">
          <div className="  rounded-md flex items-center ">
            <Input
              placeholder="Job Title,Keywords or Company Name"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div>
          <div className="  rounded-md flex items-center ">
            <Input
              placeholder="City Or State"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div>
          <div className="  rounded-md flex items-center ">
            <Input
              placeholder="Experiance"
              slotProps={{
                input: {
                  className:
                    " bg-white text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
                },
              }}
              className="bg-white h-[52px] w-[23rem]"
            />
          </div>
        </div>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            className=" text-white  font-[Poppins] md:w-40  md:h-10 xl:w-[12rem]  md:mt-6 md:text-lg xl:text-xl  font-bold bg-secondary rounded-md"
          >
            Find
          </motion.button>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            className=" text-white ml-5 font-[Poppins] md:w-40  md:h-10 xl:w-[12rem]  md:mt-6 md:text-lg xl:text-xl  font-bold bg-secondary rounded-md"
          >
            Reset
          </motion.button>
        
      </div>
   
    </div>
  );
}
