import {
  Card,
  
  CardBody,
  Typography,
  
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import whatsapp from '../Images/homeImages/whatsapp-8.svg'


const StillHaveDout = () => {
  return (
    <div className="flex justify-center mt-[8rem] mb-10">
      <Card className="w-full max-w-[50rem] p-5 shadow-lg">
        <CardBody className="mb-6 p-0">
          <Typography variant="h3" className="text-center flex justify-center items-center">
        <img src={whatsapp} alt="whats" className="w-10" />   Still in doubt? We are here to help you out!
          </Typography>
          <div className=" flex justify-center flex-col gap-3 items-center mt-10">
            <div className="w-72">
              <Input label="Your name" />
            </div>
            <div className="w-72">
              <Input label="Your Whatsapp number" />
            </div>
            <div className="w-72">
              <Input label="Email" />
            </div>
            <Button className="mt-3 h-12 bg-primary" >Contact Us</Button>
          </div>
        
        </CardBody>
      </Card>
    </div>
  );
};

export default StillHaveDout;
