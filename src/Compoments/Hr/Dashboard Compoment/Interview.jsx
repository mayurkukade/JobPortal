

import React from 'react'
import {Interviews } from '../../Data/Dashboarddata'
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
               {Interviews.map(({ lable2,value2 }) => (
                 <div className="mt-10">
                 <Tab
                   key={value2}
                   value={value2}
                   onClick={() => setActiveTab(value2)}
                   className={`${
                     activeTab === value2 ? "text-gray-900" : ""
                   } text-xs`}
                 >
                   {lable2}
                 </Tab></div>
               ))}
             </TabsHeader>
             <TabsBody>
               {Interviews.map(({ value2, desc2 }) => (
                 <TabPanel key={value2} value={value2} >
                   {desc2}
                 </TabPanel>
               ))}
             </TabsBody>
           </Tabs>
    </div>
  )
}
