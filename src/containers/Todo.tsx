import React, { useState, useCallback } from "react";

import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";
import { ITodo } from "../shared/interfaces/ITodo";
import { getNewTodo, useGetTodoByStatus } from "../shared/helper";
import { TodoStatus } from "../shared/enums/TodoStatus";
import { TodoContext } from "../shared/context";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [status, setStatus] = useState<TodoStatus>(TodoStatus.ALL);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const displayTodos = useGetTodoByStatus(status, todos);

  const handleOnSubmitTodo = useCallback((detail: string) => {
    setTodos([...todos, getNewTodo(detail)]);
  }, [todos]);

  const onAddTodoCheckedChange = useCallback((checked: boolean) => {
    setSelectAll(checked);
    setTodos(
      [...todos].map((todo) => ({
        ...todo,
        status: checked ? TodoStatus.COMPLETED : TodoStatus.ACTIVE,
      })),
    );
  }, [todos]);

  const onRemoveTodo = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const onTodoStatusChange = (id: string, status: TodoStatus) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) todo.status = status;
        return todo;
      }),
    ]);
  };

  return (
    <TodoContext.Provider value={{ onRemoveTodo, onTodoStatusChange }}>
      <div className="container text-center mt-3 mb-3">
        <Header />
        <AddTodo
          selectAll={selectAll}
          onSubmit={handleOnSubmitTodo}
          onCheckedChange={onAddTodoCheckedChange}
        />
        <TodoList todos={displayTodos} />
        <TodoFooter
          status={status}
          onStatusChange={(newStatus: TodoStatus) => setStatus(newStatus)}
        />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
