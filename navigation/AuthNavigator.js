import Login from "../src/screens/LoginScreen";
import Signup from "../src/screens/SignupScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Signup",
    },
  },
});

export default createAppContainer(StackNavigator);
