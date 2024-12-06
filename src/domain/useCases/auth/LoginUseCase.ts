import { AuthRepository } from '../../../data/repository/AuthRepository';
import { Resource } from '../../utils/Resource';

export interface LoginUseCaseInterface {
    execute(email: string, password: string): Promise<Resource>;
}

export const LoginUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        async execute(email: string, password: string) {
            return await authRepository.login(email, password);
        },
    };
};
