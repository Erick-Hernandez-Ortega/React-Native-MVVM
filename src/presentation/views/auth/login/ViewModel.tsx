import { useState } from 'react';

const LoginViewModel = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (value: string, field: string): void => {
        setValues({
            ...values,
            [field]: value,
        });
    };

    const handleLogin = (): void => {
        console.log(values);
    };

    return {
        ...values,
        onChange,
        handleLogin,
    };
};

export default LoginViewModel;
