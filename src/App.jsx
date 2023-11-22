import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingUp from "./Compoments/Forms/SingUp";
import Registration from "./Compoments/Forms/Registration";
import JobSection from "./Pages/JobSection";
import JobDetails from "./Compoments/Job details/JobDetails";
import AppLayout from "./Compoments/layout/AppLayout";
import { Counter } from "./features/counter/Counter";
import { useGetStudentQuery } from "./services/Registration/registrationSlice";
import RegistrationPage from "./Pages/RegistrationPage";
function App() {
  const {data,error,isLoading,isError} = useGetStudentQuery()
console.log(data,error,isLoading,isError)
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobsection" element={<JobSection/>} />
          <Route path="/jobdetails" element={<JobDetails/>} />
          <Route path="/counter" element={<Counter/>} />
       

        </Route>
        <Route path="register" element={<RegistrationPage/>} />
      </Routes>

      
      
    {/* <SingUp/> */}
      {/* <HomePage/> */}
      {/* <Registration/> */}
      {/* <JobSection/> */}
      {/* <JobDetails/> */}
    </>
  );
}

export default App;
