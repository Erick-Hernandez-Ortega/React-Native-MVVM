import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../views/home/Home';

export type RootStackParamList = {
    HomeScreen: undefined;
    RegisterScreen: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
        </Stack.Navigator>
    );
};
