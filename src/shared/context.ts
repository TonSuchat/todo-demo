import { createContext } from "react";
import { TodoStatus } from "./enums/TodoStatus";

export const TodoContext = createContext({
  onRemoveTodo: (id: string) => {},
  onTodoStatusChange: (id: string, status: TodoStatus) => {},
});
