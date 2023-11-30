import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingUp from "./Compoments/Forms/SingUp";
import Registration from "./Compoments/Forms/Registration";
import JobSection from "./Pages/JobSection";
import JobDetails from "./Compoments/Job details/JobDetails";
import AppLayout from "./Compoments/layout/AppLayout";
import { Counter } from "./features/counter/Counter";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentSignUpForm from "./Compoments/Forms/StudentSignUpForm";
import TpoSignUpForm from "./Compoments/Forms/TpoSignUpForm";
import RecruiterSignUpForm from "./Compoments/Forms/RecruiterSignUpForm";
import SignIn from "./Compoments/Forms/SignIn";
import StudentProfile from "./Compoments/studentProfile/StudentProfile";
import Admin from "./Pages/Admin";
import StudentList from "./Compoments/admin/StudentList";
import StudentDetails from "./Compoments/studentProfile/StudentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobsection" element={<JobSection />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/studentlist" element={<StudentList/>} />
          <Route path="/admin/studentlist/studentDetails/:studentId" element={<StudentDetails/>} />
        </Route>
        <Route path="register" element={<RegistrationPage />} />
        <Route path="/studentSignUp" element={<StudentSignUpForm />} />
        <Route path="/tpo" element={<TpoSignUpForm />} />
        <Route path="/recruitersignup" element={<RecruiterSignUpForm />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
