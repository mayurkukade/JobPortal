import { useGetSavedJobBYUserIdQuery } from "../services/savedJob/savedJobsApiSlice"
import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Select,
  Option,
} from "@material-tailwind/react";
import Lens from '../Compoments/Images/Lenskart.png'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { CgLayoutGrid } from "react-icons/cg";
const Savejobs = () => {
  const {data,isLoading,isSuccess,isError} = useGetSavedJobBYUserIdQuery()
  console.log(data)
  let saveFetched
  if(isLoading){
    saveFetched = <p>Loading</p>
  }else if(isSuccess){
    saveFetched = data
  }else if(isError){
    saveFetched = <p>Error</p>
  }
  console.log(saveFetched)
  return (
    <div className='mx-auto container'>
    {
      saveFetched?.list?.map((data,index)=>{
        console.log(data)
        return(
          <>
          <Card
          shadow-lg
          className="bg-[#e6f4f1] mt-5 xs:w-full sm:w-full ss:w-[48rem] lg:w-[58rem] xl:w-[72rem] mb-5 hover:shadow-xl z-12"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-3 pt-0 pb-3"
          >
           
              <Avatar
                size="lg"
                variant="square"
                src={Lens}
                alt="tania andrew"
                className="object-cover p-3 w-fit "
              />
            

            <div className="flex w-full flex-col gap-0.5 ">
              <div className="flex items-center justify-between ">
                <Link to={`/jobdetails/`} target="_blank">
                  <Typography className="text-primary font-semibold ss:text-lg xxs:text-sm">
                    postName
                  </Typography>
                </Link>
                <div className="  flex items-center gap-6 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>

                  <div>
                    <Link to={`/jobdetails/}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer  "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <svg
                     
                      // onClick={()=>setToggle(!saveToggle)}
                      xmlns="http://www.w3.org/2000/svg"
                     
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div color="blue-gray" className="flex justify-between">
                <Link to={`/jobdetails/`} target="_blank">
                  <div className=" flex justify-start gap-3 xs:text-xs ">
                    <Typography>companyName</Typography>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex justify-center items-center ">
                      <PiSuitcaseSimpleDuotone />
                      <Typography>experienceLevel years</Typography>
                    </div>
                    <div className="flex justify-center items-center">
                      <MdCurrencyRupee />
                      <p>Not Disclosed</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <CiLocationOn />
                      <Typography>jobLocation</Typography>
                    </div>
                    <div className="xxs:hidden xs:hidden ss:block ss:flex ss:items-center ">
                      <CiCalendarDate />
                      <Typography>postDate</Typography>
                    </div>
                  </div>
                  <div className="ss:hidden xxs:flex xxs:items-center">
                    <CiCalendarDate />
                    <Typography>postDate</Typography>
                  </div>
                </Link>
                <div className="flex  justify-end gap-2 mr-2 xxs:hidden">
                  <Typography>Premium</Typography>
                  <Typography>Info</Typography>

                  <Typography>Save</Typography>
                </div>
              </div>
              
            </div>
          </CardHeader>
        </Card>
        </>
        )
      })
    }
     
    </div>
  )
}

export default Savejobs

