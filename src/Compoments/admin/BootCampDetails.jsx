import React from 'react'
import { useBootCampGetByIdQuery } from '../../services/bootcamp/bootCampSlice'
import { useParams } from 'react-router-dom'

const BootCampDetails = () => {
    const {id} = useParams()
    const {data,isLoading} = useBootCampGetByIdQuery(id)
    console.log(data)
        let content
        if(data){
            content = (
                <>
                    <p>{data.bootcamp.bootcampId}</p>
                    <p>{data.bootcamp.bootcampTital}</p>
                    <p>{data.bootcamp.bootcampDetails}</p>
                    <p>{data.bootcamp.date}</p>
                    <p>{data.bootcamp.time}</p>
                    <p>{data.bootcamp.status}</p>
                    <p>{data.bootcamp.location}</p>
                    <p>{data.bootcamp.tagLine}</p>
                    <p>{data.bootcamp.photo}</p>
                    <p>{data.bootcamp.price}</p>
                   
                </>
            )
        }else if(isLoading){
            <p>loading</p>
        }
        
    return (
    <div className='container mx-auto'>
      <p>Bootcamp</p>
      {content}
    </div>
  )
}

export default BootCampDetails
