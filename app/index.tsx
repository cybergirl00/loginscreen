import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import image from '@/assets/images/login.png';
import { TextInput } from 'react-native-gesture-handler';
import apple from '@/assets/images/apple.png';
import google from '@/assets/images/google.png';

const SignupScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Image */}
        <Image
          source={image}
          style={styles.image}
        />

        {/* Welcome text */}
        <View>
          <Text style={styles.title}>Welcome to SkiptoMeet!</Text>
          <Text style={styles.subtitle}>Where every match is a SkiptoMeet waiting to happen</Text>
        </View>

        <View style={{ width: '90%', padding: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Sign up options */}
        <TouchableOpacity style={styles.appleButton}>
          <Image 
            source={apple} 
            style={styles.appleLogo} 
          />
          <Text style={styles.appleButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
        <Image 
            source={google} 
            style={styles.appleLogo} 
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? 
            <Text style={styles.loginLink}> Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 350,
    // borderRadius: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7b7b7b',
  },
  appleButton: {
    flexDirection: 'row', // Align the image and text horizontally
    alignItems: 'center', // Vertically align items inside the button
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  appleLogo: {
    width: 20,  // Set the width of the image
    height: 20, // Set the height of the image
    marginRight: 10, // Add some space between the image and the text
  },
  appleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
    alignItems: 'center', // Ensure the text is centered
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
  },
  loginLink: {
    color: '#FF0000',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
});

export default SignupScreen;
