import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const FinancialInfoView = ({ id }) => {
  const [financialInfo, setFinancialInfo] = useState(null);

  useEffect(() => {
    const fetchFinancialInfo = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }api/view/users/${id}/financialinfoview`
        );

        setFinancialInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching financial info:", error);
      }
    };

    fetchFinancialInfo();
  }, [id]);
  if (!financialInfo) {
    return <div>Loading financial information...</div>;
  }
  return (
    <div>
      <h2>Financial Information</h2>
      <p>Employment Status: {financialInfo.employmentStatus}</p>
      <p>Additional Savings: {financialInfo.additionalSavings}</p>
    </div>
  );
};
