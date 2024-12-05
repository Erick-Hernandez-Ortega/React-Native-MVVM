import {useEffect, useState} from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native';

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  const [error, setError] = useState<string>('');

  const onChange = (value: string, field: string): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleRegister = (): void => {
    if (isValidForm()){
        console.log(values);
    }
  };

  useEffect(() => {
    if (error !== ''){
        if (Platform.OS === 'android'){
            return ToastAndroid.show(error, ToastAndroid.LONG);
        }
        Alert.alert('Error', error);
    }
  }, [error]);

  const isValidForm = (): boolean => {
    const reg: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (values.username === '') {
      setError('El nombre de usuario no puede estar vacio');
      return false;
    }
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
    if (values.password !== values.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  return {
    ...values,
    error,
    onChange,
    handleRegister,
  };
};

export default RegisterViewModel;
