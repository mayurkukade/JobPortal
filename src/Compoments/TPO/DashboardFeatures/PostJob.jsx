
import React from 'react'
import { Button,Input } from "@material-tailwind/react";

export default function PostJob() {

  const [company , setCompany] = React.useState("");
  const [job , setJob] = React.useState("");
  const [skills , setSkills] = React.useState("");
  const [date , setDate] = React.useState("");
  const [dispriction , setDispriction] = React.useState("");
  const [address , setAddress] = React.useState("");
  const [salary , setSalary] = React.useState("");
  const [experince , setExperince] = React.useState("");
  const [type , setType] = React.useState("");
  const [incentives , setIncentives] = React.useState("");
  const [requriments , setRequriments] = React.useState("");


    function handleSubmit(e){
  
        e.preventDefault();
    
        const obj = {
          Company : company,
          Job : job,
          Skills : skills,
          Date : date,
          Dispriction : dispriction,
          Address : address ,
          Salary : salary,
          Experince : experince,
          Type : type,
          Incentives : incentives,
          Requriments : requriments,
        };
    
        // console.log("company : -" ,company);
        // console.log("job : -" ,job);
        // console.log("skills : -" ,skills);
        // console.log("date : -" ,date);
        // console.log("dispriction : -" ,dispriction);
        // console.log("address : -" ,address);
        // console.log("salary : -" ,salary);
        // console.log("experince : -" ,experince);
        // console.log("type : -" ,type);
        // console.log("incentives : -" ,incentives);
        // console.log("requriments : -" ,requriments);
    
        console.log(obj);
    
        setCompany("");
        setJob("");
        setSkills("");
        setDate("");
        setDispriction("");
        setAddress("");
        setSalary("");
        setExperince("");
        setType("");
        setIncentives("");
        setRequriments("");
      }
  return (
    <div className='flex'>
      <div className='bg-white rounded-md px-5 py-5 flex '>
      <form onSubmit={handleSubmit} className=''>
          <div>
            <div>
              <p className='text-lg ml-3 font-bold'>Post Job</p>
            </div>

             <div className='mt-5 flex  w-[410px]'>
               <div>
                 <Input type='text' label='Company Name' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className='ml-1 '>
                 <Input type='text' label='Job Profile' value={job} onChange={(e) => setJob(e.target.value)} />
                </div>
             </div>

            <div className='mt-5 flex  w-[410px]'>
              <div>
                <Input type='text' label='Skills' value={skills} onChange={(e) => setSkills(e.target.value)} />
              </div>
              <div className='ml-1'>
               <Input type='date' label='Post Date' value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
                
             </div>

             <div className='mt-5 flex w-[410px]'>
              <div>
               <Input type='text' label='Job Dispriction' value={dispriction} onChange={(e) => setDispriction(e.target.value)} />
              </div>
                <div className='ml-1'>
                 <Input label='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
             </div>

            <div className='mt-5 flex w-[410px]'>
              <div>
                <Input type='number' label='Salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
              </div>
              <div className='ml-1'>
                <Input type='text' label='Experince' value={experince} onChange={(e) => setExperince(e.target.value)} />
              </div>
            </div>

            <div className='mt-5 flex w-[410px]'>
              <div>
                <Input type='text' label='Job Type' value={type} onChange={(e) => setType(e.target.value)} />
              </div>
              <div className='ml-1'>
                <Input type='text' label='Incentives' value={incentives} onChange={(e) => setIncentives(e.target.value)} />
              </div>
            </div>

            <div className='mt-5 flex w-[410px]'>
              <div>
                <Input type='text' label='Requriments' value={requriments} onChange={(e) => setRequriments(e.target.value)} />
              </div>
              <div className='ml-5'>
                <input type='file' placeholder='Select Logo' className='py-2'/>
              </div>
            </div>
              <div className='mt-5 '>
               <Button fullWidth type='submit' color='green'>Submit</Button>
              </div>
            </div>    
       </form>
      </div>
    </div>
  )
}
