// OnboardingScreen.tsx
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
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

const OnboardingScreen: React.FC = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const renderItem = ({item}: any) => {
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
                <TouchableOpacity
                  onPress={() => goToSpecificSlide(index)}
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentIndex ? styles.activeDot : null,
                  ]}
                />
              );
            })}
          </View>
          <View style={styles.controls}>
            <Text
              style={styles.text}
              onPress={() => goToSpecificSlide(onboardingData.length - 1)}>
              Skip
            </Text>
            <Text style={styles.text}>{currentIndex}</Text>
            <Text
              style={styles.text}
              onPress={() => goToSpecificSlide(currentIndex + 1)}>
              {currentIndex === onboardingData.length - 1 ? 'Done' : 'Next'}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const onDone = () => {
    setShowRealApp(true);
    navigation.navigate('SignIn');
  };
  const onSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  const goToSpecificSlide = (index: number) => {
    if (index >= onboardingData.length) {
      onDone();
      return;
    }
    sliderRef?.current?.goToSlide(index);
    setCurrentIndex(index);
  };
  return (
    <AppIntroSlider
      ref={sliderRef}
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
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
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
