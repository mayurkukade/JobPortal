import React from "react";
import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "../../services/studentApi/studentApiSlice";
import { useGetitTrainingByIdQuery } from "../../services/itTraining/itTrainingSlice";

const ItTrainingByIdDetails = () => {
  const { trainigId } = useParams();
  console.log(trainigId);

const {data:tariningByIdApi,isLoading,isError} = useGetitTrainingByIdQuery(Number(trainigId))
console.log(tariningByIdApi,isError)
  let content;
  if (tariningByIdApi) {
    content = (
      <>
        <p>{tariningByIdApi.object.itTrainingId}</p>
        <p>{tariningByIdApi.object.domain}</p>
        <p>{tariningByIdApi.object.mode}</p>
        <p>{tariningByIdApi.object.mentor}</p>
        <p>{tariningByIdApi.object.cost}</p>
        <p>{tariningByIdApi.object.topic}</p>
        <p>{tariningByIdApi.object.startDate}</p>
        <p>{tariningByIdApi.object.endDate}</p>
        <p>{tariningByIdApi.object.duration}</p>
        
      </>
    );
  } else if (isLoading) {
    return <p>loading...</p>;
  } else {
    return <p>error in fecthing data</p>;
  }
  return <div>{content}</div>;
};

export default ItTrainingByIdDetails;
