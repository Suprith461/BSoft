import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavWithDrawer from './src/navigation/navigation'
import {Provider} from 'react-redux';
import  store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
       <NavWithDrawer/>
  </Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});