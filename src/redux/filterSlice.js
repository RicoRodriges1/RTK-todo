import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState: "all",
    reducers: {
        changeFilter: (state, action) => {
          state = action.payload
          return state;
        }
    }
});

export const {changeFilter} = filterSlice.actions;

export default filterSlice.reducer;