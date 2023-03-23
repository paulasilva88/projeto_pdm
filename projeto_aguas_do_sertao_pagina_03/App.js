import React from 'react';
import { Alert, Buttom } from 'react-native';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function App() {
  return (
    <View>
      <View style={styles.img}>
        <Image style={styles.image} resizeMode='center' source={require('./assets/fundo-titulo.jpeg')} />
      </View>


      <View style={styles.tituloImagem}>
        <Text style={styles.titulo1}>Quem somos</Text>
      </View>


      <View style={styles.corpo}>
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


      <View style={styles.rodape}>
        <Text style={styles.textoRodape}> "Cuidar da água é cuidar da vida." </Text>
      </View>


    </View> //fim da view geral
  );
}


const styles = StyleSheet.create({
  //FORMATAÇÃO DO RODAPÉ
  rodape: {
    //formatação da box
    backgroundColor: '#00009C',
    padding: 10,
    height: 50,
    marginTop: 15,
  },
  textoRodape: {
    //formatação do texto
    marginTop: 3,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },


  //FORMATAÇÃO DO TOPO
  //formatação da view onde ta a imagem de água
  img: {
    alignItems: 'center',
    marginTop: 30,
  },


  //formatação da imagem (tamanho da imagem)
  image: {
    width: 415,
    height: 100,
  },


  //titulo da imagem (Quem Somos)
  titulo1: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: -75,
    fontSize: 40,
    fontWeight: 'bold',
  },


  //FORMATAÇÃO DO CORPO
  titulo2: { // Titulo (Conheça a águas do sertão)
    marginTop: 50,
    textAlign: 'center',
    color: '#0A1B69',
    fontSize: 30,
    fontWeight: 'bold',
  },


  titulo3: { // titulo (sobre a conasa)
    marginLeft: 15,
    color: '#0A1B69',
    fontSize: 15,
    fontWeight: 'bold',
  },


  texto1: {
    textAlign: 'justify',
    margin: 15,
  },


},
);
