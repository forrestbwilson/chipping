import React, { Component } from "react";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import NavigationStack from "./navigationCentral";

export default class AppNavigation extends Component {
  render() {
    return <NavigationStack />;
  }
}
