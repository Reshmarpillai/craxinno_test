const initialState = {
  userInfo: null,
  financialInfo: null,
  userInfoLink: null,
  financialInfoLink: null,
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_INFO":
      return {
        ...state,
        userInfo: action.payload.data,
        userInfoLink: action.payload.link,
      };
    case "SAVE_FINANCIAL_INFO":
      return {
        ...state,
        financialInfo: action.payload.data,
        financialInfoLink: action.payload.link,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
