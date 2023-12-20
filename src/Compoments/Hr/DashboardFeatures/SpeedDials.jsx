
import React from 'react'
import {Button} from "@material-tailwind/react";
import{motion} from 'framer-motion'
  

export default function SpeedDials() {
  return (
    <div className='flex'>
      <motion.div className='' whileHover={{scale :1.1}}>
       <Button className='bg-green-400' >Edit</Button>
     </motion.div>
      <motion.div className='ml-2' whileHover={{scale:1.1}}>
       <Button className='bg-red-400' >Delete</Button>
     </motion.div>
      <motion.div className='ml-2' whileHover={{scale : 1.1}}>
       <Button className='bg-indigo-400' >Details</Button>
     </motion.div>
    </div>
  )
}

