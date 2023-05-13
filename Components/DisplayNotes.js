import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import CustomBtn from "../Components/CustomBtn";
function DisplayNotes() {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  };

  const handleDeleteNote = async (id) => {
    const newNotes = [...notes];
    newNotes.splice(id, 1);
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
      setNotes(newNotes);
    } catch (e) {
      console.error("Failed to delete note:", e);
    }
  };

  useEffect(() => {
    async function getNotes() {
      try {
        const storedNotes = await AsyncStorage.getItem("notes");
        if (storedNotes !== null) {
          setNotes(JSON.parse(storedNotes));
          
        }
      } catch (e) {
        console.error("Failed to get notes:", e);
      }
    }

    getNotes();
  }, [isFocused]);

  return (
    <View style={styles.flatlistcontainer}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View
            style={[styles.container, { backgroundColor: generateColor() }]}
          >
            <View>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
            <View>
              <CustomBtn onPressing={() => handleDeleteNote(item.id)} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default DisplayNotes;

const styles = StyleSheet.create({
  flatlistcontainer: {
    margin: 5,
    padding: 5,
  },
  container: {
    elevation: 8,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  descriptionText: {
    fontSize: 16,
    color: "white",
  },
});
