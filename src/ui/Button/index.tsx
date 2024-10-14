import React from 'react';
import { Text, Pressable, GestureResponderEvent } from 'react-native';

import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
