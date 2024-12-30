import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export const UserInfoView = ({ id }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}api/view/users/${id}/userinfoview`
        );
        setUserInfo(response.data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, [id]);
  if (!userInfo) {
    return <div>Loading user information...</div>;
  }
  return (
    <div>
      <h2>Personal Information</h2>
      <p>
        Name: {userInfo.title} {userInfo.name}
      </p>
      <p>
        Date of Birth : {moment(userInfo.dateOfBirth).format("MMM-DD-YYYY")}
      </p>
      <p>Address : {userInfo.address}</p>
      <p>How long have you been living here: {userInfo.livingStatus}</p>
      <p>Tell us about your self : {userInfo.aboutYou}</p>
    </div>
  );
};
