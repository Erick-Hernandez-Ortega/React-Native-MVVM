import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import React from 'react';
import ProfileInfoStyles from './Styles';
import DI from '../../../../di/ioc';
import { RootStackParamList } from '../../../navigation/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const ProfileInfo = ({navigation}: Props) => {
    const { } = DI.resolve('');
    return (
        <View style={ProfileInfoStyles.container}>
            <Text>ProfileInfo</Text>
        </View>
    );
};
