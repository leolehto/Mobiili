import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {
  const[number1, setNumber1] = useState("");
  const[number2, setNumber2] = useState("");
  const[result, setResult] = useState("");
  const[calculation, setCalculation] = useState([]);
  
  
  const buttonPressed1 = () => {
    const plus = parseFloat(number1) + parseFloat(number2)
    const newCalculation = `${number1} + ${number2} = ${plus}`;
    setResult(plus)
    setCalculation([newCalculation, ...calculation]);
  };
  const buttonPressed2 = () => {
    const minus = parseFloat(number1) - parseFloat(number2)
    const newCalculation = `${number1} - ${number2} = ${minus}`;
    setResult(minus)
    setCalculation([newCalculation, ...calculation]);
    
  };


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, justifyContent: 'space-around', fontWeight: 'bold'}}
      >Result:{result} </Text>
      <TextInput 
        style={{width: 200, borderWidth: 2}} keyboardType='numeric'
        onChangeText={number1 => setNumber1(number1)} value={number1}
      />
      <TextInput 
        style={{width: 200, borderWidth: 2}} keyboardType='numeric'
        onChangeText={number2 => setNumber2(number2)} value={number2}
      />
      <View style={styles.buttons}>
      <Button onPress={buttonPressed1} color={'green'} title='+'/>
      <Button onPress={buttonPressed2} color={'red'} title='-'/>
      </View>
      <FlatList data={calculation} 
       keyExtractor={(item, index) => index.toString()}
       renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}/>
      <StatusBar style="auto" 
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttons:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
 
});
