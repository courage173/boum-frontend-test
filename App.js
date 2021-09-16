import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
import Navigation from "./src/navigation/MainAppStack";
import { RootSiblingParent } from "react-native-root-siblings";

const store = configureStore();
export default function App() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
