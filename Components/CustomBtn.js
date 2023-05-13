import { Pressable, StyleSheet, Text } from "react-native";
function CustomBtn({ onPressing }) {
  return (
    <Pressable onPress={onPressing} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Delete</Text>
    </Pressable>
  );
}

export default CustomBtn;

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    maxwidth: '50%',
    maxHeight:'100%',
    borderRadius:20,
    margin:15,
    padding:10,
  },
  appButtonText: {
    fontSize: 15,
    color: "black",
    fontWeight:'bold',
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
