
import { useGetAllStudentQuery } from '../../services/studentApi/studentApiSlice';
import TableComponent from './TableComponent';
const StudentTable = () => {

const {data:apiData,isLoading} = useGetAllStudentQuery()

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
    },
    // Add more columns as needed
  ];

  let studentApidata
  if(isLoading){
    return <p>isLoading</p>
  }else{
    studentApidata = apiData.list
  }


  return (
    <div>
     
      <TableComponent columns={columns} data={studentApidata} />
    </div>
  );
};

export default StudentTable;

