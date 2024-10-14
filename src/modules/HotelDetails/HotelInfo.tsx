import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

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
    <View style={styles.hotelInfoContainer}>
      <Image source={{ uri: imageUrl }} style={styles.hotelImage} />
      <Text style={styles.hotelName}>{name}</Text>
      <Text style={styles.overviewText}>Overview</Text>
      <Text style={styles.hotelDescription}>{description}</Text>
    </View>
  );
};

export default HotelInfo;
