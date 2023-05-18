import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    {/* ARMAZENAR O CPF */ }
    const [CPF, setCpf] = useState('');
    {/* ARMAZENAR A SENHA */ }
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);
    {/* NAVEGAÇÃO ENTRE TELAS */ }
   const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('../../Image/logo-inicio.png')}
                    style={{ width: '45%' }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerHeader}>  
                <Text style={styles.title}>Bem-vindo(a) a Águas do Sertão!</Text>
            </View>      
            
            <View style={styles.containerForm}>
                {/* INFORMAR O CPF */}
            <Text style={styles.textoCpf}>CPF</Text>
            <View style={styles.inputArea}>
                <TextInputMask
                    style={styles.input}
                    type={'cpf'}
                    keyboardType='numeric'
                    placeholder='Digite seu CPF'
                    value={CPF}
                    onChangeText={(texto) => setCpf(texto)}
                />
            </View>

            {/* INFORMAR A SENHA */}
            <Text style={styles.textoSenha}>Senha</Text>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Insira sua senha'
                    value={senha}
                    onChangeText={(texto) => setSenha(texto)}
                    secureTextEntry={hidePass}
                />
                
                <TouchableOpacity
                    style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Icon name="eye" color="#000000" size={20} />
                        :
                        <Icon name="eye-off" color="#000000" size={20} />
                    }
                </TouchableOpacity>
            </View>

                    <Text style={styles.recuperarSenha}>Recuperar Senha</Text>

                <TouchableOpacity
                    style={styles.buttomRegister}
                    onPress={() => navigation.navigate('Menu')} >
                    <Text style={styles.textButtom}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.boxRodape}> 
                    <Text style={styles.titleRodape}>2023 © Águas do Sertão</Text>
                </View>

            </View>       

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0D47',
    },

    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40, //pode? não, mas ta ai 
    },

    containerHeader: {
        alignItems: 'center',
        marginTop: -40,
    },

    title:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '8%',
    },

    containerForm:{
        flex: 2,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    textoCpf: {
        color: '#0A0D47',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '7%',
        marginBottom: '2%',
      },
      
      textoSenha: {
        color: '#0A0D47',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '1%',
        marginBottom: '2%',
      },

    inputArea: {
        borderWidth: 1,
        borderColor: '#A1A1A1',
        flexDirection: 'row',
        width: '95%',
        height: 55,
        backgroundColor: '#F4F4F4',
        marginLeft: '3%',
        marginBottom: 12,
        borderRadius: 10,
        alignItems: 'center',  
    },

    input: {
        width: '85%',
        height: 50,
        color: '#121212',
        padding: 8,
        fontStyle: 'italic',
        fontSize: 20,
    },

    icon: {
        
        width: '15%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    recuperarSenha: {
        color: '#00009C',
        fontSize: 18,
        fontStyle: 'italic',
        marginLeft: '5%',
        marginTop: '1%',
      },

    buttomRegister: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0D47',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 25,
        padding: 15,
        marginTop: 50,
        marginLeft: 120,
        marginRight: 120,
    },

    textButtom: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
    },

    rodape: {
        alignItems: 'center',
    },

    textRodape:{
        color: '#0A0D47',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '25%',
    },

    boxRodape: {
        alignItems: 'center',
        marginTop: '40%',
        marginBottom: '5%',
      },
      
      titleRodape: {
        fontSize: 18,
        color: '#0A0D47',
        fontWeight: 'bold',
        alignItems: 'center',
      },
});
