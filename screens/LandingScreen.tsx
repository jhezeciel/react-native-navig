import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/landing.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.brand}>THE</Text>
        <Text style={styles.title}>Blonde Merch</Text>
        <Text style={styles.subtitle}>SS.2025</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go Shopping</Text>
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
    width: '100%',
    height: '100%',
  },
  overlay: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
  },
  brand: {
    fontSize: 16,
    fontWeight: '400',
    color: '#708090',
    letterSpacing: 3,
    fontFamily: 'serif',
  },
  title: {
    fontSize: 42,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'serif', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#2F4F4F',
    marginBottom: 25,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: '#696969',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default LandingScreen;
