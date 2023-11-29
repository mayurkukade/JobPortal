
import { Button, Input } from '@material-tailwind/react';
import { useGetStudentQuery } from '../../services/Registration/registrationSlice';
import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';


export default function SingUp() {
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

const [name , setName] = React.useState("");
const [number, setNumber] = React.useState("");
const [password, setPassword] =  React.useState("");
const [confirmPassword, setConfirmPassword] =  React.useState("");
const [email, setEmail] = React.useState("");
const [passwordsMatch, setPasswordsMatch] = React.useState(true);

const handlesubmit = (e) =>{
  e.preventDefault();
   
  if (password !== confirmPassword) {

    setPasswordsMatch(false);
    alert("Password and Confirm Password do not match.");
    return; // Exit the function
  }

  if (name.length < 4) {
    alert("First Name should at least four char");
    return; 
  }

  if (number.length < 10 || number.length >= 11) {
    alert(" Mobile Number only ten number ");
    return; 
  }

  if (password.length < 8) {
    alert(" Password must be at least 8 char ");
    return; 
  }

    console.log("First Name:", name);
    console.log("Email:", email);
    console.log("Mobile Number:", number);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    alert("You are successfully Register");

    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
}

  return (
    <div className='flex justify-center mt-5 '>
     <div className='bg-Details rounded-lg md:w-[80rem] flex justify-center '>
      <div>
        <p className='text-4xl  text-center py-5'>SingUp</p>
        <form onSubmit={handlesubmit} className='p-5 ' >

            <label htmlFor="First Name"> Name :- </label>
             <Input type="text" label='Enter your Full name' value={name} onChange={(e) => setName(e.target.value)} required className='' /><br />

            <label htmlFor="Mobile Number">Mobile Number  :- </label>
             <Input type="Number" label='Enter your Number' required value={number} onChange={(e) => setNumber(e.target.value)} className=' ' /><br />

            <label htmlFor="Email"> Email :- </label>
             <Input type="email" label='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='' /><br />

            <label htmlFor="Password"> Password :- </label>
             <Input type="password" label='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='' /><br />

            <label htmlFor="Password">Conf. Password :- </label>
            <Input type="password" label='Enter your Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='' /><br />
 
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
            <Link to="/Forms/MultiStepForm">
             <Button type='submit' className='w-48 h-10 md:ml-[128px] mt-5  border-2 rounded-md  text-white'>Sing Up</Button>
             </Link>
        </form>
        </div>
      </div>

    </div>
  )
}
