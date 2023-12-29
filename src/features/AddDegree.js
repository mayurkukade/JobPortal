
import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    degree: [{ id: 1, text: "Hello" }]
  };
  
  export const AddDegree = createSlice({
    name: 'AddDegree',
    initialState,
    reducers: {
      addDegree: (state, action) => {
        const newDegree = {
          id: nanoid(),
          text: "Default Text"
        };
        state.degree.push(newDegree);
      },
  
      removeDegree: (state, action) => {
        state.degree = state.degree.filter((degree) => degree.id !== action.payload);
      },
    },
  });
  
  export const { addDegree, removeDegree } = AddDegree.actions;
  
  export default AddDegree.reducer;
  