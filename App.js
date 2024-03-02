import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View
} from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}> Calculadora</Text>

      <View style={styles.button}>
        <Button label='AC' />
        <Button label='/' />
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='0' />
        <Button label='.' />
        <Button label='=' />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});


