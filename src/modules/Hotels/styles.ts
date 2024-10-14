import { StyleSheet } from 'react-native';
import COLORS from '../../assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray00,
  },
  list: {
    padding: 20,
  },
  loading: {
    flex: 1,
    backgroundColor: COLORS.gray00,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
