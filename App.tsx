import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { useTheme } from './src/theme/theme';

const App: React.FC = () => {
  const {colors, colorScheme} = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={(colorScheme === 'dark') ? 'light-content' : 'dark-content'} />
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
