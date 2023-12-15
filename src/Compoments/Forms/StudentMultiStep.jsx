
import React from 'react'
import { Input,Select,Option, Button,Checkbox, Textarea } from "@material-tailwind/react";
import { CiCamera } from "react-icons/ci";
import {motion} from 'framer-motion'


export default function StudentMultiStep() {
    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);
    const [step3, setStep3] = React.useState(false);
    const [step4, setStep4] = React.useState(false);
    const [step5, setStep5] = React.useState(false);

   

    const togglestep2 = () => {
        setStep1(true);
        setStep2(false);
        setStep3(false);
        setStep4(false);

        document.getElementById('Personal').setAttribute("style","background : #fc7f03");
        document.getElementById('Education').removeAttribute("style");
        document.getElementById('Profesional').removeAttribute("style");
        document.getElementById('Resume').removeAttribute("style");
      };
    
      const togglestep3 = () => {
        setStep1(false);
        setStep2(true);
        setStep3(false);
        setStep4(false);

        document.getElementById('Education').setAttribute("style","background : #fc7f03");
        document.getElementById('Personal').removeAttribute("style");
        document.getElementById('Profesional').removeAttribute("style");
        document.getElementById('Resume').removeAttribute("style");
        
      };
      const togglestep4 = () => {
        setStep1(false);
        setStep2(false);
        setStep3(true);
        setStep4(false);

        document.getElementById('Profesional').setAttribute("style","background : #fc7f03");
        document.getElementById('Personal').removeAttribute("style");
        document.getElementById('Education').removeAttribute("style");
        document.getElementById('Resume').removeAttribute("style");
      };
      const togglestep5 = () => {
        setStep1(false);
        setStep2(false);
        setStep3(false);
        setStep4(true);
        
        document.getElementById('Resume').setAttribute("style","background : #fc7f03");
        document.getElementById('Personal').removeAttribute("style");
        document.getElementById('Education').removeAttribute("style");
        document.getElementById('Profesional').removeAttribute("style");
      };
      const togglestep6 = () => {
      
        
      };
      const togglestep7 = () => {
   
      };
      const togglestep8 = () => {
   
      };

      function handleSubmit(e) {
        e.preventDefault();
    
        // Validation code
    
        // if (name.length < 4) {
        //   alert("First Name should at least four char");
        //   return; 
        // }
    
        // if (number.length < 10 || number.length >= 11) {
        //   alert(" Mobile Number only ten number ");
        //   return; 
        // }
    
    
        // First card
        // console.log("name :-  " + name);
        // console.log("number :-  " + number);
        // console.log("email :-  " + email);
        // console.log("company :-  " + company);
        // console.log("freshorexpradio :-  " + freshorexpradio);
        // console.log("startdate :-  " + startdate);
        // console.log("enddate :-  " + enddate);
    
        // Second Card
        // console.log("qualification :-  " + qualification);
        // console.log("specialization :-  " + specialization);
        // console.log("courseradio :-  " + courseradio);
        // console.log("startdate1 :-  " + startdate1);
        // console.log("enddate1 :-  " + enddate1);
        // console.log("developer :-  " + developer);
    
        // //Third Card
        // console.log("discribe :-  " + discribe);
        // console.log("salary :-  " + salary);
        // console.log("gender :-  " + gender);
    
        
        // Reset Value
        // setName(" ");
        // setNumber(" ");
        // setEmail(" ");
        // setCompany(" ");
        // setFreshorexpradio(" ");
        // setStartdate(" ");
        // setEnddate(" ");
    
        // setQualification(" ");
        // setSpecialization(" ");
        // setCourseradio(" ");
        // setStartdate1(" ");
        // setEnddate1(" ");
        // setDeveloper(" ");
    
        // setDiscribe(" ");
        // setSalary(" ");
        // setGender(" ");
    
      }
    
  return (
    <div className='flex'>
        <div className='mt-10 ml-2'>
           <div className='flex'>

            <motion.div id='Personal' whileHover={{scale : 1.1}}  onClick={togglestep2} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Personal Details</p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Education' whileHover={{scale : 1.1}} onClick={togglestep3} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Education</p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Profesional' whileHover={{scale : 1.1}} onClick={togglestep4} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Profesional Details</p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Resume' whileHover={{scale : 1.1}} onClick={togglestep5} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Resume </p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Certifications' whileHover={{scale : 1.1}} onClick={togglestep6} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Certifications</p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Skill' whileHover={{scale : 1.1}} onClick={togglestep7} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Skill & Recommendations</p>
            </motion.div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <motion.div id='Information' whileHover={{scale : 1.1}} onClick={togglestep8} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Additional Information</p>
            </motion.div>

           </div>
            {/* Form start */}
            <div className='border-gray-100 border mt-5'>
        <form onSubmit={handleSubmit}>

        {/* first part */}
        {step1 && (
          <motion.div className='flex'  initial ={{x : '-100vw'}}
          animate ={{x : 0}}
          transition={{delay : 0.2 , stiffness : 30, type : 'spring' }}>
             {/* Main Code start */}
            <div className=''>
               <div className='bg-gray-100 py-2 w-[1300px]   '>
                 <p className='pl-2'>Personal Details</p>
               </div>

               <div className='flex'>
                 <div className='flex'>
                    <label htmlFor="" className='mt-5'>Profile Picture :-</label>
                    <div className='w-20 h-20 rounded-full border-gray-100 border ml-[100px]'>
                    <CiCamera className='w-10 h-10 mt-4 ml-4' />
                    <div className='pl-2 py-1 rounded-md bg-orange-600'>
                      <button className='text-xs'>Add Picture</button>
                    </div>
                    
                    </div>

                 </div>

                 <div className='ml-[550px]'>
                    <div className='flex mt-3'>
                     <label className='mt-2'>Phone :-</label>
                    
                    <div className='w-72 ml-[85px]'>
                        <Input type='number' label='Enter Mobile Number'/>
                    </div>
                       
                    </div>
                    <div>
                    <div className='flex mt-5'>
                     <label className='mt-2'>Industries :-</label>
                    
                    <div className='w-72 ml-16'>
                        <Input type='number' label='Industries'/>
                    </div>
                       
                    </div>
                    </div>
                </div>

               </div>

               <div className='flex mt-5'>
                  <p>Name : - </p>
                  <div className='w-72 ml-28'>
                     <Input type='text' label='Enter Name'/>
                  </div>
                   <div className='flex ml-[380px]'>
                     <p>Functional Area :- </p>
                      <div className='ml-7 w-72'>
                        <Select label='Functional Area'>
                            <Option>A</Option>
                            <Option>B</Option>
                            <Option>c</Option>
                        </Select>
                      </div>
                   </div>
     
               </div>

               <div className='flex mt-5'>
                 <p>Gender : - </p>
                 <div className='w-72 ml-[100px]'>
                    <Select label='Select'>
                      <Option>Male</Option>
                      <Option>Female</Option>
                    </Select>
                </div> 

                <div className='flex ml-[380px]'>
                     <p>Notice Period :- </p>
                      <div className='ml-12 w-72'>
                        <Select label='Notice Period'>
                            <Option>1 month</Option>
                            <Option>2 months</Option>
                            <Option>3 months</Option>
                        </Select>
                      </div>
                   </div>
               </div>

               <div className='flex mt-5'>
                 <p>D.O.B.</p>
                 <div className='w-72 ml-32 '>
                    <Input type='date'/>
                 </div> 

                 <div className='flex ml-[380px]'>
                     <p>Experience :- </p>
                      <div className='ml-[60px] w-72'>
                        <Select label='Experience'>
                            <Option>1 month</Option>
                            <Option>2 months</Option>
                            <Option>3 months</Option>
                        </Select>
                      </div>
                   </div>  
               </div>

               <div className='flex mt-5'>
                 <p>Current Location :- </p>
                 <div className='w-72 ml-[40px]'>
                    <Select label='Select'>
                      <Option>Delhi</Option>
                      <Option>Mumbai</Option>
                      <Option>Chennai</Option>
                      <Option>Pune</Option>
                      <Option>Nagpur</Option>
                      <Option>Amravati</Option>
                    </Select>
                </div> 
                <div className='flex ml-[380px]'>
                     <p>Anual Salary :- </p>
                      <div className='ml-[54px] w-72'>
                        <Select label='Anual Salary'>
                            <Option>1 LPA</Option>
                            <Option>2 LPA</Option>
                            <Option>3 LPA</Option>
                        </Select>
                      </div>
                   </div> 
                
               </div>

               <div className='flex mt-5'>
                 <p>Preffered Location :- </p>
                 <div className='w-72 ml-7 '>
                    <Input type='text' label='Location'/>
                 </div> 

                 <div className='flex ml-[380px]'>
                     <p>Expected Salary :- </p>
                      <div className='ml-[30px] w-72'>
                        <Select label='Anual Salary'>
                            <Option>1 LPA</Option>
                            <Option>2 LPA</Option>
                            <Option>3 LPA</Option>
                        </Select>
                      </div>
                   </div>   
               </div>

               <div className='mt-10 flex justify-center  '>
                 <Button className='bg-orange-900 ' onClick={togglestep3}>Save & Next </Button>
               </div>
            </div>
       
          </motion.div>
        )}

        {/* first part end */}

        {/* Second part Start */}

        {step2 && (
          <motion.div className='ml-2'  initial ={{x : '-100vw'}}
          animate ={{x : 0}}
          transition={{delay : 0.2 , stiffness : 30, type : 'spring' }}>
            <div className='bg-gray-100 py-2 w-[1300px]   '>
                 <p className='pl-2'>Education</p>
            </div>

            <div className='flex '>
               <div className='flex'>
                <label htmlFor="" className='mt-7'>Institute : -</label>
                <div className='ml-48 w-72 mt-5'>
                  <Input className='' type='text' label='Institute'/>
                </div>
                 
               </div>

               <p className='ml-3 text-orange-800 text-sm mt-7'>Edit</p>
               <Checkbox label="This is the most relevent & Important qualification" className='ml-10' />
            </div>
              
              <div className='flex mt-5'>
                <p>Batch : - </p>
                  <div className='ml-52 w-72'>
                    <Select label='YYYY'>
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                  </div>
                  <p className='ml-5 mt-2'>To</p>
                  <div className='ml-14 w-72'>
                    <Select label='YYYY'>
                      <Option>2020</Option>
                      <Option>2021</Option>
                      <Option>2022</Option>
                      <Option>2023</Option>
                    </Select>
                  </div>
              </div>

              <div className='flex mt-5'>
              <p>Course type : - </p>
                  <div className='ml-[165px] w-72'>
                    <Select label='Select'>
                      <Option>A</Option>
                      <Option>B</Option>
                      <Option>C</Option>
                      <Option>D</Option>
                    </Select>
                  </div>
               </div>

               <div className='flex mt-5'>
                <p>Degree : - </p>
                  <div className='ml-[200px] w-72'>
                    <Select label='Select'>
                      <Option>A</Option>
                      <Option>B</Option>
                      <Option>C</Option>
                      <Option>D</Option>
                    </Select>
                  </div>
               </div>
                 
                 <div className='mt-5 ml-[270px]'>
                   <Button>+ Add Degree</Button>
                 </div>

                 <div className='mt-5 ml-[600px] flex'>
                  <div>
                  <Button variant='outlined' onClick={togglestep2}>Back</Button>
                  </div>
                  <div className='ml-3'>
                  <Button className='bg-orange-800' onClick={togglestep4}>Save & Next </Button>
                  </div>
                  
                 </div>
               
          </motion.div>
        )}

        {/* Second part End */}

        {/* Third Part Start */}

        {step3 && (
           <motion.div className='ml-2'  initial ={{x : '-100vw'}}
           animate ={{x : 0}}
           transition={{delay : 0.2 , stiffness : 30, type : 'spring' }}>
           <div className='bg-gray-100 py-2 w-[1300px]   '>
                <p className='pl-2'>Professional Details</p>
           </div>

           <div className='flex '>
              <div className='flex'>
               <label htmlFor="" className='mt-7'>Designation : -</label>
               <div className='ml-44 w-72 mt-5'>
                 <Input className='' type='text' label='Enter Value'/>
               </div>
                
              </div>

              <div className='ml-10 mt-4'>
              <Checkbox label="I Currently work here"  />
              </div>
              
           </div>
             
             <div className='flex mt-5'>
               <p>Organization : - </p>
                 <div className='ml-[165px] w-72'>
                   <Input type='text'/>
                 </div>
                 <p className='ml-3 text-orange-800 text-sm mt-2'>Edit</p>
                
             </div>

             <div className='flex mt-5'>
             <p>Salary : - </p>
                 <div className='ml-[208px] w-72'>
                   <Select label='Select'>
                     <Option>1 LPA</Option>
                     <Option>2 LPA</Option>
                     <Option>3 LPA</Option>
                     <Option>4 LPA</Option>
                   </Select>
                 </div>
              </div>

              <div className='flex mt-5'>
               <p>Time Period : - </p>
                 <div className='ml-[165px] flex w-72'>
                   <Select label='MM'>
                     <Option>2020</Option>
                     <Option>2021</Option>
                     <Option>2022</Option>
                     <Option>2023</Option>
                   </Select>

                   <Select label='YYYY' className='ml-2'>
                     <Option>2020</Option>
                     <Option>2021</Option>
                     <Option>2022</Option>
                     <Option>2023</Option>
                   </Select>

                   <p className='ml-5 mt-2 mr-2'>To</p>

                   <Select label='MM'>
                     <Option>2020</Option>
                     <Option>2021</Option>
                     <Option>2022</Option>
                     <Option>2023</Option>
                   </Select>

                   <Select label='YYYY' className='ml-2'>
                     <Option>2020</Option>
                     <Option>2021</Option>
                     <Option>2022</Option>
                     <Option>2023</Option>
                   </Select>
                 </div>
              </div>
                
                <div className='mt-5 ml-[270px]'>
                  <Button>+ Add Position</Button>
                </div>

                <div className='mt-5 ml-[600px] flex'>
                 <div>
                 <Button variant='outlined' onClick={togglestep3}>Back</Button>
                 </div>
                 <div className='ml-3'>
                 <Button className='bg-orange-800' onClick={togglestep5}>Save & Next </Button>
                 </div>
                 <p className='ml-1 mt-2 cursor-pointer'>Skip </p>
                </div>
              
         </motion.div>
        )}
        {/* Third Part End */}

       {/* Fourth part start */}

        {step4 && (
          <motion.div className='ml-2'  initial ={{x : '-100vw'}}
          animate ={{x : 0}}
          transition={{delay : 0.2 , stiffness : 30, type : 'spring' }}>
            <div className='bg-gray-100 py-2 w-[1300px] '>
                <p className='pl-2'>Please upload your resume here</p>
           </div> 
            
            <div className='flex mt-5'>
              <p>Attach Resume :- </p>

              <div className='ml-72'>
                <input type="file"  />
              </div>
            </div>

            <div className='flex mt-5'>
              <p>Upload Video Profile :- </p>

              <div className='ml-[250px]'>
                <input type="file" id="img" name="img" accept="video/*" />
              </div>

              <div className=''>
                <Button className='bg-orange-800'>Create Video Profile</Button>
              </div>
            </div>
            
            <div className='flex mt-5'>
              <p>Cover Latter :- </p>

              <div className='ml-[300px] w-[50%] '>
                <Textarea type="text" label='A thought and well written cover letter helps you exhibite information.' />
              </div>
            </div>

            <div className='ml-96'>
              <Checkbox label="Include cover latter while applying"/>
            </div>

            <div className='mt-5 ml-[600px] flex'>
                 <div>
                 <Button variant='outlined' onClick={togglestep4}>Back</Button>
                 </div>
                 <div className='ml-3'>
                 <Button className='bg-orange-800' >Save & Next </Button>
                 </div>
                
               </div>
          </motion.div>
        )}

        {/* Fourth part start */}

        {step5 && (
          <div>
          
          </div>
        )}

        {/* Third Part End */}
      </form> 
      </div>
    {/* Form end */}

      </div>
    </div>
  )
}
