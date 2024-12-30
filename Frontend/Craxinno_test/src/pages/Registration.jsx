import React from "react";
import axios from "axios";
import { useState } from "react";
import { InputField } from "../components/InputField";
import { PasswordField } from "../components/PasswordField";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  // Phone number validation
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) return "Invalid phone number";
    return "";
  };

  // Password validation
  const validatePassword = (password) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /\d/;
    const hasAlphanumeric = /^[A-Za-z0-9]+$/;

    if (password.length < minLength)
      return "Password must be at least 6 characters long.";
    if (!hasUpperCase.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!hasNumber.test(password))
      return "Password must contain at least one number.";
    if (!hasAlphanumeric.test(password))
      return "Password must contain only alphanumeric characters.";
    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const emailError = validateEmail(email);
    const phoneError = validatePhoneNumber(phoneNumber);
    const passwordError = validatePassword(password);
    const confirmPasswordError =
      password !== confirmPassword ? "Passwords do not match." : "";

    // Update errors state
    setErrors({
      email: emailError,
      phone: phoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    // Stop submission if any error exists
    if (emailError || phoneError || passwordError || confirmPasswordError) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/registration",
        {
          email,
          phoneNumber,
          password,
        }
      );
      console.log("API Endpoint:", "http://localhost:5000/api/registration");
      const data = await response.data;
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", data.id); // Store token
        navigate("/personalInfo");
      } else {
        alert(data.message);
      }
    } catch (error) {
      if (error.response) {
        // Backend validation error
        alert(error.response.data.message);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="primary-heading">Create Your Account</h1>
        <h5 className="text-gray-600 mb-6">
          Set up your RentlyPass in as little as 2 minutes
        </h5>
        <h3 className="text-gray-600 mb-6">Contact Details</h3>
        <InputField
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          placeholder="Enter your email address"
        />
        <InputField
          type="tel"
          value={phoneNumber}
          onChange={setPhoneNumber}
          error={errors.phone}
          placeholder="Mobile Number"
        />
        <h3 className="text-gray-600 mb-6">Set a password</h3>
        <PasswordField
          value={password}
          onChange={setPassword}
          error={errors.password}
          placeholder="Create a Password"
        />
        <PasswordField
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
        />
        <p className="text-sm text-gray-500 mb-4">
          We need a password to keep your information safe. But don't worry,
          we'll also sent your costume RentlyPass URL via email.
        </p>
        <div className="buttondiv">
          {" "}
          <button type="submit" className="button">
            Create Your Account
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          By clicking 'Create your account' You are agreeing to our{" "}
          <span>Terms & Conditions</span> and <span>Privacy Policy.</span>
        </p>
      </form>
    </div>
  );
};
