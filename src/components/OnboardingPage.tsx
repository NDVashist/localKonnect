// OnboardingPage.tsx
import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

interface OnboardingPageProps {
  title: string;
  desc: string;
  bg_img: string;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({
  title,
  desc,
  bg_img,
}) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.fullScreenView}>
        <Image source={{uri: bg_img}} style={styles.backgroundImage} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{desc}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  fullScreenView: {
    // flex: 1, // This makes the View fill the available space in the container
    // justifyContent: 'center', // Centers the content vertically
    // alignItems: 'center', // Centers the content horizontally
  },
  backgroundImage: {
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100%',
    // height: '100%',
    opacity: 0.6, // Optional: make the background image less prominent
  },
  content: {
    // zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default OnboardingPage;
