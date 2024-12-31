import React from "react";
import { InputField } from "../components/InputField";
import { Dropdownmenu } from "../components/Dropdownmenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFincialInfo } from "../redux/action/userInfoAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const FinancialInfo = ({ userId, nextForm, type }) => {
  const [formData, setFormData] = useState({
    employmentStatus: "Employed",
    additionalSavings: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const financialInfoLink = useSelector(
    (state) => state.userInfo.financialInfoLink
  );
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");
    dispatch(saveFincialInfo(formData, userid, "/financialInfo"));
    toast.success("Your financial information has been saved successfully!");
    navigate(`/home/${userid}`);
  };
  return (
    <div className="flex flex-col space-y-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="primary-heading">Financial Information</h1>
        <h5 className="sub-heading">All Your Information is Stored Securely</h5>
        <Dropdownmenu
          name="employmentStatus"
          value={formData.employmentStatus}
          onChange={(value) => handleChange("employmentStatus", value)}
          options={[
            { value: "employed", label: "Employed" },
            { value: "selfEmployed", label: "Self-Employed" },
            { value: "unEmployed", label: "Un-Employed" },
            { value: "retired", label: "Retired" },
          ]}
          placeholder="Select Employment Status"
        />

        <InputField
          label="additionalSavings"
          name="additionalSavings"
          value={formData.additionalSavings}
          onChange={(value) => handleChange("additionalSavings", value)}
        />
        <div className="buttondiv">
          <button type="submit" className="button">
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};
