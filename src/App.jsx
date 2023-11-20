import { Routes, Route } from "react-router-dom";
import HomePage from "./Compoments/Home/HomePage";
import SingUp from "./Compoments/Forms/SingUp";
import Registration from "./Compoments/Forms/Registration";
import JobSection from "./Compoments/JobSection/JobSection";
import JobDetails from "./Compoments/Job details/JobDetails";
import AppLayout from "./Compoments/layout/AppLayout";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobsection" element={<JobSection/>} />
          <Route path="/counter" element={<Counter/>} />
        </Route>
      </Routes>
      {/*
    <SingUp/> */}
      {/* <HomePage/> */}
      {/* <Registration/> */}
      {/* <JobSection/> */}
      {/* <JobDetails/> */}
    </>
  );
}

export default App;
