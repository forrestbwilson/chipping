import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CreateGameScreen extends Component {
  static navigationOptions = { title: "Create Game" };

  _handlePress = () => {
    console.log(this.props);
    this.props.navigation.navigate("Results");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._handlePress}>Whaddup Sean!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
