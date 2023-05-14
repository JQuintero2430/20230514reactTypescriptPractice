/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import React, { useState, useEffect } from "react";
import { Todo } from "./components/Todo";

interface DataTodo {
  todos: {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }[];
  total: number;
  skip: number;
  limit: number;
}

export const App: React.FC = () => {
  const [todoslist, setTodoslist] = useState<DataTodo>();

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result = await data.json();
      console.log(result);
      setTodoslist(result);
    };
    getTodos();
  }, []);

  return (
    <div>
      {todoslist?.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo.todo}
            status={todo.completed ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
};
