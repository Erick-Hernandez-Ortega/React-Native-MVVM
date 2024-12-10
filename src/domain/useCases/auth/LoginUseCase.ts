import { AuthRepository } from '../../../data/repository/AuthRepository';

export interface LoginUseCaseInterface {
    run(email: string, password: string): Promise<any>;
}

export const LoginUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        async run(email: string, password: string) {
            const { result, error } = await authRepository.login(email, password);
            return { result, error };
        },
    };
};
