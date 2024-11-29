import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
    text: string;
    onPress: () => void;
}

export const DefaultButton: FC<Props> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
      <Image
        style={styles.buttonIcon}
        source={require('../../../assets/img/right-arrow.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: MyColors.primary,
    marginHorizontal: 30,
    marginVertical: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  },
  textButton: {
    color: 'black',
    fontSize: 19,
  },
  buttonIcon: {
    height: 30,
    width: 30,
  },
});
