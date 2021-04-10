import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.title}>Curso Desenvolvimento de Sistemas</Text>
      <Text>Leandra Carvalho Rodrigues</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f#48D1CC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize:30
  }
});
