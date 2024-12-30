import axios from "axios";

export const saveUserInfo = (data, id) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}api/userinfo/save/${id}`,
      data
    );
    dispatch({ type: "SAVE_USER_INFO", payload: response.data });
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
    dispatch({ type: "SAVE_FINANCIAL_INFO", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
