import React, {FC} from 'react';
import {MyColors} from '../theme/AppTheme';
import {
  Image,
  ImageSourcePropType,
  KeyboardType,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface Props {
  placeholder: string;
  image: ImageSourcePropType;
  prop: string;
  value: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  onChangeText: (value: string, field: string) => void;
}

export const DefaultTextInput: FC<Props> = ({placeholder, image, value, onChangeText, prop, keyboardType = 'default', secureTextEntry = false}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text: string) => onChangeText(text, prop)}
        placeholderTextColor={MyColors.placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: MyColors.placeholder,
    color: MyColors.secondary,
    borderBottomWidth: 1,
    fontSize: 17,
    marginVertical: 25,
    marginHorizontal: 20,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 25,
    width: 25,
    marginTop: 20,
    marginLeft: 20,
  },
});
