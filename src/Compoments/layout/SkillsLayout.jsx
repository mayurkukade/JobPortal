import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../skills/SIdebar'

const SkillsLayout = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
      
    </div>
  )
}

export default SkillsLayout
