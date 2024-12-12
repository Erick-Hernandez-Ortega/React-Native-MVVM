import { AuthRepository } from '../../../data/repository/AuthRepository';

export const GetUserUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        run() {
            const { result, error } = authRepository.getUser();
            return { result, error };
        },
    };
};
