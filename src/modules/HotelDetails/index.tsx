import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import Button from '../../ui/Button';
import styles from './styles';
import HotelInfo from './HotelInfo';
import { BASIC_URL } from '../../constants';
import ArrowIcon from '../../assets/images/arrow.svg';
import { HOTEL_DETAILS_TEXTS } from './texts';

interface HotelScreenProps {
  navigation: any;
  route: any;
}

const HotelDetails: React.FC<HotelScreenProps> = ({ route, navigation }) => {
  const { image, name, description } = route.params.hotel;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCheckAvailability = () => {
    Linking.openURL(BASIC_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <ArrowIcon />
      </TouchableOpacity>

      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        <HotelInfo name={name} description={description} imageUrl={image} />
      </ScrollView>
      <View style={styles.fixed}>
        <Button
          text={HOTEL_DETAILS_TEXTS.checkAvailabilityButton}
          onPress={handleCheckAvailability}
          buttonStyle={styles.fixedButton}
        />
      </View>
    </View>
  );
};

export default HotelDetails;
