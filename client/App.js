import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={'#0A0D47'}
                barStyle="light-content">
            </StatusBar>
            <Routes />
        </NavigationContainer>
    );
}

