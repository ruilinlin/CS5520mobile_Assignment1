import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View,CheckBox  } from 'react-native';
import Header from "../component/Header";
import Card from "../component/Card";
import Color from "../component/Color"
import CustomButton from '../component/Button';
import Input from '../component/Input';

export default function StartScreen(onStart) {

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
      <Header title="Guess My Number"/>

      <Card style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Input value={name} onChangeText={setName} placeholder="Your name"/>

        <Text style={styles.label}>Enter a Number</Text>
        <Input value={number} onChangeText={setNumber} keyboardType="numeric" placeholder="1020 - 1029"/>

        <CheckBox
          value={isCheckSelected}
          onValueChange={setCheckSelected}
          style={styles.checkbox}
        />
        <Text>I am not a robot</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <CustomButton title="Reset" onPress={() => {
          setName("");
          setNumber("");
          setCheckSelected(false);
          setError('');
        }}/>
        <CustomButton title="Confirm" onPress={handleConfirm} disabled={!isCheckSelected} />
      </Card>
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

  label: {
    fontSize: 16,
    color: Color.primary, 
  },
  checkbox: {
  
  },
  errorText: {
    color: 'white',
   
  }

});
