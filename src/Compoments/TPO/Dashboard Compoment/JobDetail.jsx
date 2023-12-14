import React from "react";
import {
  Button,
  Select,
  Option,
  Checkbox,
  Input,
  Card,
  Typography,
  Rating,
  Tooltip,
} from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { RiWechatLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";

const TABLE_HEAD = ["Name", "Ratings", "Date Applied", "Hiring Stage", ""];

const TABLE_ROWS = [
  {
    name: "Student 1",
    Ratings: <Rating value={4} />,
    DateApplied: "23/04/18",
    HiringStage: (
      <div className="w-36">
        <Select label="Sourced">
          <Option>A</Option>
          <Option>A</Option>
          <Option>A</Option>
        </Select>
      </div>
    ),

    icon: (
      <div className="flex gap-3 ">
        <RiWechatLine className="w-6 h-6" />

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10"
          content={
            <div className="">
              <Typography color="blue-gray" className="font-medium text-sm">
                Assessment
              </Typography>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </Tooltip>

        <BsBagCheck className="w-6 h-6 ml-2" />
      </div>
    ),
  },
  {
    name: "Student 2",
    Ratings: <Rating value={0} />,
    DateApplied: "23/04/18",
    HiringStage: (
      <div className="w-36">
        <Select label="Sourced">
          <Option>A</Option>
          <Option>A</Option>
          <Option>A</Option>
        </Select>
      </div>
    ),
    icon: (
      <div className="flex gap-3 ">
        <RiWechatLine className="w-6 h-6" />

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10"
          content={
            <div className="">
              <Typography color="blue-gray" className="font-medium text-sm">
                Assessment
              </Typography>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </Tooltip>

        <BsBagCheck className="w-6 h-6 ml-2" />
      </div>
    ),
  },
  {
    name: "Student 3",
    Ratings: <Rating value={2} />,
    DateApplied: "23/04/18",
    HiringStage: (
      <div className="w-36">
        <Select label="Sourced">
          <Option>A</Option>
          <Option>A</Option>
          <Option>A</Option>
        </Select>
      </div>
    ),
    icon: (
      <div className="flex gap-3 ">
        <RiWechatLine className="w-6 h-6" />

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10"
          content={
            <div className="">
              <Typography color="blue-gray" className="font-medium text-sm">
                Assessment
              </Typography>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </Tooltip>

        <BsBagCheck className="w-6 h-6 ml-2" />
      </div>
    ),
  },
  {
    name: "Student 4",
    Ratings: <Rating value={1} />,
    DateApplied: "23/04/18",
    HiringStage: (
      <div className="w-36">
        <Select label="Sourced">
          <Option>A</Option>
          <Option>A</Option>
          <Option>A</Option>
        </Select>
      </div>
    ),
    icon: (
      <div className="flex gap-3 ">
        <RiWechatLine className="w-6 h-6" />

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10"
          content={
            <div className="">
              <Typography color="blue-gray" className="font-medium text-sm">
                Assessment
              </Typography>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </Tooltip>

        <BsBagCheck className="w-6 h-6 ml-2" />
      </div>
    ),
  },
  {
    name: "Student 5",
    Ratings: <Rating value={2} />,
    DateApplied: "23/04/18",
    HiringStage: (
      <div className="w-36">
        <Select label="Sourced">
          <Option>A</Option>
          <Option>A</Option>
          <Option>A</Option>
        </Select>
      </div>
    ),
    icon: (
      <div className="flex gap-3 ">
        <RiWechatLine className="w-6 h-6" />

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10"
          content={
            <div className="">
              <Typography color="blue-gray" className="font-medium text-sm">
                Assessment
              </Typography>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </Tooltip>

        <BsBagCheck className="w-6 h-6 ml-2" />
      </div>
    ),
  },
];

export default function JobDetail() {
  return (
    <div className="flex bg-gray-50 ">
      <div className="flex">
        {/* Left side part */}
        <div className=" px-4  mt-10 py-2 border border-gray-200 rounded-lg">
          {/* Button */}
          <div className="flex  ">
            <Button
              variant="outlined"
              color="blue"
              className="text-black flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>{" "}
              Broadcast{" "}
            </Button>

            <Button
              variant="outlined"
              color="blue"
              className="text-black ml-2 px-8 flex gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>{" "}
              Share{" "}
            </Button>
          </div>
          <p className="ml-4 mt-5 font-medium">Add Canditates</p>

          <div>
            <Button
              variant="outlined"
              className="w-full text-indigo-400 mt-3"
              ripple={false}
              color="blue"
            >
              Fetch
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              className="w-full text-indigo-400 mt-3"
              ripple={false}
              color="blue"
            >
              Upload
            </Button>
          </div>

          <p className="ml-4 mt-5 font-medium">Filters</p>

          <div className="mt-5 ml-2">
            <Select label="Location">
              <Option>A</Option>
              <Option>B</Option>
              <Option>C</Option>
            </Select>
          </div>

          <div>
            <Checkbox label="Hide Rejected Candidates" />
            <br />
            <Checkbox label="Smart Filter" />
            <br />
            <Checkbox label="Bookmarked Candidates" />
          </div>

          <p className="ml-4 mt-5 font-medium">Notice Period</p>

          <div>
            <Checkbox label="Immadate " />
            <Checkbox label="1 month " />
            <br />
            <Checkbox label="2 months " />
            <Checkbox label="3 months " />
            <br />
            <Checkbox label="More than 3 months " />
            <br />
          </div>

          <p className="ml-4 mt-5 font-medium">Experince [Years]</p>
          <div>
            <Checkbox label="0-1 " />
            <Checkbox label="1-3 " />
            <br />
            <Checkbox label="3-8 " />
            <Checkbox label="8-10 " />
            <br />
            <Checkbox label="More than 10 years " />
            <br />
          </div>
        </div>

        {/* Right side part */}

        <div className="mt-10 rounded-md ml-5">
          <div className="flex">
            {/* left side  */}
            <div>
              <p className="text-black font-semibold text-xl">
                Customer support Associate
              </p>
              <p className="mt-1 text-xs">
                Posted by <span className="font-semibold ">Sumit</span> on{" "}
                <span className="font-semibold">10th nov 2023</span> in{" "}
                <span className="font-semibold ">Jaipur</span>
              </p>
            </div>

            {/* Right side */}
            <div className="flex ml-[500px]">
              <div>
                <p className="text-black text-xl">
                  24 <span className="text-lg">Cadidates</span>{" "}
                </p>
                <div className="flex ">
                  <Button className="bg-indigo-400 rounded-xl">Top 10</Button>
                  <Button className=" rounded-xl px-8 bg-yellow-800">
                    All
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <div className="w-48 ml-20 mt-5">
              <Input
                type="search"
                label="Search"
                className=""
                icon={<IoIosSearch />}
              />
            </div>
            <div className="mt-5 ml-4">
              <Select label="Location">
                <Option>A</Option>
                <Option>B</Option>
                <Option>C</Option>
              </Select>
            </div>
          </div>

          {/* Table start */}

          <div className="mt-10">
            <Card className="h-full w-full ">
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
                      { name, Ratings, DateApplied, HiringStage, icon },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {Ratings}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {DateApplied}
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
                              {HiringStage}
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
                              {icon}
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

          {/* Table End */}
        </div>
      </div>
    </div>
  );
}
