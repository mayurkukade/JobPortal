import  { useState } from "react";
import CardUiLayout from "../../UI/CardUiLayout";
import { Button } from "@material-tailwind/react";
import {

  Card,

  CardBody,
 
  Input
} from "@material-tailwind/react";
import { usePlansPostMutation } from "../../services/plans/plansApiSlice";
const AddPlans = () => {
  const [open, setOpen] = useState(false);

  const [inputForm, setForm] = useState({
    userType: "",
    service: "",
    plan: "",
    status: "",
    amount: "",
    startDate: "",
    planDays: "",
    planLevel: "",
  });

  const[plansPost] = usePlansPostMutation()

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await plansPost(
      {
        userType: inputForm.userType,
        service: inputForm.service,
        plan: inputForm.plan,
        status: inputForm.status,
        amount: inputForm.amount,
        startDate: inputForm.startDate,
        planDays: inputForm.planDays,
        planLevel: inputForm.planLevel
      }
    )
    

    console.log(res)
    // Do something with the form data, e.g., send it to a server
    console.log("Form submitted:", inputForm);
  };

  

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="container mx-auto">
      <Button onClick={handleOpen}>Add Plans</Button>
      <CardUiLayout handleOpen={handleOpen} open={open}>
        <form onSubmit={handleSubmit}>
          <Card className="w-96">
            <p className="text-black text-center text-2xl mt-5">Add Plans</p>
            <CardBody className="flex flex-col gap-4">
              <select
                name="userType"
                value={inputForm.userType}
                onChange={onChangeHandler}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Student">Student</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Training Placement Officer">Training Placement Officer</option>
              </select>
              <Input label="Service" size="lg" name="service" onChange={onChangeHandler} />
              <select label="Plan Type" name="plan" value={inputForm.plan} onChange={onChangeHandler}>
                <option>Daily</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <select label="Status" name="status" value={inputForm.status} onChange={onChangeHandler}>
                <option>True</option>
                <option>False</option>
              </select>
              <Input label="Amount" name="amount" onChange={onChangeHandler} />
              <Input type="date" label="Start Date" name="startDate" onChange={onChangeHandler} />
              <Input label="Plans Day" type="number" name="planDays" onChange={onChangeHandler} />
              <select label="Plan Level" name="planLevel" value={inputForm.planLevel} onChange={onChangeHandler}>
                <option>Free</option>
                <option>Base</option>
                <option>Premium</option>
              </select>
              <Button type="submit">Submit</Button>
            </CardBody>
          </Card>
        </form>
      </CardUiLayout>
    </div>
  );
};

export default AddPlans;
