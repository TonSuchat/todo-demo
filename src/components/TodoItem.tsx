import React, { useContext } from "react";
import classnames from "classnames";

import Checkbox from "./shared/TodoCheckbox";
import { ITodo } from "../shared/interfaces/ITodo";
import { TodoStatus } from "../shared/enums/TodoStatus";
import { TodoContext } from "../shared/context";
import "./TodoItem.css";

type TodoItemType = {
  todo: ITodo;
};

const Todoitem: React.FC<TodoItemType> = ({ todo }) => {
  const context = useContext(TodoContext);
  const spanClass = classnames({
    completed: todo.status === TodoStatus.COMPLETED,
  });

  return (
    <div className="form-row">
      <div className="col">
        <label className="sr-only">checkbox</label>
        <div className="input-group mb-2">
          <Checkbox
            checked={todo.status === TodoStatus.COMPLETED}
            onChange={(checked: boolean) =>
              context.onTodoStatusChange(
                todo.id,
                checked ? TodoStatus.COMPLETED : TodoStatus.ACTIVE
              )
            }
          />
          <span className={spanClass}>&nbsp;{todo.detail}</span>
          &nbsp;
          <input
            type="button"
            value="x"
            onClick={() => context.onRemoveTodo(todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
