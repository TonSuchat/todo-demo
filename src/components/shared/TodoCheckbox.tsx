import React from "react";

type CheckboxType = {
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  checked: boolean;
};

const Checkbox: React.FC<CheckboxType> = (props) => {
  return (
    <div className="input-group-prepend">
      <div className="input-group-text">
        <input
          type="checkbox"
          checked={props.checked}
          disabled={props.disabled && props.disabled}
          onChange={(e) => props.onChange(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default Checkbox;
