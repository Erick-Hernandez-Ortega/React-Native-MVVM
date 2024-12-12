// Servicio - Informacion
import auth from '@react-native-firebase/auth';
import { User } from '../../../domain/models/User';
import firestore from '@react-native-firebase/firestore';

export interface AuthDataSource {
    login: (email: string, password: string) => Promise<any>;
    register: (user: User) => Promise<any>;
    logout: () => Promise<any>;
    getUser: () => any;
}

export const getUser = () => {
    try {
        const data = auth().currentUser;
        return { error: null, result: data };
    } catch (error: any) {
        console.error(error);
        return { error: error.message, result: null };
    }
};

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
        const uid: string | undefined = getUser().result?.uid;
        await firestore().collection('users').doc(uid).set({
            username: user.username,
            email: user.email,
        });
        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        console.error(error);
        return Promise.resolve({ error: error.message, result: null });
    }
};

export const logout = async(): Promise<any> => {
    try {
        await auth().signOut();
        return Promise.resolve({ error: null, result: true });
    } catch (error: any) {
        console.error(error);
        return Promise.resolve({ error: error.message, result: null });
    }
};
