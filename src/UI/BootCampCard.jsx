
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
const BootCampCard = () => {
  return (
    <Card className=" overflow-hidden h-fit">
 
    <CardBody>
      <Typography variant="h3" color="blue-gray">
        Bootcamp
      </Typography>
      
      <Typography variant="h6" color="blue-gray">
        Java Full Stack Bootcamp
        
      </Typography>
    
      <Typography variant="h6" color="blue-gray">
        Java Full Stack Bootcamp
      </Typography>
      <Typography variant="h6" color="blue-gray">
        Java Full Stack Bootcamp
      </Typography>
      <Typography variant="h6" color="blue-gray">
        Java Full Stack Bootcamp
      </Typography>
      {/* <Typography variant="lead" color="gray" className="font-normal">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire others.
      </Typography> */}
    </CardBody>
    <CardFooter className="flex items-center justify-between">
      <div className="flex items-center -space-x-3">
        <Tooltip content="Natali Craig">
          <Avatar
            size="sm"
            variant="circular"
            alt="natali craig"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            className="border-2 border-white hover:z-10"
          />
        </Tooltip>
        <Tooltip content="Tania Andrew">
          <Avatar
            size="sm"
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            className="border-2 border-white hover:z-10"
          />
        </Tooltip>
      </div>
      <Typography className="font-normal">January 10</Typography>
    </CardFooter>
  </Card>
  )
}

export default BootCampCard
