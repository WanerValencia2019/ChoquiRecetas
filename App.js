import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/es/integration/react';
import {store, persistor} from './app/redux/store'

import InitialNavigation from './app/navigation/initialNavigation';
  
export default function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
          <InitialNavigation />
          <StatusBar style="auto" />
      </PersistGate>
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
