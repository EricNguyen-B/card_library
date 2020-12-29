import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container} >
          <Card title="Slifer The Sky Dragon"/>
          <Card title="Obelisk The Tormentor"/>
          <Card title="Winged Dragon of Ra" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slifer: {
    backgroundColor: 'red'
  }
});
