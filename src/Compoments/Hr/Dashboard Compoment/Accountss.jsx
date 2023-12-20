
import React from 'react'
import {Account } from '../../Data/Dashboarddata'
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
               {Account.map(({ lable3,value3 }) => (
                 <div className="mt-10 ml-5">
                 <Tab
                   key={value3}
                   value={value3}
                   onClick={() => setActiveTab(value3)}
                   className={`${
                     activeTab === value3 ? "text-gray-900" : ""
                   } text-xs`}
                 >
                   {lable3}
                 </Tab></div>
               ))}
             </TabsHeader>
             <TabsBody>
               {Account.map(({ value3, desc3 }) => (
                 <TabPanel key={value3} value={value3} >
                   {desc3}
                 </TabPanel>
               ))}
             </TabsBody>
           </Tabs>
    </div>
  )
}
