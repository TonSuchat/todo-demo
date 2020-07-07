import { TodoStatus } from "../enums/TodoStatus";

export interface ITodo {
  id: string;
  detail: string;
  status: TodoStatus;
}
