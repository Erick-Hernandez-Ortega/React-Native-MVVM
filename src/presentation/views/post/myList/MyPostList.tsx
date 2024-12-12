import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import React from 'react';
import MyPostListStyles from './Styles';
import DI from '../../../../di/ioc';
import { RootStackParamList } from '../../../navigation/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const MyPostListScreen = ({navigation}: Props) => {
    const { } = DI.resolve('');
    return (
        <View style={MyPostListStyles.container}>
            <Text>MyPostListScreen</Text>
        </View>
    );
};
