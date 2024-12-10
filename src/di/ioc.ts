import { asFunction, asValue, createContainer } from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthDataSource';
import { AuthRepository } from '../data/repository/AuthRepository';
import { LoginUseCase } from '../domain/useCases/auth/LoginUseCase';
import { RegisterUseCase } from '../domain/useCases/auth/RegisterUseCase';

const container = createContainer();

container.register({
    LoginViewModel: asFunction(LoginViewModel),
    RegisterViewModel: asFunction(RegisterViewModel),

    authDataSource: asValue(AuthDataSource),

    authRepository: asFunction(AuthRepository),

    LoginUseCase: asFunction(LoginUseCase),
    RegisterUseCase: asFunction(RegisterUseCase),
});

export default container;
