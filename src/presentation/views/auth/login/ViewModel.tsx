import {useEffect, useState} from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native';

const LoginViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (error !== ''){
        if (Platform.OS === 'android'){
            return ToastAndroid.show(error, ToastAndroid.LONG);
        }
        Alert.alert('Error', error);
    }
  }, [error]);

  const onChange = (value: string, field: string): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleLogin = (): void => {
    if (isValidForm()){
        console.log(values);
    }
  };

  const isValidForm = (): boolean => {
    const reg: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (values.email === '') {
      setError('El email no puede estar vacio');
      return false;
    }
    if (values.password === '') {
      setError('la contraseña no puede estar vacia');
      return false;
    }
    if (values.password.length < 6) {
      setError('la contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (reg.test(values.email) === false) {
      setError('El email no es valido');
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    handleLogin,
  };
};

export default LoginViewModel;
