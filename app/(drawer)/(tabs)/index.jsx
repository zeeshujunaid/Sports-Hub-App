import { View, Text, Image, ScrollView, TouchableOpacity, } from "react-native";
import Cricket from "./(homepagecategroies)/cricket";
import Hockey from "./(homepagecategroies)/hockey";
import Football from "./(homepagecategroies)/football";
import Basketball from "./(homepagecategroies)/basketball";
import Allcategroies from "./(homepagecategroies)/Allcategroiescard";
// import Header from "../components/header";
// import Tennis from "./(homepagecategroies)/tennis";
// import Postadd from "../components/maindiv"


export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#0d1117" }}>
            {/* header  */}
            {/* <Header /> */}
            {/* main container image */}
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ height: 230, width: "100%" }}>
                        <Image
                            source={{ uri: 'https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1699806826200-8C9W14DGJ7LROEAV27DI/Most+popular+sports+in+the+UK+%281%29.jpg?format=750w' }}
                            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        />
                    </View>
                    {/* three main div */}
                    {/* <Postadd /> */}
                </View>
                {/* first "ALL CATEGORIES" section */}
                <Allcategroies />
                <Cricket />
                <Football />
                <Basketball />
                {/* add section  */}
                <View style={{ height: 180, width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop: "5%" }}>
                    <Image source={{ uri: "https://img.freepik.com/free-vector/abstract-dark-sales-background_23-2148429942.jpg" }}
                        style={{ height: "100%", width: "100%", resizeMode: "cover", }}
                    />
                </View>
                {/* add section  */}
                <Hockey />
                {/* <Tennis /> */}
            </ScrollView >
        </View >
    );
}





// import { db } from '~/utils/firebase';
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

// export default function BloodDonorListScreen() {

//     const [donors, setDonors] = useState([])

//     useEffect(() => {
//         getDonors()
//     }, [])

//     const getDonors = () => {
//         getDocs(collection(db, "donors"))
//             .then((querySnapshot) => {
//                 const donors = [];
//                 querySnapshot.forEach((doc) => {
//                     donors.push(doc.data());
//                 });
//                 setDonors(donors);
//             })
//             .catch((error) => {
//                 console.log("Error getting documents: ", error);
//             })
//     }

//     const renderDonorCard = ({ item }) => (
//         <View style={styles.card}>
//             <Text style={styles.name}>Donor Name:{item.name}</Text>
//             <Text style={styles.bloodGroup}>Blood Group: {item.bloodGroup}</Text>
//             <Text style={styles.age}>Age: {item.age}</Text>
//             <Text style={styles.lastDonation}>Last Donation: {item.lastDonation}</Text>
//             <TouchableOpacity style={styles.contactButton}>
//                 <Text style={styles.contactButtonText}>Contact</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.header}>Blood ors</Text>
//             <FlatList
//                 data={donors}
//                 renderItem={renderDonorCard}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.listContent}
//             />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF5F5',
//         padding: 16,
//     },
//     header: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#D32F2F',
//         textAlign: 'center',
//         marginVertical: 20,
//     },
//     listContent: {
//         paddingBottom: 16,
//     },
//     card: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 10,
//         padding: 16,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5,
//         borderLeftWidth: 5,
//         borderLeftColor: '#D32F2F',
//     },
//     name: {
//         fontSize: 20,
//         color: 'black',
//         marginBottom: 5,
//         fontWeight: 'bold',
//     },
//     bloodGroup: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     age: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     lastDonation: {
//         fontSize: 16,
//         color: '#757575',
//         marginTop: 5,
//     },
//     contactButton: {
//         marginTop: 10,
//         backgroundColor: '#E53935',
//         paddingVertical: 8,
//         borderRadius: 8,
//     },
//     contactButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
// });
