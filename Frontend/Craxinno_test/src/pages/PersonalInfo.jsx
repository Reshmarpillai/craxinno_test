import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { FinancialInfo } from "./FinancialInfo";

export const PersonalInfo = () => {
  console.log("PersonalInfo component rendered");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Circle 1 */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          1
        </div>
        {/* Circle 2 */}
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#ccc",
            color: "black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          2
        </div>
      </div>

      <Routes>
        <Route path="/*" element={<UserInfo />} />
        <Route path="/financial" element={<FinancialInfo />} />
      </Routes>
    </div>
  );
};
