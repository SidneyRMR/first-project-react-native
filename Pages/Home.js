import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';

export default function Home() {
  const [cont, setCont] = useState(0)
  function incrementar() {
    setCont(cont+1)
  }
  return (
    <>
      <Header title='Contador de Toques' />
      <View style={styles.container}>
        <Text style={styles.title}>Toque no botão</Text>
        <Text>{cont} toques!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Aperte aqui!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 20
  }
});
