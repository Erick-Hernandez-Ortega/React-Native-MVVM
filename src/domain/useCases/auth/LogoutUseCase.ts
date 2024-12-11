import { AuthRepository } from '../../../data/repository/AuthRepository';

export const LogoutUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        async run() {
            const { result, error } = await authRepository.logout();
            return { result, error };
        },
    };
};
