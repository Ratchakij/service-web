import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";
import TodoForm from "../components/TodoForm";
import TodoContainer from "../components/TodoContainer";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [triggerFilter, setTriggerFilter] = useState(false);

  const fetchTodos = async (queryString = "") => {
    try {
      const res = await axios.get("http://localhost:8080/todos" + queryString);
      console.log(res.data);
      setTodos(res.data.todos);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = (newTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then(res => {
    //     setTodos(res.data.todos);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // fetchTodos();
  }, []);

  const handleSubmitCreate = async (input) => {
    try {
      console.log(input);
      await axios.post("http://localhost:8080/todos", {
        input,
        completed: false,
      });
      setTriggerFilter(!triggerFilter);
      // fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" mt-5 mb-3">
        <div className="my-4">
          <TodoForm onSubmit={handleSubmitCreate} />
        </div>

        <TodoContainer
          todos={todos}
          fetchTodos={fetchTodos}
          total={total}
          trigger={triggerFilter}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default HomePage;
