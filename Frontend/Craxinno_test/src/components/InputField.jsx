import React from "react";

export const InputField = ({
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`form-field ${error ? "form-field-error" : ""}`}
        required
      />
      {error && <p className="form-error-message">{error}</p>}
    </div>
  );
};
