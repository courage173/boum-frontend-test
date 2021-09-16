import { combineReducers } from "redux";
import news from "./reducers/news";

const appReducer = combineReducers({
  news,
});

export default (state, action) => {
  return appReducer(state, action);
};
