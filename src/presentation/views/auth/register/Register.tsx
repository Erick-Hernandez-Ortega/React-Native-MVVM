import { RootStackParamList } from '../../../navigation/MainStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView, Text } from 'react-native';
import React from 'react';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation, route}: Props) => {
    return (
        <SafeAreaView>
            <Text>RegisterScreen</Text>
        </SafeAreaView>
    );
};
