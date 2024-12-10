// Servicio - Informacion
import auth from '@react-native-firebase/auth';

export interface AuthDataSource {
    login: (email: string, password: string) => Promise<any>;
}

export const login = async(email: string, password: string): Promise<any> => {
    try {
        console.log(email, password, 'login');
        const data = await auth().signInWithEmailAndPassword(email, password);
        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        console.error(error);
        return Promise.resolve({ error: error.message, result: null });
    }
};
