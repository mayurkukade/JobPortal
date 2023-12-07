// import React, { useContext } from "react";
// import { Formik, FieldArray } from "formik";
// import { Button, Input, InputNumber } from "antd";
// import MultiStepFormContext from "./MultiStepFormContext";

// const StudentProfile = () => {
//   const { details, setDetails, next, prev } = useContext(MultiStepFormContext);

//   return (
//     <Formik
//       initialValues={details}
//       onSubmit={(values) => {
//         setDetails(values);
//         // Handle the submission of the form data
//         console.log("Form submitted:", values);
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.name) errors.name = "Name is required";
//         if (!values.age) errors.age = "Age is required";
//         if (values.age > 90) errors.age = "Are you sure you're human?";
//         if (!values.profession) errors.profession = "Profession is required";
//         if (/^[0-9]+$/.test(values.profession))
//           errors.profession =
//             "Profession does not require numbers or special characters";
//         if (!values.skills || values.skills.length === 0) {
//           errors.skills = "At least one skill is required";
//         }
//         return errors;
//       }}
//     >
//       {({ handleSubmit, isSubmitting, errors }) => (
//         <form onSubmit={handleSubmit}>
//           <div className={"details__wrapper"}>
//             <div className={`form__item ${errors.name && "input__error"}`}>
//               <label>Name *</label>
//               <Input name={"name"} />
//               <p className={"error__feedback"}>{errors.name}</p>
//             </div>
//             <div className={`form__item ${errors.age && "input__error"}`}>
//               <label>Age *</label>
//               <InputNumber name={"age"} min={0} />
//               <p className={"error__feedback"}>{errors.age}</p>
//             </div>
//             <div
//               className={`form__item ${errors.profession && "input__error"}`}
//             >
//               <label>Profession *</label>
//               <Input name={"profession"} />
//               <p className={"error__feedback"}>{errors.profession}</p>
//             </div>

//             {/* Skills FieldArray */}
//             <FieldArray name="skills">
//               {({ push, remove }) => (
//                 <div
//                   className={`form__item ${errors.skills && "input__error"}`}
//                 >
//                   <label>Skills *</label>
//                   {details.skills &&
//                     details.skills.map((skill, index) => (
//                       <div key={index} className="mb-2">
//                         <Input
//                           name={`skills.${index}`}
//                           value={skill}
//                           placeholder="Enter skill"
//                         />
//                         <Button
//                           type="link"
//                           onClick={() => remove(index)}
//                           disabled={isSubmitting}
//                         >
//                           Remove
//                         </Button>
//                       </div>
//                     ))}
//                   <Button
//                     type="dashed"
//                     onClick={() => push("")}
//                     style={{ width: "100%" }}
//                     disabled={isSubmitting}
//                   >
//                     Add Skill
//                   </Button>
//                   <p className={"error__feedback"}>{errors.skills}</p>
//                 </div>
//               )}
//             </FieldArray>

//             <div className={"form__item button__items d-flex justify-content-between"}>
//               <Button type={"primary"} onClick={prev} disabled={isSubmitting}>
//                 Previous
//               </Button>
//               <div>
//                 <Button type={"default"} onClick={handleSubmit} disabled={isSubmitting}>
//                   Submit
//                 </Button>
//                 <Button type={"primary"} onClick={next} className="ml-2" disabled={isSubmitting}>
//                   Next
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default StudentProfile;
