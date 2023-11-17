import React from 'react'
import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Sr. No","Topic", "Duration", "Mentor", "Cost","Enroll"];
const TABLE_HEAD1 = ["Sr. No","Topic", "Duration", "Start Date", "End Date","Enroll"];
 
const TABLE_ROWS = [
  {
    SrNo : 1,
    Topic: "SQL",
    Duration: "30 Days",
    Mentor: "Virtual",
    Cost: "Virtual",
    StartDate: "21/10/2023",
    EndDate: "21/11/23",
    Enroll: <Button className='bg-save'>Enroll</Button>,
  },
  {
    SrNo : 2,
    Topic: "Excel",
    Duration: "30 Days",
    Mentor: "Virtual",
    Cost: "Virtual",
    StartDate: "21/10/2023",
    EndDate: "21/11/23",
    Enroll: <Button className='bg-save'>Enroll</Button>,
  },
  {
    SrNo : 3,
    Topic: "Power BI",
    Duration: "30 Days",
    Mentor: "Virtual",
    Cost: "Virtual",
    StartDate: "21/10/2023",
    EndDate: "21/11/23",
    Enroll: <Button className='bg-save'>Enroll</Button>,
  },
 
];

export default function ITItraning() {
  return (
    <div className='flex justify-center'>
      <div>
      <p className='lg:text-[1.8rem] md:text-2xl font-Inter pb-10 pt-10 sm:ml-0 ml-2  '>Mentor Booking</p>
        <hr className='border-1 border-black' />

        <div>
           <p className='lg:text-[2rem] md:text-2xl font-Inter pb-10 pt-10 sm:ml-0 ml-2 '>Mentor Booking</p>
        </div>
         
         <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select Domain</label>
         <div className="md:w-[30rem] w-[24rem] mt-3 bg-Details sm:ml-0 ml-2">
             <Input label="Eg. Data Analysis" />
          </div>

          <div className='mt-10'>
            <label className='font-semebold sm:text-[1.5rem] font-Inter sm:ml-0 ml-2'>Select Mentorship Type</label>
            <div className='flex'>
            <div className=" bg-Details sm:ml-0 ml-2">
                   <Input label="Select Stream " />
             </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 132 106" fill="none">
                   <rect width="132" height="106" fill="#D9D9D9"/>
                   <rect width="132" height="106" fill="black" fill-opacity="0.2"/>
                   <path d="M66 76L36.5551 38.5L95.4449 38.5L66 76Z" fill="black"/>
                 </svg>
              </div>

              <Button variant ="text" className='bg-Details w-64 rounded-none sm:ml-0 ml-2'>Distance Lerning</Button>
          </div>

          {/* Table Part */}

          {/* Table 1 start */}
          <Card className=" sm:w-full w-[45vh] overflow-x-auto mt-5">
      <table className="sm:w-full  sm:min-w-max  text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-NavColour  p-4">
                <Typography
                  variant="small"
                  color="black"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ SrNo, Topic, Duration,StartDate,EndDate,Enroll }) => (
            <tr key={SrNo} className="odd:bg-Table">
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {SrNo}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Topic}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Duration}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {StartDate}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {EndDate}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal sm:w-auto w-1/2">
                  {Enroll}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
{/* Table 1 end */}

   <div className='mt-10 ml-36'>
     <p className='text-[1.2rem] font-Inter'>Enrolled Course</p>
   </div>

{/* Table 2 Start */}
          <Card className=" sm:w-full w-[45vh] overflow-x-auto mt-5">
      <table className="sm:w-full  sm:min-w-max  text-left">
        <thead>
          <tr>
            {TABLE_HEAD1.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-NavColour  p-4">
                <Typography
                  variant="small"
                  color="black"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ SrNo, Topic, Duration,Mentor,Cost,Enroll }) => (
            <tr key={SrNo} className="odd:bg-Table">
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {SrNo}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Topic}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Duration}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Mentor}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Cost}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal sm:w-auto w-1/2">
                  {Enroll}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
{/* Table 2 end */}

      </div>
    </div>
  )
}
