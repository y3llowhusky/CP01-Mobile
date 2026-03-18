import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Review from './src/screens/Review';

export default function App() {
  const[nomeAluno, setNomeAluno]=useState("");
  const[cursoAluno, setCursoAluno]=useState("");
  const[disciplinaAluno, setDisciplinaAluno]=useState("");
  const[descricaoAluno, setDescricaoAluno]=useState("");
  const[mostrarDados, setMostrarDados]=useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image/>

      <TextInput placeholder="Digite seu nome" onChangeText={setNomeAluno}/>
      <TextInput placeholder="Digite seu curso" onChangeText={setCursoAluno}/>
      <TextInput placeholder="Digite sua disciplina" onChangeText={setDisciplinaAluno}/>
      <TextInput placeholder="Digite sua descrição" onChangeText={setDescricaoAluno}/>

      <Button 
        title="Enviar dados" 
        onPress={()=>{setMostrarDados(!mostrarDados)}}
      />

      {mostrarDados && <Review nomeAluno={nomeAluno} cursoAluno={cursoAluno} 
      disciplinaAluno={disciplinaAluno} descricaoAluno={descricaoAluno}/>}
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
  image:{resizeMode:"center"},
  input:{
    backgroundColor:"#ccc",
    width:300,
    borderRadius:10
  }
});