import React from "react";
import { useForm } from "react-hook-form";

import Checkbox from "./shared/TodoCheckbox";
import Todoinput from "./shared/TodoInput";

type AddTodoType = {
  selectAll: boolean;
  onTextChange?: (text: string) => void;
  onSubmit: (detail: string) => void;
  onCheckedChange: (checked: boolean) => void;
};

const AddTodo: React.FC<AddTodoType> = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onHandleSumit = (e: Record<string, any>) => {
    props.onSubmit(e.newTodo);
    reset();
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit(onHandleSumit)}>
      <div className="form-row">
        <div className="col">
          <label className="sr-only">checkbox</label>
          <div className="input-group mb-2">
            <Checkbox
              checked={props.selectAll}
              onChange={props.onCheckedChange}
            />
            <Todoinput
              name="newTodo"
              placeholder="what needs to be done?"
              ref={register({ required: true })}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
