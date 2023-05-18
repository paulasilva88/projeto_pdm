import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animacao from '../Components/Pages/Animacao';
import Login from '../Components/Pages/Login';
import Menu from '../Components/Pages/Menu';
import Boleto from '../Components/Pages/Boleto';
import Consumo from '../Components/Pages/Consumo';
import QuemSomos from '../Components/Pages/QuemSomos';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Animacao'
                component={Animacao}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Menu'
                component={Menu}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Boleto'
                component={Boleto}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Consumo'
                component={Consumo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='QuemSomos'
                component={QuemSomos}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

