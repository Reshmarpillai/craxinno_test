import React from "react";
import { UserInfoView } from "../components/UserInfoView";
import { FinancialInfoView } from "../components/FinancialInfoView";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { id } = useParams();
  return (
    <div>
      <UserInfoView id={id} />
      <FinancialInfoView id={id} />
    </div>
  );
};
