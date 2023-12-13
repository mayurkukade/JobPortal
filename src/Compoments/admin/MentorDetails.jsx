import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetIdMentorQuery } from '../../services/mentor/mentorSlice'

const MentorDetails = () => {
    const {id} = useParams()
    const {data,isLoading,isSuccess} =useGetIdMentorQuery(id)
    console.log(data?.response)
    if(isLoading){
        return <p>Loading...</p>
    }

    let apiData 
    if(isSuccess){
        apiData = data?.response
    console.log(apiData)
    }
  return (
    <>
      <p>mentorId: {apiData.mentorId}</p>
      <p>specialityOfMentor:{apiData.specialityOfMentor}</p> 
      <p>skills:{apiData.skills}</p>
      <p>subjects:{apiData.subject}</p> 
      <p>mentorInfo:{apiData.mentorInfo}</p>
      <p>achievements:{apiData.achievements}</p>
      <p>socalMediaLinkF:{apiData.socalMediaLinkF}</p>
      <p>aboutAs:{apiData.aboutAs}</p>
      <p>socalMediaLinkL:{apiData.socalMediaLinkL}</p>
      <p>socalMediaLinkF1:{apiData.socalMediaLinkF1}</p>
      <p>socalMediaLinkInsta:{apiData.socalMediaLinkInsta}</p>
      <p>cost:{apiData.cost}</p>
          
    </>
  )
}

export default MentorDetails
