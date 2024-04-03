import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Switch,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import React from "react";

export default function TodoContent(props) {
  const handleClickDelete = async () => {
    try {
      await axios.delete("http://localhost:8080/todos/" + props.todo.id);
      props.deleteTodo(props.todo.id);
      //   props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickToggle = async () => {
    try {
      const todo = {
        id: props.todo.id,
        title: props.todo.title,
        completed: !props.todo.completed,
      };
      await axios.put("http://localhost:8080/todos/" + props.todo.id, todo);
      console.log(todo);
      props.updateTodo(todo);
      //   props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div
        className="flex-fill cursor-pointer"
        role="button"
        onClick={props.openEdit}
      >
        <div>{props.todo.title}</div>
        <div>{props.todo.detail}</div>
      </div>

      <ButtonGroup variant="text" aria-label="Basic button group">
        <Switch
          checked={props.todo.completed ? true : false}
          onClick={handleClickToggle}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="delete"
          onClick={handleClickDelete}
        >
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
