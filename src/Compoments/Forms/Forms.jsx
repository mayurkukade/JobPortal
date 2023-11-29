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
      
      {/* <Plan/> */}
      {/* <SingUp/> */}
      {/* <Registration/> */}
      {/* <MultiStepForm/> */}
      {/* <JobAssistment/> */}
      {/* <MentorBooking/> */}
      {/* <ITItraning/> */}
      {/* <LiveProject/> */}
      {/* <Cards/> */}

      <Routes>
         
         <Route path="JobAssistment" element={<JobAssistment />} />
          <Route index="SingUp" element={<SingUp/>} />
         <Route path="MultiStepForm" element={<MultiStepForm/>} />
         <Route path="MentorBooking" element={<MentorBooking />} />
         <Route path="ITItraning" element={<ITItraning />} />
         <Route path="Registration" element={<Registration />} />
         <Route path="LiveProject" element={<LiveProject />} />
      </Routes>
     
    </div>
  )
}
