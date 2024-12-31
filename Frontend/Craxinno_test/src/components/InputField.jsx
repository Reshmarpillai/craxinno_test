import React, { forwardRef } from "react";

export const InputField = forwardRef(
  ({ type = "text", value, onChange, error, placeholder }, ref) => {
    return (
      <div>
        <input
          ref={ref}
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
  }
);
