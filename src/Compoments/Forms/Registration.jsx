import React from 'react'

export default function Registration() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div>
      <p className='text-4xl  text-center py-5'>Registration</p>
        <label htmlFor="">Name :-</label><br />
         <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' /><br />
        <label htmlFor="Mobile Number">Phone  :- </label><br />
         <input type="Number" placeholder='Enter your Number' className='border-2 rounded-md  w-96 h-10 pl-2 ' />
        <br />
        <label htmlFor="Email"> Email :- </label><br />
          <input type="email" placeholder='Enter your Email' className='border-2 rounded-md w-96 h-10 pl-2' />
        <br />
        <label htmlFor="">Company Name :-</label><br />
          <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' /><br />
        <label htmlFor="">Industries Type :-</label><br />
          <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' /><br />
        <label htmlFor="">Total No. of Employee :-</label><br />
          <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' /><br />
        <label htmlFor="">Company Location :-</label><br />
          <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' /><br />
        <label htmlFor="">Company Type :-</label><br />
          <input type="text" placeholder='Enter your Full name' className='border-2 rounded-md  w-96  h-10 pl-2 ' />
           <br />
           <button type='next' className='w-48 h-10  mt-5  border-2 rounded-md bg-green-700'>Next</button>
      </div>
    </div>
  )
}
