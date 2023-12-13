import { useNavigate } from "react-router-dom";
import { useGetAllStudentQuery } from "../../services/studentApi/studentApiSlice";
import TableComponent from "./TableComponent";
import { Button } from "@material-tailwind/react";
import { useDeleteMentorMutation, useGetAllMentorQuery } from "../../services/mentor/mentorSlice";
const MentorTable = () => {
  const {
    data: apiData,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllMentorQuery();

  const [deleteMentor] = useDeleteMentorMutation()

  const navigate = useNavigate();
  const columns = [
    {
      Header: "ID",
      accessor: "mentorId",
    },
    {
      Header: "Speciality Of Mentor",
      accessor: "specialityOfMentor",
    },
    {
      Header: "Skills",
      accessor: "skills",
    },

    {
      Header: "subject",
      accessor: "subject",
    },
    {
      Header: "Mentor Info",
      accessor: "mentorInfo",
    },
    {
      Header: "Achievements",
      accessor: "achievements",
    },
    {
      Header: "cost",
      accessor: "cost",
    },
    {
      Header: "Info",
      accessor: "",
      Cell: ({ row }) => (
        <div className=" flex gap-2 ">
          <Button onClick={() => handleButtonClick(row.original.mentorId)}>
            Details
          </Button>
          <Button onClick={() => handleEditButtonClick(row.original.mentorId)}>
            Edit
          </Button>
          <Button onClick={() => handleDeleteButtonClick(row.original.mentorId)}>
            Delete
          </Button>
       
        </div>
      ),
    },
    // Add more columns as needed
  ];

  let mentorApiData;
  if (isLoading) {
    return <p>isLoading</p>;
  } else {
    mentorApiData = apiData.response;
  }
  const handleButtonClick = (id) => {
    navigate(`/admin/mentor/details/${id}`);
    // Handle button click, e.g., perform an action based on the student ID
    console.log(`Button clicked for student ID: ${id}`);
  };
  const handleDeleteButtonClick = (id) => {
  deleteMentor(id)
  };
  const handleEditButtonClick = (id) => {
    navigate(`/admin/mentor/edit/${id}`);
  };

  return (
    <div>
      <TableComponent columns={columns} data={mentorApiData} />
    </div>
  );
};

export default MentorTable;
