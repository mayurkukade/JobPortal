import React from 'react'
import AddBootCampDialog from '../Forms/AddBootCampDialog'
import AllBootCampTable from '../table/AllBootCampTable'

const AddBootCamp = () => {
  return (
    <div className='container mx-auto'>
      <AddBootCampDialog/>
      <AllBootCampTable/>
    </div>
  )
}

export default AddBootCamp
