import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import LikedScreen from "./src/screens/LikedScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MyVideosScreen from "./src/screens/MyVideosScreen";
import RecordScreen from "./src/screens/RecordScreen";
import UploadScreen from "./src/screens/UploadScreen";

const UploadFlow = createStackNavigator({
  Record: RecordScreen,
  Upload: UploadScreen,
});

const bottomNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  MyVideos: MyVideosScreen,
  UploadFlow,
  Liked: LikedScreen,
  Login: LoginScreen,
});

const BottomNavigator = () => {
  return createAppContainer(BottomNavigator);
};
export default BottomNavigator;
