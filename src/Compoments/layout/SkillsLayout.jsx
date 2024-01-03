import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../skills/Sidebar'

const SkillsLayout = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
      
    </div>
  )
}

export default SkillsLayout
