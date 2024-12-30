import React from "react";

export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`shadow appearance-none border ${
          error ? "border-red-500" : ""
        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        required
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};
