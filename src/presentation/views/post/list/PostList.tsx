import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import React from 'react';
import PostListStyles from './Styles';
// import DI from '../../../../di/ioc';
import { TabParamList } from '../../../navigation/Tabsnavigator';

interface Props extends StackScreenProps<TabParamList, 'PostListScreen'> {}

export const PostListScreen = ({navigation}: Props) => {
    return (
        <View style={PostListStyles.container}>
            <Text>PostList</Text>
        </View>
    );
};
