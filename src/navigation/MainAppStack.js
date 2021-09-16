import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsListPage from "../screens/NewsListPage";
import SingleNewsScreen from "../screens/SingleNewsScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="newslist"
        screenOptions={{
          headerTitle: "",
          headerShown: "null",
          backgroundColor: "#f5f5f5",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          shadowColor: "",
          borderBottomColor: "transparent",
          height: 0,
          headerStyle: {
            backgroundColor: "#f5f5f5", //Set Header color
          },
        }}
      >
        <Stack.Screen name="newslist" component={NewsListPage} />
        <Stack.Screen name="singlenews" component={SingleNewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
