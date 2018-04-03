import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ResultsScreen extends Component {
  _handlePress = () => {
    this.props.navigation.navigate("Results");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Team 1</Text>
          <Text>Team 2</Text>
        </View>
        <View style={styles.finishGame}>
          <Button
            style={styles.buttons}
            onPress={this._handlePress}
            title="Rematch"
            color="#1d2240"
          />
          <Button
            style={styles.buttons}
            onPress={this._handlePress}
            title="Done"
            color="#1d2240"
          />
        </View>
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
  },
  finishGame: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttons: {
    flex: 1,
    backgroundColor: "red"
  }
});
