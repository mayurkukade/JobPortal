

import React from 'react'
import { useRef ,useState } from 'react';

export default function SingUp() {
  // const [mobile,setMobile] = useState(false);

  // const mobileView = () =>{
  //   if (window)
  // }

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleInput = (e, index) => {
    const input = e.target;
    if (!/^\d$/.test(input.value)) {
      input.value = '';
    }
    if (input.value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <div className='flex justify-center mt-5 '>

      {/* Deskstop View */}
        {/* main div start */}

      <div className='bg-Details rounded-lg md:w-[80rem] flex justify-center '>
        <div>
        <p className='text-4xl  text-center py-5'>SingUp</p>
        <form action="" className='p-5 ' >
            <label htmlFor="First Name"> Name :- </label>
             <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  md:w-96  h-10 pl-2 md:ml-[65px] ml-16' /><br /><br />
            <label htmlFor="Mobile Number">Mobile Number  :- </label>
             <input type="Number" placeholder='Enter your Number' className='border-2 rounded-md  md:w-96 h-10 pl-2 ' /><br /><br />
            <label htmlFor="Email"> Email :- </label>
             <input type="email" placeholder='Enter your Email' className='border-2 rounded-md md:w-96 h-10 pl-2 ml-[70px]' /><br /><br />
            <label htmlFor="Password"> Password :- </label>
             <input type="password" placeholder='Enter your Password' className='border-2 rounded-md  md:w-96 h-10 pl-2  ml-[40px]' /><br /><br />
            <label htmlFor="Password">Conf. Password :- </label>
            <input type="password" placeholder='Enter your Password' className='border-2 rounded-md  md:w-96 h-10 pl-2' /><br /><br />
 
            <label htmlFor="otp" className='md:mr-[75px]'>OTP :- </label>
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            type="text"
            ref={ref}
            className="border-2 w-8 ml-2 rounded-lg bg-blue-gray-200 pl-2"
            onInput={(e) => handleInput(e, index)}
          />
        ))}<br />

             <button type='submit' className='w-48 h-10 md:ml-[128px] mt-5  border-2 rounded-md bg-save text-white'>SingUp</button>
        </form>
        </div>
      </div>

{/* main div end */}

{/* mobile view */}

    {/* {mobileView && ()} */}
    </div>
  )
}
