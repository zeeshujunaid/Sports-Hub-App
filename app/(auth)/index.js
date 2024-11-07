import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = () => {

  useEffect(()=>{
    setTimeout(() => {
      router.push('/(drawer)/(tabs)/')
    }, 1000);
  }, [])

  return (
    <View style={styles.container} >
      <Image 
        style={styles.logo}
        source={{ uri: 'https://media.istockphoto.com/id/1081786788/vector/drop.jpg?s=612x612&w=0&k=20&c=4Xqh6-K94vU9uAnYBNTu8JWb2CoWi37JB4gKfvdSIb0=' }}
      />
      <Text style={styles.title}>Welcome to LifeSavers</Text>
      <Text style={styles.subtitle}>Donate Blood, Save Lives</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/(drawer)/(tabs)/')} // Replace with your actual navigation target
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d32f2f', // Blood red color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#757575', // Subdued color for secondary text
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#d32f2f', // Blood red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
