import { createSlice } from "@reduxjs/toolkit";

let count = 0;

export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: count++,
                title: action.payload.todo[0],
                body: action.payload.todo[1],
                status: false
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTodo: (state, action) => {
          const index = state.findIndex((item) => item.id === action.payload.id);
          if (index !== -1) {
            state[index] = {
              id: action.payload.id,
              title: action.payload.title,
              body: action.payload.body,
              status: action.payload.status
            }
          }
          
        }
    }
});

export const {addTodo, deleteTodo, editTodo} = todosSlice.actions;

export default todosSlice.reducer;