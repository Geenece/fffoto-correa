import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

export default function App() {



  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>616</Text>
      <Text style={styles.subTitle}>Hola Coder</Text>
      <TextInput
       placeholder='Gnc@email.com'
      style={styles.textInput}
      />
      <TextInput
      placeholder='Password'
      style={styles.textInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: { 
    fontSize: 120,
    color: '#046865',
    fontWeight: 'bald',
  },
  subTitle: {
    fontSize: 30,
    color: '#046865',
  },
  textInput: { 

    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
    
    
   
  }

























});
