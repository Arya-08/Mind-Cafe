import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
export default function AppButton({
  title,
  onPress,
  color = "#ffa000",
  margin = 0,
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color },
        { marginTop: margin },
        { width: width },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4fc3f7",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 22,
    // textTransform: "uppercase",
    // fontWeight: "bold",
  },
});
