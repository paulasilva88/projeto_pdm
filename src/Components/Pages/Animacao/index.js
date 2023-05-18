import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';

export default function App() {

   {/* NAVEGAÇÃO ENTRE TELAS */ }
   const navigation = useNavigation();

  return (
   
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image delay={600}
        animation="flipInY"
        source={require('../../Image/logo-inicio.png')}
        style={{ width: '60%' }}
        resizeMode="contain"
        />
      </View>

      <Animatable.View delay={900} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate ('Login')} >
          <Text style={styles.buttonText}>Acessar</Text>
          <Icon style={styles.icon} name="arrow-forward-circle-outline" color="#fff" size={30} />
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#0A0D47',
},

containerLogo:{
  flex: 2,
   backgroundColor: '#0A0D47',
   justifyContent: 'center',
   alignItems: 'center',
},

containerForm:{
  flex: 1,
  backgroundColor: "#fff",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingStart: '5%',
  paddingEnd: '5%',
},

title: {
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 28,
  marginBottom: 12,
},

text:{
  color: '#a1a1a1',
  fontSize: 19,
  fontStyle:'italic',
},

button: {
  flexDirection: 'row',
  position: 'absolute',
  backgroundColor: '#0A0D47',
  borderRadius: 50,
  paddingVertical: 8,
  width: '60%',
  alignSelf: 'center',
  bottom: '20%',
  alignItems: 'center',
  justifyContent: 'center',
},

buttonText: {
  fontSize: 25,
  color: '#fff',
  fontWeight: 'bold',
  paddingLeft: 35,
},

icon: {
  height: 50,
  paddingTop: 11,
  paddingLeft: 30,
  alignItems: 'center',
  justifyContent: 'center',
},
 
},
);
