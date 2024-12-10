import {useEffect, useState} from 'react';
import { LoginUseCaseInterface } from '../../../../domain/useCases/auth/LoginUseCase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

const LoginViewModel = ({ LoginUseCase }: { LoginUseCase: LoginUseCaseInterface }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [_result, setResult] = useState<FirebaseAuthTypes.UserCredential>();

  useEffect(() => {
    if (errorMessage !== '' && errorMessage !== null){
        Toast.show(errorMessage, Toast.LONG);
        setErrorMessage('');
    }
  }, [errorMessage]);

  useEffect(() => {
    if (_result !== undefined && _result !== null) {
      Toast.show('Login exitoso', Toast.LONG);
    }
  }, [_result]);

  const onChange = (value: string, field: string): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleLogin = async(): Promise<void> => {
    if (isValidForm()){
        console.log(values);
        const { result, error } = await LoginUseCase.run(values.email.trim(), values.password.trim());
        setResult(result);
        setErrorMessage(error);
        console.log(result, 'data');
    }
  };

  const isValidForm = (): boolean => {
    const reg: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (values.email.trim() === '') {
      setErrorMessage('El email no puede estar vacio');
      return false;
    }
    if (values.password.trim() === '') {
      setErrorMessage('la contraseña no puede estar vacia');
      return false;
    }
    if (values.password.trim().length < 6) {
      setErrorMessage('la contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (reg.test(values.email.trim()) === false) {
      setErrorMessage('El email no es valido');
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
