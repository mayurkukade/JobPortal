
import React from 'react'
import {Career } from '../../Data/Dashboarddata'
import {
    Card,
    Typography,
   
  } from "@material-tailwind/react";
  import {  TABLE_HEAD1, TABLE_ROWS1,  } from "../../Data/Dashboarddata";

export default function () {
  return (
    <div>
         <div className=" w-[900px] flex justify-center">
                 <div>
                <div className="w-44 h-10 flex border border-gray-200 ml-28 ">
                  <div className="content-center flex items-center bg-indigo-600 px-4">
                    <p className="text-white">Monthly</p>
                  </div>
                  <div className="content-center flex items-center px-4">
                    <p>Yearly</p>
                  </div>
                  
                </div>
                <div className="mt-5">
                    <p>Note if you wish to upgrade current plan , please <a href="#" className="text-blue-400">contact us</a></p>
                 </div>
                </div>
                 
                 
             </div>

             <div className="w-[900px] mt-10 h-[400px] ml-10">
                <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD1.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS1.map(({ name1, job1, date1 }, index) => {
            const isLast = index === TABLE_ROWS1.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
                </div>
    </div>
  )
}
