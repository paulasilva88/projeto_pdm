import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>



      {/* CABEÇALHO */}
      <View styles={styles.topo}>
        <Text style={styles.textoTopo}>ÁGUAS DO SERTÃO</Text>
      </View>

      {/*Corpo - Parte Interativa*/}
      <View style={styles.corpo}> 

        {/* Mensagem de Boas vindas */}
        <View style={styles.mensagemBoasVindas}>
        <Text style={styles.textoCorpo}> Bem Vinda(o)! </Text>
        </View>
        

        <View style={styles.linhaCaixaOpcoes}>
           {/* Caixa de opções */}
           <View style={styles.caixaOpcoes} >
            
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="filetext1" size={30} style={styles.icone}/>
            </View>

            <View><Text style={styles.textoCorpo} onPress={() => Alert.alert('2ª Via do boleto')}>
                2ª Via boleto</Text></View>
            
          </View>

          {/* Caixa de opções */}
          <View style={styles.caixaOpcoes} onPress={() => Alert.alert('Quem somos')}>
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="questioncircleo" size={30} style={styles.icone}/>
            </View>
            {/* Texto */}
            <View><Text style={styles.textoCorpo}>
            Quem somos</Text></View>
          </View>

        </View>

        <View style={styles.linhaCaixaOpcoes}>
           {/* Caixa de opções */}
           <View style={styles.caixaOpcoes} >
            
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="qrcode" size={30} style={styles.icone}/>
            </View>

            <View><Text style={styles.textoCorpo} onPress={() => Alert.alert('Pagamento Pix')}>
            Pagamento Pix</Text></View>
            
          </View>

          {/* Caixa de opções */}
          <View style={styles.caixaOpcoes} onPress={() => Alert.alert('Entenda sua conta')}>
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="unknowfile1" size={30} style={styles.icone}/>
            </View>
            {/* Texto */}
            <View><Text style={styles.textoCorpo}>
            Entenda sua conta</Text></View>
          </View>

        </View>

        <View style={styles.linhaCaixaOpcoes}>
           {/* Caixa de opções */}
           <View style={styles.caixaOpcoes} >
            
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon1 name="water-pump" size={30} style={styles.icone}/>
            </View>

            <View><Text style={styles.textoCorpo} onPress={() => Alert.alert('Ligação de água')}>
            Ligação de água</Text></View>
            
          </View>

          {/* Caixa de opções */}
          <View style={styles.caixaOpcoes} onPress={() => Alert.alert('Acompanhe seu pedido')}>
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="eyeo" size={30} style={styles.icone}/>
            </View>
            {/* Texto */}
            <View><Text style={styles.textoCorpo}>
            Acompanhe seu pedido</Text></View>
          </View>

        </View>

        <View style={styles.linhaCaixaOpcoes}>
           {/* Caixa de opções */}
           <View style={styles.caixaOpcoes} >
            
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon1 name="water-alert-outline" size={30} style={styles.icone}/>
            </View>

            <View><Text style={styles.textoCorpo} onPress={() => Alert.alert('Vazamento de água')}>
            Vazamento de água</Text></View>
            
          </View>

          {/* Caixa de opções */}
          <View style={styles.caixaOpcoes} onPress={() => Alert.alert('Troca de titularidade')}>
            {/* Borda do ícone */}
            <View style={styles.caixaIcone}>
              {/* Ícone */}
              <Icon name="solution1" size={30} style={styles.icone}/>
            </View>
            {/* Texto */}
            <View><Text style={styles.textoCorpo}>
            Troca de titularidade</Text></View>
          </View>

        </View>


      {/* Caixa de opções */}
      <View style={styles.caixaTelefone} onPress={() => Alert.alert('Tela de Ligação')}>
            {/* Ícone */}
            <Icon2 name="phone-call" size={30} style={styles.iconeTelefone}/>

            {/* Texto */}
            <View><Text style={styles.textoTelefone}>
            0800 000 2122</Text></View>
          </View>

  
      </View>

     



      {/* RODAPÉ */}
      <View style={styles.rodape}></View> 

    </View>
    
  );
}

const styles = StyleSheet.create({

  //Tela Inteira
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  
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

  corpo: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
  
  },

  mensagemBoasVindas:{
    margin: 30,
  },

  linhaCaixaOpcoes:{
    flex: 1,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyItems: 'flex-end',
    marginBottom: 40
  },

  caixaOpcoes:{
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 80,
    marginTop:10,
    marginHorizontal: 10,
    minHeight:80,
    maxHeight: 100,
  },

  //borda do ícone
  caixaIcone:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    backgroundColor: '#F2F2F2',
    margin: 10,
    padding: 30,
    position: 'absolute'
  },

  icone: {
    backgroundColor: '#040DBF',
    color: 'white',
    borderRadius: 90,
    alignContent: 'flex-start',
    position: 'absolute',
    padding: 10,
  },

  textoCorpo:{
    color: '#040DBF',
    fontWeight: 'bold',
  },


  // View da caixa com o número de telefone e ícone
  caixaTelefone:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end',
    flexDirection: 'column',
    paddingLeft:60,
  },
  iconeTelefone:{
    backgroundColor: '#04D94F',
    color: 'black',
    borderRadius: 90,
    alignContent: 'flex-start',
    position: 'absolute',
    padding: 10,
  },
  textoTelefone:{
    color: 'blue',
  },

  //FORMATAÇÃO DO RODAPÉ
  rodape: {
    //formatação da box
    backgroundColor: '#00009C',
    padding: 10,
    height: 50,
    marginTop: 161,
  },

});
