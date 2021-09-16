import { NativeModules, Platform } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

let initialState = {};
if (!Platform.OS === "web" && __DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
