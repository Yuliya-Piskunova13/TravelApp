import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUnit } from 'effector-react';

import Card from './Card';
import styles from './styles';
import { ROUTES } from '../../navigation/constants';
import { NavigationProp } from '../../navigation/types';
import { Hotel } from './types';
import { $hotels, fetchHotelsFx, $loading, $error } from './model';
import Text from '../../ui/Text';
import COLORS from '../../assets/styles/colors';
import { BASIC_URL } from '../../constants';

const Hotels: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const hotels = useUnit($hotels);
  const isLoading = useUnit($loading);
  const error = useUnit($error);

  useEffect(() => {
    fetchHotelsFx();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color={COLORS.gray100} />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Произошла ошибка: {error.message}</Text>
      </View>
    );
  }

  const handlePress = (hotel: Hotel) => {
    navigation.navigate(ROUTES.HOTEL_DETAILS, {hotel});
  };

  const handleViewPrices = () => {
    Linking.openURL(BASIC_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: Hotel }) => (
          <Card
            handleViewPrices={handleViewPrices}
            onPress={() => handlePress(item)}
            hotel={item}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Hotels;
