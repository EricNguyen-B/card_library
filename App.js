import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.slifer}>
          <Text style={styles.text}>Slifer The Sky Dragon</Text>
      </View>
      <View style={styles.obelisk}>
        <Text style={styles.text}>Obelisk The Tormentor</Text>
      </View>
      <View style={styles.ra}>
        <Text style={styles.text}>The Winged Dragon of Ra</Text>
      </View>
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
  slifer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#e60000',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    alignItems: 'center'
  },
  obelisk: {
    // backgroundColor: 'blue',
    // padding: 50
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#4d4dff',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    alignItems: 'center'
  },
  ra: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffcc66',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 25
  }
});
