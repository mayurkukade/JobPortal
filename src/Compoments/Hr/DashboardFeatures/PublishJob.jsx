
import React from 'react'
import { Card, Typography,Button,Input } from "@material-tailwind/react";
import SpeedDials from './SpeedDials';
import{motion} from 'framer-motion'
import { IoIosSearch } from "react-icons/io";
  

const TABLE_HEAD = ["id","Cost", "Domain", "Topic", "Mentor" , "Mode","Start Date", "End Date", "Duration" , "Info"];
 
const TABLE_ROWS = [
  {
    id : 1,
    Cost: 50000,
    Domain: "Anant",
    Topic: "23/04/18",
    Mentor : "UU ",
    Mode : "UU ",
    StartDate : "23-10-23 ",
    EndDate : " 23-12-23",
    Duration : " www",
    Info : <SpeedDials/>,
  },
  {
    id : 2,
    Cost: 24562,
    Domain: "UU",
    Topic: "23/04/18",
    Mentor : "UU ",
    Mode : " UU",
    StartDate : "23-12-23 ",
    EndDate : "23-12-23 ",
    Duration : "www ",
    Info : <SpeedDials/>,
  },
  {
    id : 3,
    Cost: 50000,
    Domain: "UU",
    Topic: "19/09/17",
    Mentor : " UU",
    Mode : " UU",
    StartDate : "23-12-23 ",
    EndDate : " 23-12-23",
    Duration : "www ",
    Info : <SpeedDials/>,
  },
  {
    id : 4,
    Cost: 50000,
    Domain: "UU",
    Topic: "24/12/08",
    Mentor : "UU ",
    Mode : " UU",
    StartDate : "23-12-23 ",
    EndDate : "23-12-23 ",
    Duration : " www",
    Info : <SpeedDials/>,
  },
  {
    id : 5,
    Cost: 50000,
    Domain: "UU",
    Topic: "04/10/21",
    Mentor : "UU ",
    Mode : "UU ",
    StartDate : "23-12-23 ",
    EndDate : " 23-12-23",
    Duration : "www ",
    Info : <SpeedDials/>,
  },
];

export default function PublishJob() {
  const [searchQuery, setSearchQuery] = React.useState('');

  

  const filteredRows = TABLE_ROWS.filter(row => (
    Object.values(row).some(value => String(value).toLowerCase().includes(searchQuery.toLowerCase()))
  ));

 
  return (
    <div className='flex bg-indigo-100 min-h-screen'>
      <div>

        <motion.div whileHover={{scale : 1.1 ,originX:0}}>
          <Button className='mt-5 ml-20 bg-yellow-900'>Add Training</Button>
          
        </motion.div>
        <div className='w-72 ml-20 mt-5'>
        <Input
            type="search"
            label='Search'
            className=''
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<IoIosSearch />}
          />
        </div>

         {/* Display search result message */}
         {filteredRows.length === 0 && searchQuery !== '' && (
          <p className="ml-20 mt-3 text-red-500">No results found for "{searchQuery}"</p>
        )}

        {/* Display table if there are results */}
        {filteredRows.length > 0 && (
          <Card className=" mt-5 ml-20">
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
                {filteredRows.map(({ id, Cost, Domain, Topic, Mentor, Mode, StartDate, EndDate, Duration, Info }, index) => {
                  const isLast = index === filteredRows.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                      </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Cost}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Domain}
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
                    {Topic}
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
                    {Mentor}
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
                    {Mode}
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
                    {StartDate}
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
                    {EndDate}
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
                    {Duration}
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
                    {Info}
                  </Typography>
                </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        )}
    {/* Table end */}

      </div>
    </div>
  )
}
