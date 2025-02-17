import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from './src/theme/theme';
import Signin from './src/screens/Signin';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  const { colors, colorScheme } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen  
          name="OnBoarding"
          component={OnboardingScreen}
          options={{ headerShown:false,}} 
        />
        <Stack.Screen name="SignIn" component={Signin}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;