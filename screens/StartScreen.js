import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text,Button} from 'react-native';
import Checkbox from 'expo-checkbox';
import Header from "../components/Header";
import Card from "../components/Card";
import Color from "../components/Color"
import CustomButton from '../components/Button';
import Input from '../components/Input';

export default function StartScreen({ onStart }) {

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
        

          <Checkbox
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
          }}
          style = {styles.Button}
          disabled={false}/>
          <CustomButton title="Confirm" onPress={handleConfirm} disabled={!isCheckSelected} style={styles.Button}/>



      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    background: 'white',
  },

  label: {
    fontSize: 16,
    color: "white", 
  },
  checkbox: {
  
  },
  errorText: {
    color: 'white',
   
  },

  Box: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
},

  Button: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
},

});