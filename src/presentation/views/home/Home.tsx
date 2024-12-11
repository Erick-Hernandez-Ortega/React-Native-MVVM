import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/MainStackNavigator';
import { Text, View } from 'react-native';
import React from 'react';
import HomeStyles from './Styles';
import { DefaultButton } from '../../components/DefaultButton';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation, route}: Props) => {
    return (
        <View style={HomeStyles.container}>
            <DefaultButton text="Cerrar Sesion" onPress={() => {}}/>
            <Text>Home</Text>
        </View>
    );
};
