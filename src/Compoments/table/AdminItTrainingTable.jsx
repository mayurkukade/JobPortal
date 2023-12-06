import { useNavigate } from "react-router-dom";
import TableComponent from "./TableComponent";
import { Button } from "@material-tailwind/react";
import { useDeleteItTrainingMutation, useGetAllItTrainingQuery } from "../../services/itTraining/itTrainingSlice";
import { ItTrainingDialog } from "../Forms/ItTrainingDialog";
const AdminItTrainingTable = () => {
  const { data: apiData, isLoading, isError,mutate } = useGetAllItTrainingQuery();
  console.log(apiData, isError);
  console.log(mutate)
const [deleteItTraining] = useDeleteItTrainingMutation()
  const navigate = useNavigate();
  const columns = [
    {
      Header: "Id",
      accessor: "itTrainingId",
    },
    {
      Header: "Cost",
      accessor: "cost",
    },
    {
      Header: "Domain",
      accessor: "domain",
    },
    {
      Header: "Topic",
      accessor: "topic",
    },

    {
      Header: "Mentor",
      accessor: "mentor",
    },
    {
      Header: "Mode",
      accessor: "mode",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "End Date",
      accessor: "endDate",
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "Info",
      accessor: "",
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <Button onClick={() => handleButtonClick(row.original.itTrainingId)}>
            Details
          </Button>
          <Button
            onClick={() => handleButtonEditClick(row.original.itTrainingId)}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleButtonDeleteClick(row.original.itTrainingId)}
          >
            Delete
          </Button>
        </div>
      ),
    },
    // Add more columns as needed
  ];

  let studentApidata;
  if (isLoading) {
    return <p>isLoading</p>;
  } else {
    studentApidata = apiData.list;
  }
  const handleButtonClick = (id) => {
    navigate(`/admin/itTraining/details/${id}`);
    // Handle button click, e.g., perform an action based on the student ID
    console.log(`Button clicked for student ID: ${id}`);
  };
  const handleButtonEditClick = (id) => {
    navigate(`/admin/itTraining/edit/${id}`);
    // Handle button click, e.g., perform an action based on the student ID
    console.log(`Button clicked for student ID: ${id}`);
  };
  const handleButtonDeleteClick = (id) => {
console.log(id)
    // Handle button click, e.g., perform an action based on the student ID
    console.log(`Button clicked for student ID: ${id}`);
    deleteItTraining(id)
    navigate('/admin/itTraining')
  };

  return (
    <div className="container mx-auto">
    <ItTrainingDialog/>
      <TableComponent columns={columns} data={studentApidata} />
    </div>
  );
};

export default AdminItTrainingTable;
