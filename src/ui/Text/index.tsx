import React, { FC } from 'react';
import { Text as TextRN, TextProps, TextStyle, StyleProp } from 'react-native';

import styles from './styles';

interface CustomTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text: FC<CustomTextProps> = ({ children, style, ...rest }) => {
  return (
    <TextRN {...rest} style={[styles.text, style]}>
      {children}
    </TextRN>
  );
};

export default Text;
