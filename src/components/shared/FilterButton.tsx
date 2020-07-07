import React from "react";
import classnames from "classnames";

type FilterButtonType = {
  onFilterButtonClick: () => void;
  value: string;
  active?: boolean;
};

const FilterButton: React.FC<FilterButtonType> = ({
  onFilterButtonClick,
  value,
  active,
}) => {
  const btnClass = classnames("btn", "btn-block", { "btn-primary": active });

  return (
    <div className="col">
      <input
        type="button"
        className={btnClass}
        onClick={onFilterButtonClick}
        value={value}
      />
    </div>
  );
};

export default FilterButton;
