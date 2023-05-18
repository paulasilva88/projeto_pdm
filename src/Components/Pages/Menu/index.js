import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>

            <View style={styles.containerLogo}>
                <View style={styles.containerImage}>
                    <Image style={styles.imageLogo} resizeMode="contain" source={require('../../Image/logo.png')} />
                </View>
            </View>

            <View style={styles.containerMessage}>
                <View style={styles.containerFrase}>
                    <Text style={styles.frase}>Nosso compromisso é transformar o futuro!</Text>
                </View>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Bem-vindo(a) a Águas do Sertão!</Text>
                </View>


                {/* 2ª via do boleto */}
                <TouchableOpacity style={styles.buttomCustom}
                    onPress={() => navigation.navigate ('Boleto')} >
                    <View style={styles.boxOpcoes}>

                        <View style={styles.boxIcon}>
                            <Icon style={styles.icon} name="filetext1" size={30} color={'#FFF'} />
                        </View>

                        <View style={styles.boxTexto}>
                            <Text style={styles.texto}>2ª via do boleto</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Pagamento Pix */}
            <View style={styles.boxOpcoes}>
                    
                    <View style={styles.boxIcon}>
                      <Icon style={styles.icon} name="qrcode" size={30} color={'#fff'}/>
                    </View>
      
                    <View style={styles.boxTexto}>
                      <Text style={styles.texto}>Pagamento Pix</Text>
                        </View>
                    </View>
      
                    {/* Ligação de Água */}
                      <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon1 style={styles.icon} name="water-pump" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Ligação de Água</Text>
                              </View>
                      </View>
      
                      {/* Vazamento de Água */}
                      <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon1 style={styles.icon} name="water-alert-outline" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Vazamento de Água</Text>
                              </View>
                      </View>
      
                      {/* Entenda sua conta */}
                      <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon style={styles.icon} name="unknowfile1" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Entenda sua conta</Text>
                              </View>
                      </View>
      
                      {/* Quem Somos */}
                      <TouchableOpacity 
                          style={styles.buttomCustom}
                          onPress={() => navigation.navigate ('QuemSomos')} >
                              <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon style={styles.icon} name="questioncircleo" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Quem Somos</Text>
                              </View>
                      </View>
                      </TouchableOpacity>   
      
                      {/* Entenda seu consumo */}
                      <TouchableOpacity 
                          style={styles.buttomCustom}
                          onPress={() => navigation.navigate ('Consumo')} >
                      <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon style={styles.icon} name="eyeo" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Entenda seu consumo</Text>
                              </View>
                      </View>
                      </TouchableOpacity>
      
                      {/* Troca de titularidade */}
                      <View style={styles.boxOpcoes}>
                          
                              <View style={styles.boxIcon}>
                                  <Icon style={styles.icon} name="solution1" size={30} color={'#fff'}/>
                              </View>
      
                              <View style={styles.boxTexto}>
                                  <Text style={styles.texto}>Troca de titularidade</Text>
                              </View>
                      </View>
      
                      {/* Número de Telefone */}               
                      <View style={styles.boxInformacao}>
                          <View style={styles.boxPhone}> 
                              <Icon2 style={styles.iconPhone} name="phone-call" size={30}/>
                          </View>
      
                          <View style={styles.boxNumber}>
                              <Text style={styles.textoNumber}>0800 000 2122</Text>
                          </View>
                      </View>

            </View>

            <View style={styles.rodape}></View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    containerLogo: {
        backgroundColor: '#fff',
    },

    imageLogo: {
        width: 150,
        height: 100,
        marginTop: '1%',
    },

    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%',
    },

    containerMessage: {
        backgroundColor: '#0A0D47',
        marginTop: '1%',
    },

    containerFrase: {
        margin: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    frase: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    containerForm: {
        height: '83%',
        backgroundColor: '#FFF',
    },

    containerTitle: {
        margin: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        color: '#0A047D',
        fontWeight: 'bold',
    },

    boxOpcoes: {
        backgroundColor: '#F4F4F4',
        flexDirection: 'column',
        borderRadius: 15,
        padding: 10,
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        elevation: 1,
        marginBottom: 12,
    },

    texto: {
        color: '#00009C',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    boxIcon: {
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        backgroundColor: '#0A0D47',
        padding: 15,
        borderRadius: 40,
        marginRight: 10,
        marginLeft: 5,
    },

    boxInformacao: {
        flexDirection: 'row',
        padding: 15,
    },
  
    boxPhone: {
        backgroundColor: '#36DB6B',
        padding: 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    boxNumber: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5,
    },
    
    textoNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00009C',
    },

    rodape: {
        height: 10,
    },

});