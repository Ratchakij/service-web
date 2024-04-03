import { ListItem } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoContent from "./TodoContent";

export default function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitEdit = async (title) => {
    try {
      const todo = {
        id: props.todo.id,
        title: title,
        detail: detail,
        completed: props.todo.completed,
      };
      await axios.put("http://localhost:8080/todos/" + props.todo.id, todo);
      setIsEditing(false);
      props.updateTodo(todo);
      //   props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListItem
      className={`bg-white p-3 ${
        props.todo.completed
          ? "border-l-4 border-green-500"
          : "border-l-4 border-yellow-500"
      }`}
    >
      {isEditing ? (
        <TodoForm
          onSubmit={handleSubmitEdit}
          onCancel={() => setIsEditing(false)}
          initialValue={props.todo.title}
        />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setIsEditing(true)}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
        />
      )}
    </ListItem>
  );
}
