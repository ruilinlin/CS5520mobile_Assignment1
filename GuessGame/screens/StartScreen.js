import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View,CheckBox  } from 'react-native';
import Header from "./Header";
import Card from "./Card";

export default function StartScreen() {
  const pageOne = "Guess My Number";
  const pageThree = "Game is Over";
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isCheckSelected, setCheckSelected] = useState(false);
  const [error, setError] = useState('');

  const handleConfirm = () => {
    // Validate name (non-numeric and more than 1 character)
    if (!name || name.length <= 1 || !isNaN(name)) {
      setError('Invalid name. Please enter a non-numeric name.');
      return;
    }

    // Validate number (within 1020 to 1029 inclusive)
    const numberVal = parseInt(number);
    if (isNaN(numberVal) || numberVal < 1020 || numberVal > 1029) {
      setError('Invalid number. Please enter a number between 1020 and 1029.');
      return;
    }    

    // If validation passes
    setError('');
    onStart(name, numberVal);
  };
    
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
        {error ? <Text style={styles.errorText}>{error}</Text> : null}       

        <Button title = "Reset" onPress={function(){
          setName("");
          setNumber("");
          setCheckSelected(false);
          setError('');
        }}/>
        <Button title = "Confirm" onPress={handleConfirm} disabled={!isCheckSelected} />

        </card>
      </view>
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
