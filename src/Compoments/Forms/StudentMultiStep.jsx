import React from 'react'
import { Input,Select,Option } from "@material-tailwind/react";
import { CiCamera } from "react-icons/ci";



export default function StudentMultiStep() {
    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);
    const [step3, setStep3] = React.useState(false);
    const [step4, setStep4] = React.useState(false);
    const [step5, setStep5] = React.useState(false);

   

    const togglestep2 = () => {
        setStep2(!step2);
        setStep1(!step1);
        document.getElementById('Personal').setAttribute("style","background : #bdbddb");
      };
    
      const togglestep3 = () => {
        setStep3(!step3);
        setStep2(!step2);
        document.getElementById('Education').setAttribute("style","background : #bdbddb");
        document.getElementById('Personal').removeAttribute("style");
        
      };
      const togglestep4 = () => {
    
        
      };
      const togglestep5 = () => {
      
        
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

            <div id='Personal' onClick={togglestep2} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Personal Details</p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Education' onClick={togglestep3} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Education</p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Profesional' onClick={togglestep4} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Profesional Details</p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Resume' onClick={togglestep5} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Resume </p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Certifications' onClick={togglestep6} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Certifications</p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Skill' onClick={togglestep7} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Skill & Recommendations</p>
            </div>

            <div className="w-[50px]">
              <hr className="border border-gray-500 mt-4" />
            </div>

            <div id='Information' onClick={togglestep8} className='bg-gray-100 border border-gray-50 rounded-xl px-2 py-1 cursor-pointer'>
                <p className='text-black text-md'>Additional Information</p>
            </div>

           </div>
            {/* Form start */}
        <form onSubmit={handleSubmit}>
        {/* first part */}
        {step1 && (
          <div className='flex'>
             {/* Main Code start */}
            <div className='border-gray-100 border mt-5'>
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
            </div>
       
          </div>
        )}

        {/* first part end */}

        {/* Second part Start */}

        {step2 && (
          <div>
            
          </div>
        )}

        {/* Second part End */}

        {/* Third Part Start */}

        {step3 && (
          <div>
          
          </div>
        )}

        {step4 && (
          <div>
          
          </div>
        )}

        {step5 && (
          <div>
          
          </div>
        )}

        {/* Third Part End */}
      </form> 
    {/* Form end */}

      </div>
    </div>
  )
}
