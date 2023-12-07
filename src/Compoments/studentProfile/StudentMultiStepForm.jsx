// // MultiStepForm.js
// import React, { useState } from 'react';
// import { Button, TextField, Typography } from '@mui/material';
// import 'tailwindcss/tailwind.css';

// const steps = [
//   { label: 'Step 1', content: 'Personal Information' },
//   { label: 'Step 2', content: 'Address Information' },
//   { label: 'Step 3', content: 'Additional Information' },
// ];

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div className="w-96 mx-auto mt-10 p-6 bg-gray-100 rounded-md">
//       <Typography variant="h5" align="center" gutterBottom>
//         {steps[currentStep].content}
//       </Typography>

//       {/* Your form fields go here */}
//       {currentStep === 0 && (
//         <div>
//           <TextField label="Name" fullWidth margin="normal" />
//           <TextField label="Email" fullWidth margin="normal" />
//         </div>
//       )}

//       {currentStep === 1 && (
//         <div>
//           <TextField label="Address" fullWidth margin="normal" />
//           <TextField label="City" fullWidth margin="normal" />
//         </div>
//       )}

//       {currentStep === 2 && (
//         <div>
//           <TextField
//             label="Additional Information"
//             multiline
//             rows={4}
//             fullWidth
//             margin="normal"
//           />
//         </div>
//       )}

//       {/* Navigation Buttons */}
//       <div className="mt-6">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handlePrev}
//           disabled={currentStep === 0}
//           className="mr-2"
//         >
//           Previous
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNext}
//           disabled={currentStep === steps.length - 1}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;

