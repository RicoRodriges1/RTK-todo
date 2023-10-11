import React from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import { Typography, Paper, Box } from '@mui/material';

export default function App() {
	return (
    <Paper sx={{ width: "400px", m: "auto", p: "40px", mt: "50px" }}>
      <Typography variant='h3' >Todo List</Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "right", my: "20px" }}>
        <Filter />
        <AddTodo />
      </Box>
      <TodoList />
    </Paper>
	);
};
