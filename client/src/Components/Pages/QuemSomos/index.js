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
                <Text style={styles.titulo1}>Quem Somos</Text>
            </View>

            {/* MENSAGEM DO TOPO */}
            <View>
                <Text style={styles.titulo2}>Conheça a Águas do Sertão</Text>
                <Text style={styles.texto1}>
                    Ressignificar o Agreste e o Sertão alagoano por meio do acesso universal ao saneamento básico: esse é o grande propósito da
                    Águas do Sertão ao assumir a operação, nos próximos 35 anos, dos serviços de saneamento do Bloco B em Alagoas, representando
                    33,3% dos municípios beneficiados pela concessão em todo o Estado. {'\n'}{'\n'}

                    Controlada pela Conasa Infraestrutura*, a Águas do Sertão nasceu com o compromisso de levar a água produzida pela Casal, além
                    de esgotamento sanitário, a 34 municípios das regiões Sertão e Agreste de Alagoas. {'\n'}{'\n'}

                    Com 1,89 bilhões previstos para obras ao longo desses anos, nosso compromisso é conectar 100% dos domicílios à rede de água até
                    2027 e 90% à rede coletora de esgoto até 2033. {'\n'}{'\n'}

                    Apesar da programação de longo prazo prevista em contrato, muitos benefícios poderão ser percebidos logo nos primeiros dias de
                    operação. Com um time de aproximadamente 400 colaboradores contratados, de imediato, a Águas do Sertão chega proporcionando uma
                    melhor experiência ao cliente, com uma estrutura completa de atendimento presencial em todos os municípios, diversos canais,
                    pontos de autoatendimento e novas opções de pagamento para trazer mais conforto e segurança à população. {'\n'}{'\n'}

                    Para isso, em setembro de 2022, iniciamos um desafiador cronograma de planejamento e obras para ampliação de redes de abastecimento,
                    melhorias operacionais, manutenção de Estações de Tratamento de Água (ETAs), automação de sistemas, gestão de perdas e construção das
                    redes de esgotamento sanitário – infraestrutura, que, mais do que desenvolvimento econômico e sustentável para Alagoas, representa
                    uma nova era de qualidade de vida e saúde para mais de 560 mil alagoanos da região. {'\n'}{'\n'}
                </Text>

                <Text style={styles.titulo3}>*Sobre a Conasa</Text>
                <Text style={styles.texto1}>
                    Criada em 2007, a Conasa constituiu-se como holding administradora de Sociedades de Propósito Especíﬁco (SPE). Inicialmente voltada
                    para atividades de saneamento básico e tratamento de eﬂuentes, a companhia hoje está presente igualmente nos segmentos de energia e
                    rodovias, setores de signiﬁcativa relevância para o desenvolvimento do país e ainda carentes de investimentos. Por intermédio de suas
                    controladas, possui Sistema Integrado de Gestão baseado na NBR ISO e suas Certificações NBR ISO 9001, 14001 e 17025:2005.
                </Text>

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
        height: '3%',
        backgroundColor: '#0A0D47',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -2, //ta certo isso produção?
    },

    imgLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF"
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
        color: '#fff',
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
    titulo2: { // Titulo (Conheça a águas do sertão)
        marginTop: 50,
        textAlign: 'center',
        color: '#00009C',
        fontSize: 30,
        fontWeight: 'bold',
    },

    titulo3: { // titulo (sobre a conasa)
        marginTop: -45,
        marginLeft: 15,
        color: '#00009C',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    texto1: {
        textAlign: 'justify',
        margin: 15,
        fontSize: 20,
        color: '#00009C',
        //fontWeight: 'bold',
    },

    rodape: {
        //backgroundColor: '#F4F4F4',
        height: 50,
    },

});
