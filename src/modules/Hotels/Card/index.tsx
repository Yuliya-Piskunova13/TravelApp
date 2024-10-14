import React from 'react';
import { View, Image, Pressable } from 'react-native';

import DistanceIcon from '../../../assets/images/distance.svg';
import StarIcon from '../../../assets/images/star.svg';
import BookingLogoIcon from '../../../assets/images/bookingLogo.svg';
import styles from './styles';
import { Hotel } from '../types';
import Text from '../../../ui/Text';
import PriceRating from '../../../ui/PriceRating';
import Button from '../../../ui/Button';

interface HotelCardProps {
  hotel: Hotel;
  onPress: () => void;
  handleViewPrices: () => void;
}

const Card: React.FC<HotelCardProps> = ({
  hotel,
  onPress,
  handleViewPrices,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{ uri: hotel.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.distanceAndRating}>
          <View style={styles.distance}>
            <DistanceIcon />
            <Text style={styles.distanceText}>
              {hotel.distance} mins walking
            </Text>
          </View>
          <View style={styles.rating}>
            <StarIcon height="16" width="16" />
            <Text style={styles.ratingText}>{hotel.rating}</Text>
          </View>
        </View>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <View style={styles.bottomContainer}>
          <View>
            <PriceRating dollarCount={hotel.price.length} />
            <View style={styles.source}>
              <BookingLogoIcon height={12.4} width={75} />
            </View>
          </View>
          <Button
            text="View prices"
            onPress={handleViewPrices}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
