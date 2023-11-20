import { Routes, Route } from "react-router-dom";
import HomePage from "./Compoments/Home/HomePage";

import JobSection from "./Compoments/JobSection/JobSection";

import AppLayout from "./Compoments/layout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobsection" element={<JobSection/>} />
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
