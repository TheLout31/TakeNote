import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

function FloatingBtn({ onPressing }) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPressing}
        style={styles.touchableOpacityStyle}
      >
        <Image
          //We are making FAB using TouchableOpacity with an image
          //We are using online image here
          source={require("../assets/Images/addicon.png")}
          //You can use you project image Example below
          //source={require('./images/float-add-icon.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

export default FloatingBtn;

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    elevation:15
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width:70,
    height:70,
    
  },
});
