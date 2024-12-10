import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast';

const RegisterViewModel = ({ RegisterUseCase }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [_result, setResult] = useState<FirebaseAuthTypes.UserCredential>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (value: string, field: string): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleRegister = async(): Promise<void> => {
    if (isValidForm()){
      setIsLoading(true);
      const { result, error } = await RegisterUseCase.run(values);
      setResult(result);
      setErrorMessage(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage !== '' && errorMessage !== null) {
        Toast.show(errorMessage, Toast.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (_result !== undefined && _result !== null) {
      Toast.show('Registro exitoso', Toast.LONG);
    }
  }, [_result]);

  const isValidForm = (): boolean => {
    const reg: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (values.username === '') {
      setErrorMessage('El nombre de usuario no puede estar vacio');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('El email no puede estar vacio');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('la contraseña no puede estar vacia');
      return false;
    }
    if (values.password.length < 6) {
      setErrorMessage('la contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (reg.test(values.email) === false) {
      setErrorMessage('El email no es valido');
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    isLoading,
    handleRegister,
  };
};

export default RegisterViewModel;
