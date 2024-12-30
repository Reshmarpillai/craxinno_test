import React from "react";

export const Dropdownmenu = ({
  name,
  value,
  onChange,
  options = [],
  placeholder,
  error,
}) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`dropdown ${error ? "dropdown-error" : ""}`}
        style={{ padding: "5px" }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="form-error-message">{error}</p>}
    </div>
  );
};
