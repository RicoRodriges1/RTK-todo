import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice";
import { TextField, Button, Dialog, Box } from '@mui/material';

export function AddTodo() {
	const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [open, setOpen] = React.useState(false);

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(title.trim().length === 0)
		{
			alert("Enter a title before adding !!");
			setTitle("");
      setBody("");
			return;
		}

		dispatch(
			addTodo({
				todo: [title, body]
			})
		);

		setTitle("");
    setBody("");
    handleClose();
	};

  
  const handleClose = () => {
    setOpen(false);;
  };

	return (
		<>
      <Button onClick={() => setOpen(true)}>
				Add Item
			</Button>
      <Dialog onClose={handleClose} open={open}>
        <Box sx={{ p: "30px", display: "flex", flexDirection: "column", alignItems: "center " }}>
          <TextField
            required
            type="text"
            label="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            
          />
          <TextField
            label="todo"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            sx={{ my: "5px"}}
          />
          <Button onClick={onSubmit} fullWidth>
            Add
          </Button>
        </Box>

      </Dialog>
		</>
	);
};
