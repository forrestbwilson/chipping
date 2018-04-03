import React from "react";
import { View, Text } from "react-native";

import { StackNavigator } from "react-navigation";

import HomeScreen from "../screens/home";
import CreateGameScreen from "../screens/createGame";

const mainStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text>Chippo</Text>
    })
  },
  CreateGame: {
    screen: CreateGameScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text>Create Game</Text>
    })
  }
});

export default NavigationCentral({
  Home: {
    screen: HomeScreen
  }
});
