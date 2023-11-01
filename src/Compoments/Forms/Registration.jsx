import React from 'react'

export default function Registration() {
  return (
    <div className='flex justify-center items-center  min-h-screen bg-[#1b8080] '>
        {/* main div start */}

      <div className='bg-yellow-500 rounded-lg'>
        <p className='md:text-4xl text-center md:py-5'>SingUp</p>
        <form action="" className='p-5' >
            <label htmlFor="First Name"> Name :- </label>
             <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md w-96 h-10 pl-2 md:ml-[65px]' /><br /><br />
            <label htmlFor="Mobile Number">Mobile Number  :- </label>
             <input type="Number" placeholder='Enter your Number' className='border-2 rounded-md w-96 h-10 pl-2' /><br /><br />
            <label htmlFor="Email"> Email :- </label>
             <input type="email" placeholder='Enter your Email' className='border-2 rounded-md w-96 h-10 pl-2  md:ml-[70px]' /><br /><br />
            <label htmlFor="Password"> Password :- </label>
             <input type="password" placeholder='Enter your Password' className='border-2 rounded-md w-96 h-10 pl-2  md:ml-[40px]' /><br /><br />
            <label htmlFor="Password">Conf. Password :- </label>
            <input type="password" placeholder='Enter your Password' className='border-2 rounded-md w-96 h-10 pl-2' /><br /><br />
 
            <label htmlFor="otp">OTP :- </label>
             <input type="text"  className='border-2 w-8  md:ml-[80px] ml-10 rounded-lg bg-blue-gray-200' />
             <input type="text"  className='border-2 w-8 ml-2 rounded-lg bg-blue-gray-200' />
             <input type="text"  className='border-2 w-8 ml-2 rounded-lg bg-blue-gray-200' />
             <input type="text"  className='border-2 w-8 ml-2 rounded-lg bg-blue-gray-200' />
             <input type="text"  className='border-2 w-8 ml-2 rounded-lg bg-blue-gray-200' /><br />

             <button type='submit' className='w-48 h-10 md:ml-[128px] mt-5  border-2 rounded-md bg-green-700'>SingUp</button>
        </form>
      </div>

{/* main div end */}
    </div>
  )
}
