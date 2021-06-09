import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}> Hello world!!! </Text>
        <Text style={{ color: "black", textAlign: "center" }}>
          {" "}
          My name is V{" "}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.hellokpop.com/wp-content/uploads/2021/04/V.jpg",
          }}
        />
      </View>
      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },

  titleContainer: {
    backgroundColor: "skyblue",
    borderRadius: 20,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },

  fillerContainer: {
    backgroundColor: "teal",
    flex: 0.5,
    padding: 10,
    width: "50%",
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
  },
});
