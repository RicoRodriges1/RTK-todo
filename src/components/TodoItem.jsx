import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/slice";
import { Box, Typography, Checkbox, Button, Dialog, DialogTitle, TextField, ListItem } from '@mui/material';

export function TodoItem({ id, title, body, status }) {
  const [open, setOpen] = React.useState(false);
  const [UItitle, setUItitle] = React.useState(title);
  const [UIbody, setUIbody] = React.useState(body);

  const handleClose = () => {
    setOpen(false);;
  };

	const dispatch = useDispatch();

	const removeTodo = () => {
		dispatch(
			deleteTodo({
				id: id
			})
		)
	}

  const changeTodo = (title, body, status) => {
    dispatch(
      editTodo({
        id: id,
        title: title,
        body: body,
        status: status
      })
    )
  }

	return (
		<ListItem sx={{ display: "flex", alignItems: "flex-start", }}>
      <Box sx={{ mr: "auto", maxWidth: "262px", overflowWrap: "break-word"}}>
        <Typography variant='h5' paragraph>
          {title}
        </Typography>
        <Typography variant='subtitle1'>
          {body}
        </Typography>
      </Box>
      <Button onClick={() => setOpen(true)} >Edit</Button>
      <Checkbox 
        onClick={() => {
          changeTodo(UItitle, UIbody, !status )
        }} 
        checked={status}
        />
      <Dialog onClose={handleClose} open={open} >
        <Box sx={{ p: "30px", display: "flex", flexDirection: "column", alignItems: "center "}}>
          <DialogTitle >Edit</DialogTitle>
          <TextField
            required
            label="Title"
            value={title}
            onChange={(e) => {
              changeTodo(e.target.value, UIbody, status);
              setUItitle(e.target.value);
            }} 
            
          />
          <TextField
            label="Body"
            value={body}
            onChange={(e) => {
              changeTodo(UItitle, e.target.value, status);
              setUIbody(e.target.value);
            }} 
            sx={{ my: "5px"}}
          />
          <Button onClick={() => removeTodo()} fullWidth>Delete</Button>
        </Box>

      </Dialog>
		</ListItem>
	);
};
