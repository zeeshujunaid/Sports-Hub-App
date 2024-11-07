import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, setDoc } from "firebase/firestore"; 
export default function Signup({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSignup = () => {
        if (email != "" && password != "") {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then(async(userCredential) => {
                    const user = userCredential.user;
                    console.log("🚀 ~ .then ~ user:", user)
                    setLoading(false);
                    alert("User Created Successfully");
                    await AsyncStorage.setItem("info", JSON.stringify(user.uid))
                    await setDoc(doc(collection(db, "users"), user.uid), {
                        email: email,
                        uid: user.uid,
                    });
                    router.push('/(drawer)/(tabs)/');
                    setEmail("")
                    setPassword("")
                })
                .catch((error) => {
                    console.log("🚀 ~ handleSignup ~ error:", error)
                    setLoading(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
    };


    return (
        <ImageBackground
            source={{ uri: 'https://media1.giphy.com/media/B0WxCspNlzKIChtzGT/source.gif' }} // Optional background image related to blood donation
            style={styles.background}
            resizeMode="contain"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome To Blood Bank</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#B22222"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#B22222"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="#B22222"
                    value={city}
                    onChangeText={setCity}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#B22222"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    {loading ? <ActivityIndicator size={50} /> : <Text style={styles.signupText}>Sign Up</Text>}

                    <Image source={{ uri: 'https://example.com/blood-drop-icon.png' }} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/sign-in')}>
                    <Text style={styles.loginText}>Already have an account? Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    container: {
        width: '100%',
        padding: 20,
        gap: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#B22222',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    title: {
        width: "100%",
        fontSize: 28,
        fontWeight: 'bold',
        color: '#B22222',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginVertical: 10,
        borderColor: '#B22222',
        borderWidth: 1,
    },
    signupButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#B22222',
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 20,
    },
    signupText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    loginText: {
        paddingTop: 20,
        color: '#B22222',
        fontSize: 16,
    },
});
