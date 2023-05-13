import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

function AddNote({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSaveButtonPress = async () => {
    try {
      const note = {
        title: title,
        description: description,
        id: Math.random(),
      };
      const storedNotes = await AsyncStorage.getItem("notes");
      let notes = [];
      if (storedNotes) {
        notes = JSON.parse(storedNotes);
      }
      notes.push(note);
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
      setTitle("");
      setDescription("");
      navigation.navigate("MainScreen");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.sumcontainer}>
        <View>
          <Text style={styles.custext}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={handleTitleChange}
            value={title}
          />
        </View>
        <View>
          <Text style={styles.custext}>Description</Text>
          <TextInput
            style={styles.input2}
            placeholder="Description"
            onChangeText={handleDescriptionChange}
            value={description}
            textAlignVertical="top"
          />
        </View>
        <View style={styles.cusbtn}>
          <Button
            title="Add"
            color="#eb6765"
            borderRadius={10}
            onPress={handleSaveButtonPress}
          />
        </View>
      </View>
    </View>
  );
}

export default AddNote;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  input2: {
    height: 140,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#262640",
    justifyContent:'center'
  },
  sumcontainer: {
    margin: 30,
    backgroundColor: "#2c2b4b",
    padding: 20,
    borderRadius: 20,
  },
  custext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cusbtn: {
    margin: 12,
  },
});
