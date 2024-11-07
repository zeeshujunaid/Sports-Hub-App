import { db } from '~/utils/firebase';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

export default function BloodDonorListScreen() {

    const [donors, setDonors] = useState([])

    useEffect(() => {
        getDonors()
    }, [])

    const getDonors = () => {
        getDocs(collection(db, "donors"))
            .then((querySnapshot) => {
                const donors = [];
                querySnapshot.forEach((doc) => {
                    donors.push(doc.data());
                });
                setDonors(donors);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
    }

    const renderDonorCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.name}>Donor Name:{item.name}</Text>
            <Text style={styles.bloodGroup}>Blood Group: {item.bloodGroup}</Text>
            <Text style={styles.age}>Age: {item.age}</Text>
            <Text style={styles.lastDonation}>Last Donation: {item.lastDonation}</Text>
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Blood Donors</Text>
            <FlatList
                data={donors}
                renderItem={renderDonorCard}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F5',
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
        marginVertical: 20,
    },
    listContent: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#D32F2F',
    },
    name: {
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    bloodGroup: {
        fontSize: 16,
        color: '#757575',
        marginTop: 5,
    },
    age: {
        fontSize: 16,
        color: '#757575',
        marginTop: 5,
    },
    lastDonation: {
        fontSize: 16,
        color: '#757575',
        marginTop: 5,
    },
    contactButton: {
        marginTop: 10,
        backgroundColor: '#E53935',
        paddingVertical: 8,
        borderRadius: 8,
    },
    contactButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
