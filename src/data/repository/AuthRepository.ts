import { Resource } from '../../domain/utils/Resource';
import { AuthDataSource } from '../datasource/remote/AuthDatasource';

export interface AuthRepository {
    login: (email: string, password: string) => Promise<Resource>;
}

export const AuthRepository = ({ authDataSource }: { authDataSource: AuthDataSource }) => {
    return {
        async login (email: string, password: string) {
            return authDataSource.login(email, password);
        },
    };
};
