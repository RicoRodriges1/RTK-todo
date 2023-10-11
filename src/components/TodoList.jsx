import React from 'react';
import { TodoItem } from './TodoItem';
import { useSelector } from "react-redux";
import { List } from '@mui/material';

export function TodoList() {
	const todos = useSelector((state) => {
		return state.todos;
	});
  const filter = useSelector((state) => {
    return state.filter
  })

	return (
		<List >
			{filter === "done" ? todos.filter(todo => todo.status === true).map((todo) => (
				<TodoItem id={todo.id} title={todo.title} body={todo.body} status={todo.status} key={todo.id} />
			))
      : filter === "active" ? todos.filter(todo => todo.status === false).map((todo) => (
				<TodoItem id={todo.id} title={todo.title} body={todo.body} status={todo.status} key={todo.id} />
			))
      : todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} body={todo.body} status={todo.status} key={todo.id} />
			))
      }
		</List>
	);
};
