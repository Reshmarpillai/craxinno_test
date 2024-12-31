import React from "react";
import { InputField } from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveUserInfo } from "../redux/action/userInfoAction";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const UserInfo = () => {
  const [formData, setFormData] = useState({
    title: "mr",
    name: "",
    dateOfBirth: null,
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
    <div className="flex flex-col space-y-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="primary-heading">Personal Information</h1>
        <h5 className="sub-heading">
          Please answer questions accuratily as possible
        </h5>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <select
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="dropdown input"
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
        <DatePicker
          selected={formData.dateOfBirth}
          onChange={(date) => handleChange("dateOfBirth", date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date of Birth"
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
