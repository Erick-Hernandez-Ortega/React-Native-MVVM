import {DefaultButton} from '../../../components/DefaultButton';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyColors} from '../../../theme/AppTheme';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import LoginStyles from './Style';
import React, { useEffect } from 'react';
import Svg, {Path} from 'react-native-svg';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const { email, password, onChange, handleLogin, isLoading, _result } = DI.resolve('LoginViewModel');

  useEffect(() => {
    if (_result !== undefined && _result !== null) {
      Toast.show('Login exitoso', Toast.LONG);
      navigation.replace('HomeScreen');
    }
  }, [_result, navigation]);

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.svgContainer}>
        <Svg
          viewBox="0 0 1440 320"
          height={500}
          width={Dimensions.get('window').width}
          style={LoginStyles.svg}>
          <Path
            fill={MyColors.primary}
            fillOpacity="1"
            d="M0 256l48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 26.6 96 26.7 192 58.7 288 85.4 96 26.3 192 48.3 288 21.3 96-27 192-101 240-138.7l48-37.3V0H0z"
          />
        </Svg>
        <Text style={LoginStyles.title}>INGRESA</Text>
        <Text style={LoginStyles.title}>A LA APP</Text>
        <Image
          source={require('./../../../../../assets/img/game_con_black.png')}
          style={LoginStyles.img}
        />
      </View>

      <View style={LoginStyles.divider} />

      <DefaultTextInput
        placeholder="Correo Electronico"
        value={email}
        onChangeText={onChange}
        prop="email"
        keyboardType="email-address"
        image={require('./../../../../../assets/img/email.png')}
      />
      <DefaultTextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={onChange}
        prop="password"
        secureTextEntry
        image={require('./../../../../../assets/img/password.png')}
      />

      <DefaultButton text="Ingresar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={LoginStyles.textRegister}>Resgistrate ahora</Text>
      </TouchableOpacity>
      {
        isLoading && (
          <ActivityIndicator size="large" color={MyColors.primary} style={LoginStyles.activityIndicator} />
        )
      }
    </View>
  );
};
