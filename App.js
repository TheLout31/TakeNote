import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./Screens/MainScreen";
import { NoteScreen } from "./Screens/NoteScreen";
import { AddNote } from "./Screens/AddNote";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AddNote" component={AddNote} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
