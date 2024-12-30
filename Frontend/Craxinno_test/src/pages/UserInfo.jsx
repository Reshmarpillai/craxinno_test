import React from "react";
import { InputField } from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveUserInfo } from "../redux/action/userInfoAction";
import { UserInfoView } from "../components/UserInfoView";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

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
  const userInfoLink = useSelector((state) => state.userInfo.userInfoLink);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");
    dispatch(saveUserInfo(formData, userid, "/userInfo"));
    toast.success("Your personal information has been saved successfully!");

    navigate("/personalinfo/financial");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="primary-heading">Personal Information</h1>
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
            name="name"
            value={formData.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Full Name as per your passport"
          />
        </div>
        <InputField
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(value) => handleChange("dateOfBirth", value)}
          placeholder="Date of Birth"
        />
        <InputField
          name="address"
          value={formData.address}
          onChange={(value) => handleChange("address", value)}
          placeholder="Current Address"
        />
        <InputField
          name="livingStatus"
          value={formData.livingStatus}
          onChange={(value) => handleChange("livingStatus", value)}
          placeholder="How long have you lived at this address"
        />
        <InputField
          name="aboutYou"
          value={formData.aboutYou}
          onChange={(value) => handleChange("aboutYou", value)}
          placeholder="Tell us a bit about yourself(What are you like as a person,do you have any hobbies etc)"
        />
        <p className="info-text">
          All information can be edited once you create your account.
        </p>
        <div className="buttondiv">
          <button type="submit" className="button">
            Save and Continue
          </button>
        </div>
      </form>
      {userInfoLink && (
        <div>
          <a href={userInfoLink} target="_blank" rel="noopener noreferrer">
            View personal Information
          </a>
        </div>
      )}

    </div>
  );
};
