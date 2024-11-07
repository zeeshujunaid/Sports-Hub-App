import { initializeApp } from "firebase/app";
import {
    getAuth,
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyAdZHDX_HI0iPDDdMt1ZW8M46oI1Xk4Kb8",
    authDomain: "mobile-chat-app-d3723.firebaseapp.com",
    projectId: "mobile-chat-app-d3723",
    storageBucket: "mobile-chat-app-d3723.appspot.com",
    messagingSenderId: "393309941903",
    appId: "1:393309941903:web:fd5d4f51fd8ff97f2380fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firebase Auth
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  // If initializeAuth fails, fall back to getAuth
  console.warn(
    "Failed to initialize custom auth, falling back to default:",
    error
  );
  auth = getAuth(app);
}

// Initialize Firestore
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { auth, db, storage };