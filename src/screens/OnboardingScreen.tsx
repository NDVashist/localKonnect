import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  CommonActions,
  useNavigation,
} from '@react-navigation/native';

const onboardingData = [
  {
    key: '1',
    title: 'Beauty Parlour At Your Home',
    text: "All the best restaurants with their top menu waiting for you, they can't wait for you to order!!",
    image: require('../assets/1.jpg'),
  },
  {
    key: '2',
    title: 'Explore Features',
    text: 'Learn how to get the most out of your experience.',
    image: require('../assets/2.jpg'),
  },
  {
    key: '3',
    title: 'Get Started Now!',
    text: 'Ready to dive in? Let’s get started!',
    image: require('../assets/3.jpg'),
  },
];

const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => goToSpecificSlide(index)}
              style={[
                styles.paginationDot,
                index === currentIndex ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          <Text style={styles.text} onPress={() => goToSpecificSlide(onboardingData.length - 1)}>
            Skip
          </Text>
          <Text style={styles.text}>{currentIndex + 1}/{onboardingData.length}</Text>
          <Text
            style={styles.text}
            onPress={() => goToSpecificSlide(currentIndex + 1)}
          >
            {currentIndex === onboardingData.length - 1 ? 'Done' : 'Next'}
          </Text>
        </View>
      </View>
    </View>
  );

  const onDone = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      })
    );
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
      onSlideChange={setCurrentIndex}
      showSkipButton={false}
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
