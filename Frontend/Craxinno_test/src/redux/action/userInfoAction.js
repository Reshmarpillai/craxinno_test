import axios from "axios";

export const saveUserInfo = (data, id) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}api/userinfo/save/${id}`,
      data
    );

    // Link generating after successful save
    const nextForm = "/userinfoview";
    const savedLink = `/users/${id}/view${nextForm}`;

    dispatch({
      type: "SAVE_USER_INFO",
      payload: { data: response.data, link: savedLink },
    });
  } catch (error) {
    console.error(error);
  }
};

export const saveFincialInfo = (data, id) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}api/financialinfo/save/${id}`,
      data
    );

    // Link generating after successful save
    const nextForm = "/financialinfoview";
    const savedLink = `/users/${id}/view${nextForm}`;

    dispatch({
      type: "SAVE_FINANCIAL_INFO",
      payload: { data: response.data, link: savedLink },
    });
  } catch (error) {
    console.error(error);
  }
};
