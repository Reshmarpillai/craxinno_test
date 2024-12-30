import React from "react";
import { InputField } from "./InputField";

export const PasswordField = ({ label, value, onChange, error }) => {
  return (
    <div>
      {" "}
      <InputField
        label={label}
        type="password"
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};
