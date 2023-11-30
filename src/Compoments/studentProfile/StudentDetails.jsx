import React from "react";
import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "../../services/studentApi/studentApiSlice";

const StudentDetails = () => {
  const { studentId } = useParams();
  console.log(studentId);

  const { data: studentDetailByIdApi, isLoading } =
    useGetStudentQuery(studentId);
  let content;
  if (studentDetailByIdApi) {
    content = (
      <>
        <p>{studentDetailByIdApi.response.fullName}</p>
        <p>{studentDetailByIdApi.response.email}</p>
        <p>{studentDetailByIdApi.response.moNumber}</p>
        <p>{studentDetailByIdApi.response.status}</p>
        <p>{studentDetailByIdApi.response.date}</p>
        <p>{studentDetailByIdApi.response.ref}</p>
        <p>{studentDetailByIdApi.response.gender}</p>
        <p>{studentDetailByIdApi.response.id}</p>
      </>
    );
  } else if (isLoading) {
    return <p>loading...</p>;
  } else {
    return <p>error in fecthing data</p>;
  }
  return <div>{content}</div>;
};

export default StudentDetails;
