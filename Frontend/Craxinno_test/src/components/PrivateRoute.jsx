import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("Token in PrivateRoute:", token);
  if (!token || token === "undefined" || token === "null") {
    console.log("token not taken");
    return <Navigate to="/" />;
  }
  return children;
};
