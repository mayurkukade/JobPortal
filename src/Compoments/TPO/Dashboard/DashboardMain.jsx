import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { IoIosPeople, IoMdClipboard } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline, IoPersonAddOutline } from "react-icons/io5";
import {
  FaIndianRupeeSign,
  FaArrowRightFromBracket,
  FaGripLines,
} from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { LuUserMinus2 } from "react-icons/lu";
import { LiaToolboxSolid } from "react-icons/lia";
import {
  Input,
  Select,
  Option,
  Card,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TABLE_HEAD, TABLE_ROWS, data } from "../../Data/Dashboarddata";

export default function () {
  const [activeTab, setActiveTab] = React.useState("html");
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  function Dashboard() {
    setOpen2(!open2);
    if (open1 == false) {
      setOpen1(!open1);
    }
  }

  function Jobs() {
    if (open1 == false) {
      setOpen1(open1);
    } else {
      setOpen1(!open1);
    }
    setOpen2(!open2);
    
  }

  function Talent_Pool() {
    if (open2 == true) {
      setOpen2(!open2);
      // setOpen1(!open1);
    } else {
    }

    setOpen3(!open3);
  }

  return (
    <div className="flex justify-center">
      <div className="sm:grid sm:grid-cols-12 gap-6">
        {/* Leftside of page */}
        <div className="sm:col-span-2 mt-5 sm:flex hidden justify-center ml-2 ">
          {/* Dashboard */}
          <div className="border border-gray-300 rounded-md p-4">
            <div onClick={Dashboard}>
              <h2 className="ml-9">
                <RxDashboard className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm">Dashboard</p>
            </div>

            {/* Jobs */}
            <div className="mt-5 ml-3" onClick={Jobs}>
              <h2 className="ml-6">
                <BsBriefcase className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-4">jobs</p>
            </div>

            {/* Talent Pool */}
            <div className="mt-5 ml-2" onClick={Talent_Pool}>
              <h2 className="ml-6">
                <IoIosPeople className="w-[30px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">
                Talent <br /> Pool
              </p>
            </div>

            {/* Career Page */}
            <div className="mt-5 ml-2">
              <h2 className="ml-6">
                <MdOutlineSpaceDashboard className="w-[25px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">
                Career <br /> Page
              </p>
            </div>

            {/* interviews */}
            <div className="mt-5">
              <h2 className="ml-8">
                <TfiBag className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ">interviews</p>
            </div>

            {/* chats */}
            <div className="mt-5 ml-2">
              <h2 className="ml-6">
                <IoChatbubblesOutline className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">chats</p>
            </div>

            {/* pricing */}
            <div className="mt-20">
              <h2 className="ml-7">
                <FaIndianRupeeSign className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-3">pricing</p>
            </div>

            {/* account*/}
            <div className="mt-5">
              <h2 className="ml-7">
                <VscAccount className="w-[20px] h-[30px] " />
              </h2>
              <p className="uppercase text-sm ml-2 ">account</p>
            </div>
          </div>
        </div>

        {/* Rightside of page */}

        {open1 && (
          <div className="sm:col-span-10 mt-5">
            {/* First part */}
            <div className="sm:grid sm:grid-cols-12 gap-4">
              {/* Total Jobs */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Total Jobs</p>
                    <p className="text-4xl mt-4">1</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <BsBriefcase className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Total Application */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Total Application</p>
                    <p className="text-4xl mt-4">15</p>
                  </div>

                  <div className="ml-10">
                    <h2 className="ml-6">
                      <IoIosPeople className="w-[40px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Shortlisted */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Shortlisted</p>
                    <p className="text-4xl mt-4">0</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <IoPersonAddOutline className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Rejected */}
              <div className="col-span-3 border border-gray-300 rounded-md">
                <div className="flex p-5">
                  <div>
                    <p>Rejected</p>
                    <p className="text-4xl mt-4">0</p>
                  </div>

                  <div className="ml-28">
                    <h2 className="">
                      <LuUserMinus2 className="w-[30px] h-[40px] " />
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-36">
              <p>
                {" "}
                <b>Quick Links</b>{" "}
              </p>
            </div>

            {/* Second Part */}
            <div className="sm:grid sm:grid-cols-12 mt-10 gap-4">
              {/* Career page */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <MdOutlineSpaceDashboard className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Career Page</b>
                    </p>
                    <p className="text-xs">Your Personilised Career page</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Published Job */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex ">
                  <h2 className="ml-6">
                    <BsBriefcase className="w-[30px] h-[40px] mt-4 " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Published Job</b>
                    </p>
                    <p className="text-xs">See your Published Job</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-20">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Talent Pool */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoIosPeople className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Talent Pool</b>
                    </p>
                    <p className="text-xs">Find The best candidate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Expertia Chat */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoChatbubblesOutline className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Expertia Chat</b>
                    </p>
                    <p className="text-xs">Instantly chat with candiatate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Interviews */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <TfiBag className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Interviews</b>
                    </p>
                    <p className="text-xs">Expert Interviews services</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-12">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>

              {/* Assesments */}
              <div className="sm:col-span-4 bg-blue-100 pb-6 rounded-md">
                <div className="flex">
                  <h2 className="ml-6 mt-4">
                    <IoMdClipboard className="w-[40px] h-[40px] " />
                  </h2>
                  <div className="ml-5 mt-4">
                    <p className="text-lg">
                      <b>Assesments</b>
                    </p>
                    <p className="text-xs">Instantly acesss your canditate</p>
                  </div>
                  <div className="mt-5">
                    <h2 className="ml-8">
                      <FaArrowRightFromBracket className="w-[30px] h-[30px] " />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {open2 && (
          <div className="sm:col-span-10 mt-20">
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
            <div className="mt-10">
              <Card className="h-full w-full overflow-scroll-x">
                <table className="w-full min-w-max table-auto text-left">
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
        )}

        {open3 && (
          <div className="w-[1100px]">
            <Tabs value={activeTab} className="">
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <div className="mt-10">
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`${
                      activeTab === value ? "text-gray-900" : ""
                    } text-xs`}
                  >
                    {label}
                  </Tab></div>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value} >
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
