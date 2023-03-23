import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, } from 'react-native';


export default function App() {


  const [nome,setNome] = useState('');


  return (
    <View>
      <View styles={styles.topo}>
        <Text style={styles.textoTopo}>ÁGUAS DO SERTÃO</Text>
      </View>


      <View style={styles.img}>
        <Image style={styles.image} resizeMode='center' source={require('./assets/logo.jpeg')} />
      </View>


      <View style={styles.corpo}>
        <Text style={styles.textoCorpo}>CPF</Text>
        <TextInput
          multiline
          style={styles.input}
          keyboardType="numeric"
          placeholder='Ex: 111.222.333-45'
          onChangeText={setNome}
        />


        <Text style={styles.textoCorpo}>Data de Nascimento</Text>
        <TextInput
          multiline
          style={styles.input}
          keyboardType="numeric"
          placeholder='Ex: 20/04/1974'
        />
      </View>


      {/* BUTTOM */}
      <TouchableOpacity
        style={styles.buttomCustom}
        onPress={() => Alert.alert('O CPF: ' + nome + ' acabou de entrar.' + '\nBem-vindo(a) a Águas do Sertão!')}
      >
        <Text style={styles.textButtom}>Entrar</Text>
      </TouchableOpacity>
   
      <View style={styles.rodape}></View>


    </View> //fim da view geral
  );
}


const styles = StyleSheet.create({
  //FORMATAÇÃO DO CABEÇALHO
  textoTopo: {
    //formatação da box
    backgroundColor: '#00009C',
    marginTop: 30,
    padding: 30,
    height: 100,


    //formatação do texto
    textAlign: "center",
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },


  //FORMATAÇÃO DO RODAPÉ
  rodape: {
    //formatação da box
    backgroundColor: '#00009C',
    padding: 10,
    height: 50,
    marginTop: 161,
  },


  //FORMATAÇÃO DO CORPO
  //formatação da view onde ta a imagem (logo)
  img: {
    alignItems: 'center',
    marginTop: 40,
  },


  //formatação da imagem
  image: {
    width: 200,
    height: 200,
  },


  //formatação do corpo
  corpo: {
    marginTop: 45,
    marginLeft: 50,
  },


  //formatação do texto do corpo
  textoCorpo: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 5,
  },


  //formatação das caixas de informação
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },


  //formatação do Buttom (entrar)
  buttomCustom: {
    justifyContent: 'center',
    alignItems: 'center',
    //elevation: 8,
    backgroundColor: '#00009C',
    //borderRadius: 10,
    padding: 20,
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
  },


  //formatação do texto do Buttom (entrar)
  textButtom:{
    color: '#FFFFFF',
    fontSize: 20,
  },


},
);
