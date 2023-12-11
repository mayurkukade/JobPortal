
import React from 'react'
import { Card, Typography,Button,Input,
  Dialog,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Radio,
  Textarea,Label, } from "@material-tailwind/react";
import SpeedDials from './SpeedDials';
import{motion} from 'framer-motion'
  

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

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

  const filteredRows = TABLE_ROWS.filter(row => (
    Object.values(row).some(value => String(value).toLowerCase().includes(searchQuery.toLowerCase()))
  ));

  function handleSubmit(){
    console.log("company : -" ,company);
    console.log("job : -" ,job);
    console.log("skills : -" ,skills);
    console.log("date : -" ,date);
    console.log("dispriction : -" ,dispriction);
    console.log("address : -" ,address);
    console.log("salary : -" ,salary);
    console.log("experince : -" ,experince);
    console.log("type : -" ,type);
    console.log("incentives : -" ,incentives);
    console.log("requriments : -" ,requriments);

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
    <div className='flex '>
      <div>

        <motion.div whileHover={{scale : 1.1 ,originX:0}}>
          <Button className='mt-5 ml-20 bg-yellow-900' onClick={handleOpen}>Add Training</Button>
          
        </motion.div>
        <div className='w-72 ml-20 mt-5'>
        <Input
            type="search"
            label='Search'
            className=''
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

         {/* Display search result message */}
         {filteredRows.length === 0 && searchQuery !== '' && (
          <p className="ml-20 mt-3 text-red-500">No results found for "{searchQuery}"</p>
        )}

        {/* Display table if there are results */}
        {filteredRows.length > 0 && (
          <Card className="h-full w-full overflow-scroll mt-5 ml-20">
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


         {/* Add Training start */}
   
         <Dialog
        size='md'
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit} className='bg-white rounded-md px-5 py-5 flex justify-center'>
          <div>
            <div>
              <p className='text-lg ml-3 font-bold'>Add Training</p>
            </div>

             <div className='mt-5 flex'>
               <div>
                 <Input type='text' label='Company Name' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className='ml-1'>
                 <Input type='text' label='Job Profile' value={job} onChange={(e) => setJob(e.target.value)} />
                </div>
             </div>

            <div className='mt-5 flex'>
              <div>
                <Input type='text' label='Skills' value={skills} onChange={(e) => setSkills(e.target.value)} />
              </div>
              <div className='ml-1'>
               <Input type='date' label='Post Date' value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
                
             </div>

             <div className='mt-5 flex'>
              <div>
               <Input type='text' label='Job Dispriction' value={dispriction} onChange={(e) => setDispriction(e.target.value)} />
              </div>
                <div className='ml-1'>
                 <Input label='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
             </div>

            <div className='mt-5 flex'>
              <div>
                <Input type='number' label='Salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
              </div>
              <div className='ml-1'>
                <Input type='text' label='Experince' value={experince} onChange={(e) => setExperince(e.target.value)} />
              </div>
            </div>

            <div className='mt-5 flex'>
              <div>
                <Input type='text' label='Job Type' value={type} onChange={(e) => setType(e.target.value)} />
              </div>
              <div className='ml-1'>
                <Input type='text' label='Incentives' value={incentives} onChange={(e) => setIncentives(e.target.value)} />
              </div>
            </div>

            <div className='mt-5 flex'>
              <div>
                <Input type='text' label='Requriments' value={requriments} onChange={(e) => setRequriments(e.target.value)} />
              </div>
              <div className='ml-5'>
                <input type='file' placeholder='Select Logo' className='py-2'/>
              </div>
            </div>
              <div className='mt-5 '>
               <Button className='w-full' type='submit' color='green'>Submit</Button>
              </div>
            </div>    
       </form>
      </Dialog>

         {/* Add Training end */}
      </div>
    </div>
  )
}
