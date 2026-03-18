import { Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Review({nomeAluno, cursoAluno, disciplinaAluno, descricaoAluno}) {
    return (
        <SafeAreaView>
            <Text>Visualizando formulário pronto...</Text>
            <Text>Nome: {nomeAluno}</Text>
            <Text>Curso: {cursoAluno}</Text>
            <Text>Disciplina: {disciplinaAluno}</Text>
            <Text>Descrição: {descricaoAluno}</Text>
        </SafeAreaView>
    )
}