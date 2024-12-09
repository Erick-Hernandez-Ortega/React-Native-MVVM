// Servicio - Informacion
import auth from '@react-native-firebase/auth';
import { User } from '../../../domain/models/User';

export interface AuthDataSource {
    login: (email: string, password: string) => Promise<any>;
    register: (user: User) => Promise<any>;
}

export const login = async(email: string, password: string): Promise<any> => {
    try {
        const data = await auth().signInWithEmailAndPassword(email, password);
        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        console.error(error);
        return Promise.resolve({ error: error.message, result: null });
    }
};

export const register = async(user: User): Promise<any> => {
    try {
        const data = await auth().createUserWithEmailAndPassword(user.email, user.password);
        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        console.error(error);
        return Promise.resolve({ error: error.message, result: null });
    }
};
