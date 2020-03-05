import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ onTextInput, inputValue,onSubmit }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={onTextInput}
      autoCapitalize="none"
      autoCorrect={false}
      value={inputValue}
      onEndEditing={onSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Input;
