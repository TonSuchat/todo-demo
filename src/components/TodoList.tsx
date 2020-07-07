import React from "react";
import { ITodo } from "../shared/interfaces/ITodo";
import TodoItem from "./TodoItem";

type TodoListType = {
  todos: ITodo[];
};

const Todolist: React.FC<TodoListType> = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="jumbotron">
        <h1>No TODOs</h1>
      </div>
    );
  }

  return (
    <>{todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</>
  );
};

export default Todolist;
