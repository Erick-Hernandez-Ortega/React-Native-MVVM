/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Svg viewBox="0 0 1440 320" height={500} width={Dimensions.get('window').width} style={styles.svg}>
          <Path
            fill="#09f"
            fillOpacity="1"
            d="M0 256l48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 26.6 96 26.7 192 58.7 288 85.4 96 26.3 192 48.3 288 21.3 96-27 192-101 240-138.7l48-37.3V0H0z"
          />
        </Svg>
        <Text style={styles.title}>INGRESA</Text>
        <Text style={styles.title}>A LA APP</Text>
        <Image source={require('./assets/img/controller.png')} style={styles.img} />
      </View>

      <View style={{ flex: 1 }} />

      <TextInput
        placeholder="Correo electrónico"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Ingresa</Text>
      </TouchableOpacity>
      <Text style={styles.textRegister}>Resgistrate ahora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    // fontWeight: 'bold',
    marginLeft: 30,
    color: 'white',
  },
  img: {
    width: 180,
    height: 180,
    transform: [{ rotate: '35deg' }],
    alignSelf: 'flex-end',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 17,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: 'blue',
    marginHorizontal: 30,
    marginVertical: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  textButton: {
    color: 'white',
    fontSize: 19,
  },
  textRegister: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  svgContainer: {
    backgroundColor: '#09f',
    height: '45%',
    paddingTop: 50,
  },
  svg: {
    position: 'absolute',
    top: 90,
  },
});

export default App;
