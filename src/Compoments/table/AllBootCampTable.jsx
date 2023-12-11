import React from 'react'
import { useBootCampDeleteMutation, useBootCampGetQuery } from '../../services/bootcamp/bootCampSlice'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import TableComponent from './TableComponent'
const AllBootCampTable = () => {
    const {data:apiData,isLoading} = useBootCampGetQuery()
console.log(apiData)
const [bootCampDelete] = useBootCampDeleteMutation()
   const navigate = useNavigate()
    const columns = [
      {
        Header: "Id",
        accessor: "bootcampId",
      },
      {
        Header: "Title",
        accessor: "bootcampTital",
      },
      {
        Header: "bootcampDetails",
        accessor: "bootcampDetails",
      },
      {
        Header: "date",
        accessor: "date",
      },
  
      {
        Header: "Bootcamp Date",
        accessor: "bootcampDate",
      },
      {
        Header: "time",
        accessor: "time",
      },
      {
        Header: "status",
        accessor: "status",
      },
      {
        Header: "location",
        accessor: "location",
      },
      {
        Header: "tagLine",
        accessor: "tagLine",
      },
      {
        Header: "photo",
        accessor: "photo",
      },
      {
        Header: "price",
        accessor: "price",
      },
      {
        Header: "Info",
        accessor: "",
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <Button onClick={() => handleDetailsButtonClick(row.original.bootcampId)}>
              Details
            </Button>
            <Button
              onClick={() => handleButtonEditClick(row.original.bootcampId)}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleButtonDeleteClick(row.original.bootcampId)}
            >
              Delete
            </Button>
          </div>
        ),
      },
      // Add more columns as needed
    ];

    let allBootCamp
    if(isLoading){
      return <p>isLoading</p>
    }else{
      allBootCamp = apiData.bootcamps
    }

    const handleDetailsButtonClick = (id) => {
      navigate(`/admin/bootcamp/details/${id}`)
        };
    const handleButtonEditClick = (id) => {
      navigate(`/admin/bootcamp/edit/${id}`)
        };

        const handleButtonDeleteClick = (id)=>{
          bootCampDelete(id)
      
        }
      
  
  return (
    <>
       <TableComponent columns={columns} data={allBootCamp} />
    </>
  )
}

export default AllBootCampTable
