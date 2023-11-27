
import HomePage from './Compoments/Home/HomePage'
import Registration from './Compoments/Forms/Registration'
import JobSection from './Compoments/JobSection/JobSection'
import JobDetails from './Compoments/Job details/JobDetails'
import Forms from './Compoments/Forms/Forms'
import { Route,Routes } from 'react-router-dom'
import SingUp from './Compoments/Forms/SingUp'
function App() {
 

  return (
    <>
<Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/JobSection' element={<JobSection/>} />
     <Route path='/JobDetails' element={<JobDetails/>} />
     <Route path='/Forms/*' element={<Forms />}>
       <Route index element={<SingUp />} />
     </Route>
</Routes>
    </>
  )
}

export default App
