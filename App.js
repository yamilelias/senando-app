import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage, View, Text } from 'react-native';
import Walkthrough from './src/screens/Walkthrough';

export default function App() {
  const [walkthrough, setWalkthroughVisible] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((result) => {
      if (result === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true').then((result) => {
        console.log("null value recieved", result);
        setWalkthroughVisible(true);
        });
      } else {
        console.log("result", result);
      }
    });
  }, []);

  if (walkthrough) {
    return (
      <Walkthrough />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app boy!</Text>
    </View>
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