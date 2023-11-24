
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  import '../../CSS/Style.css'
  function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M1.5415 1L8.5415 8L1.5415 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
  }

export const data = [
    {
      label: "Student",
      value: "html",
      desc: <div className="flex flex-wrap">
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Free Package
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Apply for Jobs</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Profile with CV</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to blogs , Success Stories. </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to mentor booking</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
    </Card>

    {/* card second */}

    <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background1 sm:ml-10 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Basic Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(45% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Apply for Jobs</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Profile with CV</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to blogs , Success Stories. </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to mentor booking</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
    </Card>

    {/* second card end */}

    {/* third card start */}
    <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background2 sm:ml-10 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Premium Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 1500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(50% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Apply for Jobs</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Profile with CV</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to blogs , Success Stories. </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Access to mentor booking</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
    </Card>
    {/* third card end */}


    </div>
    },
    {
      label: "TPO",
      value: "react",
      desc: <div className="flex flex-wrap">

        {/* first card start */}
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Free Package
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Industry relations - 1 event per month</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Student benchmarking & assessment - 1 time</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Bootcamps </Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-20 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
       </Card>

        {/* first card end */}

        {/* second card start */}
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 sm:ml-10 background1 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Basic Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(45% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Industry relations - 1 per week</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Student benchmarking & feedback every month</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Higher education - event </Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
       </Card>
    {/* second card end */}

    {/* third card start */}
    <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background2 sm:ml-10 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Premium Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 1500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(50% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Training on IT skills / soft skills / analytical skills</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">MS / Phd university connect</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Incubator program </Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
    </Card>
    {/* third card end */}
    </div>
    },
    {
      label: "Hr",
      value: "vue",
      desc: <div className="flex flex-wrap">
 
          {/* first card start */}
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Free Package
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Unlimited job listings</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Unlimited profile access</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-48 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
       </Card>

        {/* first card end */}

        {/* second card start */}
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 sm:ml-10 background1 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Basic Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(45% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Candidate skills and assessment scores visibility</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Application tracking system</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-28 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
       </Card>
    {/* second card end */}

        {/* third card start */}
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 background2 sm:ml-10 sm:mt-0 mt-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal text-[2rem] font-Inter "
        >
          Premium Plan
        </Typography>
        
      </CardHeader>
      <CardBody className="p-0">
        <Typography>
            <p className="text-[1rem] text-white mb-5 font-Inter ">Every Company you need to boost your career</p>
        </Typography>

        <Typography className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px]">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>

        <p className="text-white text-xs ml-2">INR 1500/Month</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 27" fill="none" className="mt-[2px] ml-2">
           <path d="M11.4285 1.27768C11.9574 -0.425892 14.2545 -0.425892 14.7816 1.27768L16.668 7.36687C16.7832 7.73772 17.0073 8.06084 17.3081 8.29006C17.6089 8.51929 17.971 8.64288 18.3428 8.64316H24.4462C26.1545 8.64316 26.8632 10.9368 25.4828 11.9911L20.5465 15.7534C20.2451 15.9828 20.0207 16.3065 19.9054 16.678C19.7901 17.0495 19.7899 17.4497 19.9048 17.8214L21.7912 23.9105C22.32 25.6141 20.4601 27.0328 19.0762 25.9785L14.1399 22.2162C13.8388 21.9869 13.4763 21.8633 13.1042 21.8633C12.7321 21.8633 12.3695 21.9869 12.0684 22.2162L7.13216 25.9785C5.75001 27.0328 3.89185 25.6141 4.41897 23.9105L6.30534 17.8214C6.42024 17.4497 6.42003 17.0495 6.30475 16.678C6.18947 16.3065 5.96503 15.9828 5.66362 15.7534L0.729103 11.993C-0.651293 10.9386 0.0591788 8.64501 1.76572 8.64501H7.86732C8.23939 8.64512 8.60195 8.52171 8.9031 8.29246C9.20425 8.06321 9.42855 7.73987 9.54389 7.36872L11.4303 1.27953L11.4285 1.27768Z" fill="#FEB8B8"/>
        </svg>
        </Typography>

        <Typography className="flex justify-center mb-5">
            <p className="text-white text-xs ml-2">(50% OFF)</p>
        </Typography>
        <Typography>
            <p className="text-[1rem] text-white mb-2 font-Inter "><b> Additional Perks :</b></p>

        </Typography>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex items-center gap-4">
            <span className="rounded-full p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Candidate assessments - virtual / in person</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full text-white  p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white text-[0.9rem]">Interview - industry consultants</Typography>
          </li>
          
        </ul>
      </CardBody>
      <CardFooter className="mt-28 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Choose
        </Button>
        <Typography>
            <p className="text-[0.7rem] text-white mt-5">30 day money back guarantee</p>
        </Typography>
      </CardFooter>
    </Card>
    {/* third card end */}
    </div>
    },
   
  ];