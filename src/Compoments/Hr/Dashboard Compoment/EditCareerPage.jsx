
import React from 'react'
import { Input, Textarea,Button } from '@material-tailwind/react'

export default function EditCareerPage() {
  return (
    <div className='flex justify-center items-center bg-darkBlueBackground min-h-screen'>
        <div className='mt-10 bg-white rounded-md px-2 py-3 '>
            <p className='font-bold text-xl'>Edit Career Page</p>
           <form action="" className=''>
             <div className='mt-5'>
                <Input type='text' label='Company Name'/>
             </div>
             <div className='mt-5'>
                <Textarea label='Company Dispriction'/>
             </div>

             <div className='mt-5'>
                <Input type='text' label='Industry type'/>
             </div>

             <div className='mt-5'>
                <Input type='text' label='Company size'/>
             </div>

             <div className='mt-5'>
                <Input type='text' label='Headquater'/>
             </div>

             <div className='mt-5 flex'>
                <label htmlFor="">Company Logo :- &nbsp;</label>
                <input type='file' />
             </div>
         
             <div className='mt-5'>
                <Button type="submit" className='bg-[#0d9488]' fullWidth >Submit</Button>
             </div>
           </form>
        </div>
    </div>
  )
}
