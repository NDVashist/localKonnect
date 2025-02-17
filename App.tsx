import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <OnboardingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
