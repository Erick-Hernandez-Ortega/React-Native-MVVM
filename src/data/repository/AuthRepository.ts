import { AuthDataSource } from '../datasource/remote/AuthDatasource';

export interface AuthRepository {
    login: (email: string, password: string) => Promise<any>;
}

export const AuthRepository = ({ authDataSource }: { authDataSource: AuthDataSource }) => {
    return {
        async login (email: string, password: string) {
            const { result, error } = await authDataSource.login(email, password);
            return { result, error };
        },
    };
};
