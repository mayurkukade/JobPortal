import React from 'react'
import { motion } from "framer-motion";
import {
    Input,
    Button,
  } from "@material-tailwind/react";

export default function Certificates({certificate1,univercity1,timespan12,timespan11,category1,workable1,setcertificate1,setunivercity1,settimespan12,settimespan11,setcategory1,setworkable1,deletecertificate}) {
  return (
    <div className='flex justify-center'>
        
              <motion.div
                className="mt-3"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, stiffness: 30, type: "spring" }}
              >
                <div className="bg-gray-100 py-2 sm:w-[81.25rem] w-full">
                  <p className="pl-2">Certifications</p>
                </div>

                {/* main part start */}

                <div className="mt-5">
                  <div className="flex">
                    <label className="mt-2"> Certification :- </label>
                    <div className="md:ml-[10rem] ml-[4rem] sm:w-72 w-[12rem]">
                      <Input
                        label="Certification"
                        value={certificate1}
                        onChange={(e) => setcertificate1(e.target.value)}
                      />
                    </div>
                  </div>
                 

                  <div className="flex mt-5">
                    <label className="mt-2"> Institute :- </label>
                    <div className="md:ml-[11.8rem] sm:w-72 ml-[5.8rem] w-[12rem]">
                      <Input
                        label="Institute"
                        value={univercity1}
                        onChange={(e) => setunivercity1(e.target.value)}
                      />
                    </div>
                  </div>
                 

                  <div className="flex mt-5">
                    <label className="mt-2"> Duration :- </label>
                    <div className="flex flex-wrap">
                      <div className="md:ml-[11.5rem] sm:w-72 ml-[6.5rem]">
                        <Input
                          label="From"
                          type="date"
                          value={timespan12}
                          onChange={(e) => settimespan12(e.target.value)}
                        />
                      </div>
                      
                      <div className="md:ml-[3rem] sm:w-72 ml-[6.5rem] md:mt-0 mt-5">
                        <Input
                          label="To"
                          type="date"
                          value={timespan11}
                          onChange={(e) => settimespan11(e.target.value)}
                        />
                      </div>
                    </div>
                   
                  </div>

                  <div className="flex mt-5">
                    <label className="mt-2"> Type :- </label>
                    <div className="md:ml-[11.8rem] md:w-72 w-[12.5rem] ml-[6rem] ">
                      <select
                        className="border border-gray-400 px-2 py-[.6rem] ml-5 w-full rounded-md"
                        onChange={(e) => {
                          if (e.target && e.target.value) {
                            setcategory1(e.target.value);
                          }
                        }}
                        value={category1}
                      >
                        <option value=" ">Select</option>
                        <option value="Online self paced">
                          Online self paced
                        </option>
                        <option value="Online instruction led">
                          Online instruction led
                        </option>
                        <option value="Blended (Online + Classroom)">
                          Blended (Online + Classroom)
                        </option>
                        <option value="Classroom">Classroom</option>
                      </select>
                    </div>
                  </div>
                 

                  <div className="flex mt-5">
                    <label className="mt-2"> Valid :- </label>
                    <div className="md:ml-[13.1rem] sm:w-72 ml-[7.2rem]">
                      <Input
                        label="Valid till"
                        type="date"
                        value={workable1}
                        onChange={(e) => setworkable1(e.target.value)}
                      />
                    </div>
                  </div>
                
                  <div className="mt-5 sm:ml-[16.875rem] ml-[8rem]">
                  <Button onClick={deletecertificate}>Delete</Button>
                </div>

                </div>
              </motion.div>
    </div>
  )
}
