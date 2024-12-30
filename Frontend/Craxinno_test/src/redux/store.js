import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import formReducers from "./reducers/formReducers";
import UserInfoReducer from "./reducers/userInforeducer";

// Combine all reducers
const rootReducer = combineReducers({
  form: formReducers,
  userInfo: UserInfoReducer,
});

// Create the store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
