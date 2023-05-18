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
                <Text style={styles.titulo1}>Acompanhe seu consumo</Text>
            </View>

            {/* MENSAGEM DO TOPO */}
            <View>
                <Text style={styles.texto}>
                    O principal instrumento usado para medir o consumo de água em um imóvel é o hidrômetro. É por meio da numeração disponível no display
                    do equipamento que o leiturista verifica quantos metros cúbicos (m³) de água foram consumidos e qual será o valor correspondente a ser pago
                    pelo cliente. {'\n'}{'\n'}

                    O hidrômetro é de extrema importância pois permite a cobrança adequada do consumo e também facilita a identificação de vazamentos.{'\n'}{'\n'}

                    Geralmente, os hidrômetros mostram números pretos e vermelhos. Para a leitura, consideram-se apenas os números pretos. Você mesmo pode verificar o
                    consumo em seu hidrômetro usando a fórmula:{'\n'}{'\n'}
                </Text>

                <Text style={styles.textoFormula}>Leitura anterior – Leitura atual = Consumo</Text>

                <View style={styles.img}>
                    <Image style={styles.imageConsumo} resizeMode='center' source={require('../../Image/consumo.jpg')} />
                </View>

                <View style={styles.containerInformacao}>
                    <Text style={styles.tituloFinal}>Cuidados com o hidrômetro</Text>
                        <Text style={styles.textoFinal}>
                    O consumidor é responsável pela conservação de seu hidrômetro. Para isso, recomenda-se não colocar objetos em cima do hidrômetro, mantê-lo limpo
                    e em local de fácil acesso para que o leiturista possa fazer o seu trabalho. Além disso, o lacre deve ser mantido intacto, e em caso de avaria, a
                    Águas do Sertão deve ser notificada para providenciar a substituição.
                        </Text>
                </View>

            </View>

            <View style={styles.rodape}></View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },

    boxFrase: {
        height: '4%',
        backgroundColor: '#0A0D47',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -2, //ta certo isso produção?
    },

    imgLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
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
        backgroundColor: '#fff',
    },

    image: {
        width: 415,
        height: 100,
        marginTop: -2
    },

    titulo1: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: -75, //arrumar
        fontSize: 40,
        fontWeight: 'bold',
    },

    containerInformacao:{
        backgroundColor: '#fff'
    },    

    texto: {
        margin: 15,
        marginTop: 50,
        marginBottom: -25,
        textAlign: 'justify',
        fontSize: 20,
        color: '#00009C',
      },
    
      textoFormula: {
        margin: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
      },
    
      imageConsumo: {
        height: 240,
        marginBottom: 30,
      },
    
      tituloFinal:{
        fontWeight: 'bold',
        color: '#00009C',
        fontSize: 20,
        marginLeft: 15, 
        fontStyle: 'italic',
      },
    
      textoFinal:{
        margin: 15,
        marginTop: 10,
        textAlign: 'justify',
        fontSize: 20,
        color: '#00009C',
      },

    rodape: {
        backgroundColor: '#fff',
        height: 50,
    },

});
