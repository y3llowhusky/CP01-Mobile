import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const[nomeAluno, setNomeAluno]=useState("");
  const[cursoAluno, setCursoAluno]=useState("");
  const[disciplinaAluno, setDisciplinaAluno]=useState("");
  const[descricaoAluno, setDescricaoAluno]=useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Digite seu nome"/>
      <TextInput placeholder="Digite seu curso"/>
      <TextInput placeholder="Digite sua disciplina"/>
      <TextInput placeholder="Digite sua descrição"/>
    </SafeAreaView>
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
