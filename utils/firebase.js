import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdZHDX_HI0iPDDdMt1ZW8M46oI1Xk4Kb8",
    authDomain: "mobile-chat-app-d3723.firebaseapp.com",
    projectId: "mobile-chat-app-d3723",
    storageBucket: "mobile-chat-app-d3723.appspot.com",
    messagingSenderId: "393309941903",
    appId: "1:393309941903:web:fd5d4f51fd8ff97f2380fa"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export { auth };
