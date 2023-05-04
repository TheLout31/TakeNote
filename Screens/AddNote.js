import { View, Text, TextInput, Button,StyleSheet } from "react-native";
import CusInputText from "../Components/CusInputText";

function AddNote({ navigation }) {
  return (
    <View style={styles.maincontainer}> 
      <View style={styles.sumcontainer}>
        <View>
          <Text style={styles.custext}>Title</Text>
          <CusInputText name='person' placeholder='title' cusheight={60}/>
        </View>
        <View>
          <Text style={styles.custext}>Description</Text>
          <CusInputText name='book' placeholder='line'cusheight={180}/>
        </View>
        <View >
          <Button title="Add" color="#eb6765" borderRadius={10}/>
        </View>
      </View>
    </View>
  );
}

export default AddNote;

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    backgroundColor: '#262640',
  },
  sumcontainer:{
    margin:30,
    backgroundColor: '#2c2b4b',
    padding:20,
    borderRadius:20,
  },
  custext:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});
