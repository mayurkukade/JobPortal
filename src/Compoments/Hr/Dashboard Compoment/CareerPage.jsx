
import React from 'react'
import {Career } from '../../Data/Dashboarddata'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

export default function () {
    const [activeTab, setActiveTab] = React.useState("html");
  return (
    <div>
         <Tabs value={activeTab} className="">
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {Career.map(({ label1, value1 }) => (
                <div className="mt-10">
                <Tab
                  key={value1}
                  value={value1}
                  onClick={() => setActiveTab(value1)}
                  className={`${
                    activeTab === value1 ? "text-gray-900" : ""
                  } text-xs`}
                >
                  {label1}
                </Tab></div>
              ))}
            </TabsHeader>
            <TabsBody>
              {Career.map(({ value1, desc1 }) => (
                <TabPanel key={value1} value={value1} >
                  {desc1}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
    </div>
  )
}
