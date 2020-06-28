import React from "react";
import Camera from "../src/screens/Camera";
import Upload from "../src/screens/UploadScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const CameraNavigator = createStackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      headerShown: false,
    },
  },
  Upload: {
    screen: Upload,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(CameraNavigator);
