
import HomePage from './Compoments/Home/HomePage'
import JobSection from './Compoments/JobSection/JobSection'
import JobDetails from './Compoments/Job details/JobDetails'
import Forms from './Compoments/Forms/Forms'
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
  <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/JobSection' element={<JobSection/>} />
     <Route path='/JobDetails' element={<JobDetails/>} />
     <Route path='/Forms/*' element={<Forms />}/>
  </Routes>
    </>
  )
}

export default App
