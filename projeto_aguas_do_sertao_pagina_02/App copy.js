import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>

      <View styles={styles.topo}>
        <Text style={styles.textoTopo}>ÁGUAS DO SERTÃO</Text>
      </View>

      <View style={styles.body}>


        <View style={styles.bigBox}>
          <View style={styles.smallBox}>
            <Icon name="filetext1" size={30} style={styles.icon}/>
            <Text onPress={() => Alert.alert('2ª Via do boleto')}>
              2ª Via boleto</Text>
            </View>

            <View style={styles.smallBox}>
            <Icon name="questioncircleo" size={30} style={styles.icon}/>
            <Text>Quem somos</Text>
            </View>

            <View style={styles.smallBox}>
            <Icon name="qrcode" size={30} style={styles.icon}/>
            <Text>Pagamento Pix</Text>
            </View>

            <View style={styles.smallBox}>
            <Icon name="unknowfile1" size={30} style={styles.icon}/>
            <Text>Entenda sua conta</Text>
            </View>

            <View style={styles.smallBox}>
              <Icon name="tool" size={30} style={styles.icon}/>
              <Text>Ligação de água</Text>
            </View>

            <View style={styles.smallBox}>
              <Icon name="eyeo" size={30} style={styles.icon}/>
              <Text>Acompanhe seu pedido</Text>
            </View>

            <View style={styles.smallBox}>
              <Icon1 name="water-alert-outline" size={30} style={styles.icon}/>
              <Text>Vazamento de água</Text>
            </View>

            <View style={styles.smallBox}>
              <Icon name="solution1" size={30} style={styles.icon}/>
              <Text>Troca de titularidade</Text>
            </View>
          
        </View>
      </View>


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
    backgroundColor: '#E9E8E8',

    flexDirection: 'row',
    flexWrap: 'wrap',
 
    /*justifyContent: 'space-between',
    alignContent: 'space-around',
    flexWrap: 'wrap',
   ,*/

  },

  /*bigBox: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },*/

  smallBox:{
    flex: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 16,
    paddingVertical: 8,
    
  },

  icon: {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 90,
    alignContent: 'flex-start',
    position: 'absolute',
    padding: 10,
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
