import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <CartaoPerfil
          nome="Pedro Henrique de Oliveira"
          profissao="Estudante de Ti"
          cidade="Campinas,SP"
          email="pedro.pereira@email.com"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});