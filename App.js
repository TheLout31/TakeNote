import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./Screens/MainScreen";
import NoteScreen from "./Screens/NoteScreen";
import AddNote from "./Screens/AddNote";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen
            name="AddNote"
            component={AddNote}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
