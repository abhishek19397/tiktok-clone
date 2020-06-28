import React from "react";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Auth: {
      screen: AuthNavigator,
    },
  },
  {
    initialRouteName: "Auth",
  }
);

export default createAppContainer(SwitchNavigator);
