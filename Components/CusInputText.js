import { View } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
function CusInputText({ name, placeholder, cusheight }) {
  const [text, onChangeText] = useState("");
  return (
    <View style={[styles.input, { height: cusheight }]}>
      <Ionicons name={name} size={32} color="grey" />
      <View style={styles.textinput}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default CusInputText;

const styles = StyleSheet.create({
  input: {
    width: 280,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
  },
  textinput: {
    width:100,
    maxWidth: "100%",
  },
});
