const initialState = {
    personalData: null,
    financialData: null,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_PERSONAL_DATA':
        return {
          ...state,
          personalData: action.payload,
        };
      case 'SAVE_FINANCIAL_DATA':
        return {
          ...state,
          financialData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  