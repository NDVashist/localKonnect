import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {useTheme} from './src/theme/theme';
import Signin from './src/screens/Signin';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  const {colors, colorScheme} = useTheme();
  // use async store to get the value of isBordingSeen
  // if it is true then navigate to SignIn screen
  // else navigate to OnBoarding screen
  const [isBording, setIsBording] = React.useState<boolean | null>(null); // Initial state is null
  const [loading, setLoading] = React.useState<boolean>(true); // Loading state
  const fetchStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem('isBordingSeen');
      console.log('value', value);
      if (value !== null) {
        setIsBording(true);
      } else {
        setIsBording(false);
      }
    } catch (e) {
      console.log('error', e);
    } finally {
      setLoading(false); // Once fetching is done, set loading to false
    }
  };

  React.useEffect(() => {
    fetchStoredValue();
  }, []);

  if (loading) {
    // Show a loading spinner while data is being fetched
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isBording ? 'SignIn' : 'OnBoarding'}>
        <Stack.Screen
          name="OnBoarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="SignUn" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // You can change the background color
  },
  container: {
    flex: 1,
  },
});

export default App;
