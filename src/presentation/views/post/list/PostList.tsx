import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import React from 'react';
import PostListStyles from './Styles';
import DI from '../../../../di/ioc';
import { RootStackParamList } from '../../../navigation/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const PostListScreen = ({navigation}: Props) => {
    const { } = DI.resolve('');
    return (
        <View style={PostListStyles.container}>
            <Text>PostList</Text>
        </View>
    );
};