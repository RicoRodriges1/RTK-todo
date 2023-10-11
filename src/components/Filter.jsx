import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { changeFilter } from "../redux/filterSlice";

export function Filter() {
  const [filter, setFilter] = React.useState('all');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value
    setFilter(value);
    dispatch(
      changeFilter(value)
    )
  };

  return <FormControl>
    <InputLabel>Filter</InputLabel>
    <Select
      sx={{ height: "35px", minWidth: "100px", mr: "15px" }}
      value={filter}
      label="Filter"
      onChange={handleChange}
    >
      <MenuItem value={"all"}>All</MenuItem>
      <MenuItem value={"done"}>Done</MenuItem>
      <MenuItem value={"active"}>Active</MenuItem>
    </Select>
  </FormControl>
}