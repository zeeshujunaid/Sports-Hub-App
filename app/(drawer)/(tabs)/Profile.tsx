import { router } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { db } from '~/utils/firebase';
// import imge from ""
export default function BloodDonateScreen() {
  // State variables to store input data
  // const [name, setName] = useState('');
  // const [bloodGroup, setBloodGroup] = useState('');
  // const [age, setAge] = useState('');
  // const [lastDonation, setLastDonation] = useState('');

const imge = "https://i.pinimg.com/originals/48/19/e7/4819e7f441969c82703447ecd2107cbe.png"
const imge1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLV-GeLF5MTTl1BUD6Oy4EOhIXQsbtRdrxw&s"
  const ads = [
    {
      title : "zain" , img: imge 
    },
    {
      title : "fakhar" , img: imge 
    },
    {
      title : "fahad" , img: imge 
    }
  ]
  const profile = [
    {
      name : "zain" ,
      img: imge1 ,
      email: "zain@gmail.com"
    },
  ]

  // Handle form submission
  // const handleDonateNow = () => {
  //   if (name && bloodGroup && age && lastDonation) {
  //     addDoc(collection(db, 'donors'), {
  //       name,
  //       bloodGroup,
  //       age,
  //       lastDonation,
  //       timestamp: new Date(),
  //     })
  //     router.push('/(tabs)')
  //     Alert.alert('Thank You!', `Thank you, ${name}, for your interest in donating blood!`);
  //     // Here, you could add logic to save or send the data to a backend or Firebase.
  //   } else {
  //     Alert.alert('Incomplete Information', 'Please fill out all fields before submitting.');
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      
      {profile.map((item,index) => {
          return(
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.img }} 
          style={styles.profileImage}
        />
      </View>
  )
})}

      {profile.map((item,index) => {
          return(
      <View style={styles.header} key={index}>

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>{item.email}</Text>
      </View>
          )
        })}

    
      {/* <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Passionate seller in electronics and gadgets. Bringing you the best deals in town!
        </Text>
      </View> */}

   
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

  
      <View style={styles.listingsContainer}>
        <Text style={styles.listingsTitle}>Your Ads</Text>

        {ads.map((ad,index) => {
            return(
              
              <View key={index}>     
        <View style={styles.listingItems}>
        <Image
           source={{
            uri:ad.img
          }} 
          style={{width: 120 , height: 100}}
        />
        <Text style={{}}>{ad.title}</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Delete Ad</Text>
        </TouchableOpacity>
        </View>
          )
    })}
      </View>
   
      <View style={{height:100}}>
        <Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingBottom: 100
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 30,
    // paddingBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#d1d5db', 
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  username: {
    color: '#6b7280',
  },
  bioContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  bioText: {
    color: '#374151',
    fontSize: 16,
    textAlign: 'center',
  },
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  editProfileButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 9999,
    marginBottom: 8,
  },
  editProfileButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  viewListingsButton: {
    backgroundColor: '#d1d5db',
    paddingVertical: 12,
    borderRadius: 9999,
    marginBottom: 8,
  },
  viewListingsButtonText: {
    textAlign: 'center',
    color: '#374151',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 9999,
  },
  logoutButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  listingsContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  listingsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  listingItems: {
    paddingVertical: 8,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
 
});