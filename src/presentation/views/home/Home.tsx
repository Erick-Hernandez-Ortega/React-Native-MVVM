import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainStackNavigator';
import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import HomeStyles from './Styles';
import DI from '../../../di/ioc';
import { DefaultButton } from '../../components/DefaultButton';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
    const { _result, logout } = DI.resolve('HomeViewModel');

    useEffect(() => {
      if (_result) {
        navigation.replace('LoginScreen');
      }
    }, [_result, navigation]);

    return (
        <View style={HomeStyles.container}>
            <DefaultButton text="Cerrar Sesion" onPress={logout}/>
            <Text>Home</Text>
        </View>
    );
};
