import { router } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { db } from '~/utils/firebase';

export default function BloodDonateScreen() {
  // State variables to store input data
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [age, setAge] = useState('');
  const [lastDonation, setLastDonation] = useState('');

  // Handle form submission
  const handleDonateNow = () => {
    if (name && bloodGroup && age && lastDonation) {
      addDoc(collection(db, 'donors'), {
        name,
        bloodGroup,
        age,
        lastDonation,
        timestamp: new Date(),
      })
      router.push('/(tabs)')
      Alert.alert('Thank You!', `Thank you, ${name}, for your interest in donating blood!`);
      // Here, you could add logic to save or send the data to a backend or Firebase.
    } else {
      Alert.alert('Incomplete Information', 'Please fill out all fields before submitting.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Donate Blood</Text>
        <Text style={styles.subHeaderText}>Save a Life Today</Text>
      </View>

      {/* Donation Info Section */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Your Information</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#B0BEC5"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Blood Group Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Blood Group:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your blood group (e.g., O+)"
            placeholderTextColor="#B0BEC5"
            value={bloodGroup}
            onChangeText={setBloodGroup}
          />
        </View>

        {/* Age Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            placeholderTextColor="#B0BEC5"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>

        {/* Last Donation Date Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Donation Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 3 months ago"
            placeholderTextColor="#B0BEC5"
            value={lastDonation}
            onChangeText={setLastDonation}
          />
        </View>
      </View>

      {/* Call to Action Button */}
      <TouchableOpacity style={styles.donateButton} onPress={handleDonateNow}>
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>

      {/* Image or Icon Section */}
      <Image
        source={{ uri: 'https://example.com/blood_donate_image.png' }}
        style={styles.image}
      />

      {/* Information Section */}
      <Text style={styles.infoText}>
        By donating blood, you can help save up to three lives. Please ensure you are in good health and meet the donation eligibility criteria.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF5F5',
    padding: 16,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#C62828',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#C62828',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#424242',
    backgroundColor: '#FFF8F8',
  },
  donateButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginVertical: 10,
  },
});
