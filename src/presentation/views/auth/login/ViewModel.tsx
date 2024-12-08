import {useEffect, useState} from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native';
import { LoginUseCaseInterface } from '../../../../domain/useCases/auth/LoginUseCase';

const LoginViewModel = ({ LoginUseCase }: { LoginUseCase: LoginUseCaseInterface }) => {
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

  const handleLogin = async(): Promise<void> => {
    if (isValidForm()){
        console.log(values);
        const data = await LoginUseCase.execute(values.email.trim(), values.password.trim());
        console.log(data, 'data');
    }
  };

  const isValidForm = (): boolean => {
    const reg: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (values.email.trim() === '') {
      setError('El email no puede estar vacio');
      return false;
    }
    if (values.password.trim() === '') {
      setError('la contraseña no puede estar vacia');
      return false;
    }
    if (values.password.trim().length < 6) {
      setError('la contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (reg.test(values.email.trim()) === false) {
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
