import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function History({route, navigation}){
    const {history} = route.params
    return(
    <View style = {styles.container}>
    <FlatList data={history} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}/>
       <StatusBar style="auto" 
    />
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });