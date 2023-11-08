import React from 'react'

export default function Plan() {
  return (
    <div className=' mt-10 ml-5 flex justify-center'>
      <div className='flex flex-wrap'>
        {/* First plan */}
        <div className='w-[23.5625rem] h-[38.75rem] flex justify-center items-center bg-Details rounded-lg'>
          <p className='text-[2.5rem]'>Student Plan</p>
        </div>
        {/* Second plan */}
        <div className='w-[23.5625rem] h-[38.75rem] md:ml-20 md:mt-0 mt-5 flex justify-center items-center bg-Details rounded-lg'>
          <p className='text-[2.5rem]'>TPO Plan</p>
        </div>
        {/* Second plan */}
        <div className='w-[23.5625rem] h-[38.75rem] md:ml-20 md:mt-0 mt-5 flex justify-center items-center bg-Details rounded-lg'>
          <p className='text-[2.5rem]'>Corporate plan
</p>
        </div>

      </div>
    </div>
  )
}
