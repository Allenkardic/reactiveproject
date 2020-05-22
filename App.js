/** @format */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>me</Text>
        <Text style={styles.text}>allen kardic kj.acn</Text>
      </View>
      <View style={styles.containerItems2}>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>me</Text>
        <Text style={styles.text}>allenkkk kardic</Text>
        <Text style={styles.text}>3100205586</Text>
        <Text style={styles.text}>3100205586</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid",
    // display: "flex",
    // flexDirection: "column",
    // color: "blue",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red"

    // alignItems: "center"
    // justifyContent: "center"
  },

  text: { color: "white" },
  containerItems: {
    // width: 400,
    color: "blue",
    // textAlign: "left",
    borderWidth: 1,
    borderColor: "green",
    borderStyle: "solid",
    marginTop: 30,
    flex: 1
    // backgroundColor: "blue",
    // alignItems: "center"
  },
  containerItems2: {
    // width: 400,
    color: "#9e00ff",
    // textAlign: "left",
    borderWidth: 1,
    borderColor: "blue",
    borderStyle: "solid",
    // marginTop: 0,
    flex: 1
    // backgroundColor: "blue",
    // alignItems: "center"
  }
});
