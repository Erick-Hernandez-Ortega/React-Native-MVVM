import {DefaultButton} from '../../components/DefaultButton';
import {DefaultTextInput} from '../../components/DefaultTextInput';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyColors} from '../../theme/AppTheme';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import HomeStyles from './Style';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.svgContainer}>
        <Svg
          viewBox="0 0 1440 320"
          height={500}
          width={Dimensions.get('window').width}
          style={HomeStyles.svg}>
          <Path
            fill={MyColors.primary}
            fillOpacity="1"
            d="M0 256l48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 26.6 96 26.7 192 58.7 288 85.4 96 26.3 192 48.3 288 21.3 96-27 192-101 240-138.7l48-37.3V0H0z"
          />
        </Svg>
        <Text style={HomeStyles.title}>INGRESA</Text>
        <Text style={HomeStyles.title}>A LA APP</Text>
        <Image
          source={require('./../../../../assets/img/game_con_black.png')}
          style={HomeStyles.img}
        />
      </View>

      <View style={HomeStyles.divider} />

      <DefaultTextInput
        placeholder="Correo Electronico"
        image={require('./../../../../assets/img/email.png')}
      />
      <DefaultTextInput
        placeholder="Contraseña"
        image={require('./../../../../assets/img/password.png')}
      />

      <DefaultButton text="Ingresar" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={HomeStyles.textRegister}>Resgistrate ahora</Text>
      </TouchableOpacity>
    </View>
  );
};
