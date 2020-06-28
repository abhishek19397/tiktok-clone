import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../src/screens/HomeScreen";
import Liked from "../src/screens/LikedScreen";
import Upload from "../src/screens/UploadScreen";
import Profile from "../src/screens/ProfileScreen";
import Search from "../src/screens/SearchScreen";
import CameraNavigator from "./CameraNavigator";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => <Ionicons name="ios-home" size={32} />,
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => <Ionicons name="ios-search" size={32} />,
      },
    },
    Upload: {
      screen: CameraNavigator,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => <Ionicons name="ios-add-circle-outline" size={32} />,
      },
    },
    Liked: {
      screen: Liked,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-heart" : "ios-heart-empty"}
            size={32}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => <Ionicons name="ios-person" size={32} />,
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingVertical: 10,
        height: 60,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
