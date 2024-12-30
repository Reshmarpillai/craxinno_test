import React from "react";
import { InputField } from "./InputField";

export const PasswordField = ( {value, onChange, error,placeholder }) => {
  return (
    <div>
      {" "}
      <InputField
        type="password"
        value={value}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
      />
    </div>
  );
};
