import React, { useState } from 'react';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    console.log('Form submitted:', formData);
    // You can send the form data to the server or perform other actions here
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='flex flex-col'>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Multi-Step Form - Step {step}</h2>
      <form onSubmit={handleSubmit}>
        {renderFormStep()}
      </form>
    </div>
  );
};

export default StudentProfile;



