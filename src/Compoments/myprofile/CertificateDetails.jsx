import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useCertificateUpdateMutation } from "../../services/studentApi/studentApiSlice";
import { useGetCertificateQuery } from "../../services/studentApi/studentApiSlice";
const CertificateDetails = () => {
  const [openCertificateModal, setOpenCertificateModal] = useState(false);
  const [certificateId, setCertificateId] = useState();
const [CertificateUpdate] = useCertificateUpdateMutation()
  const [certificationInputForm, setCertificationInputForm] = useState({
    certificate: "",
    institute: "",
    durationFrom: "",
    durationTo: "",
  });
  const startYear = 1990;
  const endYear = 2030;

  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const {
    data: certificateFetched,
    isLoading: certificateLoading,
    isError: certificateError,
  } = useGetCertificateQuery();
  console.log(certificateFetched);
  let certificateFetchedData;
  if (certificateFetched) {
    certificateFetchedData = certificateFetched;
  } else if (certificateLoading) {
    certificateFetchedData = <p>Loading...</p>;
  } else if (certificateError) {
    certificateFetchedData = <p>Error</p>;
  }
console.log(certificateFetchedData)

 
  const handleOpenEducation = (id) => {
    console.log(id);
    setOpenCertificateModal(!openCertificateModal);
    setCertificateId(id);
  };

  const certificateSubmitHandler = async()=>{

const res = await CertificateUpdate({
    certificationInputForm,certificateId
})


console.log(res)
if(res?.data?.status === 'success'){
    setCertificationInputForm({
        certificate: "",
        institute: "",
        durationFrom: "",
        durationTo: ""
    });
    handleOpenEducation()
}

  }

  const certificateOnChangeHandle = (e) => {
    const { name, value } = e.target;
    setCertificationInputForm({
      ...certificationInputForm,
      [name]: value,
    });
  };


  console.log(certificateFetchedData);
  console.log(certificateId);

  console.log(certificationInputForm)
  return (
    <div>
      {certificateFetchedData?.list?.map((certificateFetched, index) => {
        console.log(certificateFetched);
        return (
          <div key={index} className="mt-5">
            <div className="flex items-center gap-5">
              <p>{certificateFetched.certificate }</p>
              <FaEdit
                className="cursor-pointer"
                onClick={() =>
                  handleOpenEducation(certificateFetched?.certificateId)
                }
              />
            </div>
          
            <p>{certificateFetched.institute}</p>
            <div className="flex">
            <p>{certificateFetched.durationFrom}</p> -
            <p>{certificateFetched.durationTo}</p>
            </div>
         
          </div>
        );
      })}
      <Dialog open={openCertificateModal} handler={handleOpenEducation}  >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <form className="flex flex-col justify-center space-y-8 p-5  mt-5 ">
          <div className="space-y-8">
            <div className="flex justify-center gap-10 items-center w-[35rem]"></div>
            <div className="flex justify-center gap-10 items-center w-[35rem]">
              <p className="w-20">Course Certification</p>
              <Input
                label="Course"
                name="certificate"
                onChange={certificateOnChangeHandle}
              
              />
            </div>
            <div className="flex justify-center gap-12  items-center w-[35rem]">
              <p className="w-20">Institute</p>
              <Input
                label="Institute"
                name="institute"
                value={certificationInputForm.institute}
                onChange={certificateOnChangeHandle}
              />
            </div>
            <div className="flex justify-start gap-10 items-center w-[35rem]">
              <p className="w-20">Year</p>
              <div className="flex  gap-5">
                <select
                  name="durationFrom"
                  className="w-fit border border-gray-700 mt-1 p-2 rounded-md overflow-x-auto"
                  onChange={certificateOnChangeHandle}
                >
                  <option>From</option>
                  {year.map((yearData, index) => {
                    return <option key={index}>{yearData}</option>;
                  })}
                </select>

                <select
                  name="durationTo"
                  className="w-fit border border-gray-700 mt-1 p-2 rounded-md overflow-x-auto"
                  onChange={certificateOnChangeHandle}
                >
                  <option>To</option>
                  {year.map((yearData, index) => {
                    return <option key={index}>{yearData}</option>;
                  })}
                </select>
                
              </div>
              
            </div>
            
          </div>
          <Button className="w-fit ml-[7rem]" onClick={certificateSubmitHandler}>Submit</Button>
        </form>
      </Dialog>
    </div>
  );
};

export default CertificateDetails;
