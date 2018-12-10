import { Constants } from "expo";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";

class Page1 extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("switch2");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Page 1</Text>
      </View>
    );
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Page 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

const sw = createSwitchNavigator({
  switch1: {
    screen: createMaterialTopTabNavigator({
      tabs: {
        screen: Page1
      }
    })
  },
  switch2: {
    screen: Page2
  }
});

const Navigation = createAppContainer(sw);

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
