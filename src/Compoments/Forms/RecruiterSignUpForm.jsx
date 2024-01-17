import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { Toaster } from "react-hot-toast";
import Navbars from "../Navbars";
import RecruiterForm from "./RecruiterForm";
import CompanyForm from "./CompanyForm";

const data = [
  {
    label: "Recruiter",
    value: "html",
    desc: <RecruiterForm />,
  },
  {
    label: "Company",
    value: "react",
    desc: <CompanyForm/>,
  },
];

const RecruiterSignUpForm = () => {
  return (
    <>
      <Navbars />
      <section className="bg-blue-gray-900 h-[100vh]">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-5 w-[30rem] rounded-xl shadow-xl">
            <h1 className="text-center text-lg">Recruiter Register</h1>
            <Tabs value="html">
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruiterSignUpForm;
