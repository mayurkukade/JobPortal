import { Button,Radio } from '@material-tailwind/react';
import React from 'react'


export default function MultiStepForm() {
    const [name , setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);
    const [step3, setStep3] = React.useState(false);

    
    
      const togglestep2 = () => {
        setStep2(!step2);
        setStep1(!step1);
      };
    
      const togglestep3 = () => {
        setStep3(!step3);
        setStep2(!step2);
      };
    
   

  return (
    <div className='flex justify-center items-center min-h-screen'>

      <div>
         {/* first part */}
       {step1 && (<div>
         <label htmlFor="First Name"> Name :- </label>
             <input type="text" placeholder='Enter your Full name' value={name} onChange={(e) => setName(e.target.value)} required className='bg-Details rounded-md  md:w-96  h-10 pl-2 md:ml-[65px] ml-16' /><br /><br />

            <label htmlFor="Mobile Number">Mobile Number  :- </label>
             <input type="Number" placeholder='Enter your Number' required value={number} onChange={(e) => setNumber(e.target.value)} className='bg-Details  rounded-md  md:w-96 h-10 pl-2 ' /><br /><br />

            <label htmlFor="Email"> Email :- </label>
             <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='bg-Details  rounded-md md:w-96 h-10 pl-2 ml-[70px]' /><br /><br />

             <div className='flex justify-center'>
                <div className='md:w-[15rem] w-44 h-28 md:h-[8rem] bg-Details flex justify-center items-center'>
                <p>Experinced</p>
                </div>

                <div className='md:w-[15rem] md:h-[8rem] w-44 h-28 bg-Details flex justify-center items-center ml-2'>
                    <p>Fresher</p>
                </div>
             </div>

             <div className='flex mt-5'>
                <p className='pt-3'>Company :- </p>
                <div className='ml-4'>
                   <input type="text" className='bg-Details md:w-[20rem] w-64 h-10 md:h-[3rem]' /> 
                </div>
             </div>

             <div className='flex mt-5'>
               <p className='ml-20 text-Inter'>Start Date</p>
               <p className='ml-16 text-Inter'>End Date</p>
             </div>

             <div className='flex'>

               <div className='w-[10rem] h-[2rem] bg-Details flex items-center justify-center ml-5'>
                 <p>Eg. 2020</p>
               </div>
               <div className='w-[10rem] h-[2rem] bg-Details flex items-center justify-center ml-5'>
                 <p>Eg. 2023</p>
               </div>
 
             </div>

            <div className=' flex justify-end min-w-full'>
             <Button className='bg-save mt-5 ' onClick={togglestep2}>Next</Button>
             </div>
             
         </div>)}
         
        {/* first part end */}
         

         {/* Second part Start */}
        
        {step2 && (<div>
            <p className='text-[2rem]'>Education</p>
            <hr className='border-1 border-black' />
 
            <p className='text-[1.5rem] mt-5'>Highest Qualification</p>

            <div className='flex w-[10rem] h-[2rem] mt-2 bg-Details items-center justify-center'>
                <p className='text-[1.2rem]'>Graduation</p>
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 23 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58572 1.53951C1.9862 0.962638 2.52929 0.638567 3.09557 0.638567C3.66185 0.638567 4.20495 0.962638 4.60543 1.53951L11.6379 11.6725L18.6704 1.53951C18.8674 1.24561 19.103 1.01119 19.3636 0.849921C19.6241 0.688651 19.9043 0.603764 20.1879 0.600214C20.4715 0.596663 20.7527 0.67452 21.0151 0.829241C21.2776 0.983962 21.516 1.21245 21.7165 1.50137C21.917 1.79029 22.0756 2.13386 22.183 2.51203C22.2904 2.8902 22.3444 3.2954 22.3419 3.70398C22.3395 4.11256 22.2806 4.51634 22.1686 4.89176C22.0567 5.26719 21.894 5.60673 21.6901 5.89059L13.1477 18.1992C12.7473 18.776 12.2042 19.1001 11.6379 19.1001C11.0716 19.1001 10.5285 18.776 10.128 18.1992L1.58572 5.89059C1.18536 5.31354 0.960449 4.531 0.960449 3.71505C0.960449 2.8991 1.18536 2.11656 1.58572 1.53951Z" fill="black"/>
                </svg>
            </div>

            <p className='text-[1.5rem] mt-5'>Course</p>

               <div className='flex w-[10rem] h-[2rem] mt-2 bg-Details items-center justify-center'>
                  <p className='text-[1.2rem]'>Search</p>
                </div>

                <p className='text-[1.5rem] mt-5'>Specialization</p>

               <div className='flex w-[12rem] h-[2rem] mt-2 bg-Details items-center justify-center'>
                  <p className='text-[1.2rem]'>Eg.Data Analysis</p>
                </div>

                <p className='text-[1.5rem] mt-5'>University Institution</p>

               <div className='flex w-[12rem] h-[2rem] mt-2 bg-Details items-center justify-center'>
                  <p className='text-[1.2rem]'>Search</p>
                </div>

                <p className='text-[1.5rem] mt-5'>Course Type</p>

               <div className='flex flex-wrap mt-2 '>
                 <div className='w-[10rem] h-[3rem] flex items-center justify-center bg-Details'>
                   <p className='text-[1.2rem]  '>Full Time</p>
                 </div>
                  <div className='w-[10rem] h-[3rem] flex items-center justify-center bg-Details ml-5 '>
                    <p className='text-[1.2rem]  '>Part Time</p>
                  </div>
                  <div className='w-[10rem] h-[3rem] flex items-center justify-center bg-Details md:ml-5 md:mt-0 mt-2  '>
                    <p className='text-[1.2rem]  '>Distant Learning</p>
                  </div>
                </div>
               
                <div className='flex mt-5'>
                 <p className='ml-20 text-Inter'>Start Date</p>
                 <p className='ml-16 text-Inter'>End Date</p>
               </div>
               
               <div className='flex'>

               <div className='w-[10rem] h-[2rem] bg-Details flex items-center justify-center ml-5'>
                    <p>Eg. 2020</p>
               </div>
               <div className='w-[10rem] h-[2rem] bg-Details flex items-center justify-center ml-5'>
                   <p>Eg. 2023</p>
                </div>

                </div>
               
                <p className='text-[1.5rem] mt-5'>Key Skills</p>

                <div className='md:w-[30rem] md:h-[4rem] h-10 w-48 bg-Details'>

                </div>

                <div className='flex mt-5'>
                   <div className='md:w-[18.75rem] md:h-[4.5625rem] w-36 h-18 bg-Details flex justify-center items-center'>
                      <p className='text-[1.5rem]'> + Frontend</p>
                   </div>
                   <div className='md:w-[18.75rem] w-36 h-18 md:h-[4.5625rem] bg-Details ml-10 flex justify-center items-center'>
                      <p className='text-[1.5rem]'> + Backend</p>
                   </div>
                </div>

                <div className=' flex justify-end min-w-full md:mb-0 mb-5'>
             <Button className='bg-save mt-5 ' onClick={togglestep3}>Next</Button>
             </div>

        </div>)}
        

        {/* Second part End */}

       {/* Third Part Start */}

       {step3 && (<div>
         <p className='text-[2rem]'>Resume Upload</p>
         <hr className='border-1 border-black' />

         <div className='flex mt-5'>
         <svg xmlns="http://www.w3.org/2000/svg" width="110" height="100" viewBox="0 0 138 145" fill="none">
            <rect x="0.5" y="0.5" width="137" height="144" stroke="black"/>
             <path d="M73.6824 25.1716C72.1203 23.6095 69.5877 23.6095 68.0256 25.1716L42.5697 50.6274C41.0076 52.1895 41.0076 54.7222 42.5697 56.2843C44.1318 57.8464 46.6645 57.8464 48.2266 56.2843L70.854 33.6569L93.4814 56.2843C95.0435 57.8464 97.5762 57.8464 99.1383 56.2843C100.7 54.7222 100.7 52.1895 99.1383 50.6274L73.6824 25.1716ZM74.854 86.5L74.854 28L66.854 28L66.854 86.5L74.854 86.5Z" fill="black"/>
             <path d="M28 66.2681L37.0349 105.746L110.232 108.122L118.4 69.2022" stroke="black" stroke-width="5"/>
         </svg>
           <p className='text-[3rem] ml-5'><u>Upload Resume</u> </p>
         </div>

         <p className='text-[2rem] mt-5'>Short Description about Yourself</p>
         <input type="text" placeholder='Eg. Data Analysis' className='md:w-[50rem] w-80 h-10 md:h-[5rem] rounded-md bg-Details pl-5' />

         <p className='text-[2rem] mt-5'>Preffered work Location </p>
         <div className='flex flex-wrap'>

         <input type="text" placeholder='Search' className='w-[20rem] h-[3rem] rounded-lg bg-Details pl-5' />
          <Button className='md:ml-10 ml-5 md:mt-0 mt-2 md:text-[1.5rem]' color='blue'>+ Pune</Button>
          <Button className='md:ml-10 ml-5 md:mt-0 mt-2 md:text-[1.5rem]' color='blue'>+ Mumbai</Button>
          </div>
            

          <p className='text-[2rem] mt-5'>Preffered Salary </p>
          <input type="text" placeholder='Eg. 300000 PA' className='w-[20rem] h-[3rem] rounded-lg bg-Details pl-5' />
       
          <p className='text-[2rem] mt-5'>Gender </p>

          <Radio name="type" label="Male" />
          <Radio name="type" label="Female"  />

          <div className=' flex justify-end min-w-full'>
             <Button className='bg-save mt-5 '>Next</Button>
          </div>

       </div>)}
       
 
     {/* Third Part End */}
      
       </div>

    </div>
  )
}
