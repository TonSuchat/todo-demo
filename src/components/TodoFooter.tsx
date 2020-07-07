import React from "react";
import { TodoStatus } from "../shared/enums/TodoStatus";
import FilterButton from "./shared/FilterButton";

type TodoFooterType = {
  status: TodoStatus;
  onStatusChange: (status: TodoStatus) => void;
};

const TodoFooter: React.FC<TodoFooterType> = ({ status, onStatusChange }) => {
  return (
    <div className="row mt-3">
      <FilterButton
        onFilterButtonClick={() => onStatusChange(TodoStatus.ALL)}
        active={status === TodoStatus.ALL}
        value="All"
      />
      <FilterButton
        onFilterButtonClick={() => onStatusChange(TodoStatus.ACTIVE)}
        active={status === TodoStatus.ACTIVE}
        value="Active"
      />
      <FilterButton
        onFilterButtonClick={() => onStatusChange(TodoStatus.COMPLETED)}
        active={status === TodoStatus.COMPLETED}
        value="Completed"
      />
    </div>
  );
};

export default TodoFooter;
