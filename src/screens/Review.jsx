import { StyleSheet, Text, View } from 'react-native';

export default function Review({nomeAluno, cursoAluno, disciplinaAluno, descricaoAluno}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Visualizando formulário pronto...</Text>
            <Text style={styles.text}>Nome: {nomeAluno}</Text>
            <Text style={styles.text}>Curso: {cursoAluno}</Text>
            <Text style={styles.text}>Disciplina: {disciplinaAluno}</Text>
            <Text style={styles.text}>Descrição: {descricaoAluno}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap:10,
        alignItems: "center",
        margin: 15
    },
    text:{
        fontSize: 14,
        color: "#555",
        fontWeight: "bold"
    },
    title:{
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold"
    }
})