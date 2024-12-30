import React from "react";
import { InputField } from "../components/InputField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePersonalData } from "../redux/action/formAction";
import { useState } from "react";
import { saveUserInfo } from "../redux/action/userInfoAction";

export const UserInfo = () => {
  const [formData, setFormData] = useState({
    title: "mr",
    name: "",
    dateOfBirth: "",
    address: "",
    livingStatus: "",
    aboutYou: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");
    dispatch(saveUserInfo(formData, userid));
    navigate("/personalinfo/financial");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Personal Information</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <select
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="dropdown"
            style={{ padding: "5px" }}
          >
            <option value="mr">Mr.</option>
            <option value="miss">Miss</option>
          </select>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={(value) => handleChange("name", value)}
          />
        </div>
        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(value) => handleChange("dateOfBirth", value)}
        />
        <InputField
          label="Address"
          name="address"
          value={formData.address}
          onChange={(value) => handleChange("address", value)}
        />
        <InputField
          label="Living Status"
          name="livingStatus"
          value={formData.livingStatus}
          onChange={(value) => handleChange("livingStatus", value)}
        />
        <InputField
          label="About Yourself"
          name="aboutYou"
          value={formData.aboutYou}
          onChange={(value) => handleChange("aboutYou", value)}
        />
        <p className="info-text">
          All information can be edited once you create your account.
        </p>
        <button type="submit" className="button">
          Save and Continue
        </button>
      </form>
    </div>
  );
};
