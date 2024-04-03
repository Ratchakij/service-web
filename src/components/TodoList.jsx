import { List } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <List className="my-2" sx={{ width: "100%" }}>
      {props.todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          fetchTodos={props.fetchTodos}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </List>
  );
}
