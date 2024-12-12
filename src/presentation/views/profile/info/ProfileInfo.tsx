import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import React from 'react';
import ProfileInfoStyles from './Styles';
import DI from '../../../../di/ioc';
import { TabParamList } from '../../../navigation/Tabsnavigator';

interface Props extends StackScreenProps<TabParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({navigation}: Props) => {
    const { } = DI.resolve('');
    return (
        <View style={ProfileInfoStyles.container}>
            <Text>ProfileInfo</Text>
        </View>
    );
};
