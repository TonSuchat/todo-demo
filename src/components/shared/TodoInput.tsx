import React, { forwardRef } from "react";

type TodoInputType = {
  name: string;
  placeholder?: string;
  onChange?: (text: string) => void;
  ref?: any;
};

const Todoinput = forwardRef<HTMLInputElement, TodoInputType>(
  (props, ref) => {
    return (
      <input
        type="text"
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        ref={ref}
      />
    );
  },
);

export default Todoinput;
