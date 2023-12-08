import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JobSection from "./Pages/JobSection";
import JobDetails from "./Compoments/Job details/JobDetails";
import AppLayout from "./Compoments/layout/AppLayout";
import { Counter } from "./features/counter/Counter";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentSignUpForm from "./Compoments/Forms/StudentSignUpForm";
import TpoSignUpForm from "./Compoments/Forms/TpoSignUpForm";
import RecruiterSignUpForm from "./Compoments/Forms/RecruiterSignUpForm";
import SignIn from "./Compoments/Forms/SignIn";
import Admin from "./Pages/Admin";
import StudentList from "./Compoments/admin/StudentList";
import StudentDetails from "./Compoments/studentProfile/StudentDetails";
import ItTrainingByIdDetails from "./Compoments/admin/ItTrainingByIdDetails";
import ItTrainingEdit from "./Compoments/admin/ItTrainingEdit";
import AdminItTrainingTable from "./Compoments/table/AdminItTrainingTable";
import MultiStepStudentForm from "./Compoments/studentProfile/MultiStepStudentForm";
import AddJobs from "./Compoments/admin/AddJobs";
import AddBootCamp from "./Compoments/admin/AddBootCamp";
import BootCampDetails from "./Compoments/admin/BootCampDetails";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobsection" element={<JobSection />} />
          <Route path="/profile" element={<MultiStepStudentForm />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/studentlist" element={<StudentList />} />
          <Route
            path="/admin/studentlist/studentDetails/:studentId"
            element={<StudentDetails />}
          />
          <Route path="/admin/itTraining" element={<AdminItTrainingTable />} />
          <Route
            path="/admin/itTraining/details/:trainigId"
            element={<ItTrainingByIdDetails />}
          />
          <Route
            path="/admin/itTraining/edit/:trainigId"
            element={<ItTrainingEdit />}
          />
          <Route path="/admin/bootcamp" element={<AddBootCamp />} />
          <Route path="/admin/jobs" element={<AddJobs />} />
          <Route
            path="/admin/bootcamp/details/:id"
            element={<BootCampDetails />}
          />
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
