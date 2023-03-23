import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>



      {/* CABEÇALHO */}
      <View styles={styles.topo}>
        <Text style={styles.textoTopo}>ÁGUAS DO SERTÃO</Text>
      </View>

      <Text style={styles.textoCorpo}> Bem Vinda(o)! </Text>
      {/* Mensagem de Boas vindas */}
      <View style={styles.body}> 
      

        {/* Caixa de opções */}
        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          
          {/* Borda do ícone */}
          <View style={styles.caixaIcone}>
            {/* Ícone */}
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>

          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
          
        </View>

        {/* Caixa de opções */}
        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          
          {/* Borda do ícone */}
          <View style={styles.caixaIcone}>
            {/* Ícone */}
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>

          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
          
        </View>
        

      

      </View>

      <View style={styles.body}> 

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>
    
      </View>

      <View style={styles.body}> 

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>
    
      </View>

      <View style={styles.body}> 

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>

        <View style={styles.caixaOpcoes} onPress={() => Alert.alert('2ª Via do boleto')}>
          <View style={styles.caixaIcone}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
          </View>
          <View><Text style={styles.textoCorpo}>
              2ª Via boleto</Text></View>
        </View>
    
      </View>




      {/* RODAPÉ */}
      <View style={styles.rodape}></View> 

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  body: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    //width: 600,    
    color: 'blue',//pq não vai?


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

  icon: {
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

});
