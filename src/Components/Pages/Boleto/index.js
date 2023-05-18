import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            {/* LOGO - ÁGUAS DO SERTÃO */}
            <View style={styles.imgLogo}>
                <Image style={styles.imageLogo} resizeMode='contain' source={require('../../Image/logo.png')} />
            </View>

            {/* CABEÇALHO */}
            <View style={styles.boxFrase}>
                <Text style={styles.textoCabecalho}>Nosso compromisso é transformar o futuro!</Text>
            </View>

            {/* IMAGEM COM O TITULO DA PÁGINA */}
            <View style={styles.img}>
                <Image style={styles.image} resizeMode='center' source={require('../../Image/fundo-titulo.png')} />
                <Text style={styles.titulo1}>2ª via do boleto</Text>
            </View>

            {/* MENSAGEM DO TOPO */}
            <View>
                <Text style={styles.descricao}>
                    Por aqui você faz uma busca por débitos e emite a segunda via gratuita das suas contas.
                    Caso a conta já esteja paga, para sua segurança, não aparecerá o código de barras.
                </Text>
            </View>

            {/* BOLETOS */}
            <View>
                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO VENCIDO!')}>
                    <View style={styles.boxBoleto}>
                        <Text style={styles.tituloBoleto}>Referente a {'\n'} 03/2023</Text>
                        <Text style={styles.tituloBoleto}>R$ 68,78</Text>
                        <Text style={styles.tituloBoleto}>Vencimento {'\n'} 02/2023</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO ATRASADO!')}>
                    <View style={styles.boxBoleto2}>
                        <Text style={styles.tituloBoleto2}>Referente a {'\n'} 02/2023</Text>
                        <Text style={styles.tituloBoleto2}>R$ 73,12</Text>
                        <Text style={styles.tituloBoleto2}>Vencimento {'\n'} 03/2023</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO PAGO!')}>
                    <View style={styles.boxBoleto3}>
                        <Text style={styles.tituloBoleto3}>Referente a {'\n'} 01/2023</Text>
                        <Text style={styles.tituloBoleto3}>R$ 62,75</Text>
                        <Text style={styles.tituloBoleto3}>Vencimento {'\n'} 02/2023</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO PAGO!')}>
                    <View style={styles.boxBoleto3}>
                        <Text style={styles.tituloBoleto3}>Referente a {'\n'} 12/2022</Text>
                        <Text style={styles.tituloBoleto3}>R$ 73,54</Text>
                        <Text style={styles.tituloBoleto3}>Vencimento {'\n'} 01/2023</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO PAGO!')}>
                    <View style={styles.boxBoleto3}>
                        <Text style={styles.tituloBoleto3}>Referente a {'\n'} 11/2022</Text>
                        <Text style={styles.tituloBoleto3}>R$ 63,32</Text>
                        <Text style={styles.tituloBoleto3}>Vencimento {'\n'} 12/2022</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO PAGO!')}>
                    <View style={styles.boxBoleto3}>
                        <Text style={styles.tituloBoleto3}>Referente a {'\n'} 10/2022</Text>
                        <Text style={styles.tituloBoleto3}>R$ 68,67</Text>
                        <Text style={styles.tituloBoleto3}>Vencimento {'\n'} 11/2022</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttomCustom}
                    onPress={() => Alert.alert('BOLETO PAGO!')}>
                    <View style={styles.boxBoleto3}>
                        <Text style={styles.tituloBoleto3}>Referente a {'\n'} 09/2022</Text>
                        <Text style={styles.tituloBoleto3}>R$ 71,37</Text>
                        <Text style={styles.tituloBoleto3}>Vencimento {'\n'} 10/2022</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.rodape}></View> 

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffF',
    },

    boxFrase: {
        height: '5%',
        backgroundColor: '#0A0D47',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -2, //ta certo isso produção?
    },

    imgLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    imageLogo: {
        width: 150,
        height: 100,
        marginTop: '2%',
    },

    textoCabecalho: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    img: {
        alignItems: 'center',
    },

    image: {
        width: 415,
        height: 100,
    },

    titulo1: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: -75, //arrumar
        fontSize: 40,
        fontWeight: 'bold',
    },

    descricao: {
        margin: 35,
        marginTop: 50,
        textAlign: 'justify',
        color: '#00009C',
        fontSize: 20,
        fontWeight: 'bold',
    },

    boxBoleto: {
        height: 50,
        margin: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E9E8E8',
    },

    //formatação do texto do boleto
    tituloBoleto: { //boleto vencido
        fontSize: 20,
        marginLeft: 10,
        color: '#F97B22',
        fontWeight: 'bold',
    },

    //formatação da box cinza
    boxBoleto2: {
        height: 50,
        margin: 15,
        marginTop: 3,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E9E8E8',
    },
    //formatação do texto do boleto
    tituloBoleto2: { //boleto atrasado
        fontSize: 20,
        marginLeft: 10,
        color: '#D21312',
        fontWeight: 'bold',
    },

    //formatação da box cinza
    boxBoleto3: {
        height: 50,
        margin: 15,
        marginTop: 3,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E9E8E8',
    },
    //formatação do texto do boleto
    tituloBoleto3: { //boleto pago
        fontSize: 20,
        marginLeft: 10,
        color: '#54B435',
        fontWeight: 'bold',
    },

    rodape: {
        //backgroundColor: '#F4F4F4',
        height: 50,
    },

});
