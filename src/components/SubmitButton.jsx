import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const SubmitButton = ({ onSubmit }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonContainer: { alignItems: "flex-end" },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff",
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center"
  },
  submit: { color: "#666666", fontWeight: "600" }
});
