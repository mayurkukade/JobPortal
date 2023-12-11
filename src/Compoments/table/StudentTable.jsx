
import { useNavigate } from 'react-router-dom';
import { useGetAllStudentQuery } from '../../services/studentApi/studentApiSlice';
import TableComponent from './TableComponent';
import { Button } from '@material-tailwind/react';

const StudentTable = () => {

const {data:apiData,isLoading} = useGetAllStudentQuery()
const navigate = useNavigate()
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Full Name',
      accessor: 'fullName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Mobile Number',
      accessor: 'moNumber',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Ref',
      accessor: 'ref',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Info',
      accessor: '',
      Cell: ({ row }) => (
        <Button onClick={() => handleButtonClick(row.original.id)}>Details</Button>
      ),
    },
    // Add more columns as needed
  ];

  let studentApidata
  if(isLoading){
    return <p>isLoading</p>
  }else{
    studentApidata = apiData.list
  }
  const handleButtonClick = (id) => {
navigate(`/admin/studentlist/studentDetails/${id}`)
    // Handle button click, e.g., perform an action based on the student ID
    console.log(`Button clicked for student ID: ${id}`);
  };

  return (
    <div>
     
      <TableComponent columns={columns} data={studentApidata} />
    </div>
  );
};

export default StudentTable;

