import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./interfaces/ITodo";
import { TodoStatus } from "./enums/TodoStatus";
import { useEffect, useState } from "react";

export const generateId = (): string => {
  return uuidv4();
};

export const getNewTodo = (detail: string): ITodo => {
  return {
    id: generateId(),
    detail,
    status: TodoStatus.ACTIVE,
  };
};

export const useGetTodoByStatus = (status: TodoStatus, todos: ITodo[]) => {
  const [displayTodos, setDisplayTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    if (status === TodoStatus.ALL) {
      setDisplayTodos([...todos]);
    } else {
      setDisplayTodos([...todos].filter((todo) => todo.status === status));
    }
  }, [todos, status]);

  return displayTodos;
};
