import CoursePlayList from '../skills/CoursePlayList'
import { Outlet } from 'react-router-dom'
const CourseplaylistLayOut = () => {
  return (
    <div className='flex'>
      <CoursePlayList/>
      <Outlet/>
    </div>
  )
}

export default CourseplaylistLayOut
