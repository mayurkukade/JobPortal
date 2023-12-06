import React from "react";
import { useDeleteItTrainingMutation, useGetAllItTrainingQuery } from "../services/itTraining/itTrainingSlice";
import { Button } from "@material-tailwind/react";
const ExPage = () => {
  const { data: getApiData, isLoading, isError } = useGetAllItTrainingQuery();
  const [deleteItTraining] = useDeleteItTrainingMutation()
  console.log(getApiData);
 
  let content;
  if (getApiData) {
    content = getApiData.list.map((datas, index) => {
      console.log(datas);
      return (
        <>
          <p>{datas.itTrainingId}</p>
         <Button onClick={()=>{deleteItTraining(datas.itTrainingId)}}>delete</Button>
        </>
      );
    });
  } else if (isLoading) {
    content = <p>loading..</p>;
  } else if (isError) {
    content = <p>error</p>;
  }

  const handleButtonClick = ()=>{
    console.log('a')
  }
  
  
  return <div>{content}</div>;
};

export default ExPage;
