import React from 'react';
import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

import styles from './styles';
import { HOTEL_DETAILS_TEXTS } from './texts';

interface HotelInfoProps {
  name: string;
  description: string;
  imageUrl: string;
}

const HotelInfo: React.FC<HotelInfoProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <View>
      <FastImage source={{ uri: imageUrl }} style={styles.hotelImage} />
      <Text style={styles.hotelName}>{name}</Text>
      <Text style={styles.overviewText}>{HOTEL_DETAILS_TEXTS.overview}</Text>
      <Text style={styles.hotelDescription}>{description}</Text>
    </View>
  );
};

export default HotelInfo;
