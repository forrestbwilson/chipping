import React, { Component } from "react";
import { Text, View } from "react-native";

import { StackNavigator } from "react-navigation";
import CreateGameScreen from "./screens/createGame";
import ResultsScreen from "./screens/results";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text onPress={this._handlePress}>HomeScreen!</Text>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("CreateGame");
  };
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  CreateGame: {
    screen: CreateGameScreen
  },
  Results: {
    screen: ResultsScreen
  }
});
