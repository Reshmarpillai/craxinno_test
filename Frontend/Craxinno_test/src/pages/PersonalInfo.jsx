import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { FinancialInfo } from "./FinancialInfo";
import { useState } from "react";

export const PersonalInfo = () => {
  const [round, setRound] = useState(1);
  const navigate = useNavigate();

  const handleRoundClick = (step) => {
    setRound(step);
    if (step === 1) {
      navigate("/personalInfo");
    } else {
      navigate("/personalinfo/financial");
    }
  };

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
          onClick={() => handleRoundClick(1)}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: round === 1 ? "#007bff" : "#ccc",
            color: round === 1 ? "white" : "black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          1
        </div>
        {/* Circle 2 */}
        <div
          onClick={() => handleRoundClick(2)}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: round === 2 ? "#007bff" : "#ccc",
            color: round === 2 ? "white" : "black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          2
        </div>
      </div>

      <Routes>
        <Route path="/*" element={<UserInfo />} />
        <Route path="/financial/*" element={<FinancialInfo />} />
      </Routes>
    </div>
  );
};
