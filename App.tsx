import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  // comentários
  return (
    <View style={styled.container}>
      <Text key={1}style={styled.title}>
        Nome do evento
      </Text>
      <Text key={2} style={styled.subTitle}>
        Sexta, 4 de Novembro de 2022
      </Text>
       
      <View style = {styled.container}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
          style = {styled.input}
        />

      <TouchableOpacity style = {styled.buttonAdd}{
        <Text style = {styled.labelButton}></Text>+</text>        
      </TouchableOpacity>
  
    </View>
  </View>
  ;
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 25,

  },

  title: {
    color: '#6B6B6B',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '400',

    subTitle: {
      color: '#FDFCFE',
      fontSize: 24,
      lineHeight: 28.13,
      fontWeight: '700',
    },

  input: {
    width: 327,
    height: 56,
    borderRadius: 4,
    backgroundcolor: '#1F1E25' ,
    position: abs,
    left: 24,
    top: 156,
    }

  }
});

