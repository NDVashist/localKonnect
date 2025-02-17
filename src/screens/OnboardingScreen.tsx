// OnboardingScreen.tsx
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import OnboardingPage from '../components/OnboardingPage';
import AppIntroSlider from 'react-native-app-intro-slider';

interface OnboardingData {
  key: string;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
}

const onboardingData: OnboardingData[] = [
  {
    key: '1',
    title: 'Beauty Parlour At Your Home',
    text: "All the best restaurants with their top menu waiting for you, they can't wait for you to order!!",
    image: require('../assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Explore Features',
    text: 'Learn how to get the most out of your experience.',
    image: require('../assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Get Started Now!',
    text: 'Ready to dive in? Let’s get started!',
    image: require('../assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

const OnboardingScreen: React.FC = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          {/* dots */}
          <View style={styles.pagination}>
            {onboardingData.map((data, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentIndex ? styles.activeDot : null,
                  ]}
                />
              );
            })}
          </View>
          <View>
            <Text style={styles.text}>{currentIndex}</Text>
          </View>
        </View>
      </View>
    );
  };
  const onDone = () => {
    setShowRealApp(true);
    setCurrentIndex(onboardingData.length - 1);
  };
  const onSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return showRealApp ? (
    <View style={styles.container}>
      {/* Main app screen goes here */}
      <Text style={styles.text}>Welcome to the main app!</Text>
    </View>
  ) : (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingData}
      onDone={onDone}
      onSkip={onDone}
      onSlideChange={onSlideChange}
      showSkipButton={false}
      showPrevButton={false}
      showNextButton={false}
      showDoneButton={false}
      renderPagination={() => null}
    />
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
  },
  paginationDot: {
    width: 40,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    margin: 8,
  },
  activeDot: {
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    width: '80%',
    bottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 40,
    gap: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
