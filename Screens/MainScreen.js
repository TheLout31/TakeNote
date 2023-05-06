import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CusInputText from "../Components/CusInputText";
import FloatingBtn from "../Components/FloatingBtn";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


function MainScreen({navigation}) {
    useEffect(()=>{
      getData()
    },[]);
    const getData =async()=>{
      const noteobject = await AsyncStorage.getItem('notes');
      console.log(noteobject)
    }
  return (
    <View style={styles.container}>
      <View style={styles.searchtab}>
        <CusInputText name='search' placeholder='Search' cusheight={60}/>
      </View>
      <View style={styles.floatcontainer}>
        <FloatingBtn onPressing={() => navigation.navigate('AddNote')} />
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#2c2b4b",
  },
  searchtab: {
    justifyContent: "center",
    alignItems: "center",
  },
  floatcontainer: {
    paddingTop: 700,
    backgroundColor: "#2c2b4b",
  },
});
