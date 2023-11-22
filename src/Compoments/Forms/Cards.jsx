import React from 'react'

 import {data} from '../Data/CardData'
 import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Cards() {
  const [activeTab, setActiveTab] = React.useState("html");
  return (
    <div className='flex justify-center mt-20'>
      <Tabs value={activeTab} className="sm:w-[1200px]">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className='sm:ml-20 ml-5  sm:mt-10'>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className=''>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  )
}
