import { AuthRepository } from '../../../data/repository/AuthRepository';

export const GetUserUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        async run() {
            const { result, error } = await authRepository.getUser();
            return { result, error };
        },
    };
};
