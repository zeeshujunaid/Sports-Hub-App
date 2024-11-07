import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  const fadeAnim = new Animated.Value(0);  // Initial opacity is 0

  useEffect(() => {
    // Fade-in effect when the screen loads
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // 2 seconds for fade-in effect
      useNativeDriver: true,
    }).start();

    // setTimeout(() => {
    //   router.push('/(drawer)/(tabs)/');
    // }, 3000); // Delay the transition for 3 seconds to let the animation complete
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/sports-background.gif' }} // Replace with your actual GIF URL
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Animated Logo */}
        <Animated.Image
          style={[styles.logo, { opacity: fadeAnim }]}
          source={{ uri: 'https://example.com/sports-logo.png' }} // Replace with your actual logo
        />

        {/* Main title */}
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
          Welcome to Sports Hub
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
          Buy, Sell & Trade Sports Gear
        </Animated.Text>

        {/* Action Button */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(drawer)/(tabs)/')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  overlay: {
    // This is an overlay to darken the background image
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark overlay
    padding: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', // White text for subtitle
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E76F51', // Vibrant button color
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
