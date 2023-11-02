import React from 'react'

export default function HeaderLower() {
  return (
    <div className='flex justify-center mt-10'>

      <div className='md:grid md:grid-cols-12 md:divide-x-4 md:divide-gray-900'>
        
        {/* First block */}
        <div className='col-span-3 w-[300px]  '>
            <p className='text-3xl text-[#CF4307] flex justify-center'>1200+</p>
            <p className='text-[30px] flex justify-center text-[#060000]'>Job Available</p>
         </div>
        {/* Second block */}
        <div className='col-span-3 w-[300px]  '>
            <p className='text-3xl text-[#CF4307] flex justify-center'>200+</p>
            <p className='text-[30px] flex justify-center text-[#060000]'>Top Compimes</p>
         </div>
        {/* First block */}
        <div className='col-span-3 w-[300px]  '>
            <p className='text-3xl text-[#CF4307] flex justify-center'>2000+</p>
            <p className='text-[30px] flex justify-center text-[#060000]'>Canditate Hired</p>
         </div>
        {/* First block */}
        <div className='col-span-3 w-[300px]  '>
            <p className='text-3xl text-[#CF4307] flex justify-center'>30+</p>
            <p className='text-[30px] flex justify-center text-[#060000]'>Class Available</p>
         </div>

       </div>

       
    </div>
  )
}
