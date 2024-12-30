const initialState = {
  userInfo: null,
  financialData: null,
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };
      case 'SAVE_FINANCIAL_INFO':
        return {
          ...state,
          financialInfo: action.payload,
        };
    default:
      return state;
  }
};

export default UserInfoReducer;
