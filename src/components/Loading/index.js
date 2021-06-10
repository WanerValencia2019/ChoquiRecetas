import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#1FCC79" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default App;