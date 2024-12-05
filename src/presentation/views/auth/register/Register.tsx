import {DefaultButton} from '../../../components/DefaultButton';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {MyColors} from '../../../theme/AppTheme';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import RegisterStyles from './Styles';
import Svg, {Path} from 'react-native-svg';
import DI from '../../../../di/ioc';

interface Props
  extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
    const { email, password, confirmPassword, username, onChange, handleRegister } = DI.resolve('RegisterViewModel');

  return (
    <View style={RegisterStyles.container}>
      <View style={RegisterStyles.svgContainer}>
        <Svg
          viewBox="0 0 1440 320"
          height={500}
          width={Dimensions.get('window').width}
          style={RegisterStyles.svg}>
          <Path
            fill={MyColors.primary}
            fillOpacity="1"
            d="M0 256l48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 26.6 96 26.7 192 58.7 288 85.4 96 26.3 192 48.3 288 21.3 96-27 192-101 240-138.7l48-37.3V0H0z"
          />
        </Svg>
        <Text style={RegisterStyles.title}>REGISTRATE</Text>
        <Text style={RegisterStyles.title}>A LA APP</Text>
        <Image
          source={require('./../../../../../assets/img/game_con_black.png')}
          style={RegisterStyles.img}
        />
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={RegisterStyles.arrowBackContainer}>
          <Image
            source={require('./../../../../../assets/img/left-arrow.png')}
            style={RegisterStyles.arrowBack}
          />
        </TouchableOpacity>
      </View>

      <View style={RegisterStyles.divider} />

      <DefaultTextInput
        placeholder="Nombre de usuario"
        value={username}
        prop="username"
        onChangeText={onChange}
        image={require('./../../../../../assets/img/user_image.png')}
      />
      <DefaultTextInput
        placeholder="Email"
        value={email}
        prop="email"
        onChangeText={onChange}
        image={require('./../../../../../assets/img/email.png')}
      />
      <DefaultTextInput
        placeholder="Contraseña"
        value={password}
        prop="password"
        onChangeText={onChange}
        image={require('./../../../../../assets/img/password.png')}
      />
      <DefaultTextInput
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        prop="confirmPassword"
        onChangeText={onChange}
        image={require('./../../../../../assets/img/password.png')}
      />
      <DefaultButton text="Registrarme" onPress={handleRegister} />
    </View>
  );
};
