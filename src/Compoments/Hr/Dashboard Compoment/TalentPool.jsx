
import React from 'react'
import {data } from '../../Data/Dashboarddata'
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
                {data.map(({ label, value }) => (
                  <div className="mt-10">
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`${
                      activeTab === value ? "text-gray-900" : ""
                    } text-xs`}
                  >
                    {label}
                  </Tab></div>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value} >
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
    </div>
  )
}
