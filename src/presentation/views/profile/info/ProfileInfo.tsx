import { StackScreenProps } from '@react-navigation/stack';
import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import ProfileInfoStyles from './Styles';
import { TabParamList } from '../../../navigation/Tabsnavigator';

interface Props extends StackScreenProps<TabParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({navigation}: Props) => {
    return (
        <View style={ProfileInfoStyles.container}>
            <ImageBackground source={require('../../../../../assets/img/fifa.jpg')} style={ProfileInfoStyles.backgroundImage}>
                <View style={ProfileInfoStyles.darkness} />
            </ImageBackground>
            <Text style={ProfileInfoStyles.title}>Perfil de usuario</Text>
            <Image source={require('../../../../../assets/img/user_image.png')} style={ProfileInfoStyles.profileImage} />
        </View>
    );
};
