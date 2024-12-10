import { AuthRepository } from '../../../data/repository/AuthRepository';
import { User } from '../../models/User';

export const RegisterUseCase = ({ authRepository }: { authRepository: AuthRepository }) => {
    return {
        async run(user: User) {
            const { result, error } = await authRepository.register(user);
            return { result, error };
        },
    };
};
