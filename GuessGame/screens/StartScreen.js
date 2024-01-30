import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text,Button, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import Header from "../components/Header";
import Card from "../components/Card";
import CustomButton from '../components/Button';
import Input from '../components/Input';
import GradientBackground from '../components/Background';

export default function StartScreen({ onStart , previousName, previousGuess}) {

  const [name, setName] = useState(previousName);
  const [number, setNumber] = useState(previousGuess);
  const [isCheckSelected, setCheckSelected] = useState(false);

  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');


  const handleConfirm = () => {
    setNameError('');
    setNumberError('');
    let hasError = false;

    // Validate name (non-numeric and more than 1 character)
    if (!name || name.length <= 1 || !isNaN(name)) {
      setNameError('Invalid name. Please enter a non-numeric name.');
      hasError = true;
    }

    // Validate number (within 1020 to 1029 inclusive)
    const numberVal = parseInt(number);
    if (isNaN(numberVal) || numberVal < 1020 || numberVal > 1029) {
      setNumberError('Invalid number. Please enter a number between 1020 and 1029.');
      hasError = true;
    }    

    if (hasError) {
      return;
    }
    // If validation passes
    onStart(name, numberVal);
  };
    
//  console.log(userName,userGuess);
  return (
    <GradientBackground>
    <SafeAreaView style={styles.screen}>
      <View>
      <Header title="Guess My Number"/>

      <Card style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Input value={name} onChangeText={setName} placeholder="Your name"  style={styles.input}/>
        {nameError && <Text style={styles.errorText}>{nameError}</Text>}

        <Text style={styles.label}>Enter a Number</Text>
        <Input value={number.toString()} onChangeText={setNumber} keyboardType="numeric" placeholder="1020 - 1029" style={styles.input}/>
        {numberError && <Text style={styles.errorText}>{numberError}</Text>}

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isCheckSelected}
            onValueChange={setCheckSelected}
          />
          <Text style={styles.checkboxText}>I am not a robot</Text>
        </View>
        

        
        <View style = {styles.Button}>
          <CustomButton title="Reset" onPress={() => {
            setName("");
            setNumber("");
            setCheckSelected(false);
          }}

          disabled={false}/>
          <CustomButton title="Confirm" onPress={handleConfirm} disabled={!isCheckSelected} />
          </View>

      </Card>
      </View>
    </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    padding: 20,
    justifyContent: 'center',
  },
  
  checkboxContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  
  checkboxText: {
    marginLeft: 10, 
  },

  label: {
    fontSize: 16,
    color: "white", 
  },

  errorText: {
    color: 'black',
  },

  Button: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
  },

  input: {
    borderBottomWidth: 1, 
    borderColor: 'white', 
    paddingVertical: 5, 
  }
});
