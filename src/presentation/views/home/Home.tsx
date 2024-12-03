import {DefaultButton} from '../../components/DefaultButton';
import {DefaultTextInput} from '../../components/DefaultTextInput';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {MyColors} from '../../theme/AppTheme';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Svg
          viewBox="0 0 1440 320"
          height={500}
          width={Dimensions.get('window').width}
          style={styles.svg}>
          <Path
            fill={MyColors.primary}
            fillOpacity="1"
            d="M0 256l48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 26.6 96 26.7 192 58.7 288 85.4 96 26.3 192 48.3 288 21.3 96-27 192-101 240-138.7l48-37.3V0H0z"
          />
        </Svg>
        <Text style={styles.title}>INGRESA</Text>
        <Text style={styles.title}>A LA APP</Text>
        <Image
          source={require('./../../../../assets/img/game_con_black.png')}
          style={styles.img}
        />
      </View>

      <View style={styles.divider} />

      <DefaultTextInput
        placeholder="Correo Electronico"
        image={require('./../../../../assets/img/email.png')}
      />
      <DefaultTextInput
        placeholder="Contraseña"
        image={require('./../../../../assets/img/password.png')}
      />

      <DefaultButton text="Ingresar" onPress={() => {}} />
      <Text style={styles.textRegister}>Resgistrate ahora</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  title: {
    fontSize: 28,
    marginLeft: 30,
    color: MyColors.background,
  },
  img: {
    width: 180,
    height: 180,
    transform: [{rotate: '35deg'}],
    alignSelf: 'flex-end',
  },
  textRegister: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: MyColors.secondary,
  },
  svgContainer: {
    backgroundColor: MyColors.primary,
    height: '45%',
    paddingTop: 50,
  },
  svg: {
    position: 'absolute',
    top: 90,
  },
  divider: {
    flex: 1,
  },
});
