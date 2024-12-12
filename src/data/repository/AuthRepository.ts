import { User } from '../../domain/models/User';
import { AuthDataSource } from '../datasource/remote/AuthDatasource';

export interface AuthRepository {
    login: (email: string, password: string) => Promise<any>;
    register: (user: User) => Promise<any>;
    logout: () => Promise<any>;
    getUser: () => any;
}

export const AuthRepository = ({ authDataSource }: { authDataSource: AuthDataSource }) => {
    return {
        async login (email: string, password: string) {
            const { result, error } = await authDataSource.login(email, password);
            return { result, error };
        },
        async register (user: User) {
            const { result, error } = await authDataSource.register(user);
            return { result, error };
        },
        async logout () {
            const { result, error } = await authDataSource.logout();
            return { result, error };
        },
        getUser () {
            const { result, error } = authDataSource.getUser();
            return { result, error };
        },
    };
};
