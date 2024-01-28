import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View,CheckBox  } from 'react-native';
import header from "./Header";
import card from "./Card";

export default function App() {
  const pageOne = "Guess My Number";
  const pageThree = "Game is Over";
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isCheckSelected, setCheckSelected] = useState("");

  return (
    <SafeAreaView style={styles.screen}>

      <view style = {styles.topView}>
        <header title ="Guess My Number"/>
      </view>

      <view style = {styles.bottonView}>
        
        <card style = {styles.card}>
        <Text>Name</Text>
        <Input value={name} onChangeText = {setName} />

        <Text>Enter a Number</Text>
        <Input value={number} onChangeText = {setNumber} keyboardType = "numeric"/>

        <CheckBox value = {isCheckSelected} onChangeText = {setCheckSelected}/>
        <Text>I am not a robot</Text>
        
        <Button title = "Reset" onPress={function(){
          setName();
          setNumber();
        }}/>
        <Button title = "Confirm" onPress={handleConfirm} disabled={!isCheckSelected} />

        </card>
      </view>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
//    alignItems: 'center',
    justifyContent: 'center',
  },

  topView:{
    flex:1,
    alignItems: "center",
  },

  bottonView :{
    flex:5,
    backgroundColor: "grey"
  },
  
  card: { 
    padding: 20,
    borderRadius: 10 
  }
});
