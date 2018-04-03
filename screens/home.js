import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends Component {
  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._handlePress}>Chiping Challenge!</Text>
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
