import React from "react";
import { InputField } from "../components/InputField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFincialInfo } from "../redux/action/userInfoAction";

export const FinancialInfo = () => {
  const [formData, setFormData] = useState({
    employmentStatus: "Employed",
    additionalSavings: "",
  });

  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");
    dispatch(saveFincialInfo(formData, userid));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="primary-heading">Financial Information</h1>
        <h3>All Your Information is Stored Securely</h3>
        <select
          name="employmentStatus"
          value={formData.employmentStatus}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="dropdown"
          style={{ padding: "5px" }}
        >
          <option value="employed">Employed</option>
          <option value="selfEmployed">Self-Employed</option>
          <option value="unEmployed">Un-Employed</option>
          <option value="retired">Retired</option>
        </select>
        <InputField
          label="additionalSavings"
          name="additionalSavings"
          value={formData.additionalSavings}
          onChange={(value) => handleChange("additionalSavings", value)}
        />
        <button type="submit" className="button">
          Save and Continue
        </button>
      </form>
    </div>
  );
};
