import React from 'react'
import Lens from "../Images/Lenskart.png"
import Brief from "../Images/Briefcase.svg"
import Appsent from "../Images/AppSent.png"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

  

export default function MainPart() {
  
  const [open , setOpen] = React.useState(false);
  const [open1 , setOpen1] = React.useState(false);
  const [open2 , setOpen2] = React.useState(false);
  const [rightopen1 , setRightopen1] = React.useState(true);
  const [rightopen2 , setRightopen2] = React.useState(false);
  const [rightopen3 , setRightopen3] = React.useState(false);
  const [rightopen4 , setRightopen4] = React.useState(false);
  const [rightopen5 , setRightopen5] = React.useState(false);
  const [rightopen6 , setRightopen6] = React.useState(false);
  const [rightopen7 , setRightopen7] = React.useState(false);

   // First Page

const handleOpen = () =>{
  setOpen (!open);
  
}

// Second Page
const handleOpen1 = () =>{
  setOpen1 (!open1);
}

const handleOpen2 = () =>{
  setOpen (!open);
  setOpen1 (!open1);
}

// Third page

const handleOpen3 = () =>{
  setOpen2 (!open2);
  setOpen1 (!open1);
}
const handleOpen4 = () =>{
  setOpen2 (!open2);
  setOpen1 (!open1);

}

// JavaScript

function firstCard () {
  document.getElementById('firstcard').setAttribute("style","background:#657ED4");
  document.getElementById('secondcard').removeAttribute("style");
 
  if(rightopen1==false){
    setRightopen1(!rightopen1);
  }else{
    setRightopen1(rightopen1);
  }

  if(rightopen2==true){
    setRightopen2(!rightopen2);
  }

  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");

  if(rightopen3==true){
    setRightopen3(!rightopen3);
  }
  if(rightopen4==true){
    setRightopen4(!rightopen4);
  }
  if(rightopen5==true){
    setRightopen5(!rightopen5);
  }
  if(rightopen6==true){
    setRightopen6(!rightopen6);
  }
  if(rightopen7==true){
    setRightopen7(!rightopen7);
  }
 
}

function secontCard () {
  document.getElementById('secondcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");
  
  
  if(rightopen2==false){
    setRightopen2(!rightopen2);
  }

  if(rightopen1==true){
    setRightopen1(!rightopen1);
  }
  if(rightopen3==true){
    setRightopen3(!rightopen3);
  }
  if(rightopen4==true){
    setRightopen4(!rightopen4);
  }
  if(rightopen5==true){
    setRightopen5(!rightopen5);
  }
  if(rightopen6==true){
    setRightopen6(!rightopen6);
  }
  if(rightopen7==true){
    setRightopen7(!rightopen7);
  }

}
function thirdCard () {
  document.getElementById('thirdcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('secondcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");

  if(rightopen3==false){
    setRightopen3(!rightopen3);
  }

 if(rightopen2==true){
  setRightopen2(!rightopen2);
    }
 if(rightopen1==true){
  setRightopen1(!rightopen1);
    }
    if(rightopen4==true){
      setRightopen4(!rightopen4);
    }
    if(rightopen5==true){
      setRightopen5(!rightopen5);
    }
    if(rightopen6==true){
      setRightopen6(!rightopen6);
    }
    if(rightopen7==true){
      setRightopen7(!rightopen7);
    }
}  
  function fourthCard () {
  document.getElementById('fourthcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('secondcard').removeAttribute("style");
  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");
  
  

  if(rightopen4==false){
    setRightopen4(!rightopen4);
  }
  if(rightopen2==true){
    setRightopen2(!rightopen2);
      }
   if(rightopen1==true){
    setRightopen1(!rightopen1);
      }
      if(rightopen3==true){
        setRightopen3(!rightopen3);
      }
      if(rightopen5==true){
        setRightopen5(!rightopen5);
      }
      if(rightopen6==true){
        setRightopen6(!rightopen6);
      }
      if(rightopen7==true){
        setRightopen7(!rightopen7);
      }

}
function fifthCard () {
  document.getElementById('fifthcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('secondcard').removeAttribute("style");
  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");
  
  if(rightopen5==false){
    setRightopen5(!rightopen5);
  }

  if(rightopen4==true){
    setRightopen4(!rightopen4);
  }
  if(rightopen2==true){
    setRightopen2(!rightopen2);
      }
   if(rightopen1==true){
    setRightopen1(!rightopen1);
      }
      if(rightopen3==true){
        setRightopen3(!rightopen3);
      }
      if(rightopen6==true){
        setRightopen6(!rightopen6);
      }
      if(rightopen7==true){
        setRightopen7(!rightopen7);
      }

}
function sixCard () {
  document.getElementById('sixcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('secondcard').removeAttribute("style");
  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('seventhcard').removeAttribute("style");
  
  if(rightopen6==false){
    setRightopen6(!rightopen6);
  }

  if(rightopen4==true){
    setRightopen4(!rightopen4);
  }
  if(rightopen2==true){
    setRightopen2(!rightopen2);
      }
   if(rightopen1==true){
    setRightopen1(!rightopen1);
      }
      if(rightopen3==true){
        setRightopen3(!rightopen3);
      }
      if(rightopen5==true){
        setRightopen5(!rightopen5);
      }
      if(rightopen7==true){
        setRightopen7(!rightopen7);
      }

}
function seventhCard () {
  document.getElementById('seventhcard').setAttribute("style","background:#657ED4");
  document.getElementById('firstcard').removeAttribute("style");
  document.getElementById('secondcard').removeAttribute("style");
  document.getElementById('thirdcard').removeAttribute("style");
  document.getElementById('fourthcard').removeAttribute("style");
  document.getElementById('fifthcard').removeAttribute("style");
  document.getElementById('sixcard').removeAttribute("style");
  
  if(rightopen7==false){
    setRightopen7(!rightopen7);
  }

  if(rightopen4==true){
    setRightopen4(!rightopen4);
  }
  if(rightopen2==true){
    setRightopen2(!rightopen2);
      }
   if(rightopen1==true){
    setRightopen1(!rightopen1);
      }
      if(rightopen3==true){
        setRightopen3(!rightopen3);
      }
      if(rightopen5==true){
        setRightopen5(!rightopen5);
      }
      if(rightopen6==true){
        setRightopen6(!rightopen6);
      }

}

  return (
    <div className='flex justify-center'>
            {/* First Part start */}
        <div className='flex flex-wrap '>

            {/* Left Side */}
            <div className=' lg:ml-5 '>
              <p>Jobs based on your profile <br />
                    197 results
              </p>

                {/* first Card */}
              <div onClick={firstCard} id='firstcard' className='flex rounded-lg bg-Details md:w-[30rem]  w-[24.2rem] md:h-[10rem] justify-center'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Second Card */}
              <div onClick={secontCard} id='secondcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Third Card */}
              <div onClick={thirdCard} id='thirdcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Fourth Card */}
              <div onClick={fourthCard} id='fourthcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Fifth Card */}
              <div onClick={fifthCard} id='fifthcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Sixth Card */}
              <div onClick={sixCard} id='sixcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>
                {/* Seventh Card */}
              <div onClick={seventhCard} id='seventhcard' className='flex bg-Details rounded-lg md:w-[30rem] w-[24.2rem] md:h-[10rem] justify-center mt-5'>
             <div className='flex items-center '>
                <img src={Lens} className='md:w-[3.875rem] md:h-[2.75rem] ' alt="" />
             </div>
             <div className='md:ml-20 ml-5 pt-7'>
                <p className='md:text-[1.5rem] text-[#FF331F] font-Inter'>Full Stack Developer</p>
                <p className='md:text-[1rem]  font-Inter'>Lenskart</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote)</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
             </div>
           </div>

            </div>

            {/* Right Side */}
          {rightopen1 && (<div className='bg-Details rounded-md md:ml-10 mt-5 pl-5 md:w-[49.5rem]  w-[24.2rem] '>
                 {/* Top Name */}
              <p className='md:text-[2.5rem] text-2xl text-[#FF331F] font-Inter mt-2'>Full Stack Developer</p>
               <div className='flex'>
               <p className='md:text-[1rem]  font-Inter'>Lenskart,</p>
                <p className='md:text-[1rem]  font-Inter'>India (Remote),</p>
                <p className='md:text-[1rem]  font-Inter text-[#005F59]'>3 hours ago</p>
               </div>
                  {/* Remote part */}
               <div className='flex mt-5'>
                <img src={Brief} className='w-10 h-10' alt="" />
                 <p className='ml-3 pt-3'>Remote</p>
               </div>
                 {/* Button part */}
               <div className='flex mt-5'>

                <button className='bg-NavColour flex text-xl w-32 h-12 items-center justify-center text-Text rounded-xl' onClick={handleOpen}>Apply <svg xmlns="http://www.w3.org/2000/svg" width="22" height="35" className='ml-2' viewBox="0 0 26 37" fill="none">
                  <path d="M10.2386 6.0492H4.74621C4.01787 6.0492 3.31936 6.47581 2.80435 7.23519C2.28933 7.99456 2 9.02449 2 10.0984V30.3444C2 31.4183 2.28933 32.4483 2.80435 33.2076C3.31936 33.967 4.01787 34.3936 4.74621 34.3936H18.4773C19.2056 34.3936 19.9041 33.967 20.4191 33.2076C20.9342 32.4483 21.2235 31.4183 21.2235 30.3444V22.246M15.7311 2H23.9697M23.9697 2V14.1476M23.9697 2L10.2386 22.246" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                </button>

                <button className='bg-save ml-5 flex text-xl w-32 h-12 items-center justify-center text-white rounded-xl'>Save </button>

               </div>

               {/* Details section */}

               <div className='mt-10'>

                 <p className='text-[2.2rem] '>About the job
                 </p>

                 <p className='mt-5 md:text-[1.4rem]'>Lenskart  is building a new product using MERN stack - an all in one business operation platform for SMEs. You will be the right fit, if you have a keen eye for details and high standards for code quality and efficiency, creating innovative new features and maintaining existing ones. Responsibilities: Developing user interface components and implementing them following well-known React.js workflows. Building reusable components and front-end libraries for future use. Optimizing components for maximum performance across a vast array of web-capable devices and browsers Integration of the front-end and back-end aspects of the web application Requirements: Min 2+ years of experience in developing modern web applications using MERN Stack and Typescript. Experience with MongoDB,Nodejs framework and Reactjs Strong proficiency in with OOPs concepts and Typescript Good understanding of Database schema, design, optimization, scalability. Great communication skills, a strong... work ethic. Ownership of the product from start to finish. Ability to learn new technologies quickly. You must be located in Bangalore and be able to come to office. *** Recommeded**** Experience with AWS, microservices,Devops Experience building mobile apps on MongoDB, GraphQL Expert level understanding of the HTML DOM and underlying event model Prior Open source contributions Experience building responsive designs Job Perks Get to work on new product from stratch implementing MERN stack on web and mobile. Open and embracing culture for the latest hot technologies. A competitive salary and holidays Company has roots in Silicon Valley, CA. Lenskart focuses on Enterprise Software, B2B, Small and Medium Businesses, and Startups.</p>
               </div>

               <p className='text-[2.2rem] mt-2 '>About the Company
                 </p>
                 
            <div className='flex bg-NavColour rounded-lg md:w-[46rem] w-[22.9rem] md:h-[11rem] justify-center md:pb-0 pb-5'>
                  <div className='flex items-center '>
                    <img src={Lens} className='md:w-[3.875rem] w-16 md:h-[2.75rem] md:pt-0 pt-4 ' alt="" />
                 </div>
                 <div className='md:ml-12 ml-5 md:pt-7 pt-5'>
                   <p className='md:text-[2.5rem] text-white font-Inter'>Full Stack Developer</p>
              
                    <p className='md:text-[1rem]  font-Inter text-[#005F59]'>296,495 followers</p>
                </div>
                 
                 <button className='md:w-[11rem] md:h-[4rem] h-10 w-20 bg-save rounded-2xl text-white md:text-[2rem] flex justify-center items-center md:mt-10 mt-5 ml-5'>Follow</button>

           </div>

           <div>
             <p className='md:text-[1.4rem]'>Lenskart is Asia’s largest eyewear company serving 40 Million people - helping them see better and lead better quality lives. We have more than 1500 omnichannel stores across 175 cities in India, Singapore and Dubai. Our aim is to serve One Billion eyes by 2025 globally. And in this journey, we want to go beyond vision correction to transform the way people see and experience the world. That’s our new purpose - and we can only get there through cutting-edge technology and exceptional people</p>
           </div>

            </div>)} 

            {rightopen2 && (
              <div><p>Second Open</p></div>
            )} 

            {rightopen3 && (
              <div>
                <p>Third Open</p>
              </div>
            )} 

            {rightopen4 && (
              <div>
                <p>Fourth Open</p>
              </div>
            )} 

            {rightopen5 && (
              <div>
                <p>Fifth Open</p>
              </div>
            )} 

            {rightopen6 && (
              <div>
                <p>Sixth Open</p>
              </div>
            )} 

            {rightopen7 && (
              <div>
                <p>Seventh Open</p>
              </div>
            )} 

        </div>
         {/* First Part end */}
       
       {/* First popup Form start */}
         <div className='flex justify-center'>
         <Dialog open={open} handler={handleOpen}>
        <DialogHeader className='flex'>Apply To Lenskart  <svg xmlns="http://www.w3.org/2000/svg" width="10"     height="15" className='md:ml-[270px] ml-28' viewBox="0 0 20 22" fill="none">
               <path d="M1.08057 20.6354L18.3087 1.18124M1.08057 1.18124L18.3087 20.6354" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         </DialogHeader>
        <hr />
        <DialogBody>
            {/* Resume Part */}
          <p className='text-black'>Resume</p>
          <p className='text-black'>Be sure to include an updated resume</p>

          {/* main part */}

          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>name of pdef.pdf</p>
          </div>
          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>name of pdef.pdf</p>
          </div>
          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>name of pdef.pdf</p>
          </div>
          <div className='flex'>
           <Button className='mt-2 bg-save'>
              Upload Resume
          </Button>

          <p className='text-NavColour ml-28 mt-3'> Show 3 more resumes</p>
          </div>
        </DialogBody>
        <hr />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button  className='bg-NavColour' onClick={handleOpen1}>
            <span>Next</span>
          </Button>
        </DialogFooter>
      </Dialog>
         </div>
          {/* First popup Form end */}

          {/* Second popup Form start */}
         <div>
         <Dialog open={open1} handler={handleOpen1}>
        <DialogHeader className='flex text-xl'>Review Your Application <svg xmlns="http://www.w3.org/2000/svg" width="10"     height="15" className='md:ml-[270px] ml-28' viewBox="0 0 20 22" fill="none">
               <path d="M1.08057 20.6354L18.3087 1.18124M1.08057 1.18124L18.3087 20.6354" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         </DialogHeader>
        <hr />
        <DialogBody>
            {/* Resume Part */}
          <p className='text-black'>Contact info</p>
          <p className='text-black'>Be sure to include an updated resume</p>

          {/* main part */}

          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>User profile card </p>
          </div>
          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>Email Address
                Mobile number</p>
          </div>
          <div className='md:w-[30rem] md:h-[4rem] h-10 mt-2 bg-Details rounded-md flex justify-center items-center'>
             <p>resume</p>
          </div>
          <div className='flex justify-end'>
            <p className='text-NavColour  mt-3'> Show 3 more resumes</p>
          </div>
        </DialogBody>
        <hr />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen2}
            className="mr-1"
          >
            <span>Back</span>
          </Button>
          <Button  className='bg-NavColour' onClick={handleOpen3}>
            <span>Submit Applycation</span>
          </Button>
        </DialogFooter>
      </Dialog>
         </div>
       {/* Second popup Form end */}

       {/* Third Part start */}
       <div>
       <Dialog open={open2} handler={handleOpen3}>
       
        <DialogBody className='flex justify-center items-center'>
         <div>
           <img src={Appsent} className='w-[21.25rem] h-[14.6875rem]' alt="" />
           <p>Your application was sent to Lenskart!</p>
         </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen4}
            className="mr-1"
          >
            <span>Back</span>
          </Button>

          <Button className='bg-NavColour'>
            View More Jobs
          </Button>
         
        </DialogFooter>
      </Dialog>
       </div>
       {/* Third Part End */}


    </div>
  )
}
