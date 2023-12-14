
import React from 'react'
import { LiaToolboxSolid } from "react-icons/lia";
import {
    Input,
    Select,
    Option,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import {
    FaGripLines,
  } from "react-icons/fa6";
  import { TABLE_HEAD, TABLE_ROWS} from "../../Data/Dashboarddata";
  import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate()
  function navigation () {
    navigate("/JobDetail");
  }
  return (
    <div>
        {/* Active jobs section */}
        <div className="flex flex-wrap">
              <div className="mt-1">
                <p>
                  <b>Active Jobs (1) </b>
                </p>
              </div>
              <div className="flex md:ml-[950px] ">
                <p>
                  <LiaToolboxSolid className="w-[30px] h-[30px]" />
                </p>
                <p>
                  <FaGripLines className="w-[30px] h-[30px] ml-10" />
                </p>
              </div>
            </div>
            {/* Active jobs section end */}

            <div className="flex flex-wrap">
              <div className="flex mt-5">
                <Input type="search" label="search" className="" />
              </div>

              <div className="mt-5 md:ml-48">
                <Select label="Active Jobs">
                  <Option>A</Option>
                  <Option>B</Option>
                  <Option>C</Option>
                </Select>
              </div>

              <div className="mt-5 ml-2">
                <Select label="Posted by me">
                  <Option>A</Option>
                  <Option>B</Option>
                  <Option>C</Option>
                </Select>
              </div>

              <div className="mt-5 ml-2">
                <Select label="Location">
                  <Option>A</Option>
                  <Option>B</Option>
                  <Option>C</Option>
                </Select>
              </div>

              <p className="mt-7 ml-2 text-blue-500">Reset</p>
            </div>

            {/* Table */}
            <div className="mt-10 cursor-pointer" >
              <Card className="h-full w-full overflow-scroll-x">
                <table className="w-full min-w-max table-auto text-left" onClick={navigation}>
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
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
                    {TABLE_ROWS.map(
                      (
                        {
                          title,
                          Candidate,
                          Postatedby,
                          Postedon,
                          Action,
                          Icon,
                        },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={title}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {title}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {Candidate}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {Postatedby}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {Postedon}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {Action}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {Icon}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </Card>
            </div>
    </div>
  )
}
