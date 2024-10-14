import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import COLORS from '../../assets/styles/colors';

interface PriceRatingProps {
  dollarCount: number;
  maxDollarSigns?: number;
  filledColor?: string;
  emptyColor?: string;
  fontSize?: number;
  accessibilityLabel?: string;
}

const PriceRating: React.FC<PriceRatingProps> = ({
  dollarCount,
  maxDollarSigns = 4,
  filledColor = COLORS.secondary100,
  emptyColor = COLORS.secondary20,
  fontSize = 12,
  accessibilityLabel = 'Price rating',
}) => {
  const dollarSigns = Array(maxDollarSigns)
    .fill('$')
    .map((sign, index) => (
      <Text
        key={index}
        style={[
          styles.dollarSign,
          { color: index < dollarCount ? filledColor : emptyColor, fontSize },
        ]}>
        {sign}
      </Text>
    ));

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel={accessibilityLabel}>
      {dollarSigns}
    </View>
  );
};

export default PriceRating;
