// Aluno(os):Thalita de Oliveira Terrazan
// Aluno(os):Pedro Henrique de Oliveira


import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartaoPerfil({ nome, profissao, cidade, email }) {
  const handleEnviarEmail = () => {
    Alert.alert('E-mail enviado para:', email);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleEnviarEmail}>
        <Text style={styles.botaoTexto}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  nome: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111111',
  },
  profissao: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 6,
  },
  cidade: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 6,
  },
  email: {
    fontSize: 15,
    color: '#2563eb',
    marginBottom: 18,
  },
  botao: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});