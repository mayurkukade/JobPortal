import React from 'react'
import SingUp from './SingUp'
import Navbars from '../Navbars'
import Plan from './Plan'
import Registration from './Registration'
import MultiStepForm from './MultiStepForm'
import JobAssistment from './JobAssistment'
import MentorBooking from './MentorBooking'
import ITItraning from './ITItraning'
import LiveProject from './LiveProject'
import Card from './Cards'
import Cards from './Cards'
import { Route,Routes } from 'react-router-dom'

export default function Forms() {
  return (
    <div>

      <Navbars/>
      
      {/* <Plan/>
      <SingUp/> */}
      {/* <Registration/> */}
      {/* <MultiStepForm/> */}
      {/* <JobAssistment/> */}
      {/* <MentorBooking/> */}
      {/* <ITItraning/> */}
      {/* <LiveProject/> */}
      {/* <Cards/> */}

      <Routes>
        <Route to="/SingUp" element={<SingUp/>}/>
        <Route to="/JobAssistment" element={<JobAssistment/>}/>
        <Route to="/MentorBooking" element={<MentorBooking/>}/>
        <Route to="/ITItraning" element={<ITItraning/>}/>
        <Route to="/Registration" element={<Registration/>}/>
        <Route to="/<LiveProject/>" element={<LiveProject/>}/>
     </Routes>
     
    </div>
  )
}
