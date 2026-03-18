import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Review from './src/screens/Review';

export default function App() {
  const[nomeAluno, setNomeAluno]=useState("");
  const[cursoAluno, setCursoAluno]=useState("");
  const[disciplinaAluno, setDisciplinaAluno]=useState("");
  const[descricaoAluno, setDescricaoAluno]=useState("");
  const[mostrarDados, setMostrarDados]=useState(false);

  useEffect(() => {
    console.log("Componente Review carregado, formulário preenchido.")
  }, [mostrarDados]);

  useEffect(() => {
    console.log("Aplicação inicializada...");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require("./assets/imageform.jpg")}
        style={styles.image}
      />

      <TextInput 
        placeholder="Digite seu nome" 
        onChangeText={setNomeAluno}
        style={styles.input}
      />

      <TextInput 
        placeholder="Digite seu curso" 
        onChangeText={setCursoAluno}
        style={styles.input}
      />

      <TextInput 
        placeholder="Digite sua disciplina" 
        onChangeText={setDisciplinaAluno}
        style={styles.input}
      />

      <TextInput 
        placeholder="Digite sua descrição" 
        onChangeText={setDescricaoAluno}
        style={styles.fatInput}
        multiline={true}
      />

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
    gap: 5
  },
  image:{
    height: 125,
    width: 300,
    resizeMode: "stretch",
    marginBottom: 10,
    borderRadius: 25
  },
  input:{
    height:40,
    backgroundColor:"#ccc",
    width:300,
    borderRadius:10
  },
  fatInput:{
    height:80,
    backgroundColor:"#ccc",
    width:300,
    borderRadius:10
  }
});
