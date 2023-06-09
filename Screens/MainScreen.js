import { View, Text, StyleSheet } from "react-native";
import CusInputText from "../Components/CusInputText";
import FloatingBtn from "../Components/FloatingBtn";

import DisplayNotes from "../Components/DisplayNotes";

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchtab}>
        <CusInputText name="search" placeholder="Search" cusheight={60} />
      </View>

      <View>
        <DisplayNotes />
      </View>
      <View style={styles.floatcontainer}>
        <FloatingBtn onPressing={() => navigation.navigate("AddNote")} />
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 90,
    backgroundColor: "#2c2b4b",
  },
  searchtab: {
    justifyContent: "center",
    alignItems: "center",
  },
  floatcontainer: {
    backgroundColor: "#2c2b4b",
  },
});
