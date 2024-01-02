
import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
  degree: [{ id: 1, text: "Hello" }]
};
  export const AddDegreeslice = createSlice({
    name: 'AddDegree',
    initialState,
    reducers: {
      addDegree: (state, action) => {
        const AddDegree = {
          id: nanoid(),
          text: "Default Text"
        };
        state.degree.push(AddDegree);
      },
  
      removeDegree: (state, action) => {
        state.degree = state.degree.filter((AddDegree) => AddDegree.id !== action.payload);
      },
    },
  });
  
  export const { addDegree, removeDegree } = AddDegreeslice.actions;
  
  export default AddDegreeslice.reducer;
  