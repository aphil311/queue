import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

export default function Home() {
    const [fontsLoaded] = useFonts({
        'Aleo-Bold': require('../assets/fonts/Aleo-Bold.ttf'),
    });
    
    if(!fontsLoaded)
        return null;

    const image = require('../assets/homebg.png');

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.head1}>Queue.</Text>
                <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={() => alert('Will open join screen')} style={styles.button1}>
                    <Text style={styles.bText}>Join</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Will open host screen')} style={styles.button2}>
                    <Text style={styles.bText}>Host</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    head1: {
        fontFamily: 'Aleo-Bold',
        fontSize: 40,
        marginBottom: 0,
        marginTop: 100,
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'center',
    },
    button1: {
        borderColor: 'purple',
        borderWidth: 3,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    button2: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    bText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'purple'
    },
  });
  