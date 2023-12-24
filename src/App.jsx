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
import BootCampEdit from "./Compoments/admin/BootCampEdit";
import JobDetailsById from "./Compoments/Job details/JobDetailsById";
import AdminRequire from "./features/AdminRequire/AdminRequire";
import { ROLES } from "./Compoments/config/roles";
import Mentor from "./Compoments/admin/Mentor";
import MentorDetails from "./Compoments/admin/MentorDetails";
import MentorEdit from "./Compoments/admin/MentorEdit";
import Dashboard from "./Compoments/Hr/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CookiePolicy from "./Pages/CookiePolicy";
import SecurityGuidelines from "./Pages/SecurityGuidelines";
import PublishJob from "./Compoments/Hr/DashboardFeatures/PublishJob";
import TokenRequire from "./features/TokenRequire/TokenRequire";
import Myprofile from "./Pages/Myprofile";
import Savejobs from "./Pages/Savejobs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {/* admin */}

          <Route
            element={<AdminRequire allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/studentlist" element={<StudentList />} />
            <Route
              path="/admin/studentlist/studentDetails/:studentId"
              element={<StudentDetails />}
            />
            <Route
              path="/admin/itTraining"
              element={<AdminItTrainingTable />}
            />
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
            <Route
              path="/admin/bootcamp/details/:id"
              element={<BootCampDetails />}
            />

            <Route path="/admin/bootcamp/edit/:id" element={<BootCampEdit />} />
            <Route path="/admin/mentor" element={<Mentor />} />
            <Route
              path="/admin/mentor/details/:id"
              element={<MentorDetails />}
            />
            <Route path="/admin/mentor/edit/:id" element={<MentorEdit />} />
          </Route>

          <Route>
            <Route
              element={
                <TokenRequire allowedRoles={[...Object.values(ROLES)]} />
              }
            >
              <Route path="/jobsection" element={<JobSection />} />
              <Route path="/jobdetails/:id" element={<JobDetailsById />} />
              <Route path="/edit/profile" element={<MultiStepStudentForm />} />
              <Route path="/profile/:id" element={<Myprofile />} />
              <Route path="/savejob/:id" element={<Savejobs />} />
            </Route>
          </Route>

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/jobsection" element={<JobSection />} />
          <Route path="/jobdetails/:id" element={<JobDetailsById />} /> */}
          <Route path="/profile" element={<MultiStepStudentForm />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="/PublishJob" element={<PublishJob />} />
        </Route>

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/studentSignUp" element={<StudentSignUpForm />} />
        <Route path="/tpo" element={<TpoSignUpForm />} />
        <Route path="/recruitersignup" element={<RecruiterSignUpForm />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/securityguidelines" element={<SecurityGuidelines />} />
      </Routes>
    </>
  );
}

export default App;
