import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetitTrainingByIdQuery,
  useUpdateItTrainingMutation,
} from "../../services/itTraining/itTrainingSlice";

const ItTrainingEdit = () => {
  const { trainigId } = useParams();
  const { data, isLoading, isError } = useGetitTrainingByIdQuery(Number(trainigId));
  const [updateItTraining] = useUpdateItTrainingMutation();
  const navigate = useNavigate();
console.log(data)
  const [domain, setDomain] = useState(data?.object?.domain);
  const [mode, setMode] = useState(data?.object?.mode );
  const [mentor, setMentor] = useState(data?.object?.mentor);
  const [cost, setCost] = useState(data?.object?.cost );
  const [topic, setTopic] = useState(data?.object?.topic );
  const [startDate, setStartDate] = useState(data?.object?.startDate);
  const [endDate, setEndDate] = useState(data?.object?.endDate );
  const [duration, setDuration] = useState(data?.object?.duration );

  const onChangeDomain = (e) => setDomain(e.target.value);
  const onChangeMode = (e) => setMode(e.target.value);
  const onChangeMentor = (e) => setMentor(e.target.value);
  const onChangeCost = (e) => setCost(e.target.value);
  const onchangeTopic = (e) => setTopic(e.target.value);
  const onChangeStartDate = (e) => setStartDate(e.target.value);
  const onchangeEndDate = (e) => setEndDate(e.target.value);
  const onChangeDuration = (e) => setDuration(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateItTraining({
        domain,
        mode,
        mentor,
        cost,
        topic,
        startDate,
        endDate,
        duration,
        id: trainigId,
      });

      if (res.error) {
        toast.error("Unsuccessful registration");
      } else {
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
if(isLoading){
  <p>loading...</p>
}
  return (
    <>
  
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-full">
        <form className="bg-white p-5 space-y-3 w-[25rem]" onSubmit={onSubmitHandler}>
          <h1 className="text-center text-lg">Edit Training</h1>

         
          <Input
            type="text"
            label="Domain"
            name="domain"
            onChange={onChangeDomain}
            defaultValue={domain ||data?.object?.mode }
           
      
          />

          <Input
            type="text"
            label="mode"
            name="mode"
            onChange={onChangeMode}
            defaultValue={mode ||data?.object?.mode }
           
           
          />

          <Input
            type="text"
            label="mentor"
            name="mentor"
            onChange={onChangeMentor}
            defaultValue={mentor || data?.object?.mentor}
           
        
          />

          <Input
            type="number"
            label="cost"
            name="cost"
            onChange={onChangeCost}
            defaultValue={cost || data?.object?.cost}
       
        
          />

          <Input
            type="text"
            label="topic"
            name="topic"
            onChange={onchangeTopic}
            defaultValue={topic || data?.object?.topic}
          
        
          />

          <Input
            type="date"
            label="Start a Date"
            onInput={onChangeStartDate}
            defaultValue={startDate || data?.object?.startDate}
          />
          <Input
            type="date"
            label="End a Date"
            onInput={onchangeEndDate}
            defaultValue={endDate || data?.object?.endDate}
          />

<Input
            type="text"
            label="duration"
            name="duration"
            onChange={onChangeDuration}
            defaultValue={duration || data?.object?.duration }
          
      
          />

          <Button type="submit" className="block m-auto">
            Edit Training
          </Button>
        </form>
      </div>
    </>
  );
};

export default ItTrainingEdit;

